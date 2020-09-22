<template>
  <div class="App">
    <h1 class="text-4xl leading-7 text-gray-500">Luminance-Based Color Palette Generator</h1>
    <section class="mt-8">
      <div class="sm:flex justify-between">
        <h1 class="mb-6 mr-5 font-bold uppercase tracking-wide">1. Set Your Luminosity Scale</h1>
        <div class="whitespace-no-wrap">
          <button
            @click="setLumsCount(lumsCount - 1)"
            class="focus:shadow-outline focus:outline-none leading-5 py-half-4 px-4 rounded bg-gray-200 text-xl text-gray-600 hover:text-gray-800"
          >
            -
          </button>
          <span class="opacity-50 mx-4">{{ lumsCount }} values</span>
          <button
            @click="setLumsCount(lumsCount + 1)"
            class="focus:shadow-outline focus:outline-none leading-5 py-half-4 px-4 rounded bg-gray-200 text-xl text-gray-600 hover:text-gray-800"
          >
            +
          </button>
        </div>
      </div>
      <div class="mt-6 md:mt-0 md:flex justify-between">
        <p class="flex-shrink">Drag the sliders below to set your luminosity scale.</p>
        <div class="mt-6 md:mt-0 divide-x flex-grow text-center md:text-right">
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
          <div class="inline-block relative">
            <button
              v-if="lumsCount == 9"
              @click="
                autoDistribute = false;
                showPresets = !showPresets;
              "
              class="px-4 text-gray-600 hover:underline"
            >
              presets<i class="ml-2 fa fa-caret-down"></i>
            </button>
            <div
              v-if="showPresets && lumsCount == 9"
              class="absolute right-0 top-100 mr-4 mt-2 text-right shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-40"
            >
              <a
                :class="[
                  'block py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
                  {
                    'bg-gray-400 bg-opacity-75':
                      JSON.stringify(preset.values) == JSON.stringify(lumsValues),
                  },
                ]"
                v-for="(preset, key) in presets"
                :href="`#${key}`"
                :key="key"
                @click.prevent="
                  setLums(preset.values);
                  showPresets = false;
                "
                >{{ preset.label }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 -mx-6 sm:mx-0">
        <div class="sm:rounded-full shadow-lg bg-gray-800 relative px-6">
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
      </div>
      <palette-row class="mt-7" :palette="{ swatches: lums }"></palette-row>
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
      <div class="mt-6 font-bold">
        <span class="opacity-75">Shortcut &raquo;</span>
        <button class="font-bold text-blue-600" @click="showUploadForm = true">
          Upload an image
        </button>
      </div>
      <div v-if="showUploadForm" class="mt-6">
        <p class="opacity-50">
          After uploading an image, we turn it grayscale to set your luminosity scale. After that,
          we find the most prominant colors from your image and add them to your color palette!
        </p>
        <div>
          <input
            :disabled="isUploading"
            :class="['mt-6', { 'opacity-25': isUploading }]"
            ref="upload"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            @change="onFileUpload"
          />
          <i v-if="isUploading" class="fa fa-spinner-third fa-spin"></i>
        </div>
        <p class="text-sm opacity-50 mt-2">Max filesize: 5MB</p>
      </div>
      <div v-if="uploadFilePath" class="mt-6 text-center">
        <a
          class="relative inline-block shadow hover:shadow-2xl transition-shadow duration-300"
          :href="getUploadFileUrl(`?sat=-100&colorquant=${lumsCount}`)"
          target="_blank"
          rel="noopener"
        >
          <img class="rounded-lg" :src="base64File || uploadFileUrl" alt="" />
          <img
            class="rounded-lg absolute inset-0 z-10 opacity-100 hover:opacity-0 transition-opacity duration-200"
            :src="getUploadFileUrl(`?sat=-100&colorquant=${lumsCount}`)"
            alt=""
          />
        </a>
        <p class="mt-2 text-xs mx-auto opacity-50 max-w-2xl">
          Click image to view and print. This is your image using just {{ lumsCount }} shades of
          gray (the grays used to generate your luminosity scale). Below, we added a few colors from
          your image!
        </p>
      </div>
    </section>
    <section class="mt-9">
      <h1 class="mb-6 font-bold uppercase tracking-wide">2. Set your colors</h1>
      <p class="mt-6 opacity-50">
        When you add a color, it will create a swatch for each position from your luminosity scale
        that you set above in step one.
        <strong>Remember,</strong> to keep your entire color set consistent, changing your
        luminosity scale will adjust all the colors accordingly.
      </p>
      <p class="mt-6 opacity-50">
        If your base color has <strong>high saturation</strong>, try using the
        <i class="far fa-ellipsis-h text-blue-700 inline-block align-middle mx-2"></i> menu to "Show
        Filters" and adjust hues towards the extremes of your palette. Or, if your base color has
        <strong>low saturation</strong> and more gray-ish, try adding more saturation for the
        extremes.
      </p>
      <button
        @click="addPalette"
        class="mt-7 border-1 border-gray-700 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-700 hover:text-white uppercase text-sm font-bold tracking-wide"
      >
        Add A Color
      </button>
      <div class="mt-8">
        <div v-for="(palette, index) in palettes.filter((p) => !!p)" :key="index" class="mt-8">
          <div class="min-h-8 md:flex justify-between items-center relative">
            <div class="absolute right-0 top-0">
              <button
                @click="togglePaletteMenu(index)"
                class="text-center h-7 my-half-6 rounded text-xl text-blue-600 p-4 hover:opacity-75 focus:text-blue-900"
              >
                <i class="far fa-lg fa-ellipsis-h"></i>
              </button>
              <div
                v-if="shownPaletteMenu == index"
                class="absolute z-40 right-0 top-100 mr-4 -mt-3 text-left shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-10"
              >
                <a
                  href="#"
                  @click.prevent="
                    toggleFilters(index);
                    togglePaletteMenu(index);
                  "
                  class="block py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75"
                >
                  <i class="far fa-fw fa-sliders-h mr-4"></i
                  >{{ showFilters.includes(index) ? 'Hide' : 'Show' }} Filters
                </a>
                <hr class="my-3 border-gray-600 opacity-75" />
                <a
                  href="#"
                  @click.prevent="
                    removePalette(index);
                    togglePaletteMenu(index);
                  "
                  class="block py-half-4 px-5 whitespace-no-wrap text-red-800 hover:bg-gray-400 hover:bg-opacity-75"
                >
                  <i class="far fa-fw fa-times mr-4"></i>Remove
                </a>
              </div>
            </div>
            <div class="h-8 leading-8 mr-8">
              <input
                type="color"
                :value="getPickerHex(palette.hex)"
                @input="palette.hex = $event.target.value"
                :ref="`palettePicker${index}`"
                class="leading-6 inline-block align-middle h-7 w-8 p-0 border-1 rounded bg-transparent mr-4"
              />
              <input
                type="text"
                v-model="palette.hex"
                :ref="`paletteHex${index}`"
                placeholder="#000000"
                class="leading-6 inline-block align-middle w-9 mr-5 text-gray-700 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none"
              />
              <input
                type="text"
                v-model="palette.name"
                :ref="`paletteName${index}`"
                placeholder="Enter color label"
                class="leading-6 inline-block align-middle w-10 text-gray-700 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none"
              />
            </div>

            <div v-if="showFilters.includes(index)" class="flex md:mr-8 space-x-5">
              <div class="text-center leading-5 mt-4 w-1/2 md:min-w-10 lg:min-w-11">
                <label class="block font-mono text-xs opacity-50 uppercase"
                  >Hue ({{
                    palette.filters.hue > 0 ? `+${palette.filters.hue}` : palette.filters.hue
                  }}°)</label
                >
                <input
                  type="range"
                  min="-50"
                  v-model="palette.filters.hue"
                  max="50"
                  class="p-half-4 w-full"
                />
              </div>
              <div class="text-center leading-5 mt-4 w-1/2 md:min-w-10 lg:min-w-11">
                <label class="block font-mono text-xs opacity-50 uppercase"
                  >Saturation ({{ palette.filters.sat }}%)</label
                >
                <input
                  type="range"
                  min="-30"
                  v-model="palette.filters.sat"
                  max="30"
                  class="p-half-4 w-full"
                />
              </div>
            </div>
          </div>
          <palette-row class="mt-4" :palette="palette" hide-lum></palette-row>
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
      <div class="mt-6 bg-gray-300 rounded-lg p-6 text-gray-800 overflow-auto">
        <button
          @click="copy(tailwindConfig)"
          class="relative z-20 bg-gray-200 float-right rounded border-1 text-blue-600 border-blue-600 px-5 py-4 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 hover:text-white duration-300 uppercase text-sm font-bold tracking-wide"
        >
          <i :class="['fa fa-fw mr-3', copyText ? 'fa-check' : 'fa-clone']"></i
          >{{ copyText ? 'Copied!' : 'Copy' }}
        </button>
        <pre class="relative z-10">{{ tailwindConfig }}</pre>
      </div>
    </section>
    <section class="mt-9 text-center leading-7">
      <div class="text-3xl font-bold">Have feedback?</div>
      <a
        class="inline-block mt-5 leading-6 sm:leading-7 sm:mt-4 text-xl sm:text-2xl sm:border-b-1 border-gold-300 transition-all duration-300 text-gold-600 hover:text-gold-500"
        href="mailto:feedback@grayscale.design"
      >
        <i class="fa fa-send mr-4"></i>Send us an email
      </a>
    </section>
  </div>
</template>

<script>
import { jsonToFormData } from '../utils/forms';
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
      presets: {
        bell: { label: 'Bell Curve', values: [98, 92, 82, 67, 50, 33, 18, 8, 2] },
        linear: { label: 'Linear', values: [98, 86, 74, 62, 50, 38, 26, 14, 2] },
        dark: { label: 'The Darkside', values: [90, 81, 66, 43, 22, 10, 4, 0.8, 0.2] },
      },
      lums: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
      isDragging: null,
      isChoosingBase: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
      palettes: [],
      dragTimeout: 0,
      showFilters: [],
      showPresets: false,
      showUploadForm: false,
      paletteCacheBustTimeout: 0,
      updateSwatchTimeout: 0,
      isUploading: false,
      uploadFile: null,
      base64File: null,
      uploadFileUrl: '',
      uploadFilePath: '',
      grayscaleJson: {},
      paletteJson: {},
      shownPaletteMenu: null,
      setFromUploadTimeout: 0,
      copyText: '',
    };
  },

  computed: {
    lumsValues() {
      return Object.keys(this.lums).reduce((arr, index) => {
        arr.push(this.lums[index].lum);
        return arr;
      }, []);
    },

    lumsCount() {
      return Object.keys(this.lums).length;
    },

    tailwindConfig() {
      let colors = {};
      colors.gray = Object.keys(this.lums).reduce((obj, index) => {
        obj[`${parseInt(index, 10) + 1}00`] = Color.RGBToHex(...this.lums[index].rgb);
        return obj;
      }, {});

      this.palettes.forEach((palette) => {
        colors[palette.name] = Object.keys(palette.swatches).reduce((obj, index) => {
          if (palette.swatches[index].rgb) {
            obj[`${parseInt(index, 10) + 1}00`] = Color.RGBToHex(
              ...palette.swatches[index].rgb.map(Math.round),
            );
          }
          return obj;
        }, {});
      });
      let config = JSON.stringify(colors, null, '  ');
      localStorage.setItem(new Date(), config);
      return config;
    },
  },

  watch: {
    grayscaleJson(val) {
      let hexes = [];
      let colors = [];
      val.colors.forEach((color) => {
        if (!hexes.includes(color.hex)) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });

      if (colors.length < this.lumsCount) {
        Object.values(val.dominant_colors).forEach((color) => {
          if (!hexes.includes(color.hex)) {
            colors.push(color);
          }
        });
      }

      colors.sort((a, b) => {
        if (a.hex < b.hex) return 1;
        if (a.hex > b.hex) return -1;
        return 0;
      });

      this.lums = {};
      let i = 0;
      while (i < colors.length) {
        let color = colors[i];
        let r = Math.round(color.red * 255);
        let g = Math.round(color.green * 255);
        let b = Math.round(color.blue * 255);
        let lum = Color.lumFromRGB(r, g, b);
        this.lums[i] = { lum, rgb: [r, g, b] };
        i++;
      }
    },

    paletteJson(val) {
      let hexes = [];
      let colors = [];
      val.colors.forEach((color) => {
        if (hexes.indexOf(color.hex) !== -1) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });

      Object.values(val.dominant_colors).forEach((color) => {
        if (hexes.indexOf(color.hex) !== -1) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });

      colors.sort((a, b) => {
        if (a.hex < b.hex) return 1;
        if (a.hex > b.hex) return -1;
        return 0;
      });

      colors.forEach((color, i) => {
        if (color.hex)
          this.palettes.push({
            name: '',
            swatches: clone(this.lums),
            hex: color.hex,
            filters: {
              hue: 0,
              sat: 0,
            },
          });
      });

      // Force render on the palette array
      let last = this.palettes.pop();
      this.$nextTick(() => {
        this.palettes.unshift(last);
      });
    },

    autoDistribute(val) {
      if (val) {
        this.adjustLums(this.lums[0], this.lums[this.lumsCount - 1].lum, this.lums[0].lum, 0);
      }
    },

    lums: {
      deep: true,
      handler(val) {
        clearTimeout(this.updateSwatchTimeout);
        this.updateSwatchTimeout = setTimeout(() => {
          this.updateSwatchLums(val);
        }, 250);
      },
    },

    lumsCount(val) {
      this.$nextTick(() => {
        this.updateSwatchLums();
      });
    },
  },

  created() {
    this.setLums(this.presets.bell.values);
  },

  mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
    if (this.uploadFileUrl) this.setFromUploadFile();
  },

  beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },

  methods: {
    dedupePalettes() {
      let hexes = [];
      let dupes = [];
      this.palettes.forEach((palette, i) => {
        let isDupe = false;
        Object.keys(palette.swatches).forEach((key) => {
          let swatch = palette.swatches[key];
          if (hexes.indexOf(swatch.hex) !== -1) {
            hexes.push(swatch.hex);
          } else {
            isDupe = true;
          }
        });
        if (isDupe) dupes.push(i);
      });

      dupes.forEach((paletteIndex) => {
        this.palettes.splice(paletteIndex, 1);
      });
    },

    copy(copyText) {
      this.copyText = copyText;
      this.$nextTick(() => {
        document.execCommand('copy');
      });
    },

    onCopy(e) {
      if (this.copyText) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', this.copyText);
        setTimeout(() => {
          this.copyText = false;
        }, 2000);
      }
    },

    removePalette(index) {
      this.palettes.splice(index, 1);
    },

    togglePaletteMenu(index) {
      this.shownPaletteMenu = this.shownPaletteMenu == index ? null : index;
    },

    toggleFilters(index) {
      let filterIndex = this.showFilters.indexOf(index);
      if (filterIndex !== -1) {
        this.showFilters.splice(filterIndex, 1);
      } else {
        this.showFilters = [...new Set([...this.showFilters, index])];
      }
    },

    getPickerHex(hex) {
      if (hex.length === 4) {
        return hex + hex.replace('#', '');
      }

      return hex;
    },

    updateSwatchLums(lums) {
      lums = lums || this.lums;
      let lumsCount = Object.keys(lums).length;
      // Update palette swatch lums
      this.palettes = this.palettes.map((palette) => {
        let swatchKeys = Object.keys(palette.swatches);
        swatchKeys.forEach((i) => {
          if (i < lumsCount) {
            palette.swatches[i].lum = lums[i].lum;
          } else {
            delete palette.swatches[i];
          }
        });
        let i = swatchKeys.length - 1;
        while (i < lumsCount) {
          palette.swatches[i] = { lum: lums[i].lum };
          i++;
        }
        return palette;
      });

      clearTimeout(this.paletteCacheBustTimeout);
      this.paletteCacheBustTimeout = setTimeout(() => {
        this.palettes.reverse();
        this.$nextTick(() => {
          this.palettes.reverse();
        });
      }, 100);
    },

    setLums(values) {
      this.lums = Object.keys(this.lums).reduce((obj, index) => {
        obj[index] = {
          lum: values[index],
          rgb: this.lumToGrayscaleRGB(values[index]),
        };
        return obj;
      }, {});
    },

    lumToGrayscaleRGB(lum) {
      let newL = Color.lightnessFromHSLum(0, 0, lum);
      return Object.values(Color.HSLtoRGB(0, 0, newL)).map(Math.round);
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
      if (!parent) return;
      let parentWidth = parent.clientWidth;
      let grandparent = parent.parentElement;
      if (!grandparent) return;
      let elX = $event.pageX - parent.offsetLeft - grandparent.offsetLeft;
      if (elX < 0 || elX > parentWidth) {
        $event.preventDefault();
        return false;
      }
      let pos = parseFloat((elX / parentWidth) * 100);
      if ($event.screenX) {
        this.lums = clone(this.lums);
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
        name: '',
        swatches: clone(this.lums),
        hex: '#000001',
        filters: {
          hue: 0,
          sat: 0,
        },
      });

      this.isChoosingBase = 0;

      this.$nextTick(() => {
        this.palettes[0].hex = '#000000';
        setTimeout(() => {
          let [input] = this.$refs.palettePicker0 || [];
          if (input) input.click();
        }, 10);
      });
    },

    onFileUpload() {
      return new Promise(async (resolve, reject) => {
        this.isUploading = true;
        const filePicker = this.$refs.upload;

        if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
          reject('No file selected.');
          return;
        }

        this.uploadFile = filePicker.files[0];
        if (this.uploadFile.size > 10485760 / 2) {
          reject('Image is too big (max. 5 Mb)');
          return;
        }

        this.base64File = await this.toBase64(this.uploadFile);

        return resolve(this.uploadFile);
      })
        .then((file) => {
          let formData = jsonToFormData({ file });
          axios.post('/palette-uploads', formData).then(({ data }) => {
            if (data.url) {
              this.uploadFileUrl = data.url;
              this.uploadFilePath = data.path;
              this.setFromUploadFile();
            } else {
              alert('Sorry! Please try again.');
            }
          });
        })
        .catch(alert)
        .finally(() => {
          this.isUploading = false;
          if (this.$refs?.upload) {
            this.$refs.upload.value = null;
          }
        });
    },

    toBase64(uploadFile) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        if (fileReader && uploadFile) {
          fileReader.readAsDataURL(uploadFile);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };

          fileReader.onerror = (error) => {
            reject(error);
          };
        } else {
          reject('No file provided');
        }
      });
    },

    setLumsCount(newCount) {
      if (newCount < 3 || newCount > 20) return;

      let lums = clone(this.lums);
      let i = 0;
      while (i < Math.max(this.lumsCount, newCount)) {
        if (i < newCount) {
          if (!lums.hasOwnProperty(i)) {
            let lum = lums[i - 1].lum / 2;
            lums[i] = { lum, rgb: this.lumToGrayscaleRGB(lum) };
          }
        } else {
          delete lums[i];
        }
        i++;
      }
      this.lums = lums;

      if (this.uploadFileUrl) {
        clearTimeout(this.setFromUploadTimeout);
        this.setFromUploadTimeout = setTimeout(() => {
          this.setFromUploadFile(false);
        }, 2500);
      }
    },

    setFromUploadFile(addPalette = true) {
      let grayscaleUrl = `${this.uploadFileUrl}?sat=-100&colorquant=${this.lumsCount}&palette=json&colors=${this.lumsCount}`;
      axios
        .get(grayscaleUrl)
        .then(({ data }) => {
          this.grayscaleJson = data;
        })
        .then(() => {
          if (addPalette) {
            let paletteUrl = `${this.uploadFileUrl}?palette=json&colors=3`;
            axios.get(paletteUrl).then(({ data }) => {
              this.paletteJson = data;
            });
          }
        });
    },

    getUploadFileUrl(params) {
      // return `/uploads/${this.uploadFilePath}${params}`;
      return this.uploadFileUrl + params;
    },
  },
};
</script>

<!-- <style lang="scss" src="./App.scss" scoped></style> -->
