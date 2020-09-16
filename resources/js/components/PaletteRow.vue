<template>
  <div class="PaletteRow">
    <div class="flex items-center justify-between">
      <div v-for="(swatch, index) in swatches" class="w-full">
        <swatch-square
          :key="index"
          :swatch="swatch"
          :index="parseInt(index, 10)"
          :is-first="index == 0"
          :is-last="index == Object.keys(swatches).length - 1"
        >
          <div
            class="font-mono opacity-50 text-gray-800 text-sm text-center px-2 leading-5 mt-4 mb-3"
          >
            {{ palette.name ? palette.name + '-' : '' }}{{ parseInt(index, 10) + 1 }}00
          </div>
          <div
            v-if="!hideLum"
            class="font-mono opacity-50 text-gray-600 text-xs text-center leading-5"
          >
            {{ swatch.lum ? swatch.lum.toFixed(1) : '--' }}%
          </div>
        </swatch-square>
      </div>
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
    name: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      paletteClone: {},
      generateTimeout: 0,
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

    'palette.hex': {
      handler(val = '#000000') {
        this.paletteClone = Object.assign({}, this.paletteClone, this.palette, { hex: val });
        this.paletteClone.rgb = Color.hexToRGB(val);
        let rgb = Object.values(this.paletteClone.rgb);
        this.paletteClone.hsl = Color.RGBToHSL(...rgb);
        this.paletteClone.lum = Color.lumFromRGB(...rgb);
        this.paletteClone.closest = Color.closestLum(this.lums, this.paletteClone.lum);
        this.$nextTick(this.generateSwatches);
      },
    },

    lums: {
      deep: true,
      handler() {
        this.$nextTick(this.generateSwatches);
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

  methods: {
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
          let newL = await Color.lightnessFromHSLum(newH, newS, swatch.lum);
          let newRGB = Color.HSLtoRGB(newH, newS, newL);
          this.paletteClone.swatches[i].rgb = Object.values(newRGB).map((c) => c * 1);
          this.paletteClone.swatches[i].lum = Color.lumFromRGB(
            ...this.paletteClone.swatches[i].rgb,
          );
        });
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(run);
      } else {
        clearTimeout(this.generateTimeout);
        this.generateTimeout = setTimeout(run, 50);
      }
    },
  },
};
</script>

<!-- <style lang="scss" src="./PaletteRow.scss" scoped></style> -->
