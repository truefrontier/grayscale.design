<template>
  <div class="SwatchSquare">
    <div
      :class="[
        'w-full h-9 shadow-inner',
        isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : '',
      ]"
      :style="{
        backgroundColor: getBgColor(swatch),
      }"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwatchSquare',

  props: {
    swatch: Object,
    isFirst: Boolean,
    isLast: Boolean,
  },

  methods: {
    getBgColor(swatch) {
      return swatch.bg;
    },
  },
};
</script>

<!-- <style lang="scss" src="./SwatchSquare.scss" scoped></style> -->
