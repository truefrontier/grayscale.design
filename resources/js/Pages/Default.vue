<template>
  <div class="DefaultPage rich-text">
    <h1 class="font-black text-4xl">{{ cms.title }}</h1>
    <div v-html="cms.content"></div>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',

  props: {
    cms: {
      type: Object,
      default() {
        const Statamic = window.Statamic || {};
        return Statamic.cms || {};
      },
    },
  },
};
</script>

<!-- <style lang="scss" src="./DefaultPage.scss" scoped></style> -->
