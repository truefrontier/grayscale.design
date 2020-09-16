<template>
  <div class="App">
    <h1 class="text-4xl leading-7 text-gray-500">Luminance-Based Color Palette Generator</h1>
    <section class="mt-7">
      <h1 class="mb-6 font-bold uppercase tracking-wide">1. Set Your Luminosity Scale</h1>
      <div class="float-right flex divide-x">
        <button
          @click="autoDistribute = true"
          :class="[
            'px-4',
            autoDistribute ? 'font-bold text-gray-700' : 'text-gray-600 hover:underline',
          ]"
        >
          auto
        </button>
        <button
          @click="autoDistribute = false"
          :class="[
            'px-4',
            !autoDistribute ? 'font-bold text-gray-700' : 'text-gray-600 hover:underline',
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
          <div class="border-t border-gray-600 absolute inset-x-0 top-1/2 -mt-px"></div>
          <div
            v-for="(swatch, index) in lums"
            :key="index"
            draggable
            @dragstart="onDragStart($event, index)"
            @drag="onDrag($event, index)"
            @dragend="onDragEnd($event, index)"
            :class="[
              'absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white',
              isDragging === index ? 'shadow-outline' : 'transition-all duration-200',
            ]"
            :style="{
              left: `${100 - swatch.lum}%`,
              backgroundColor: `rgb(${lumToGrayscaleRGB(swatch.lum).join(',')})`,
            }"
          ></div>
        </div>
      </div>
      <palette-row class="mt-8" :palette="{ swatches: lums }"></palette-row>
      <p class="mt-7 opacity-50">
        This scale will be consistent throughout each color in your project's palette. For example,
        a blue-500 will match a red-500 in luminance (or visual lightness/darkness)... or
        any-other-color-500. In the same way, a red-300 would match a yellow-300 or gray-300. This
        is the beauty of
        <strong>grayscale design</strong>. Making all your colors with a scale of equal luminance
        allows you to design a website first in grayscale, and then, you can add color later without
        losing any contrast.
        <!-- To get you started, we've setup 9 steps in your scale, light to
        dark.  -->
      </p>
    </section>
    <section class="mt-9">
      <h1 class="mb-6 font-bold uppercase tracking-wide">2. Set your colors</h1>
      <p class="mt-6 opacity-50">
        When you add a color, it will create a swatch for each position from your luminosity scale
        that you set above in step one.
        <strong>Remember,</strong> to keep your entire color set consistent, changing your
        luminosity scale will adjust all the colors accordingly.
      </p>
      <button
        @click="addPalette"
        class="mt-7 border-1 border-gray-700 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-700 hover:text-white uppercase text-sm font-bold tracking-wide"
      >
        Add A Color
      </button>
      <div class="mt-8">
        <div v-for="(palette, index) in palettes" :key="index" class="mt-8">
          <input
            type="color"
            v-model="palette.hex"
            :ref="`paletteHex${index}`"
            class="inline-block align-middle h-7 w-8 p-0 border-1 rounded bg-transparent mr-4"
          />
          <input
            type="text"
            v-model="palette.name"
            :ref="`paletteName${index}`"
            placeholder="Enter color label"
            class="inline-block align-middle w-10 text-gray-700 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none"
          />
          <palette-row class="mt-5" :palette="palette"></palette-row>
        </div>
      </div>
    </section>
    <section class="mt-9">
      <h1 class="mb-6 font-bold uppercase tracking-wide">3. Export Colors for Tailwind CSS</h1>
      <p class="mt-6">
        <a
          href="https://tailwindcss.com/docs/customizing-colors"
          target="_blank"
          rel="noopener"
          class="border-b border-gray-500 inline-block hover:opacity-50"
          >Customize your Tailwind CSS colors</a
        >
        with these generated colors:
      </p>
      <pre class="mt-6 bg-gray-300 rounded-lg p-6 text-gray-800">{{ tailwindConfig }}</pre>
    </section>
  </div>
