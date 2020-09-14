<template>
  <div class="App">
    <section class="mt-6">
      <h1 class="mb-6 font-bold uppercase tracking-wide">
        1. Set Your Luminosity Scale
      </h1>
      <div class="float-right flex divide-x">
        <button
          @click="autoDistribute = true"
          :class="[
            'px-4 focus:outline-none focus:shadow-outline',
            autoDistribute
              ? 'font-bold text-gray-700'
              : 'text-gray-600 hover:underline',
          ]"
        >
          auto
        </button>
        <button
          @click="autoDistribute = false"
          :class="[
            'px-4 focus:outline-none focus:shadow-outline',
            !autoDistribute
              ? 'font-bold text-gray-700'
              : 'text-gray-600 hover:underline',
          ]"
        >
          manual
        </button>
      </div>
      <p>Drag the sliders below to set your luminosity scale.</p>
      <div class="mt-5">
        <div class="rounded-full shadow-lg bg-gray-800 relative">
          <div class="h-half-9 divide-x divide-gray-600 flex justify-between">
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
          <div
            class="border-t border-gray-600 absolute inset-x-0 top-1/2 -mt-px"
          ></div>
          <div
            v-for="(swatch, index) in lums"
            :key="index"
            draggable
            @dragstart="onDragStart($event, index)"
            @drag="onDrag($event, index)"
            @dragend="onDragEnd($event, index)"
            :class="[
              'absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white',
              isDragging === index
                ? 'shadow-outline'
                : 'transition-all duration-200',
            ]"
            :style="{
              left: `${swatch.lum}%`,
              backgroundColor: `rgb(${lumToGrayscaleRGB(swatch.lum).join(
                ',',
              )})`,
            }"
          ></div>
        </div>
      </div>
      <div class="mt-8">
        <div class="flex items-center justify-between">
          <div v-for="(swatch, index) in lums" class="w-full">
            <div
              :class="[
                'w-full h-9 shadow-inner',
                index == 0
                  ? 'rounded-l-lg'
                  : index == lumsCount - 1
                  ? 'rounded-r-lg'
                  : '',
              ]"
              :style="{
                backgroundColor: `rgb(${lumToGrayscaleRGB(swatch.lum).join(
                  ',',
                )})`,
              }"
            ></div>
            <div class="font-mono opacity-50 text-sm text-center">
              {{ parseInt(index, 10) + 1 }}00
            </div>
            <div class="font-mono opacity-25 text-xs text-center leading-5">
              {{ swatch.lum.toFixed(1) }}%
            </div>
          </div>
        </div>
      </div>
      <p class="mt-7 opacity-50">
        This scale will be consistent throughout each color in your project's
        palette. For example, a blue-500 will match a red-500 in luminance (or
        visual lightness/darkness)... or any-other-color-500. In the same way, a
        red-300 would match a yellow-300 or gray-300. This is the beauty of
        <strong>grayscale design</strong>. Making all your colors with a scale
        of equal luminance allows you to design a website first in grayscale,
        and then, you can add color later without losing any contrast.
        <!-- To get you started, we've setup 9 steps in your scale, light to
        dark.  -->
      </p>
    </section>
    <section class="mt-9">
      <h1 class="mb-6 font-bold uppercase tracking-wide">2. Set your colors</h1>
      <p class="mt-6">Coming soon...</p>
      <p class="mt-7 opacity-50">
        When you add a color, it will create a swatch for each position from
        your luminosity scale that you set above in step one.
        <strong>Remember,</strong> to keep your entire color set consistent,
        changing your luminosity scale will adjust all the colors accordingly.
      </p>
    </section>
  </div>
</template>

<script>
var BLANK_IMG = new Image();
BLANK_IMG.src =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

export default {
  name: 'App',

  data() {
    return {
      lums: {
        0: { lum: 3 },
        1: { lum: 8 },
        2: { lum: 18 },
        3: { lum: 33 },
        4: { lum: 50 },
        5: { lum: 67 },
        6: { lum: 82 },
        7: { lum: 92 },
        8: { lum: 98 },
      },
      isDragging: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
    };
  },

  computed: {
    lumsCount() {
      return Object.keys(this.lums).length;
    },
  },

  watch: {},

  methods: {
    lumToGrayscaleRGB(lum) {
      let val = Math.round((255 * (100 - lum)) / 100);
      return [val, val, val];
    },

    onDragStart($event, index) {
      this.isDragging = index;
      $event.dataTransfer.setDragImage(BLANK_IMG, 0, 0);
    },

    onDragEnd($event, index) {
      this.isDragging = null;
      this.lastPos = null;
    },

    onDrag($event, index) {
      index = parseInt(index, 10);
      let el = $event.target;
      let parent = el.parentElement;
      let parentWidth = parent.clientWidth;
      let elX = $event.pageX - parent.offsetLeft;
      if (elX < 0 || elX > parentWidth) {
        $event.preventDefault();
        return false;
      }
      let pos = parseFloat((elX / parentWidth) * 100);
      if ($event.screenX) {
        this.lums[index].lum = pos;
        clearTimeout(this.adjustLumsTimeout);
        this.adjustLumsTimeout = setTimeout(
          () =>
            this.adjustLums(
              index === 0 ? pos : this.lums[0].lum,
              index === this.lumsCount - 1
                ? pos
                : this.lums[this.lumsCount - 1].lum,
              pos,
              index,
            ),
          20,
        );
      }
    },

    adjustLums(startPos, endPos, curPos, curIndex) {
      if (!this.autoDistribute) return;
      if (curPos !== this.lastPos) {
        let lumIndices = Object.keys(this.lums);
        lumIndices.pop();
        lumIndices.shift();
        lumIndices.forEach((ndx) => {
          ndx = parseInt(ndx, 10);
          if (ndx < curIndex) {
            let dist = (curPos - startPos) / curIndex;
            this.lums[ndx].lum = ndx * dist + this.lums[0].lum;
          } else if (curIndex < ndx) {
            let dist = (endPos - curPos) / (this.lumsCount - curIndex - 1);
            this.lums[ndx].lum = (ndx - curIndex) * dist + curPos;
          }
        });

        // Prevent this from running unnecessarily
        this.lastPos = curPos;
      }
    },
  },
};
</script>

<!-- <style lang="scss" src="./App.scss" scoped></style> -->
