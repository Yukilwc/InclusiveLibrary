import { next } from "dom7";
import { Ref, ref, nextTick } from "vue";
export interface IComputedSize {
  containerHeight: number;
  wrapperWidth: number;
  containerWidth: number;
  itemWidth: number;
  offsetPx: number;
}
export interface IWrapperStyle {
  transition: string;
  transform: string;
  left: string;
  right: string;
  width: string;
}

export const useSize = (
  offset: Ref<string>,
  additionalSlides: Ref<number>,
  reverse: Ref<boolean>
) => {
  const wrapperStyle = ref({
    transition: ``,
    transform: ``,
    // left: reverse.value ? "" : offset.value,
    // right: reverse.value ? offset.value : "",
    left: offset.value, // 初始状态用来计算基础偏移
    right: "",
    width: ``,
  });
  const computedSize = ref<IComputedSize>({
    containerHeight: 0,
    wrapperWidth: 0,
    containerWidth: 0,
    itemWidth: 0,
    offsetPx: 0,
  });
  const calcAllSize = async (
    container: Ref<HTMLElement>,
    wrapper: Ref<HTMLElement>
  ) => {
    computedSize.value.containerWidth =
      container.value.getBoundingClientRect().width;
    computedSize.value.containerHeight =
      wrapper.value.getBoundingClientRect().height;
    let itemNode = wrapper.value.querySelector(".misaka-carousel-item");
    computedSize.value.itemWidth = itemNode.getBoundingClientRect().width;
    computedSize.value.wrapperWidth =
      computedSize.value.itemWidth * (additionalSlides.value + 1);
    wrapperStyle.value.width = `${computedSize.value.wrapperWidth}px`;
    computedSize.value.offsetPx = wrapper.value.offsetLeft;
    console.log("==========wrapper.value.offsetLeft", wrapper.value.offsetLeft);
    // 设定初始偏移
    wrapperStyle.value.left = reverse.value
      ? ""
      : `${computedSize.value.offsetPx}px`;
    wrapperStyle.value.right = reverse.value
      ? `${computedSize.value.offsetPx}px`
      : "";
  };
  const resetWrapperStyle = () => {
    wrapperStyle.value = {
      transition: ``,
      transform: ``,
      left: offset.value, // 初始状态用来计算基础偏移
      right: "",
      width: ``,
    };
  };
  return { wrapperStyle, calcAllSize, resetWrapperStyle, computedSize };
};
