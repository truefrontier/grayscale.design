<template>
  <div class="PaletteRow">
    <div class="flex items-center justify-between">
      <div v-for="(swatch, index) in swatches" class="w-full">
        <swatch-square
          :swatch="swatch"
          :key="swatch.bg"
          :is-first="index == 0"
          :is-last="index == Object.keys(swatches).length - 1"
        >
          <div class="font-mono opacity-50 text-sm text-center">
            {{ parseInt(index, 10) + 1 }}00
          </div>
          <div class="font-mono opacity-25 text-xs text-center leading-5">
            {{ swatch.lum.toFixed(1) }}%
          </div>
        </swatch-square>
      </div>
    </div>
  </div>
</template>

<script>
import SwatchSquare from './SwatchSquare';
export default {
  name: 'PaletteRow',

  props: {
    swatches: Object,
  },

  components: {
    SwatchSquare,
  },
};
</script>

<!-- <style lang="scss" src="./PaletteRow.scss" scoped></style> -->
