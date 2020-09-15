<template>
  <div class="SwatchSquare">
    <div
      :class="[
        'w-full h-9 shadow-inner transition-colors duration-150',
        isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : '',
      ]"
      :style="{
        backgroundColor: getBgColor(swatch),
        transitionDelay: `${index * 40}ms`,
      }"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwatchSquare',

  props: {
    index: Number,
    swatch: Object,
    isFirst: Boolean,
    isLast: Boolean,
  },

  methods: {
    getBgColor(swatch) {
      return `rgb(${swatch.rgb.join(',')})`;
    },
  },
};
</script>

<!-- <style lang="scss" src="./SwatchSquare.scss" scoped></style> -->
