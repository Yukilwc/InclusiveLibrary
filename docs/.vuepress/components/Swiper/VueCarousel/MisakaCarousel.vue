<template>
  <div class="misaka-carousel-container" ref="container">
    <div :style="wrapperStyle" class='misaka-carousel-wrapper' ref="wrapper" @transitionend="endHandle">
      <div class="misaka-carousel-item" v-for="(item, index) in (additionalSlides + 1)" :key="index"
        :style="[{ 'margin-right': `${marginRight}px` }]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, reactive, ref, toRefs, nextTick } from 'vue';

const props = defineProps({
  additionalSlides: {
    type: Number,
    default: 3,
  },
  marginRight: {
    type: Number,
    default: 0
  },
  speed: {
    type: Number,
    default: 3000
  },
  offset: {
    type: Number,
    default: 0
  }
});
const container = ref<Element>()
const wrapper = ref<Element>()
const { additionalSlides, marginRight, speed } = toRefs(props)
const itemWidth = ref(0)
const wrapperWidth = ref(0)
const containerWidth = ref(0)
const calcAllSize = () => {
  if (container.value) {
    containerWidth.value = container.value.getBoundingClientRect().width
  }
  if (wrapper.value) {
    let itemNode = wrapper.value.querySelector('.misaka-carousel-item')
    if (itemNode) {
      itemWidth.value = itemNode.getBoundingClientRect().width
    }
    wrapperWidth.value = (itemWidth.value+marginRight.value) * (additionalSlides.value + 1)
  }
}
const wrapperStyle = reactive({
  transition: `transform ${speed.value}ms linear`,
  transform: `translateX(0px)`
})

// ============================================================ transition 版本 START

onMounted(async () => {
  calcAllSize()
  restartAnimate()
})
const endHandle = (e) => {
  console.log('==========end handle ', e)
  if (e.propertyName === 'transform') {
    // console.log('重启')
    wrapperStyle.transition = `transform 0ms linear`
    wrapperStyle.transform = `translateX(${0}px)`
    restartAnimate()
  }
}
const restartAnimate = async () => {
  // await nextTick()
  setTimeout(() => {
    wrapperStyle.transition = `transform ${speed.value}ms linear`
    wrapperStyle.transform = `translateX(-${wrapperWidth.value / (additionalSlides.value + 1)}px)`
  }, 0);
}
// ============================================================  transition 版本  END


// ============================================================ animation 版本 START
// ============================================================  animation 版本  END

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