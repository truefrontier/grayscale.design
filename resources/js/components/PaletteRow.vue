<template>
  <div class="PaletteRow">
    <div class="flex items-center justify-between">
      <div v-for="(swatch, index) in swatches" class="w-full">
        <swatch-square
          :key="swatch.rgb.join(index)"
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
            {{ swatch.lum.toFixed(1) }}%
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

  components: {
    SwatchSquare,
  },

  watch: {
    'palette.hex': {
      handler(val = '#000000') {
        this.palette.rgb = Color.hexToRGB(val);
        let rgb = Object.values(this.palette.rgb);
        this.palette.hsl = Color.RGBToHSL(...rgb);
        this.palette.lum = Color.lumFromRGB(...rgb);
        let lums = Object.values(this.palette.swatches).reduce((arr, cur) => {
          arr.push(cur.lum);
          return arr;
        }, []);
        this.palette.closest = Color.closestLum(lums, this.palette.lum);
        this.$nextTick(this.generateSwatches);
      },
    },
  },

  computed: {
    swatches() {
      if (!this.palette) return {};
      return this.palette.swatches || {};
    },
  },

  methods: {
    generateSwatches() {
      console.log('%c this.palette -->', 'color:#F80', this.palette);
    },
  },
};
</script>

<!-- <style lang="scss" src="./PaletteRow.scss" scoped></style> -->
