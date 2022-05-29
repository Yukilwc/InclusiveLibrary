<template>
  <div class="carousel-container">
    <div class='carousel-wrapper'>
      <div class='comp-container'>
        <MisakaCarousel :additionalSlides="10" :marginRight="20" :speed="10000" :offset="30">
          <div class='image-list'>
            <div class="item" v-for='(item, index) in 6' :key='index'>
              <img class='image ignore-zoom' :src="getImage(index)" />
            </div>

          </div>
        </MisakaCarousel>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from "vue";
import MisakaCarousel from './MisakaCarousel.vue'

const getImage = (index) => {
  return new URL(`../images/${index}.png`, import.meta.url).href
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

      .image-list {
        width: 100%;
        display: flex;
        align-items: center;
        .item {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
          .image {
            width: 100px;
            height: 200px;
            object-fit: cover;
            display: block;
          }
        }
      }

    }
  }
}
</style>