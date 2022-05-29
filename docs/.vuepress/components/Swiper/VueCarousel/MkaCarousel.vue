<template>
  <div>
    <div class="" v-for="(item, index) in additionalSlides" :key="index">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps({
  additionalSlides: {
    type: Number,
    default: 3,
  },
});
</script>

<style scoped lang="scss">
</style>