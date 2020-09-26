<template>
  <div class="GrayscaleRow">
    <div ref="grayscale" class="sm:rounded-full shadow-lg bg-gray-800 relative px-6">
      <div class="h-8 sm:h-half-9 divide-x divide-gray-600 flex justify-between">
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
        <div class="flex-grow"></div>
      </div>
      <div class="border-t border-gray-600 absolute inset-x-0 top-1/2 -mt-px"></div>
      <div class="absolute inset-y-0 left-0 right-0 mx-6 border-l border-r border-gray-600">
        <div
          v-for="(swatch, index) in lums"
          :key="index"
          :title="isLockedLum(index) ? 'LOCKED' : ''"
          :draggable="!isLockedLum(index)"
          @dragstart="onDragStart($event, index)"
          @drag="onDrag($event, index)"
          @dragend="onDragEnd($event, index)"
          :class="[
            'absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white',
            isDragging === index ? 'shadow-outline' : 'transition-all duration-200',
            isLockedLum(index) ? 'cursor-not-allowed' : '',
          ]"
          :style="{
            left: getSwatchPosition(index),
            backgroundColor: `rgb(${lumToGrayscaleRGB(swatch.lum).join(',')})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Color from '../utils/color';
import { clone } from '../utils/object';
var BLANK_IMG = new Image();
BLANK_IMG.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

export default {
  name: 'GrayscaleRow',

  props: {
    lums: Object,
    lumsValues: Array,
    setLums: Function,
    isLockedLum: Function,
  },

  data() {
    return {
      isDragging: null,
      dragTimeout: 0,
      swatchPositions: {},
    };
  },

  watch: {
    lumsValues(val) {
      this.setSwatchPositionsFromLumsValues(val);
    },
  },

  created() {
    this.setSwatchPositionsFromLumsValues();
  },

  methods: {
    setSwatchPositionsFromLumsValues(lumsValues = null) {
      lumsValues = lumsValues ? lumsValues : this.lumsValues;
      this.swatchPositions = lumsValues.reduce((swatches, pos, index) => {
        swatches[index] = pos;
        return swatches;
      }, {});
    },

    getSwatchPosition(index) {
      let pos = this.swatchPositions[index];
      return `${100 - pos}%`;
    },

    onDragStart($event, index) {
      this.isDragging = index;
      $event.dataTransfer.setDragImage(BLANK_IMG, 0, 0);
    },

    getPos($event, index, prop = 'pageX') {
      index = parseInt(index, 10);
      let el = $event.target;
      let parent = el.parentElement;
      if (!parent) return;
      let parentWidth = parent.clientWidth;
      let grandparent = parent.parentElement;
      if (!grandparent) return;
      let elX = $event[prop] - parent.offsetLeft - grandparent.offsetLeft;
      if (elX < 0 || elX > parentWidth) {
        $event.preventDefault();
        return false;
      }
      return parseFloat((elX / parentWidth) * 100);
    },

    onDragEnd($event, index) {
      this.isDragging = null;
      if (!$event.screenX) return;

      // FIX for firefox
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (!isFirefox) return;
      let pos = this.getPos($event, index, 'screenX');
      if ($event.screenX) this.prepareAdjustLums(index, pos);
    },

    onDrag($event, index) {
      if (!$event.screenX) return;
      let pos = this.getPos($event, index);
      this.prepareAdjustLums(index, pos);
    },

    prepareAdjustLums(index, pos) {
      let lums = clone(this.lums);
      lums[index].lum = 100 - pos;
      lums[index].rgb = this.lumToGrayscaleRGB(100 - pos);

      this.swatchPositions[index] = 100 - pos;
      let lumsValues = Object.keys(this.swatchPositions).reduce((arr, i) => {
        arr.push(this.swatchPositions[i]);
        return arr;
      }, []);

      clearTimeout(this.setLumsTimeout);
      this.setLumsTimeout = setTimeout(() => {
        this.setLums(lumsValues, parseInt(index, 10), pos);
      }, 50);
    },

    lumToGrayscaleRGB(lum) {
      let newL = Color.lightnessFromHSLum(0, 0, lum);
      return Object.values(Color.HSLtoRGB(0, 0, newL)).map(Math.round);
    },
  },
};
</script>

<!-- <style lang="scss" src="./GrayscaleRow.scss" scoped></style> -->
