<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    name: 'StaticPart'
}
</script>
<style lang="">
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
  color: $content-search-mainColor;
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
</style>