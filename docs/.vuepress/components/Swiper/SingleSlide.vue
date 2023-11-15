<template>
  <div>
    <div class="single-slide-container" ref="singleSlideRef">
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
// import { onMounted, ref } from "vue";
// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
// import "swiper/swiper-bundle.min.css"
// Swiper.use([Autoplay])
// const getImage = (index) => {
//   return new URL(`./images/${index}.png`, import.meta.url).href
// }
// onMounted(() => {
//   init()
// });
// const singleSlideRef = ref(null)
// const init = () => {
//   if (!singleSlideRef.value) return
//   new Swiper(singleSlideRef.value, {
//     loop: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: false,
//       reverseDirection: false,
//     }
//   });
// };
</script>

<style scoped lang="scss">
.single-slide-container {
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
