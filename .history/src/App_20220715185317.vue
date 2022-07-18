<template>
  <!-- 顶部层 -->
  <div class="wrapper">
    <div class="position">
      <span class="iconfont icon-tubiaozhizuomoban-"></span>
      深圳大学生活区东区2栋
      <span class="iconfont icon-bell"></span>
    </div>
    <!--search层和banner层-->
    <div class="search">
      <span class="iconfont icon-search"></span>
      <span class="search__text">随意输入商店名称</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="https://wx3.sinaimg.cn/mw690/008g6XFMgy1h06124hs8pj319q0u00xm.jpg"
      />
    </div>
    <!--icons层与gap层-->
    <div class="icons">
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        />
        <p class="icons__item__desc">菜市场场</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        />
        <p class="icons__item__desc">水果店铺</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        />
        <p class="icons__item__desc">鲜花市场</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png"/>

        <div class="nearby__item__content">
          <div class="nearby__item__content__title">wokao</div>
          <div class="nearby__item__content__tags">
          <span class="nearby__item__content__tag">月售10W+</span>
          <span class="nearby__item__content__tag">评价1000+</span>
          <span class="nearby__item__content__tag">好评94%</span>
          </div>
          <p class="nearby__item__content__highlight">饿了么卡会员尊享满20元减4元券（每月3张）</p>
        </div>
      </div>
    </div>
  </div>
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
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  color: $content-fontcolor;
  .icon-tubiaozhizuomoban- {
    position: relative;
    top: 0.04rem;
    font-size: 0.3rem;
  }
  .icon-bell {
    position: absolute;
    right: 0;
    top: 0.23rem;
    font-size: larger;
  }
}
.search {
  background: $content-bgColor;
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  border-radius: 0.16rem;
  color: $search-mainColor;
  .icon-search {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 30%; //图片宽度除以高度
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
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
