<template>
  <div class="DefaultLayout leading-6 container mx-auto px-6 text-gray-900">
    <inertia-link
      href="/"
      class="text-4xl text-gray-900 leading-7 whitespace-no-wrap font-bold inline-block my-8 tracking-tight"
    >
      <strong>grayscale <span class="text-gray-500">design</span></strong>
    </inertia-link>
    <slot></slot>
    <footer class="mt-10 py-7">
      A brain-child project from
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
      >. &copy;
      {{
        new Date().getFullYear() === 2020
          ? 2020
          : `2020-${new Date().getFullYear()}`
      }}. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<!-- <style lang="scss" src="./DefaultLayout.scss" scoped></style> -->
