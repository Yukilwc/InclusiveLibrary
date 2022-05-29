<template>
  <div class="carousel-container">
    <div class='carousel-wrapper'>

    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from "vue";
import MkaCarousel from './MkaCarousel.vue'
const getImage = (index) => {
  return new URL(`./images/${index}.png`, import.meta.url).href
}
const carouselRef = ref(null)
</script>

<style scoped lang="scss">

</style>