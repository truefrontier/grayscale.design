<template>
  <div :class="['PaletteRow', { 'is-locked': isLocked }]">
    <div class="flex items-center justify-between">
      <swatch-square
        v-for="(swatch, index) in swatches"
        :key="index"
        :copy="copy"
        :copied="copyText"
        :swatch="swatch"
        :index="parseInt(index, 10)"
        :is-first="index == 0"
        :is-last="index == Object.keys(swatches).length - 1"
        :is-closest="isClosest(index)"
        class="w-full"
      >
        <div
          class="font-mono opacity-50 text-gray-800 text-sm text-center px-2 leading-5 mt-4 mb-3"
        >
          <span class="hidden md:inline-block">{{ palette.name ? palette.name + '-' : '' }}</span
          >{{ parseInt(index, 10) + 1 }}00
        </div>
        <div
          v-if="!hideLum"
          class="font-mono opacity-50 text-gray-600 text-xs text-center leading-5"
        >
          {{ swatch.lum ? swatch.lum.toFixed(2) : swatch.lum == 0 ? '0.00' : '--' }}%
        </div>
      </swatch-square>
    </div>
  </div>
</template>

<script>
import * as Color from '../utils/color';

import SwatchSquare from './SwatchSquare';
export default {
  name: 'PaletteRow',

  props: {
    palette: Object,
    hideLum: Boolean,
    isLocked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    storeSwatches: {
      type: Function,
      default() {
        return () => {};
      },
    },
  },

  data() {
    return {
      paletteClone: {},
      generateTimeout: 0,
      copyText: '',
    };
  },

  components: {
    SwatchSquare,
  },

  watch: {
    palette: {
      deep: true,
      handler(val) {
        this.paletteClone = Object.assign({}, this.paletteClone, val);
      },
    },

    'palette.filters.hue': {
      handler(val) {
        this.paletteClone.filters.hue = val;
        this.$nextTick(this.generateSwatches);
      },
    },

    'palette.filters.sat': {
      handler(val) {
        this.paletteClone.filters.sat = val;
        this.$nextTick(this.generateSwatches);
      },
    },

    'palette.picker': {
      handler(val = '#000000') {
        this.palette.hex =
          val.length === 4
            ? '#' + [...val.replace('#', '')].reduce((str, cur) => str + cur + cur, '')
            : val;
        this.updateBase(this.palette.hex);
      },
    },

    'palette.hex': {
      handler(val = '#000000') {
        this.palette.picker =
          val.length === 4
            ? '#' + [...val.replace('#', '')].reduce((str, cur) => str + cur + cur, '')
            : val;
        this.updateBase(this.palette.picker);
      },
    },

    lums: {
      deep: true,
      handler(val) {
        this.$nextTick(() => {
          this.generateSwatches();
          this.paletteClone.closest = Color.closestLum(val, this.paletteClone.lum);
        });
      },
    },
  },

  computed: {
    swatches() {
      return (
        (this.paletteClone && this.paletteClone.swatches) ||
        (this.palette && this.palette.swatches) ||
        {}
      );
    },

    lums() {
      return Object.values(this.palette.swatches).reduce((arr, cur) => {
        arr.push(cur.lum);
        return arr;
      }, []);
    },
  },

  mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
    let hex = this.getHex();
    if (hex) this.updateBase(hex);
  },

  beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },

  methods: {
    getHex() {
      return (
        (this.paletteClone && this.paletteClone.hex) ||
        (this.paletteClone && this.paletteClone.picker) ||
        (this.palette && this.palette.hex) ||
        (this.palette && this.palette.picker) ||
        '#000000'
      );
    },

    copy(copyText) {
      this.copyText = copyText;
      this.$nextTick(() => {
        document.execCommand('copy');
      });
    },

    onCopy(e) {
      if (this.copyText) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', this.copyText);
        setTimeout(() => {
          this.copyText = '';
        }, 500);
      }
    },

    updateBase(hex) {
      this.paletteClone = Object.assign({}, this.paletteClone, this.palette, {
        hex: hex,
        picker: hex,
      });
      this.paletteClone.rgb = Color.hexToRGB(hex);
      let rgb = Object.values(this.paletteClone.rgb);
      this.paletteClone.hsl = Color.RGBToHSL(...rgb);
      this.paletteClone.lum = Color.lumFromRGB(...rgb);
      this.paletteClone.closest = Color.closestLum(this.lums, this.paletteClone.lum);
      this.$nextTick(this.generateSwatches);
    },

    generateSwatches() {
      if (!this.paletteClone.hsl) return;

      const run = () => {
        const baseHSL = this.paletteClone.hsl;
        const [closestIndex] = Object.keys(this.paletteClone.closest) || [];
        Object.keys(this.paletteClone.swatches).forEach(async (i) => {
          let swatch = this.paletteClone.swatches[i];
          let diffIndex = Math.abs(closestIndex - i);
          let newH = baseHSL.h + parseFloat(this.paletteClone.filters.hue) * diffIndex;
          if (newH < 0) newH = 360 - newH;
          if (newH > 360) newH = newH - 360;
          let newS = baseHSL.s + parseFloat(this.paletteClone.filters.sat) * diffIndex;
          if (newS < 0) newS = Math.max(newS, 0);
          if (newS > 100) newS = Math.min(newS, 100);
          let newL = await Color.lightnessFromHSLum(newH, newS, swatch.lum);
          let newRGB = Color.HSLtoRGB(newH, newS, newL);
          let rgb = Object.values(newRGB).map(Math.round);
          this.paletteClone.swatches[i].hsl = [newH, newS, newL];
          this.paletteClone.swatches[i].hex = Color.RGBToHex(...rgb);
          this.paletteClone.swatches[i].rgb = rgb;
          this.paletteClone.swatches[i].lum = Color.lumFromRGB(
            ...this.paletteClone.swatches[i].rgb,
          );
        });

        this.storeSwatches(this.paletteClone.swatches);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(run);
      } else {
        clearTimeout(this.generateTimeout);
        this.generateTimeout = setTimeout(run, 50);
      }
    },

    isClosest(index) {
      let [closestIndex] = Object.keys(this.paletteClone.closest || {}) || [];
      return index == closestIndex;
    },
  },
};
</script>

<!-- <style lang="scss" src="./PaletteRow.scss" scoped></style> -->
