<template>
  <div>
    <div class=''>
      <div class=''>定宽</div>
      <div class=''>overflow不设置hidden实现</div>
      <div class="multi-slide-container" ref="swiperRef">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item, index) in 6' :key='index'>
            <div class='content'>
              <img class='image ignore-zoom' :src="getImage(index)" />
            </div>
          </div>
        </div>
      </div>
      <div class=''>swiper设置slide数量实现</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/swiper-bundle.min.css"
Swiper.use([Autoplay])
const getImage = (index) => {
  return new URL(`./images/${index}.png`, import.meta.url).href
}
onMounted(() => {
  init()
});
const swiperRef = ref(null)
const init = () => {
  if (!swiperRef.value) return
  new Swiper(swiperRef.value, {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      reverseDirection: false,
    }
  });
};
</script>

<style scoped lang="scss">
.multi-slide-container {
  $w: 400px;
  $h: 600px;
  width: $w;
  height: $h;
  overflow: hidden;
  border-radius: 24px;

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
