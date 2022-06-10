import { Ref, ref } from "vue";
export interface IComputedSize {
  wrapperWidth: number;
  containerWidth: number;
  itemWidth: number;
  offsetPx: number;
}
export interface IWrapperStyle {
  transition: string;
  transform: string;
  left: string;
  width: string;
}

export const useSize = (offset: Ref<string>, additionalSlides: Ref<number>) => {
  const wrapperStyle = ref({
    transition: ``,
    transform: ``,
    left: offset.value,
    width: ``,
  });
  const computedSize = ref<IComputedSize>({
    wrapperWidth: 0,
    containerWidth: 0,
    itemWidth: 0,
    offsetPx: 0,
  });
  const calcAllSize = (
    container: Ref<HTMLElement>,
    wrapper: Ref<HTMLElement>
  ) => {
    if (container.value) {
      computedSize.value.containerWidth =
        container.value.getBoundingClientRect().width;
    }
    if (wrapper.value) {
      let itemNode = wrapper.value.querySelector(".misaka-carousel-item");
      if (itemNode) {
        computedSize.value.itemWidth = itemNode.getBoundingClientRect().width;
      }
      computedSize.value.wrapperWidth =
        computedSize.value.itemWidth * (additionalSlides.value + 1);
      computedSize.value.offsetPx = wrapper.value.offsetLeft;
      wrapperStyle.value.width = `${computedSize.value.wrapperWidth}px`;
    }
  };
  const resetWrapperStyle = () => {
    wrapperStyle.value = {
      transition: ``,
      transform: ``,
      left: offset.value,
      width: ``,
    };
  };
  return { wrapperStyle, calcAllSize, resetWrapperStyle, computedSize };
};
