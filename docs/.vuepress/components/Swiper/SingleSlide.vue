<template>
  <div>
    <div class="single-slide-container" id="SingleSlide">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, index) in 6' :key='index'>
          <div class='content'>
            <img class='image ignore-zoom' :src="getImage(index)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/swiper-bundle.min.css"
const getImage = (index) => {
  return new URL(`./images/${index}.png`, import.meta.url).href
}
onMounted(() => {
  init()
});
const init = () => {
  new Swiper("#SingleSlide", {
    loop: true
  });
};
</script>

<style scoped lang="scss">
.single-slide-container {
  $w: 400px;
  $h: 600px;
  width: $w;
  height: $h;
  overflow: hidden;

  .swiper-wrapper {
    .swiper-slide {
      .content {
        width: $w;
        height: $h;

        .image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
