<template>
  <div class="container">

    <transition name="fadeShape" mode="out-in" appear>
      <div class="shape-container">
        <!-- <shape-t /> -->
        <slot name="shape" />
      </div>
    </transition>

    <transition name="fade" mode="out-in" appear>
      <!--       <h2>
      Our goal is to get the world talking, staring, interacting and most importantly, remembering <span>your brand</span>.
      </h2> -->
      <slot name="header" />
    </transition>
  </div>
</template>

<script>
// import ShapeT from '~/components/icons/ShapeT'
export default {
  components: {
    // ShapeT
  }
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
}
.slide1 {
  background: $red;
}
.slide2 {
  background: $black;
}
.slide3 {
  background: $brand-alt;
}
.slide4 {
  background: $white;
}
</style>
