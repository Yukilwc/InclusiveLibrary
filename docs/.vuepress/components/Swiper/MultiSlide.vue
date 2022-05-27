<template>
  <div>
    <div class=''>
      <div class=''>容器宽度不定,slide间距固定,设置slidesPerview实现</div>
      <div class='perview-slides-layer'>
        <div class="multi-slide-container--perview" ref="swiperPerview">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item, index) in 6' :key='index'>
              <div class='content'>
                <img class='image ignore-zoom' :src="getImage(index)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=''>容器宽度不定,slide间距固定,overflow设置hidden实现</div>
      <div class='outermost-layer'>
        <div class="multi-slide-container--hidden" ref="swiperHidden">
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
const swiperHidden = ref(null)
const swiperPerview = ref(null)
const init = () => {
  if (!swiperHidden.value) return
  new Swiper(swiperHidden.value, {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    spaceBetween: 20,
    // loopedSlides: 5,
    // loopAdditionalSlides: 5

  });
  if (!swiperPerview.value) return
  new Swiper(swiperPerview.value, {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    loopedSlides: 6,
    // slideToClickedSlide: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
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

  .multi-slide-container--perview {
    width: 100%;
    height: $h;
    border-radius: 10px;
    overflow: hidden;
    .swiper-wrapper {
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

.outermost-layer {
  $w: 100px;
  $h: 150px;

  width: 100%;
  overflow: hidden;
  border: 1px solid gray;

  .multi-slide-container--hidden {
    width: $w;
    height: $h;
    border-radius: 10px;

    .swiper-wrapper {
      .swiper-slide {
        border-radius: 10px;
        overflow: hidden;

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
