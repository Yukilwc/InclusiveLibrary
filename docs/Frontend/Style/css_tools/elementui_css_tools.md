# elementui样式覆盖工具

## el-table自定义样式

## el-table设置fiexed时滚动条遮盖问题

```less
// 处理固定表头滚动条遮盖问题
.handle-fixed-table-scroll-bar-cover {
  &.el-table {
    .el-table__fixed,
    .el-table__fixed-right,
    .el-table__fixed-left {
      height: auto !important;
      bottom: 10px;
      // &:before {
      //   display: none;
      // }
    }
  }
}

```