<template>
  <div class="App" @click="showPicker = null">
    <section class="mt-6">
      <div class="md:flex justify-between">
        <h1 class="mb-6 mr-5 font-bold uppercase tracking-wide">
          1.&nbsp;&nbsp;Set Your Luminance-Based Grayscale
        </h1>
        <a
          class="
            leading-7
            h-7
            box-content
            whitespace-nowrap
            text-blue-600
            hover:bg-white
            duration-300
            inline-block
            pl-4
            pr-5
            rounded-full
            border-1 border-blue-500
            bg-blue-200
            uppercase
            text-sm
            font-bold
            tracking-wide
          "
          href="https://www.loom.com/share/3da3164377e84cbe87c7d0281c823e5e"
          target="_blank"
          ><i class="fa fa-play-circle mr-3 opacity-75"></i>Watch Demo<i
            class="ml-3 fa fa-xs fa-external-link opacity-50"
          ></i
        ></a>
      </div>
      <div class="mt-6 md:mt-0 flex items-center justify-between">
        <p class="flex-shrink">
          Drag the sliders below or use the
          <i class="far fa-ellipsis-h mx-2 text-blue-600"></i> menu.
        </p>
        <div class="relative">
          <button
            @click="showLumsMenu = !showLumsMenu"
            class="
              text-center
              h-7
              leading-7
              px-4
              rounded
              text-xl text-blue-600
              hover:opacity-75
              focus:text-blue-900
            "
          >
            <i class="far fa-lg fa-ellipsis-h"></i>
          </button>
          <div
            v-if="showLumsMenu"
            class="
              absolute
              right-0
              top-100
              mr-4
              mt-2
              text-left
              shadow-lg
              bg-gray-500
              py-4
              min-w-9
              rounded-b-lg rounded-tl-lg
              z-40
            "
          >
            <div
              class="
                text-sm
                block
                py-half-4
                px-5
                mr-5
                whitespace-no-wrap
                text-gray-900
                uppercase
                tracking-wide
                font-bold
              "
            >
              Distribute
            </div>
            <button
              @click="
                autoDistribute = true;
                showLumsMenu = false;
              "
              :title="hasLockedLums ? 'You have LOCKED colors' : ''"
              :disabled="hasLockedLums"
              :class="[
                'block w-full text-left py-half-4 px-5 whitespace-no-wrap',
                { 'bg-gray-400 bg-opacity-75': autoDistribute },
                hasLockedLums
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
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
              class="
                mt-5
                text-sm
                block
                py-half-4
                px-5
                mr-5
                whitespace-no-wrap
                text-gray-900
                uppercase
                tracking-wide
                font-bold
              "
            >
              Presets
            </div>
            <a
              :title="hasLockedLums ? 'You have LOCKED colors' : ''"
              :class="[
                'block py-half-4 px-5 whitespace-no-wrap',
                {
                  'bg-gray-400 bg-opacity-75':
                    JSON.stringify(preset.getValues(lumsValues, lumsCount)) ==
                    JSON.stringify(lumsValues),
                },
                hasLockedLums
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
              ]"
              v-for="(preset, key) in presets"
              :href="`#${key}`"
              :key="key"
              @mouseenter="autoDistribute = false"
              @click.prevent="
                autoDistribute = false;
                showLumsMenu = false;
                setLums(preset.getValues(lumsValues, lumsCount));
              "
              ><i :class="['fa-fw mr-4', preset.icon]"></i>{{ preset.label }}</a
            >
            <div
              class="
                mt-5
                text-sm
                block
                py-half-4
                px-5
                mr-5
                whitespace-no-wrap
                text-gray-900
                uppercase
                tracking-wide
                font-bold
              "
            >
              Contrast
            </div>
            <button
              @click="
                textOverlay = !textOverlay;
                showLumsMenu = false;
              "
              :class="[
                'block w-full text-left py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75',
                { 'bg-gray-400 bg-opacity-75': textOverlay },
              ]"
            >
              <i class="fa fa-fw fa-font-case mr-4"></i>Text Overlay
            </button>
          </div>
        </div>
      </div>

      <grayscale-row
        class="mt-4 -mx-6 sm:mx-0"
        :lums="lums"
        :lums-values="lumsValues"
        :set-lums="setLums"
        :is-locked-lum="isLockedLum"
      ></grayscale-row>

      <palette-row
        class="mt-7"
        :palette="{ swatches: lums }"
        :text-overlay="textOverlay"
      ></palette-row>

      <div class="text-center justify-between md:flex md:space-x-6">
        <div>
          <button
            @click="setLumsCount(lumsCount - 1)"
            class="
              relative
              inline-block
              mt-7
              border-1 border-gray-500
              transition-all
              hover:shadow
              hover:border-gray-800
              hover:bg-gray-800
              duration-300
              rounded
              py-4
              px-5
              text-gray-600
              hover:text-white
              uppercase
              text-sm
              font-bold
              tracking-wide
            "
          >
            <i class="far fa-lg fa-minus"></i>
          </button>
          <span class="px-4 opacity-50">{{ lumsCount }} values</span>
          <button
            @click="setLumsCount(lumsCount + 1)"
            class="
              relative
              inline-block
              mt-7
              border-1 border-gray-500
              transition-all
              hover:shadow
              hover:border-gray-800
              hover:bg-gray-800
              duration-300
              rounded
              py-4
              px-5
              text-gray-600
              hover:text-white
              uppercase
              text-sm
              font-bold
              tracking-wide
            "
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
          <p class="text-sm leading-6 mt-3 w-double-10 max-w-full mx-auto">
            <span class="opacity-50">
              Max filesize:&nbsp;5MB. Upload an image to auto-generate your grayscale and colors.
            </span>

            <a
              class="
                whitespace-no-wrap
                text-gray-500
                transition-colors
                duration-300
                hover:text-gray-700
              "
              href="https://www.imgix.com/"
              target="_blank"
              title="imgix"
              >Powered by
              <img class="inline h-double-4" src="/img/imgix_logo1_small.png" alt="imgix" />
            </a>
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
            class="
              rounded-lg
              absolute
              inset-0
              z-10
              opacity-100
              hover:opacity-0
              transition-opacity
              duration-200
            "
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
      <div class="mt-6 inline-block space-x-4">
        <button
          @click="addPalette"
          class="
            border-1 border-blue-600
            transition-all
            hover:shadow
            hover:border-blue-800
            hover:bg-blue-800
            duration-300
            rounded
            py-4
            px-5
            text-blue-600
            hover:text-white
            uppercase
            text-sm
            font-bold
            tracking-wide
          "
        >
          Add A Color
        </button>
        <a
          v-if="palettes.length"
          href="#"
          class="
            border-b border-red-500
            text-red-600
            hover:text-red-700
            transition-all
            duration-200
          "
          @click="removeAll"
          >Remove All</a
        >
      </div>
      <div class="space-x-4">
        <button
          v-for="color in suggestedColors"
          @click="addSuggestedColor(color)"
          class="
            mt-4
            transition-all
            hover:shadow
            border-1
            duration-300
            h-half-8
            w-half-8
            shadow-inner
            text-white text-opacity-50
            hover:opacity-75
          "
          :style="{
            'background-color': color,
            'border-color': color,
          }"
        >
          <i class="fal fa-plus fa-sm"></i>
        </button>
      </div>
      <div class="mt-8">
        <div v-for="(palette, index) in palettes" :key="palettes.length - index" class="mt-8">
          <div class="min-h-8 md:flex justify-between items-center relative">
            <div class="absolute right-0 top-0">
              <button
                @click="togglePaletteMenu(index)"
                class="
                  text-center
                  h-7
                  my-half-6
                  rounded
                  text-xl text-blue-600
                  p-4
                  hover:opacity-75
                  focus:text-blue-900
                "
              >
                <i class="far fa-lg fa-ellipsis-h"></i>
              </button>
              <div
                v-if="shownPaletteMenu == index"
                class="
                  absolute
                  z-40
                  right-0
                  top-100
                  mr-4
                  -mt-3
                  text-left
                  shadow-lg
                  bg-gray-500
                  py-4
                  min-w-9
                  rounded-b-lg rounded-tl-lg
                  z-10
                "
              >
                <a
                  href="#"
                  @click.prevent="
                    toggleFilters(index);
                    togglePaletteMenu(index);
                  "
                  class="
                    block
                    py-half-4
                    px-5
                    whitespace-no-wrap
                    text-gray-800
                    hover:bg-gray-400 hover:bg-opacity-75
                  "
                >
                  <i class="far fa-fw fa-sliders-h mr-4"></i>Tweak Hue/Sat
                </a>
                <hr class="my-3 border-gray-600 opacity-75" />
                <a
                  href="#"
                  @click.prevent="
                    removePalette(index);
                    togglePaletteMenu(index);
                  "
                  class="
                    block
                    py-half-4
                    px-5
                    whitespace-no-wrap
                    text-red-800
                    hover:bg-gray-400 hover:bg-opacity-75
                  "
                >
                  <i class="far fa-fw fa-times mr-4"></i>Remove
                </a>
              </div>
            </div>
            <div class="h-8 leading-8 mr-8 relative">
              <button
                @click="toggleLocked(palette.hex)"
                class="
                  absolute
                  right-full
                  top-0
                  px-4
                  opacity-25
                  hover:opacity-100
                  focus:outline-none
                  focus:shadow-none
                "
                title="Adjusts grayscale to match this color"
              >
                <i
                  :class="['fa-fw', isLockedHex(palette.hex) ? 'fa fa-lock' : 'far fa-unlock']"
                ></i>
              </button>
              <hex-color-picker
                v-if="showPicker === index"
                @click.stop=""
                class="absolute bottom-full left-0 z-10"
                :color="palette.hex"
                @color-changed="palette.hex = $event.target.color"
              ></hex-color-picker>
              <button
                @click.stop="showPicker = showPicker === index ? null : index"
                class="h-half-8 w-half-8 mr-4 inline-block align-middle shadow-inner"
                :style="{ background: palette.hex }"
              ></button>
              <!-- <input
                type="color"
                :value="getPickerHex(palette.hex)"
                @input="palette.hex = $event.target.value"
                :ref="`palettePicker${index}`"
                class="leading-6 inline-block align-middle h-7 w-8 p-0 border-1 rounded bg-transparent mr-4"
              /> -->
              <input
                type="text"
                v-model="palette.hex"
                :ref="`paletteHex${index}`"
                placeholder="#000000"
                class="
                  font-mono
                  leading-6
                  inline-block
                  align-middle
                  w-9
                  mr-5
                  text-gray-600
                  hover:text-gray-800
                  py-3
                  px-0
                  text-lg
                  border-b border-gray-400 border-dashed
                  hover:border-gray-600
                  focus:border-gray-600
                  focus:shadow-none
                  relative
                  z-30
                "
              />
              <input
                type="text"
                v-model="palette.name"
                :ref="`paletteName${index}`"
                placeholder="Add label"
                class="
                  font-mono
                  leading-6
                  inline-block
                  align-middle
                  w-10
                  text-gray-600
                  hover:text-gray-800
                  py-3
                  px-0
                  text-lg
                  border-b border-gray-400 border-dashed
                  hover:border-gray-600
                  focus:border-gray-600
                  focus:shadow-none
                "
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
                  step="0.1"
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
                  step="0.1"
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
            :is-locked="isLockedHex(palette.hex)"
            :store-swatches="(swatches) => storeSwatches(swatches, palette.hex)"
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
          class="
            mt-6
            border-1 border-blue-600
            transition-all
            hover:shadow
            hover:border-blue-800
            hover:bg-blue-800
            duration-300
            rounded
            py-4
            px-5
            text-blue-600
            hover:text-white
            uppercase
            text-sm
            font-bold
            tracking-wide
          "
        >
          Export Svgs
        </button>
      </form>
      <div class="mt-8 md:flex justify-between md:space-x-7">
        <div class="space-x-5">
          <button
            :class="[
              cssTab === 'vars'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssTab = 'vars'"
          >
            CSS Variables
          </button>
          <button
            :class="[
              cssTab === 'tailwind'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssTab = 'tailwind'"
          >
            Tailwind CSS
          </button>
          <button
            :class="[
              cssTab === 'stylus'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssTab = 'stylus'"
          >
            Stylus
          </button>
          <button
            :class="[
              cssTab === 'scss'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssTab = 'scss'"
          >
            SCSS
          </button>
          <button
            :class="[
              cssTab === 'less'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssTab = 'less'"
          >
            LESS
          </button>
        </div>
        <div class="mt-5 md:mt-0 space-x-5">
          <button
            :class="[
              cssType === 'hex'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssType = 'hex'"
          >
            HEX
          </button>
          <button
            :class="[
              cssType === 'rgb'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssType = 'rgb'"
          >
            RGB
          </button>
          <button
            :class="[
              cssType === 'hsl'
                ? 'font-bold'
                : 'border-b border-gray-500 text-blue-700 hover:opacity-50',
              'mb-6 transition-all duration-200',
            ]"
            @click.prevent="cssType = 'hsl'"
          >
            HSL
          </button>
        </div>
      </div>
      <div class="bg-gray-300 rounded-lg p-6 text-gray-800 overflow-auto">
        <button
          @click="copy(tabContent)"
          class="
            relative
            z-20
            bg-gray-200
            float-right
            rounded
            border-1
            text-blue-600
            border-blue-600
            px-5
            py-4
            transition-all
            hover:shadow
            hover:border-blue-800
            hover:bg-blue-800
            hover:text-white
            duration-300
            uppercase
            text-sm
            font-bold
            tracking-wide
          "
        >
          <i :class="['fa fa-fw mr-3', copyText ? 'fa-check' : 'fa-clone']"></i
          >{{ copyText ? 'Copied!' : 'Copy' }}
        </button>
        <pre class="relative z-10">{{ tabContent }}</pre>
      </div>
    </section>
    <section class="mt-9 text-center leading-7">
      <div class="text-3xl font-bold">Have feedback?</div>
      <a
        class="
          inline-block
          mt-5
          leading-6
          sm:leading-7
          sm:mt-4
          text-xl
          sm:text-2xl
          sm:border-b-1
          border-gold-300
          transition-all
          duration-300
          text-gold-600
          hover:text-gold-500
        "
        href="mailto:feedback@grayscale.design"
      >
        <i class="fa fa-send mr-4"></i>Send us an email
      </a>
    </section>
    <section class="mt-9 rich-text" v-html="cms.content"></section>
  </div>
