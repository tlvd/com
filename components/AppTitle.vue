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
  top: 10%;
  transform: translateY(-10%);
  z-index: 33;
}

h1 {
  // max-width: 88%;
  font-weight: 400;
  transition: color 2s ease;
  @include fp(font-size, 20, 26);
  margin: 0 0 0 40px;
  @include md {
    margin: 0 0 0 60px;
  }
}

.invert h1 {
  color: $black;
}

span {
  position: relative;
  left: 2px;
  @include fp(font-size, 8, 14);
  @include fp(bottom, 8, 14);
}

// .animate {
//   h1 {
//     // transform: translateY(0px);
//     opacity: 1;
//     transition: opacity 1.666s ease-out;
//     transition-delay: 2.666s;
//   }
// }
</style>
