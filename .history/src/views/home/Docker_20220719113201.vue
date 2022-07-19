<template>
  <div class="docker" v-for="(item, index) in dockerList :key="item.icon">
    <span class="docker__item docker__item--active">
      <div class="iconfont" v-h>&#xe617;</div>
      <div class="title">home</div>
    </span>
  </div>
</template>
<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe617;", title: "home" },
      { icon: "&#xe604;;", title: "cart" },
      { icon: "&#xe62a;", title: "order" },
      { icon: "&#xe78b;", title: "my" },
    ];
    return { dockerList };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/variables.scss";
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
