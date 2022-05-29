<template>
  <div class="misaka-carousel-container" ref="container">
    <div class='misaka-carousel-wrapper' ref="wrapper">
      <div class="misaka-carousel-item" :ref="`item${index}`" v-for="(item, index) in (additionalSlides + 1)" :key="index"
        :style="[{ 'margin-right': marginRight }]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps({
  additionalSlides: {
    type: Number,
    default: 3,
  },
  marginRight: {
    type: String,
    default: '0px'
  }
});
const container = ref<Element>()
const wrapper = ref<Element>()
const item0 = ref<Element>()
const { additionalSlides } = toRefs(props)
const itemWidth = ref(0)
const wrapperWidth = ref(0)
const containerWidth = ref(0)
const calcAllSize = () => {
  if (container.value) {
    containerWidth.value = container.value.getBoundingClientRect().width
  }
  if (wrapper.value) {
    wrapperWidth.value = wrapper.value.getBoundingClientRect().width
  }
  
  if(item0.value) {
    console.log('==========',item0.value)
  }
}
onMounted(() => {
  calcAllSize()
})
</script>

<style scoped lang="scss">
.misaka-carousel-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;

  .misaka-carousel-wrapper {
    white-space: nowrap;
    // display: flex;
    // flex-wrap: nowrap;
    width: auto;
    display: inline-block; // 使得自身宽度为子元素撑开宽度

    .misaka-carousel-item {
      // flex: 0 0 auto;
      display: inline-block;
    }
  }
}
</style>