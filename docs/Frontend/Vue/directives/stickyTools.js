import { getElementTop } from "@/utils/tools";
// export function stickyELT(el, containerId = "homeContentWrapper", time = 0) {
//   setTimeout(() => {
//     console.log("==========stickyElTableHeader bind 调用");
//     // 移除滚动事件监听器 防止重复挂载
//     unStickyELT(el, containerId);
//     // if (el.stickyElTableHeaderHandleScroll) {
//     //   container.removeEventListener(
//     //     "scroll",
//     //     el.stickyElTableHeaderHandleScroll
//     //   );
//     // }
//     // setTimeout(() => {
//     var container = document.getElementById(containerId);
//     var header = el.querySelector(".el-table__header-wrapper");
//     console.log("==========container", container, getElementTop(container));
//     console.log("==========header", header, getElementTop(header));
//     header.style.position = "relative";
//     header.style.zIndex = "11";
//     var offsetTop = getElementTop(header) - getElementTop(container);
//     function stickyElTableHeaderHandleScroll() {
//       // 获取当前的滚动位置
//       var scrollTop = container.scrollTop;
//       // 判断是否达到吸顶条件
//       if (scrollTop >= offsetTop) {
//         // 改变表头的transform属性
//         header.style.transform =
//           "translateY(" + (scrollTop - offsetTop) + "px)";
//       } else {
//         // 恢复表头的transform属性
//         header.style.transform = "";
//       }
//     }
//     container.addEventListener("scroll", stickyElTableHeaderHandleScroll);
//     stickyElTableHeaderHandleScroll();
//     el.stickyElTableHeaderHandleScroll = stickyElTableHeaderHandleScroll;
//   }, time);
// }

// export function unStickyELT(el, containerId = "homeContentWrapper") {
//   console.log("==========stickyElTableHeader unbind 调用");
//   var container = document.getElementById(containerId);
//   // 获取之前绑定的滚动事件处理函数
//   var stickyElTableHeaderHandleScroll = el.stickyElTableHeaderHandleScroll;
//   if (stickyElTableHeaderHandleScroll) {
//     // 移除滚动事件监听器
//     container.removeEventListener("scroll", stickyElTableHeaderHandleScroll);
//   }
// }

//
class SingleSticky {
  id = null;
  containerEl = null;
  header = null;
  offsetTop = 0; // 触发吸顶的距离
  callback = () => {
    // console.log("==========sticky callback", this.id, scrollTop);
    // 判断是否达到吸顶条件
    if (this.containerEl.scrollTop >= this.offsetTop) {
      // 改变表头的transform属性
      this.header.style.transform =
        "translateY(" + (this.containerEl.scrollTop - this.offsetTop-1) + "px)";
    } else {
      // 恢复表头的transform属性
      this.header.style.transform = "";
    }
  };
  constructor() {}
  init = ({ vueComponentInstance, tableEl, destroyFunc, containerEl }) => {
    this.id = Symbol();
    this.containerEl = containerEl;
    this.header = tableEl.querySelector(".el-table__header-wrapper");
    this.header.style.position = "relative";
    this.header.style.zIndex = "11";
    this.offsetTop =
      getElementTop(this.header) - getElementTop(this.containerEl);
    // 监听销毁
    vueComponentInstance.$on("hook:destroyed", () => {
      console.log("==========组件销毁：", this.id);
      destroyFunc(this.id);
    });
    return this;
  };
  // 重新计算距离
  update = () => {
    this.offsetTop =
      getElementTop(this.header) - getElementTop(this.containerEl);
    this.callback();
  };
}

// 使用方法:
// 构建
// this.$sq = new StickyELTQueue()
// this.singleSticky = this.$sq.create(this,this.$refs.tableRef.$el)
// 更新距离
// this.singleSticky.update()
export class StickyELTQueue {
  // 回调方法队列
  queue = [];
  containerId = "homeContentWrapper";
  containerEl = null;
  constructor() {}
  scrollHandle = () => {
    this.queue.forEach(item => item.callback());
  };
  create = (vueComponentInstance, tableEl) => {
    // 监听滚动
    if (!this.containerEl) {
      this.containerEl = document.getElementById(this.containerId);
      this.containerEl.addEventListener("scroll", this.scrollHandle);
    }
    // 队列注册一个吸顶实例
    let ss = new SingleSticky().init({
      containerEl: this.containerEl,
      vueComponentInstance: vueComponentInstance,
      tableEl: tableEl,
      destroyFunc: this.destroy
    });
    this.queue.push(ss);
    console.log("==========create finished", this);
    return ss;
  };
  tickCreate = (vueComponentInstance, tableEl) => {
    setTimeout(() => {
      this.create(vueComponentInstance, tableEl);
    }, 0);
  };
  destroy = id => {
    console.log("==========调用destroy方法", id);
    this.queue = this.queue.filter(item => item.id != id);
    if (this.queue.length <= 0) {
      this.containerEl.removeEventListener("scroll", this.scrollHandle);
      this.containerEl = null;
    }
    console.log("==========destroy finished", this);
  };
}
