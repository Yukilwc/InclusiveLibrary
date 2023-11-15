// vue指令，控制el-table表头吸顶，但是不支持动态变化高度
// 定义一个函数，用于获取元素到屏幕顶端的距离
export function getElementTop(el) {
  // 如果元素有offsetParent属性，说明它不是根元素
  if (el.offsetParent) {
    // 递归地获取祖先元素的offsetTop，并加上当前元素的offsetTop
    return getElementTop(el.offsetParent) + el.offsetTop;
  }
  // 如果元素没有offsetParent属性，说明它是根元素
  else {
    // 直接返回当前元素的offsetTop
    return el.offsetTop;
  }
}

const stickyElTableHeader = {
  bind(el, binding, vnode) {
    console.log("==========stickyElTableHeader bind 调用");
    setTimeout(() => {
      let containerId = binding.arg || "homeContentWrapper";
      var container = document.getElementById(containerId);
      var header = el.querySelector(".el-table__header-wrapper");
      console.log("==========container", container,getElementTop(container));
      console.log("==========header", header,getElementTop(header));
      header.style.position = "relative";
      header.style.zIndex = "11";
      var offsetTop = getElementTop(header) - getElementTop(container);
      function stickyElTableHeaderHandleScroll() {
        // 获取当前的滚动位置
        var scrollTop = container.scrollTop;
        // 判断是否达到吸顶条件
        if (scrollTop >= offsetTop) {
          // 改变表头的transform属性
          header.style.transform =
            "translateY(" + (scrollTop - offsetTop) + "px)";
        } else {
          // 恢复表头的transform属性
          header.style.transform = "";
        }
      }
      container.addEventListener("scroll", stickyElTableHeaderHandleScroll);
      el.stickyElTableHeaderHandleScroll = stickyElTableHeaderHandleScroll;
    }, 0);
  },
  update() {
    console.log("==========stickyElTableHeader update 调用");
  },
  inserted() {
    console.log("==========stickyElTableHeader insert 调用");
  },
  unbind(el, binding) {
    console.log("==========stickyElTableHeader unbind 调用");
    let containerId = binding.arg || "homeContentWrapper";
    var container = document.getElementById(containerId);
    // 获取之前绑定的滚动事件处理函数
    var stickyElTableHeaderHandleScroll = el.stickyElTableHeaderHandleScroll;
    // 移除滚动事件监听器
    container.removeEventListener("scroll", stickyElTableHeaderHandleScroll);
  }
};

export { stickyElTableHeader };