</template>

<script>
import 'vanilla-colorful';
import { jsonToFormData } from '../utils/forms';
import { makeQuery, getQuery } from '../utils/url';
import * as Color from '../utils/color';
import { clone } from '../utils/object';
import PaletteRow from '../components/PaletteRow';
import GrayscaleRow from '../components/GrayscaleRow';

export default {
  name: 'App',

  components: {
    PaletteRow,
    GrayscaleRow,
  },

  props: {
    cms: {
      type: Object,
      default() {
        const Statamic = window.Statamic || {};
        return Statamic.cms || {};
      },
    },
    csrf: String,
  },

  data() {
    return {
      showPicker: null,
      presets: {
        bell: {
          label: 'Bell Curve',
          icon: 'fa fa-wave-sine',
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
          icon: 'fa fa-horizontal-rule',
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
          icon: 'fa fa-moon',
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
          icon: 'fa fa-sun',
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
        tailwind: {
          label: 'Tailwind',
          icon: 'fak fa-tailwind',
          getValues(lums, count) {
            return [92.72, 85.96, 73.8, 58.76, 39.22, 24.42, 15.15, 11.44, 6.93, 4.69];
          },
        },
      },
      lums: { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
      isChoosingBase: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
      palettes: [],
      showFilters: [],
      lockedPalettes: [],
      lockedByHex: {},
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
      cssTab: 'vars',
      cssType: 'hex',
      updateUrlTimeout: 0,
      textOverlay: false,
    };
  },

  computed: {
    suggestedColors() {
      if (!this.paletteBases.length) return [];
      let hex = this.paletteBases[0];
      if (hex === '#000000') return [];
      let { r, g, b } = Color.hexToRGB(hex);
      let { h, s, l } = Color.RGBToHSL(r, g, b);
      let lum = 40; // Color.lumFromRGB(r, g, b);
      let complH = h > 179 ? h - 180 : h + 180;
      let complRGB = Color.HSLtoRGB(complH, s, Color.lightnessFromHSLum(complH, s, lum));
      let complHex = Color.RGBToHex(...Object.values(complRGB).map(Math.round));
      let tri1H = h + 120;
      if (tri1H > 359) tri1H -= 360;
      let tri1RGB = Color.HSLtoRGB(tri1H, s, Color.lightnessFromHSLum(tri1H, s, lum));
      let tri1Hex = Color.RGBToHex(...Object.values(tri1RGB).map(Math.round));
      let tri2H = h - 120;
      if (tri2H < 0) tri2H += 360;
      let tri2RGB = Color.HSLtoRGB(tri2H, s, Color.lightnessFromHSLum(tri2H, s, lum));
      let tri2Hex = Color.RGBToHex(...Object.values(tri2RGB).map(Math.round));
      let near1H = h + 60;
      if (near1H > 359) near1H -= 360;
      let near1RGB = Color.HSLtoRGB(near1H, s, Color.lightnessFromHSLum(near1H, s, lum));
      let near1Hex = Color.RGBToHex(...Object.values(near1RGB).map(Math.round));
      let near2H = h - 60;
      if (near2H < 0) near2H += 360;
      let near2RGB = Color.HSLtoRGB(near2H, s, Color.lightnessFromHSLum(near2H, s, lum));
      let near2Hex = Color.RGBToHex(...Object.values(near2RGB).map(Math.round));
      return [near2Hex, tri2Hex, complHex, tri1Hex, near1Hex].filter(
        (h) => this.paletteBases.indexOf(h) === -1,
      );
    },

    tabContent() {
      if (this.cssTab === 'tailwind') return this.cssTailwind;
      if (this.cssTab === 'vars') return this.cssVars;
      if (this.cssTab === 'scss') return this.cssScss;
      if (this.cssTab === 'stylus') return this.cssStylus;
      if (this.cssTab === 'less') return this.cssLess;
    },

    paletteBases() {
      this.updateUrl();
      return this.palettes.reduce((arr, palette) => {
        arr.push(palette.hex);
        return arr;
      }, []);
    },

    paletteNames() {
      this.updateUrl();
      return this.palettes.reduce((arr, palette) => {
        arr.push(palette.name);
        return arr;
      }, []);
    },

    paletteLabels() {
      this.updateUrl();
      return this.palettes.reduce((arr, palette) => {
        arr.push(palette.label);
        return arr;
      }, []);
    },

    paletteFilters() {
      return this.palettes.reduce((arr, palette) => {
        arr.push(palette.filters);
        return arr;
      }, []);
    },

    hasLockedLums() {
      return Object.keys(this.lockedByHex).length > 0;
    },

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
      return JSON.stringify(this.cssColors);
    },

    cssColors() {
      let colors = {};

      colors.grayscale = {
        name: 'grayscale',
        swatches: Object.keys(this.lums).reduce((obj, index) => {
          let swatch = {
            lum: this.lums[index].lum,
            rgb: this.lums[index].rgb,
            hex: Color.RGBToHex(...this.lums[index].rgb),
            hsl: Object.values(Color.RGBToHSL(...this.lums[index].rgb)),
            label: this.lums[index].label,
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
        if (name === 'grayscale') name += '-alt';

        colors[name] = Object.keys(palette.swatches).reduce(
          (obj, j) => {
            if (this.storedSwatches[palette.hex] && this.storedSwatches[palette.hex][j]) {
              obj.swatches[j] = this.storedSwatches[palette.hex][j];
            }
            return obj;
          },
          { ...palette, name, swatches: {} },
        );
      });

      return colors;
    },

    cssTailwind() {
      let colors = Object.keys(this.cssColors).reduce((obj, name) => {
        obj[name] = {};
        let swatchCount = Object.keys(this.cssColors[name].swatches).length;
        Object.keys(this.cssColors[name].swatches).forEach((i) => {
          let swatch = this.cssColors[name].swatches[i];
          let label =
            swatchCount >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(index, 10) + 1 + '00';
          obj[name][label] = this.formatSwatchColor(swatch);
        });
        return obj;
      }, {});

      let config = JSON.stringify(colors, null, '  ');
      localStorage.setItem(new Date(), config);
      return `// Grayscale Design palette: ${window.location.href}\n\n` + config;
    },

    cssVars() {
      let colors = this.cssColors;
      let css = `/* Grayscale Design palette: ${window.location.href} */\n\n:root {`;
      css += Object.keys(colors).reduce((str, name) => {
        str += '\n';
        let swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach((i) => {
          let swatch = colors[name].swatches[i];
          let label = swatchCount >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(i, 10) + 1 + '00';
          str += `  --${name}-${label}: ${this.formatSwatchColor(swatch)};\n`;
        });
        return str;
      }, '');
      css += '}';
      return css;
    },

    cssScss() {
      let colors = this.cssColors;
      let css = `// Grayscale Design palette: ${window.location.href}\n\n`;
      css += Object.keys(colors).reduce((str, name) => {
        let swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach((i) => {
          let swatch = colors[name].swatches[i];
          let label = swatchCount >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(i, 10) + 1 + '00';
          str += `$${name}-${label}: ${this.formatSwatchColor(swatch)};\n`;
        });
        str += '\n';
        return str;
      }, '');
      return css;
    },

    cssLess() {
      let colors = this.cssColors;
      let css = `// Grayscale Design palette: ${window.location.href}\n\n`;
      css += Object.keys(colors).reduce((str, name) => {
        let swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach((i) => {
          let swatch = colors[name].swatches[i];
          let label = swatchCount >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(i, 10) + 1 + '00';
          str += `@${name}-${label}: ${this.formatSwatchColor(swatch)};\n`;
        });
        str += '\n';
        return str;
      }, '');
      return css;
    },

    cssStylus() {
      let colors = this.cssColors;
      let css = `// Grayscale Design palette: ${window.location.href}\n\n`;
      css += Object.keys(colors).reduce((str, name) => {
        let swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach((i) => {
          let swatch = colors[name].swatches[i];
          let label = swatchCount >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(i, 10) + 1 + '00';
          str += `${name}-${label} = ${this.formatSwatchColor(swatch)}\n`;
        });
        str += '\n';
        return str;
      }, '');
      return css;
    },
  },

  watch: {
    paletteBases(val) {
      Object.keys(this.lockedByHex).forEach((hex) => {
        if (val.indexOf(hex) === -1) {
          this.toggleLocked(hex, false);
        }
      });
    },

    hasLockedLums(val) {
      if (!!val) this.autoDistribute = false;
    },

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
          this.lums[i] = {
            lum,
            rgb: [r, g, b],
            label: colors.length >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(i, 10) + 1 + '00',
          };
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
      // let last = this.palettes.pop();
      this.$nextTick(() => {
        // this.palettes.unshift(last);
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

        this.updateUrl();
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
    if (Object.keys(this.$route.query).length) {
      let { lums = [], palettes = [], filters = [], names = [], labels = [] } = this.$route.query;
      lums = lums
        .split(',')
        .filter((val) => !!val)
        .map(parseFloat);
      this.setLums(lums);

      let paletteBases = palettes.split(',').filter((val) => !!val);
      let namesArr = names.split(',').filter((val) => !!val);
      let labelsArr = labels.split(',').filter((val) => !!val);
      let filtersArr = filters.split(',').filter((val) => !!val);
      paletteBases.forEach((hex, i) => {
        let [hue = 0, sat = 0] = filtersArr[i].split('|');
        this.addPalette();
        this.$nextTick(() => {
          this.palettes[i].name = namesArr[i];
          this.palettes[i].hex = hex;
          this.palettes[i].filters = {
            hue,
            sat,
          };
          this.palettes[i].label = labelsArr[i];
        });
      });
    }
  },

  mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
    if (this.uploadFileUrl) this.setFromUploadFile();
  },

  beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },

  methods: {
    removeAll() {
      if (confirm('Are you sure?')) this.palettes = [];
    },

    addSuggestedColor(hex) {
      this.addPalette();
      this.$nextTick(() => {
        this.palettes[0].hex = hex;
      });
    },

    updateUrl() {
      clearTimeout(this.updateUrlTimeout);
      this.updateUrlTimeout = setTimeout(() => {
        this.$nextTick(() => {
          let query = {
            lums: this.lumsValues.map((v) => v.toFixed(2)).join(','),
            palettes: this.paletteBases.join(','),
            filters: this.paletteFilters
              .map((f) => {
                return `${f.hue}|${f.sat}`;
              })
              .join(','),
            names: this.paletteNames.join(','),
            labels: this.paletteLabels.join(','),
          };
          if (JSON.stringify(query) !== JSON.stringify(this.$route.query)) {
            this.$router.push({
              query,
            });
          }
        });
      }, 200);
    },

    formatSwatchColor(swatch) {
      if (this.cssType === 'hex') return swatch.hex;
      if (this.cssType === 'rgb') return `rgb(${swatch.rgb.join(', ')})`;
      if (this.cssType === 'hsl')
        return `hsl(${swatch.hsl[0]}, ${
          swatch.hsl[1] === 0 ? 0 : swatch.hsl[1].toFixed(2)
        }%, ${swatch.hsl[2].toFixed(2)}%)`;
    },

    storeSwatches(swatches, hex) {
      this.$set(this.storedSwatches, hex, swatches);
      this.updateUrl();
    },

    dedupePalettes() {
      this.palettes.reverse();
      this.$nextTick(
        setTimeout(() => {
          this.palettes.reverse();
        }),
      );
      return;
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
            if (r <= R && r >= R) matches++;
            if (g <= G && g >= G) matches++;
            if (b <= B && b >= B) matches++;
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

    toggleLocked(hex, force = null) {
      if (this.isLockedHex(hex) || (force !== true && force === false)) {
        let lumsByPalette = Object.keys(this.lockedByHex).reduce((obj, hx) => {
          let lockedPalette = this.lockedByHex[hx];
          if (hex !== hx) {
            obj[hx] = lockedPalette;
          } else {
            let label = this.lums[lockedPalette.lumIndex].label;
            this.lums[lockedPalette.lumIndex] = {
              lum: lockedPalette.lastLum,
              rgb: this.lumToGrayscaleRGB(lockedPalette.lastLum),
              label,
            };
          }
          return obj;
        }, {});
        this.lockedByHex = lumsByPalette;
      } else {
        let lockedByHex = clone(this.lockedByHex);
        let rgb = Object.values(Color.hexToRGB(hex));
        let lum = Color.lumFromRGB(...rgb);
        let closest = Color.closestLum(this.lumsValues, lum);
        let [lumIndex] = Object.keys(closest) || [];

        if (this.isLockedLum(lumIndex)) {
          alert('This color value is already LOCKED!');
          return;
        }

        let [lastLum] = Object.values(closest) || [];
        lumIndex = parseInt(lumIndex, 10);
        let label = this.lums[lumIndex].label;
        this.lums[lumIndex] = {
          lum,
          rgb: this.lumToGrayscaleRGB(lum),
          label,
        };

        lockedByHex[hex] = {
          lumIndex,
          lastLum,
        };
        this.lockedByHex = lockedByHex;
      }
    },

    isLockedHex(hex) {
      return Object.keys(this.lockedByHex).indexOf(hex) !== -1;
    },

    isLockedLum(lumIndex) {
      return (
        Object.values(this.lockedByHex)
          .map((val) => val.lumIndex)
          .indexOf(parseInt(lumIndex, 10)) !== -1
      );
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
            palette.swatches[i].label = lums[i].label;
          } else {
            delete palette.swatches[i];
          }
        });
        let i = swatchKeys.length - 1;
        while (i < lumsCount) {
          palette.swatches[i] = { lum: lums[i].lum, label: lums[i].label };
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

    setLums(values, index = null, pos = null) {
      this.lums = values.reduce((obj, val, i) => {
        obj[i] = {
          lum: val,
          rgb: this.lumToGrayscaleRGB(val),
          label: values.length >= 10 ? (i === 0 ? 50 : i + '00') : parseInt(i, 10) + 1 + '00',
        };
        return obj;
      }, {});

      this.$nextTick(() => {
        this.adjustLums(
          index === 0 ? pos : this.lums[0].lum,
          index === this.lumsCount - 1 ? pos : this.lums[this.lumsCount - 1].lum,
          100 - pos,
          index,
        );
      });
    },

    lumToGrayscaleRGB(lum) {
      let newL = Color.lightnessFromHSLum(0, 0, lum);
      return Object.values(Color.HSLtoRGB(0, 0, newL)).map(Math.round);
    },

    adjustLums(startPos, endPos, curPos, curIndex) {
      if (!this.autoDistribute) return;
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
    },

    addPalette(ev, hex = '#000000') {
      this.palettes.unshift({
        name: '',
        swatches: clone(this.lums),
        hex,
        filters: {
          hue: 0,
          sat: 0,
        },
      });

      this.isChoosingBase = 0;

      // this.$nextTick(() => {
      //   setTimeout(() => {
      //     let [input] = this.$refs.palettePicker0 || [];
      //     if (input) input.click();
      //   }, 10);
      // });
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
      let swatchCount = Object.keys(lums).length;
      Object.keys(lums).forEach((i) => {
        let lum = lums[i];
        lum.label = swatchCount >= 10 ? (i == 0 ? '50' : i + '00') : parseInt(i, 10) + 1 + '00';
      });
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
