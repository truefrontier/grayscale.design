<template>
  <div class="Home"></div>
</template>

<script>
export default {
  name: 'Home',

  created() {
    this.$inertia.visit('/app');
  },
};
</script>

<!-- <style lang="scss" src="./Home.scss" scoped></style> -->
