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
    <transition name="fadeShape" mode="out-in" appear>
      <icon-arrow
        class="next-arrow"
        @click.native="changeSlide"
      />
    </transition>
  </div>
</template>

<script>
import IconArrow from '~/components/icons/IconArrow'

export default {
  components: {
    IconArrow
  },
  methods: {
    changeSlide() {
      this.$root.$emit('change-slide')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide1 {
  background: $red;
  z-index: 5;
}
.slide2 {
  background: $black;
  z-index: 6;
}
.slide3 {
  background: $background;
  z-index: 7;
}
.slide4 {
  background: $accent;
  z-index: 8;
  .next-arrow {
    transform: rotate(0);
  }
}

.next-arrow {
  position: absolute;
  bottom: 13%;
  left: 48px;
  fill: $brand;
  transform: rotate(180deg);
  transition: all 2s ease;
  // z-index: 1000;
  cursor: pointer;
}
.invert {
  .next-arrow {
    fill: $black;
  }
}
</style>
