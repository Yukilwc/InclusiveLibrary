<template>
  <div class="misaka-carousel-container" ref="container">
    <div :style="wrapperStyle" class='misaka-carousel-wrapper' ref="wrapper" @transitionend="endHandle">
      <div class="misaka-carousel-item" v-for="(item, index) in (additionalSlides + 2)" :key="index"
        :style="[{ paddingRight: `${itemRight}` }]">
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
  itemRight: {
    type: String,
    default: '0px'
  },
  speed: {
    type: Number,
    default: 3000
  },
  offset: {
    type: String,
    default: '0px'
  },
  reverse: {
    type: Boolean,
    default: false
  },
});
const container = ref<HTMLElement>()
const wrapper = ref<HTMLElement>()
const { additionalSlides, itemRight, speed, offset, reverse } = toRefs(props)
const itemWidth = ref(0)
const wrapperWidth = ref(0)
const containerWidth = ref(0)
const offsetPx = ref(0)
const wrapperStyle = ref({
  transition: ``,
  transform: ``,
  left: offset.value,
  width: ``
})
const calcAllSize = () => {
  if (container.value) {
    containerWidth.value = container.value.getBoundingClientRect().width
  }
  if (wrapper.value) {
    let itemNode = wrapper.value.querySelector('.misaka-carousel-item')
    if (itemNode) {
      itemWidth.value = itemNode.getBoundingClientRect().width
    }
    wrapperWidth.value = (itemWidth.value) * (additionalSlides.value + 1)
    offsetPx.value = wrapper.value.offsetLeft
    wrapperStyle.value.width = `${wrapperWidth.value}px`
  }
}


// ============================================================ transition 版本 START

onMounted(async () => {
  start()
})
const start = () => {
  wrapperStyle.value = {
    transition: ``,
    transform: ``,
    left: offset.value,
    width: ``
  }
  calcAllSize()
  if (offsetPx.value > 0) {
    console.log('==========offsetAnimate',)
    offsetAnimate()
  }
  else if (offsetPx.value == 0) {
    console.log('==========restartAnimate',)
    restartAnimate()
  }
  else {
    throw new Error('offset cannot be less than zero')
  }
}
const offsetAnimate = () => {
  setTimeout(() => {
    wrapperStyle.value.transition = `transform ${speed.value * (offsetPx.value / itemWidth.value)}ms linear`
    wrapperStyle.value.transform = `translateX(-${offsetPx.value}px)`
  }, 0);
}
const restartAnimate = async () => {
  setTimeout(() => {
    wrapperStyle.value.transition = `transform ${speed.value}ms linear`
    wrapperStyle.value.transform = `translateX(-${offsetPx.value + itemWidth.value}px)`
  }, 0);
}
const endHandle = (e) => {
  console.log('==========end handle ', e)
  if (e.propertyName === 'transform') {
    console.log('重启')
    wrapperStyle.value.transition = `transform 0ms linear`
    wrapperStyle.value.transform = `translateX(-${offsetPx.value}px)`
    restartAnimate()
  }
}
const pause = () => {

}
defineExpose({
  start
})

// ============================================================  transition 版本  END


// ============================================================ animation 版本 START
// ============================================================  animation 版本  END

</script>

<style scoped lang="scss">
.misaka-carousel-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  .misaka-carousel-wrapper {
    white-space: nowrap;
    width: auto;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    // display: inline-block; // 使得自身宽度为子元素撑开宽度
    // position: absolute;
    // top: 0px;
    // left: 0px;

    .misaka-carousel-item {
      flex: 0 0 auto;
      // display: inline-block;
    }
  }
}
</style>