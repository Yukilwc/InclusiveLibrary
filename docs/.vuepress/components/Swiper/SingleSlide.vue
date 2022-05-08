<template>
  <div>
    <div class=""></div>
    <div class="" id="SingleSlide">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
// core version + navigation, pagination modules:
import Swiper from "swiper/swiper-bundle.js";
// import Swiper and modules styles
import "swiper/swiper-bundle.min.css"
onMounted(() => {
    init()
});
const init = () => {
  new Swiper("#SingleSlide", {});
};
</script>

<style scoped lang="scss"></style>
