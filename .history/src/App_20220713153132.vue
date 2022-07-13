<template>
  <!-- 顶部层 -->
  <div class="wrapper">
    <div class="position">
      <span></span>
      深圳大学生活区东区2栋
      <span></span>
    </div>
  </div>
  <!-- //docker层 -->
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont icon-home"></div>
      <div class="title">home</div>
    </span>
    <span class="docker__item">
      <div class="iconfont icon-cart"></div>
      <div class="title">cart</div>
    </span>
    <span class="docker__item">
      <div class="iconfont icon-order"></div>
      <div class="title">order</div>
    </span>
    <span class="docker__item">
      <div class="iconfont icon-my"></div>
      <div class="title">my</div>
    </span>
  </div>
</template>

<style lang="scss">
.wrapper
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
  &__item {
    flex: 1; //均分等分
    text-align: center;
    .iconfont {
      margin: 0.04rem 0 0.01rem 0;
      font-size: 0.25rem;
    }
    .title {
      font-size: 0.1rem;
    }
    &--active {
      color: aqua;
    }
  }
}
</style>
