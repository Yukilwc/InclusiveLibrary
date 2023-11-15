<template>
  <div class="table">
    <div class="th">
      <div id="fixedThead" class="tr size-controller">
        <div class="td">
          <div class="cell"></div>
        </div>
        <div class="td">
          <div class="cell"></div>
        </div>
      </div>
    </div>
    <template v-if="true">
      <div class="tb">
        <div
          v-for="(item, index) in []"
          :key="index"
          class="tr size-controller"
        >
          <div class="tr-wrapper">
            <div class="td td--custom">
              <div class="cell"></div>
            </div>
            <div class="td">
              <div class="cell"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else>空状态</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.table {
  width: 100%;
  @thHeight: 44px;
  @tbHeight: 85px;
  margin-bottom: 0;
  .top-border {
    border-radius: 12px 12px 0 0;
  }
  .bottom-border {
    border-radius: 0 0 12px 12px;
  }
  // 表头框架样式
  .th {
    width: 100%;
    height: @thHeight;
    background-color: #fff;
    .tr {
      background: #ffffff;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eef1f6;

      .td {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .cell {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px;
          font-weight: bold;
          color: #353744;
        }
      }
    }
  }
  // 表体框架样式
  .tb {
    width: 100%;
    z-index: 1;
    position: relative;
    border-radius: 12px;
    .tr {
      width: 100%;
      border-bottom: 1px solid #f0f1f4;
      position: relative;
      transition: all 0.35s;
      &:nth-last-child(1) {
        border-bottom: 0px solid #f0f1f4;
        padding-bottom: 10px;
        // height: @tbHeight+10px;
        background-color: #fff;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        .tr-wrapper {
          .bottom-border();
        }
      }
      .tr-wrapper {
        position: relative;
        transition: all 0.35s;
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        height: @tbHeight;
        .td {
          .cell {
            // width: 100%;
            // height: 100%;
          }
        }
      }
      &:hover {
        box-shadow: 0px 4px 16px 0px #e0e4ec;
        z-index: 1;
      }
    }
  }
  // 尺寸控制
  .size-controller {
    width: 100%;
    .td {
      flex: 0 0 auto;
      height: 100%;
      padding-right: 10px;

      .cell {
      }
      &:nth-child(1) {
        padding-left: 20px;
        width: 158px;
      }
      &:nth-child(2) {
        width: 119px;
      }
      &:nth-child(3) {
        width: 119px;
      }
      &:nth-child(4) {
        width: 83px+104px;
      }
      &:nth-child(5) {
        width: 35px+40px;
      }
      &:nth-child(6) {
        width: 36px+68px;
      }
      &:nth-child(7),
      &:nth-child(8),
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(11) {
        width: 44px+21px;
      }
      &:nth-child(12) {
        width: 81px+20px-6px;
      }
      &:nth-last-child(1) {
        flex: 1 1 auto;
      }
    }
  }
  // 特殊样式
  .tb {
    .td--custom {
      .cell {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
      }
    }
  }
}
</style>
