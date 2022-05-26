<template>
  <div>
    <div class=''>
      <div class='perview-slides-layer'>
        <div class="multi-slide-container--linear swiper-no-swiping" ref="swiperPerview">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item, index) in 6' :key='index'>
              <div class='content'>
                <img class='image ignore-zoom' :src="getImage(index)" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
const swiperPerview = ref(null)
const init = () => {

  if (!swiperPerview.value) return
  new Swiper(swiperPerview.value, {
    loop: true,
    speed: 3000, // 控制过渡时间
    spaceBetween: 20,
    slidesPerView: 'auto',
    loopedSlides: 6, // 其并不会影响实际loop的slide数量的拷贝
    loopAdditionalSlides: 6, // 好像也没啥影响?
    freeMode: true,
    autoplay: {
      delay: 0, // 取消停顿
      disableOnInteraction: true,
    },
    noSwiping: true,// 同时添加swiper-no-swiping禁止鼠标拖动
  });
};
</script>

<style scoped lang="scss">
.perview-slides-layer {
  $w: 100px;
  $h: 150px;

  width: 100%;
  overflow: hidden;
  border: 1px solid gray;

  .multi-slide-container--linear {
    width: 100%;
    height: $h;
    border-radius: 10px;
    overflow: hidden;

    .swiper-wrapper {
      -webkit-transition-timing-function: linear !important;
      -moz-transition-timing-function: linear !important;
      -ms-transition-timing-function: linear !important;
      -o-transition-timing-function: linear !important;
      transition-timing-function: linear !important;
      margin: 0 auto !important;

      .swiper-slide {
        border-radius: 10px;
        overflow: hidden;
        width: $w;

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
}
</style>
