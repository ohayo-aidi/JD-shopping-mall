<template>
  <div class="docker">
    <span class="docker__item">
      <div class="iconfont icon-home"></div>
      <div class="docker__item__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont icon-cart"></div>
      <div class="docker__item__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont icon-order"></div>
      <div class="docker__item__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont icon-my"></div>
      <div class="docker__item__title">my</div>
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem 0 0.18rem; //顺时针 上 右 下 左
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  border-top: 0.01rem solid white;
  background-color: aqua;
}
.docker__item {
  flex: 1; //均分等分
  text-align: center;
  .iconfont {
    margin: 0.06rem 0 0.01rem 0;
    font-size: .25rem;
  }
}
</style>
