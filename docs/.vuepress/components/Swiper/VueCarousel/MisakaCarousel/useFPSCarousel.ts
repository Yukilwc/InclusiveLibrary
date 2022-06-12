// js帧动画过渡方案
import { is } from "dom7";
import { ref, Ref } from "vue";
import { IComputedSize, IWrapperStyle } from "./useSize";
class FPSAnimate {
  x0 = 0;
  x1 = 300;
  totalTime = 3000;
  x = 0;
  currentTime = 0;
  startTime = undefined;
  isActive = false;
  // isPause = false;
  callback = (x: number) => {};
  animate = async () => {
    this.isActive = true;
    return new Promise(async (resolve, reject) => {
      const step = async (timestamp) => {
        if (this.isActive === false) {
          console.log("==========FPSAnimate is set isAnimating finished");
          reject(this.x);
          return;
        }
        // if(this.isPause) {
        //   window.requestAnimationFrame(step)
        //   return
        // }
        // console.log('==========step',)
        if (this.startTime === undefined) {
          this.startTime = timestamp;
        }
        const elapsedTime = timestamp - this.startTime;
        const ratio = elapsedTime / this.totalTime;
        this.x = Math.round(this.x0 + (this.x1 - this.x0) * ratio);
        // console.log("==========this.x", this.x);
        if (Math.abs(this.x - this.x0) >= Math.abs(this.x1 - this.x0)) {
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
  init = ({
    x0 = 0,
    x1 = 300,
    totalTime = 3000,
    x = 0,
    currentTime = 0,
    startTime = undefined,
  }) => {
    this.x0 = x0;
    this.x1 = x1;
    this.totalTime = totalTime;
    this.x = x;
    this.currentTime = currentTime;
    this.startTime = startTime;
  };
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
let ani = new FPSAnimate();
export const useFPSCarousel = (
  wrapperStyle: Ref<IWrapperStyle>,
  computedSize: Ref<IComputedSize>,
  speed: Ref<number>,
  reverse: Ref<boolean>
) => {
  const start = async () => {
    if (ani.isActive) {
      ani.isActive = false;
    }
    ani = new FPSAnimate();
    ani.init({
      x0: 0,
      x1: -computedSize.value.offsetPx,
      totalTime:
        speed.value *
        (computedSize.value.offsetPx / computedSize.value.itemWidth),
    });
    ani.callback = (x) => {
      // console.log("==========ani callback", x);
      wrapperStyle.value.transform = `translateX(${x}px)`;
    };
    console.log("==========start ani", ani);
    try {
      await ani.animate();
    } catch (e) {
      console.log("==========动画强制停止", e);
      return;
    }
    console.log("==========end ani");
    doLoop();
  };
  const doLoop = async () => {
    ani.init({
      x0: -computedSize.value.offsetPx,
      x1: -computedSize.value.offsetPx - computedSize.value.itemWidth,
      totalTime: speed.value,
    });
    ani.callback = (x) => {
      // console.log("==========ani callback", x);
      wrapperStyle.value.transform = `translateX(${x}px)`;
    };
    // console.log("==========start loop ani", ani);
    try {
      await ani.animate();
    } catch (e) {
      console.log("==========动画强制停止", e);
      return;
    }
    // console.log("==========end loop ani");
    doLoop();
  };
  const pause = async (isPause: boolean) => {
    console.log("==========pause fps animate", isPause);
    // ani.isPause = !ani.isPause;
    ani.isActive = false;
    if (isPause) {
      console.log("==========", ani.x);
      return;
    }
    console.log("==========pause结束暂停");
    let currentX = ani.x;
    ani = new FPSAnimate();
    let ratio =
      1 -
      Math.abs(currentX) /
        (computedSize.value.offsetPx + computedSize.value.itemWidth);
    console.log("==========ratio", ratio);
    ani.init({
      x0: currentX,
      x1: -computedSize.value.offsetPx - computedSize.value.itemWidth,
      totalTime: speed.value * ratio,
    });
    ani.callback = (x) => {
      // console.log("==========ani callback", x);
      wrapperStyle.value.transform = `translateX(${x}px)`;
    };
    console.log("==========start ani", ani);
    try {
      await ani.animate();
    } catch (e) {
      console.log("==========动画强制停止", e);
      return;
    }
    console.log("==========end ani");
    doLoop();
  };
  return {
    start,
    pause,
  };
};
