<template>
  <div class="App">
    <h1 class="font-bold uppercase tracking-wide">Set Your Luminosity Scale</h1>
    <p class="mt-6">
      This scale will be consistent throughout each color in your project's
      palette. To get you started, we've setup 9 steps in your scale, light to
      dark. Making all your colors with a scale of equal luminance allows you to
      design a site in grayscale and add color of the same luminance later.
    </p>
    <div class="mt-8">
      <div class="flex items-center justify-between">
        <div>
          <div class="font-mono opacity-50 mt-3">100</div>
          <div class="w-9 h-9 bg-gray-100 rounded shadow-inner"></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">200</div>
          <div class="w-9 h-9 bg-gray-200 rounded shadow-inner"></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">300</div>
          <div class="w-9 h-9 bg-gray-300 rounded shadow-inner"></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">400</div>
          <div class="w-9 h-9 bg-gray-400 rounded shadow-inner"></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">500</div>
          <div class="w-9 h-9 bg-gray-500 rounded shadow-inner"></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">600</div>
          <div
            class="w-9 h-9 bg-gray-600 rounded shadow-inner text-white"
          ></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">700</div>
          <div
            class="w-9 h-9 bg-gray-700 rounded shadow-inner text-white"
          ></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">800</div>
          <div
            class="w-9 h-9 bg-gray-800 rounded shadow-inner text-white"
          ></div>
        </div>
        <div>
          <div class="font-mono opacity-50 mt-3">900</div>
          <div
            class="w-9 h-9 bg-gray-900 rounded shadow-inner text-white"
          ></div>
        </div>
      </div>
    </div>
    <div class="mt-7">
      <div class="rounded bg-gray-800 h-8 relative">
        <div class="h-8 divide-x divide-gray-600 flex justify-between">
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
          class="absolute bottom-0 left-0 uppercase font-bold tracking-wide text-sm text-gray-600 leading-5 p-2"
        >
          White
        </div>
        <div
          class="absolute bottom-0 right-0 uppercase font-bold tracking-wide text-sm text-gray-600 leading-5 p-2"
        >
          Black
        </div>
        <div
          v-for="(swatch, index) in lums"
          :key="index"
          draggable
          @dragstart="onDragStart($event, index)"
          @drag="onDrag($event, index)"
          @dragend="onDragEnd($event, index)"
          :class="[
            'absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white',
            isDragging === index ? '' : 'transition-all duration-200',
          ]"
          :style="{
            left: `${swatch.lum}%`,
            backgroundColor: `rgb(${swatch.rgb},${swatch.rgb},${swatch.rgb})`,
          }"
        ></div>
      </div>
    </div>
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
        0: { rgb: 200, lum: 3 },
        1: { rgb: 180, lum: 14.75 },
        2: { rgb: 160, lum: 26.5 },
        3: { rgb: 140, lum: 38.25 },
        4: { rgb: 120, lum: 50 },
        5: { rgb: 100, lum: 62.25 },
        6: { rgb: 80, lum: 74.5 },
        7: { rgb: 60, lum: 86.75 },
        8: { rgb: 50, lum: 99 },
      },
      isDragging: null,
      lastPos: null,
      adjustLumsTimeout: 0,
    };
  },

  computed: {
    lumsCount() {
      return Object.keys(this.lums).length;
    },
  },

  watch: {},

  methods: {
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

<style lang="scss" src="./App.scss" scoped></style>
