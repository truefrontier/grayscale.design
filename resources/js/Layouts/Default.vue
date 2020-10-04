<template>
  <div class="DefaultLayout leading-6 container mx-auto px-6 text-gray-900">
    <div class="sm:flex my-8 items-center justify-between">
      <inertia-link
        href="/"
        class="mr-5 text-3xl leading-7 sm:text-4xl text-gray-900 whitespace-no-wrap font-bold inline-block tracking-tight"
      >
        <strong class="text-gray-900">grayscale <span class="text-gray-500">design</span></strong>
      </inertia-link>
      <div class="block mt-6 sm:mt-0">
        <inertia-link
          href="/app"
          class="font-bold inline-block mt-3 leading-6 text-xl text-blue-600 transition-colors duration-300 hover:text-blue-500"
        >
          <i class="fad fa-palette mr-4"></i>Color Palette Generator
        </inertia-link>
      </div>
    </div>
    <slot></slot>
    <footer class="mt-8 py-7 text-gray-800">
      A design-friendly dev project from
      <a
        href="https://truefrontierapps.com"
        class="transition-all duration-200 border-b border-gray-500 inline-block hover:opacity-50"
        >True Frontier</a
      >. &copy; Copyright
      {{ new Date().getFullYear() === 2020 ? 2020 : `2020-${new Date().getFullYear()}` }}. All
      rights reserved.
      <p class="mt-3 text-sm opacity-75">
        <i class="fa fa-bullhorn" data-fa-transform="flip-h rotate-30"></i> With help from
        <a
          class="transition-all duration-200 border-b border-gray-500 inline-block hover:opacity-75"
          href="https://www.simeongriggs.dev/"
          target="_blank"
          rel="noopener"
          >simeonGriggs</a
        >
        and his
        <a
          class="transition-all duration-200 border-b border-gray-500 inline-block hover:opacity-75"
          href="https://tailwind.simeongriggs.dev/"
          target="_blank"
          rel="noopener"
          >TailwindCSS Palette Generator</a
        >.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<!-- <style lang="scss" src="./DefaultLayout.scss" scoped></style> -->
