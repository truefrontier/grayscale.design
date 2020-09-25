<template>
  <div class="App">
    <section class="mt-6">
      <h1 class="mb-6 mr-5 font-bold uppercase tracking-wide">
        1.&nbsp;&nbsp;Set Your Luminance-Based Grayscale
      </h1>
      <div class="mt-6 md:mt-0 flex items-center justify-between">
        <p class="flex-shrink">
          Drag the sliders below or use the
          <i class="far fa-ellipsis-h mx-2 text-blue-600"></i> menu.
        </p>
        <div class="relative">
          <button
            @click="showLumsMenu = !showLumsMenu"
            class="text-center h-7 leading-7 px-4 rounded text-xl text-blue-600 hover:opacity-75 focus:text-blue-900"
          >
            <i class="far fa-lg fa-ellipsis-h"></i>
          </button>
          <div
            v-if="showLumsMenu"
            class="absolute right-0 top-100 mr-4 mt-2 text-left shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-40"
          >
            <div
              class="text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
            >
              Distribute
            </div>
            <button
              @click="
                autoDistribute = true;
                showLumsMenu = false;
              "
              :class="[
                'block w-full text-left py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
                { 'bg-gray-400 bg-opacity-75': autoDistribute },
              ]"
            >
              <i class="far fa-fw fa-hand-sparkles mr-4"></i>Auto
            </button>
            <button
              @click="
                autoDistribute = false;
                showLumsMenu = false;
              "
              :class="[
                'block w-full text-left py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
                { 'bg-gray-400 bg-opacity-75': !autoDistribute },
              ]"
            >
              <i class="far fa-fw fa-hand-paper mr-4"></i>Manual
            </button>
            <div
              class="mt-5 text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
            >
              Presets
            </div>
            <a
              :class="[
                'block py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
                {
                  'bg-gray-400 bg-opacity-75':
                    JSON.stringify(preset.getValues(lumsValues, lumsCount)) ==
                    JSON.stringify(lumsValues),
                },
              ]"
              v-for="(preset, key) in presets"
              :href="`#${key}`"
              :key="key"
              @click.prevent="
                autoDistribute = false;
                showLumsMenu = false;
                setLums(preset.getValues(lumsValues, lumsCount));
              "
              ><i :class="['fa fa-fw mr-4', preset.icon]"></i>{{ preset.label }}</a
            >
          </div>
        </div>
      </div>
      <div class="mt-4 -mx-6 sm:mx-0">
        <div
          ref="grayscale"
          class="sm:rounded-full shadow-lg bg-gray-800 relative px-6"
          @mousedown="isMouseDown = true"
          @mouseup="isMouseDown = false"
          @mousemove="onMouseMove"
        >
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

      <div class="text-center justify-between md:flex md:space-x-6">
        <div>
          <button
            @click="setLumsCount(lumsCount - 1)"
            class="relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide"
          >
            <i class="far fa-lg fa-minus"></i>
          </button>
          <span class="px-4 opacity-50">{{ lumsCount }} values</span>
          <button
            @click="setLumsCount(lumsCount + 1)"
            class="relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide"
          >
            <i class="far fa-lg fa-plus"></i>
          </button>
        </div>
        <div class="md:text-right">
          <label
            for="upload"
            :class="[
              'relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide',
              { 'cursor-not-allowed pointer-events-none opacity-50': isUploading },
            ]"
          >
            <input
              :disabled="isUploading"
              class="absolute inset-0 opacity-0 z-10 max-w-full"
              name="upload"
              id="upload"
              ref="upload"
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              @change="onFileUpload"
            />
            Upload an image
          </label>
          <p class="text-sm opacity-50 mt-3 w-double-10 max-w-full mx-auto">
            Optionally upload image to auto-generate your grayscale and colors. Max
            filesize:&nbsp;5MB
          </p>
        </div>
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
    <section class="mt-10">
      <h1 class="font-bold uppercase tracking-wide">2.&nbsp;&nbsp;Set your colors</h1>
      <button
        @click="addPalette"
        class="mt-6 border-1 border-blue-600 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 duration-300 rounded py-4 px-5 text-blue-600 hover:text-white uppercase text-sm font-bold tracking-wide"
      >
        Add A Color
      </button>
      <div class="mt-8">
        <div v-for="(palette, index) in palettes" :key="index" class="mt-8">
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
                class="leading-6 inline-block align-middle w-9 mr-5 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none"
              />
              <input
                type="text"
                v-model="palette.name"
                :ref="`paletteName${index}`"
                placeholder="Enter color label"
                class="leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none"
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
          <palette-row
            class="mt-4"
            :palette="palette"
            hide-lum
            :store-swatches="(swatches) => storeSwatches(swatches, index)"
          ></palette-row>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <h1 class="font-bold uppercase tracking-wide">3.&nbsp;&nbsp;Export Your Colors</h1>
      <form action="/export-svgs" target="_blank" method="POST">
        <input type="text" name="palettes" class="hidden" v-model="exportConfig" />
        <input type="hidden" name="_token" v-model="csrf" />
        <button
          type="submit"
          class="mt-6 border-1 border-blue-600 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 duration-300 rounded py-4 px-5 text-blue-600 hover:text-white uppercase text-sm font-bold tracking-wide"
        >
          Export Svgs
        </button>
      </form>

      <p class="mt-8">
        Or
        <a
          href="https://tailwindcss.com/docs/customizing-colors"
          target="_blank"
          rel="noopener"
          class="transition-all duration-200 border-b border-gray-500 inline-block hover:opacity-50"
          >customize your Tailwind CSS colors</a
        >
        with your generated colors:
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

  props: {
    cms: Object,
    csrf: String,
  },

  data() {
    return {
      presets: {
        bell: {
          label: 'Bell Curve',
          icon: 'fa-wave-sine',
          getValues(lums, count) {
            let min = lums.reduce((num, val) => (val < num ? val : num), 100);
            let max = lums.reduce((num, val) => (val > num ? val : num), 0);
            let spread = max - min;
            let space = spread / (count - 1);
            let mid = spread / 2 + min;
            let half = (count - 1) / 2;
            let vals = [min];
            let i = 1;
            while (i < count - 1) {
              let val, virtualIndex;
              if (i === half) {
                val = mid;
              } else if (i < half) {
                virtualIndex = half - i;
                val = i * space;
                val *= Math.pow((half - 1) / half, virtualIndex);
                val = Math.max(val + min, min);
              } else {
                virtualIndex = i - half;
                val = (count - 1 - i) * space;
                val *= Math.pow((half - 1) / half, virtualIndex);
                val = Math.min(max - val, max);
              }
              vals.push(val);
              i++;
            }
            vals.push(max);
            vals.reverse();
            return vals;
          },
        },
        linear: {
          label: 'Linear',
          icon: 'fa-horizontal-rule',
          getValues(lums, count) {
            let min = lums.reduce((num, val) => (val < num ? val : num), 100);
            let max = lums.reduce((num, val) => (val > num ? val : num), 0);
            let space = (max - min) / (count - 1);
            let vals = [min];
            let i = 1;
            while (i < count - 1) {
              let val = min + i * space;
              vals.push(val);
              i++;
            }
            vals.push(max);
            vals.reverse();
            return vals;
          },
        },
        dark: {
          label: 'Darker Side',
          icon: 'fa-moon',
          getValues(lums, count) {
            let min = lums.reduce((num, val) => (val < num ? val : num), 100);
            let max = lums.reduce((num, val) => (val > num ? val : num), 0);
            let spread = max - min;
            let space = spread / (count - 1);
            let vals = [min];
            let i = 1;
            while (i < count - 1) {
              let val = i * space;
              val *= Math.pow((count - 1) / count, count - (i * (count + 1)) / count);
              vals.push(Math.min(val + min, max));
              i++;
            }

            vals.push(max);
            vals.reverse();
            return vals;
          },
        },
        light: {
          label: 'Lighter Side',
          icon: 'fa-sun',
          getValues(lums, count) {
            let min = lums.reduce((num, val) => (val < num ? val : num), 100);
            let max = lums.reduce((num, val) => (val > num ? val : num), 0);
            let spread = max - min;
            let space = spread / (count - 1);
            let vals = [min];
            let i = count - 2;
            while (i > 0) {
              let val = i * space;
              val *= Math.pow((count - 1) / count, count - (i * (count + 1)) / count);
              vals.push(Math.max(max - val, min));
              i--;
            }

            vals.push(max);
            vals.reverse();
            return vals;
          },
        },
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
      hasUpdatedLumsCount: false,
      copyText: '',
      showLumsMenu: false,
      storedSwatches: {},
      isMouseDown: false,
      mouseX: 0,
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

    exportConfig() {
      let colors = {};

      colors.gray = {
        name: 'gray',
        swatches: Object.keys(this.lums).reduce((obj, index) => {
          let swatch = {
            lum: this.lums[index].lum,
            rgb: this.lums[index].rgb,
            hex: Color.RGBToHex(...this.lums[index].rgb),
            hsl: Object.values(Color.RGBToHSL(...this.lums[index].rgb)),
          };
          obj[index] = swatch;
          return obj;
        }, {}),
      };

      this.palettes.forEach((palette, i) => {
        let name = palette.name;
        if (!name) {
          let closestToMid = Color.closestLum(this.lumsValues, 50);
          let [midIndex] = Object.keys(closestToMid) || Math.floor(this.lumsCount / 2);
          let swatch = palette.swatches[midIndex];
          let { h, s, l } = Color.RGBToHSL(...swatch.rgb);
          name = Color.colorName(h, s, l);
        }
        if (name === 'gray') name += '-custom';

        colors[name] = Object.keys(palette.swatches).reduce(
          (obj, j) => {
            if (this.storedSwatches[i] && this.storedSwatches[i][j]) {
              obj.swatches[j] = this.storedSwatches[i][j];
            }
            return obj;
          },
          { ...palette, name, swatches: {} },
        );
      });

      return JSON.stringify(colors);
    },

    tailwindConfig() {
      let colors = {};

      colors.gray = Object.keys(this.lums).reduce((obj, index) => {
        obj[`${parseInt(index, 10) + 1}00`] = Color.RGBToHex(...this.lums[index].rgb);
        return obj;
      }, {});

      this.palettes.forEach((palette, i) => {
        let name = palette.name;
        if (!name) {
          let closestToMid = Color.closestLum(this.lumsValues, 50);
          let [midIndex] = Object.keys(closestToMid) || Math.floor(this.lumsCount / 2);
          let swatch = palette.swatches[midIndex];
          let { h, s, l } = Color.RGBToHSL(...swatch.rgb);
          name = Color.colorName(h, s, l);
        }
        if (name === 'gray') name += '-custom';

        colors[name] = Object.keys(palette.swatches).reduce((obj, j) => {
          if (this.storedSwatches[i] && this.storedSwatches[i][j]) {
            obj[`${parseInt(j, 10) + 1}00`] = this.storedSwatches[i][j].hex;
          }
          return obj;
        }, {});
      });

      let config = JSON.stringify(colors, null, ' ');
      localStorage.setItem(new Date(), config);
      return config;
    },
  },

  watch: {
    /**
     * Create a grayscale palette from uploaded image
     * @param  {Object} val     JSON response from imgix
     */
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

      if (!this.hasUpdatedLumsCount) {
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
      }
    },

    /**
     * Create a palette from colors pulled from an image
     * @param  {Object} val   JSON response from imgix
     */
    paletteJson(val) {
      let hexes = [];
      let colors = [];
      val.colors.forEach((color) => {
        if (hexes.indexOf(color.hex) === -1) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });

      Object.values(val.dominant_colors).forEach((color) => {
        if (hexes.indexOf(color.hex) === -1) {
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
        this.$nextTick(() => {
          setTimeout(() => {
            this.dedupePalettes();
          }, 1000);
        });
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
    this.setLums([98, 92, 82, 67, 50, 33, 18, 8, 2]);
  },

  mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
    if (this.uploadFileUrl) this.setFromUploadFile();
  },

  beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },

  methods: {
    storeSwatches(swatches, index) {
      this.storedSwatches[index] = swatches;
    },

    dedupePalettes() {
      let dupes = this.getDupes();

      for (var i = dupes.length - 1; i >= 0; i--) {
        this.palettes.splice(dupes[i], 1);
      }
    },

    getDupes() {
      let rgbs = {};
      let dupes = [];
      this.palettes.forEach((palette, p1) => {
        let isDupe = false;
        rgbs[p1] = [];
        let closestToMid = Color.closestLum(this.lumsValues, 50);
        let midIndex = Object.keys(closestToMid)[0];
        let swatch = palette.swatches[midIndex];
        let [r, g, b] = swatch.rgb;
        for (var p2 = Object.keys(rgbs).length - 1; p2 >= 0; p2--) {
          for (var j = rgbs[p2].length - 1; j >= 0; j--) {
            let matches = 0;
            let [R, G, B] = rgbs[p2][j];
            if (r - 3 <= R && r + 3 >= R) matches++;
            if (g - 3 <= G && g + 3 >= G) matches++;
            if (b - 3 <= B && b + 3 >= B) matches++;
            if (matches >= 2) {
              let hex1 = this.palettes[p1].hex;
              let hex2 = this.palettes[p2].hex;
              let lum1 = Color.lumFromRGB(...Object.values(Color.hexToRGB(hex1)));
              let lum2 = Color.lumFromRGB(...Object.values(Color.hexToRGB(hex2)));
              let diff1 = Math.abs(50 - lum1);
              let diff2 = Math.abs(50 - lum2);
              if (diff2 < diff1 && dupes.indexOf(p1) === -1) {
                dupes.push(p1);
              } else {
                dupes.push(p2);
              }
              isDupe = true;
              break;
            }
          }
          if (isDupe) break;
        }
        if (!isDupe) rgbs[p1].push(swatch.rgb);
      });

      return [...new Set(dupes)].sort();
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
        return '#' + [...hex.replace('#', '')].reduce((str, cur) => str + cur + cur, '');
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

    onMouseMove(e) {
      if (this.isMouseDown) this.mouseX = e.pageX;
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
      let elX = ($event.pageX || this.mouseX) - parent.offsetLeft - grandparent.offsetLeft;
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
        // setTimeout(() => {
        //   let [input] = this.$refs.palettePicker0 || [];
        //   if (input) input.click();
        // }, 10);
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
