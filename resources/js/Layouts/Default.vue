<template>
  <div class="DefaultLayout leading-6 container mx-auto text-gray-900">
    <h1 class="text-4xl font-bold leading-10">
      grayscale <span class="text-gray-500">design</span>
    </h1>
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
