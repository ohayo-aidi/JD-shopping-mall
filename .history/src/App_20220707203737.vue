<template>
  <div class="docker">
    <span class="docker__item">
      <div class="inconfont">&#xe617;</div>
      首页
    </span>
    <span class="docker__item">
      <div class="inconfont">&#xe617;</div>
      订单
    </span>
    <span class="docker__item">购物车</span>
    <span class="docker__item">我的</span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  position: absolute;
  padding: 0 .18rem 0 .18rem;//顺时针 上 右 下 左
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  border-top: 0.01rem solid white;
  background-color: aqua;
}
.docker__item{
  flex: 1;//均分等分
  text-align: center;
}
</style>
