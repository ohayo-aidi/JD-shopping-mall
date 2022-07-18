<template>
  <!-- 顶部层 -->
  <div class="wrapper">
    
  <!-- docker层 -->
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
@import "@/style/mixins.scss";
@import "@/style/variables.scss";
.wrapper {
  overflow-y: auto; //可以沿y轴滑动
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}

.nearby {
  &__title {
    font-size: 0.18rem;
    margin: 0.16rem 0 0.02rem 0;
    font-weight: normal; //是否加粗字体
    color: $content-fontcolor;
  }
  &__item {
    display: flex; //不换行
    padding-top: 0.12rem;
    &__img {
      width: 0.6rem;
      height: 0.6rem;
      padding-right: 0.16rem;
    }
    &__content {
      padding-bottom: 0.12rem;
      border-bottom: 0.01rem solid $content-bgColor;
      //flex: 1;
      &__title {
        font-size: 0.16rem;
        line-height: 0.22rem;
        color: $content-fontcolor;
      }
      &__tags {
        margin-top: 0.08rem;
        font-size: 0.13rem;
        color: $content-fontcolor;
        line-height: 0.18rem;
      }
      &__tag {
        padding-right: 0.16rem;
      }
      &__highlight {
        padding: 0.08rem 0 0 0;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: $content-highlight;
      }
    }
  }
}
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
  color: $content-fontcolor;
}
</style>
