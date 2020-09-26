<template>
  <div v-if="swatch.rgb" :class="['SwatchSquare', { 'is-closest': isClosest }]">
    <button
      type="button"
      @click="copy(swatch.hex)"
      :class="[
        'w-full h-9 shadow-inner transition-colors duration-150 relative z-10',
        isFirst ? 'rounded-l-lg' : isLast ? 'rounded-r-lg' : '',
        { 'pointer-events-none': !swatch.hex },
      ]"
      :style="{
        color: getBgColor(swatch),
        backgroundColor: getBgColor(swatch),
        // transitionDelay: `${index * 40}ms`,
      }"
    >
      <span
        v-if="swatch.hex"
        class="absolute text-sm text-gray-700 bg-white px-3 py-half-2 shadow rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {{ swatch.hex }}
      </span>
      <span
        v-if="swatch.hex"
        :class="[
          'absolute text-sm text-gray-700 bg-white px-3 py-half-2 shadow rounded top-1/2 left-1/2 transform -translate-x-1/2',
          copied === swatch.hex ? 'translate-y-full opacity-100' : 'opacity-0 -translate-y-1/2',
        ]"
      >
        {{ swatch.hex }}
      </span>
    </button>
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
    isClosest: Boolean,
    copy: Function,
    copied: String,
  },

  methods: {
    getBgColor(swatch) {
      return `rgb(${swatch.rgb.join(',')})`;
    },
  },
};
</script>

<!-- <style lang="scss" src="./SwatchSquare.scss" scoped></style> -->
