<template>
  <div class="carousel-container">
    <div class='carousel-wrapper'>
      <div class='comp-container'>
        <MisakaCarousel :additionalSlides="10" :marginRight="'20px'">
          走马灯内容
        </MisakaCarousel>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from "vue";
import MisakaCarousel from './MisakaCarousel.vue'
const getImage = (index) => {
  return new URL(`./images/${index}.png`, import.meta.url).href
}
const carouselRef = ref(null)
</script>

<style scoped lang="scss">
.carousel-container {
  .carousel-wrapper {
    .comp-container {
      width: 600px;
      height: auto;
      border: 1px solid gray; 
      overflow: hidden;
    }
  }
}
</style>