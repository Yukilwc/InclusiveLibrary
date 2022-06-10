// js帧动画过渡方案
import { Ref } from "vue";
import { IComputedSize, IWrapperStyle } from "./useSize";
class FPSAnimate {
  x0 = 0;
  x1 = 300;
  totalTime = 3000;
  x = 0;
  currentTime = 0;
  startTime = undefined;
  callback = (x: number) => {};
  animate = async () => {
    return new Promise(async (resolve, reject) => {
      const step = async (timestamp) => {
        // console.log('==========step',)
        if (this.startTime === undefined) {
          this.startTime = timestamp;
        }
        const elapsedTime = timestamp - this.startTime;
        const ratio = elapsedTime / this.totalTime;
        this.x = Math.round(this.x0 + (this.x1 - this.x0) * ratio);
        // console.log('==========this.x', this.x)
        if (this.x - this.x0 >= this.x1 - this.x0) {
          // console.log('==========finished',)
          this.x = this.x1;
          this.callback(this.x);
          resolve(this.x);
        } else {
          // console.log('==========to loop step',)
          this.callback(this.x);
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    });
  };

  constructor() {}
  static getFrameTime = async () => {
    console.log("==========getFrameTime start");
    // let now = performance.now()
    return new Promise((resolve, reject) => {
      window.requestAnimationFrame((e) => {
        // console.log('==========requestAnimationFrame', e - now)
        window.requestAnimationFrame((e2) => {
          // console.log('==========requestAnimationFrame2', e2 - e)
          resolve(e2 - e);
        });
      });
    });
  };
}
// let frameTime = await FPSAnimate.getFrameTime();
// let ani = new FPSAnimate();
// ani.callback = (x) => {
//   console.log("==========ani callback", x);
// };
// console.log("==========start ani", ani);
// await ani.animate();
// console.log("==========end ani");

export const useFPSCarousel = (
  wrapperStyle: Ref<IWrapperStyle>,
  computedSize: Ref<IComputedSize>,
  speed: Ref<number>,
reverse:Ref<boolean>
) => {
  return {};
};
