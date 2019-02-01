<template>
  <div class="app-title">
    <h1>{{ title }}<span>&#8482;</span></h1>
  </div>
</template>

<script>
export default {
  // name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'Page Title'
    }
  }
}
</script>

<style scoped lang="scss">
.app-title {
  position: absolute;
  width: 72%;
  top: 70%;
  transform: translateY(-70%);
}

h1 {
  // max-width: 88%;
  font-weight: 400;
  @include fp(font-size, 16, 22);
  margin: 0;
  // transform: translateY(0px);
  opacity: 0;
  transition: all 0.222s ease-out;
  transition-delay: 0s;
  // @include fp(margin-bottom, 26, 58);
  // margin-left: 0;
  // margin-bottom: 58px;
}

.msg1 h1 {
  @include fp(font-size, 14, 18);
}

span {
  position: relative;
  left: 2px;
  @include fp(font-size, 8, 14);
  @include fp(bottom, 8, 14);
}

.animate {
  h1 {
    // transform: translateY(0px);
    opacity: 1;
    transition: opacity 1.666s ease-out;
    transition-delay: 2.666s;
  }
}
</style>
