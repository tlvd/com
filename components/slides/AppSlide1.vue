<template id="slide1">
  <app-slide-base
    class="slide1"
  >
    <template slot="header">
      <h2>
        <transition name="dissolve" mode="out-in" appear>
          <span>
            Our goal is to get the world talking, staring, interacting and most importantly, 
          </span>
        </transition>
        <span @click="changeSlide">
          remembering your brand.
        </span>
      </h2>
    </template>

    <template slot="shape">
      <shape-d />
    </template>
  </app-slide-base>
</template>

<script>
import AppSlideBase from '~/components/slides/AppSlideBase'
// import IconArrow from '~/components/icons/IconArrow'
import ShapeD from '~/components/shapes/ShapeD'

export default {
  components: {
    AppSlideBase,
    // IconArrow,
    ShapeD
  },
  methods: {
    changeSlide() {
      this.$root.$emit('change-slide')
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  font-weight: 700;
}
</style>
