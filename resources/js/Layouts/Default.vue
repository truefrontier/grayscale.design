<template>
  <div class="DefaultLayout leading-6 container mx-auto px-6 text-gray-900">
    <inertia-link
      href="/"
      class="text-4xl text-gray-900 leading-7 whitespace-no-wrap font-bold inline-block my-8 tracking-tight"
    >
      <strong>grayscale <span class="text-gray-500">design</span></strong>
    </inertia-link>
    <slot></slot>
    <footer class="mt-8 py-7 text-gray-800">
      A design-friendly dev project from
      <a
        href="https://brandnamemaker.com"
        class="border-b border-gray-500 inline-block hover:opacity-50"
        >Brandname Maker</a
      >
      &amp;
      <a
        href="https://truefrontierapps.com"
        class="border-b border-gray-500 inline-block hover:opacity-50"
        >True Frontier</a
      >. &copy; Copyright
      {{ new Date().getFullYear() === 2020 ? 2020 : `2020-${new Date().getFullYear()}` }}. All
      rights reserved.
      <p class="mt-3 text-sm opacity-75">
        📣 With help from
        <a
          class="border-b border-gray-500 inline-block hover:opacity-75"
          href="https://www.simeongriggs.dev/"
          target="_blank"
          rel="noopener"
          >simeonGriggs</a
        >
        and his
        <a
          class="border-b border-gray-500 inline-block hover:opacity-75"
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