</template>

<script>
import * as Color from '../utils/color';
import { clone } from '../utils/object';
import PaletteRow from '../components/PaletteRow';
var BLANK_IMG = new Image();
BLANK_IMG.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

export default {
  name: 'App',

  components: {
    PaletteRow,
  },

  data() {
    return {
      lums: {
        0: { lum: 98, rgb: this.lumToGrayscaleRGB(98) },
        1: { lum: 92, rgb: this.lumToGrayscaleRGB(92) },
        2: { lum: 82, rgb: this.lumToGrayscaleRGB(82) },
        3: { lum: 67, rgb: this.lumToGrayscaleRGB(67) },
        4: { lum: 50, rgb: this.lumToGrayscaleRGB(50) },
        5: { lum: 33, rgb: this.lumToGrayscaleRGB(33) },
        6: { lum: 18, rgb: this.lumToGrayscaleRGB(18) },
        7: { lum: 8, rgb: this.lumToGrayscaleRGB(8) },
        8: { lum: 3, rgb: this.lumToGrayscaleRGB(3) },
      },
      isDragging: null,
      isChoosingBase: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
      palettes: [],
      dragTimeout: 0,
    };
  },

  computed: {
    lumsCount() {
      return Object.keys(this.lums).length;
    },

    tailwindConfig() {
      let colors = {};
      colors.gray = Object.keys(this.lums).reduce((obj, index) => {
        obj[`${index}00`] = Color.RGBToHex(...this.lums[index].rgb);
        return obj;
      }, {});

      this.palettes.forEach((palette) => {
        colors[palette.name] = Object.keys(palette.swatches).reduce((obj, index) => {
          obj[`${index}00`] = Color.RGBToHex(...palette.swatches[index].rgb.map(Math.round));
          return obj;
        }, {});
      });
      let config = JSON.stringify(colors, null, '  ');
      localStorage.setItem(new Date(), config);
      return config;
    },
  },

  watch: {
    autoDistribute(val) {
      if (val) {
        this.adjustLums(this.lums[0], this.lums[this.lumsCount - 1].lum, this.lums[0].lum, 0);
      }
    },

    lums: {
      deep: true,
      handler(val) {
        // Update palette swatch lums
        this.palettes = this.palettes.map((palette) => {
          Object.keys(palette.swatches).forEach((i) => {
            palette.swatches[i].lum = val[i].lum;
          });
          return palette;
        });
      },
    },
  },

  methods: {
    lumToGrayscaleRGB(lum) {
      let val = Math.round((255 * lum) / 100);
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
        this.lums[index].lum = 100 - pos;
        this.lums[index].rgb = this.lumToGrayscaleRGB(100 - pos);
        clearTimeout(this.adjustLumsTimeout);
        this.adjustLumsTimeout = setTimeout(
          () =>
            this.adjustLums(
              index === 0 ? pos : this.lums[0].lum,
              index === this.lumsCount - 1 ? pos : this.lums[this.lumsCount - 1].lum,
              100 - pos,
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
            this.lums[ndx].rgb = this.lumToGrayscaleRGB(this.lums[ndx].lum);
          } else if (curIndex < ndx) {
            let dist = (endPos - curPos) / (this.lumsCount - curIndex - 1);
            this.lums[ndx].lum = (ndx - curIndex) * dist + curPos;
            this.lums[ndx].rgb = this.lumToGrayscaleRGB(this.lums[ndx].lum);
          }
        });

        // Prevent this from running unnecessarily
        this.lastPos = curPos;
      }
    },

    addPalette() {
      this.palettes.unshift({
        name: 'new',
        swatches: clone(this.lums),
      });

      this.isChoosingBase = 0;

      this.$nextTick(() => {
        setTimeout(() => {
          let [input] = this.$refs.paletteHex0 || [];
          if (input) input.click();
        }, 10);
      });
    },
  },
};
</script>

<!-- <style lang="scss" src="./App.scss" scoped></style> -->
