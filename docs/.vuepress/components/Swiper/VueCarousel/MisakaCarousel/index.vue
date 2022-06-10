<template>
  <div class="misaka-carousel-container" ref="container"
    :style="[{ opacity: dataReady ? '1' : '0' }, { height: `${computedSize.containerHeight}px` }]">
    <div :style="wrapperStyle" class='misaka-carousel-wrapper' ref="wrapper" @transitionend="endHandle">
      <div class="misaka-carousel-item" v-for="(item, index) in (additionalSlides + 1)" :key="index"
        :style="[{ paddingRight: `${itemRight}` }]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, reactive, ref, toRefs, nextTick } from 'vue';
import { useCssCarousel } from './useCssCarousel';
import { useFPSCarousel } from './useFPSCarousel';
import { useSize } from './useSize';

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
  mode: {
    type: String,
    default: 'css' // css fps
  }
});
const container = ref<HTMLElement>()
const wrapper = ref<HTMLElement>()
const { additionalSlides, itemRight, speed, offset, reverse, mode } = toRefs(props)


const { wrapperStyle, calcAllSize, resetWrapperStyle, computedSize } = useSize(offset, additionalSlides, reverse)
// ============================================================ transition 版本 START
const cssMode = useCssCarousel(wrapperStyle, computedSize, speed, reverse)
const fpsMode = useFPSCarousel(wrapperStyle, computedSize, speed, reverse)
const dataReady = ref(false)


onMounted(async () => {
  start()
})
const start = async () => {
  dataReady.value = false
  resetWrapperStyle()
  await calcAllSize(container, wrapper)
  console.log('==========size', computedSize.value)
  dataReady.value = true
  if (mode.value === 'css') {
    console.log('==========css mode',)
    cssMode.start()
  }
  else {
    console.log('==========fps mode',)
  }
}

const endHandle = (e) => {
  console.log('==========end handle ', e)
  if (mode.value === 'css') {
    if (e.propertyName === 'transform') {
      console.log('重启')
      cssMode.toOrigin()
      cssMode.restartAnimate()
    }
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
    position: absolute;
    top: 0px;

    .misaka-carousel-item {
      flex: 0 0 auto;
      // display: inline-block;
    }
  }
}
</style>