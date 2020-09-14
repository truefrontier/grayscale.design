<template>
  <div class="DefaultLayout leading-6 container mx-auto text-gray-800">
    <h1 class="text-3xl font-bold leading-9">
      grayscale <span class="text-gray-500">design</span>
    </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<!-- <style lang="scss" src="./DefaultLayout.scss" scoped></style> -->
