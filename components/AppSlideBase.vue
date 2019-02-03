<template>
  <div class="container">

    <transition name="fadeShape" mode="out-in" appear>
      <div class="shape-container">
        <slot name="shape" />
      </div>
    </transition>
    
    <transition name="fade" mode="out-in" appear>
      <slot name="header" />
    </transition>

  </div>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
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
