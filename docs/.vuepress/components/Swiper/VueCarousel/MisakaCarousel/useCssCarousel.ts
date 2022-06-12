// css过渡方案
import { Ref } from "vue";
import { IComputedSize, IWrapperStyle } from "./useSize";
export const useCssCarousel = (
  wrapperStyle: Ref<IWrapperStyle>,
  computedSize: Ref<IComputedSize>,
  speed: Ref<number>,
  reverse: Ref<boolean>
) => {
  const start = () => {
    if (computedSize.value.offsetPx > 0) {
      console.log("==========offsetAnimate");
      offsetAnimate();
    } else if (computedSize.value.offsetPx == 0) {
      console.log("==========restartAnimate");
      restartAnimate();
    } else {
      throw new Error("offset cannot be less than zero");
    }
  };
  const offsetAnimate = () => {
    setTimeout(() => {
      if (reverse.value) {
        wrapperStyle.value.transition = `transform ${
          speed.value *
          (computedSize.value.offsetPx / computedSize.value.itemWidth)
        }ms linear`;
        wrapperStyle.value.transform = `translateX(${computedSize.value.offsetPx}px)`;
      } else {
        wrapperStyle.value.transition = `transform ${
          speed.value *
          (computedSize.value.offsetPx / computedSize.value.itemWidth)
        }ms linear`;
        wrapperStyle.value.transform = `translateX(-${computedSize.value.offsetPx}px)`;
      }
    }, 0);
  };
  const restartAnimate = async () => {
    setTimeout(() => {
      if (reverse.value) {
        wrapperStyle.value.transition = `transform ${speed.value}ms linear`;
        wrapperStyle.value.transform = `translateX(${
          computedSize.value.offsetPx + computedSize.value.itemWidth
        }px)`;
      } else {
        wrapperStyle.value.transition = `transform ${speed.value}ms linear`;
        wrapperStyle.value.transform = `translateX(-${
          computedSize.value.offsetPx + computedSize.value.itemWidth
        }px)`;
      }
    }, 0);
  };
  const toOrigin = () => {
    if (reverse.value) {
      wrapperStyle.value.transition = `transform 0ms linear`;
      wrapperStyle.value.transform = `translateX(${computedSize.value.offsetPx}px)`;
    } else {
      wrapperStyle.value.transition = `transform 0ms linear`;
      wrapperStyle.value.transform = `translateX(-${computedSize.value.offsetPx}px)`;
    }
  };
  return {
    start,
    offsetAnimate,
    restartAnimate,
    toOrigin,
  };
};
