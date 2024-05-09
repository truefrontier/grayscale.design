<template>
	<div>
		<section class="mt-6">
			<div class="md:flex justify-between">
				<h1 class="mb-6 mr-5 font-bold uppercase tracking-wide">
					1. Choose your luminance
				</h1>
			</div>
			<div class="mt-7">
				<div class="flex items-center justify-between">
					<div class="font-bold">Luminance</div>
					<input ref="grayscaleLumInput" @input="setGrayscaleValue($event.target.value)" placeholder="Luminance" class="text-right font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none" type="number">
				</div>
				<input type="range" min="0" max="255" v-model="grayscaleValue" @input="setGrayscaleLum($event.target.value)" class="w-full" />
				<div class="p-5 border relative mt-5">
					<div class="z-10 absolute inset-y-0 left-0 w-1/2 bg-white"></div>
					<div class="z-10 absolute inset-y-0 left-1/2 w-1/2 bg-black"></div>
					<div class="z-20 relative w-full h-8" :style="{ backgroundColor: `rgb(${grayscaleRGB})` }"></div>
					<div class="z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono" :class="grayscaleLumComputed < 21.5 ? 'text-white' : ''">{{  `rgb(${grayscaleRGB})` }} {{ grayscaleHex }}</div>
				</div>
			</div>
		</section>

		<section class="mt-10 pb-8">
			<div class="md:flex justify-between">
				<h1 class="mb-6 mr-5 font-bold uppercase tracking-wide">
					2. Choose your hue and saturation
				</h1>
			</div>
			<div class="mt-7">
				<div class="flex items-center justify-between">
					<div class="font-bold">Hue</div>
					<input ref="hueLumInput" v-model="hueValue" placeholder="Hue" class="text-right font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none" type="number">
				</div>
				<input type="range" min="0" max="359" v-model="hueValue" @input="" class="w-full" />
				<div class="flex items-center justify-between">
					<div class="font-bold">Saturation</div>
					<input ref="satLumInput" v-model="satValue" placeholder="Saturation" class="text-right font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none" type="number">
				</div>
				<input type="range" min="0" max="100" v-model="satValue" class="w-full" />
				<div class="p-5 border relative mt-5">
					<div class="z-10 absolute inset-y-0 left-0 w-1/2 bg-white"></div>
					<div class="z-10 absolute inset-y-0 left-1/2 w-1/2 bg-black"></div>
					<div class="z-20 relative w-full h-8" :style="{ backgroundColor: `rgb(${falseRGB})` }"></div>
					<div class="z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono" :class="grayscaleLumComputed < 21.5 ? 'text-white' : ''">{{  `rgb(${falseRGB})` }} {{ falseHex }}</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { lumFromRGB, RGBFromLum, RGBToHex, falseColorGrayscale, grayscaleToFalseColor, generateFalseColorGrayscale } from '../utils/color';
import { ref, computed, onMounted, nextTick } from 'vue';

// Grayscale ---------------------
const grayscaleValue = ref(200);
const grayscaleRGB = computed(() => {
	let rgb = Math.round(grayscaleValue.value);
	return `${rgb} ${rgb} ${rgb}`;
});
const grayscaleLumInput = ref(null);
const grayscaleLumComputed = computed(() => {
	return lumFromRGB(grayscaleValue.value, grayscaleValue.value, grayscaleValue.value);
});
const grayscaleHex = computed(() => {
	return RGBToHex(grayscaleValue.value, grayscaleValue.value, grayscaleValue.value);
});

function setGrayscaleValue(lum) {
	let { r, g, b } = RGBFromLum(lum);
	grayscaleValue.value = r;
}

function setGrayscaleLum(rgb) {
	grayscaleLumInput.value.value = lumFromRGB(rgb, rgb, rgb).toFixed(2);
}

onMounted(() => {
	setGrayscaleLum(grayscaleValue.value);
})

// Hue and Saturation ---------------------

const hueValue = ref(180);
const satValue = ref(50);
const falseRGB = computed(() => {
	const {r, g, b} = RGBFromLum(grayscaleLumComputed.value, hueValue.value, satValue.value);
	return `${r} ${g} ${b}`;
});
const hueLumInput = ref(null);
const satLumInput = ref(null);
const falseHex = computed(() => {
	const [r, g, b] = falseRGB.value.split(' ').map(v => parseInt(v));
	return RGBToHex(r, g, b);
});

</script>