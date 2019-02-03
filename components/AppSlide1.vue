<template id="slide1">
  <app-slide-base
    class="slide1"
  >
    <template slot="header">
      <h2>
        Our goal is to get the world talking, staring, interacting and most importantly, remembering <span>
          your brand
        </span>
      </h2>
    </template>

    <template slot="shape">
      <shape-t @click.native="changeSlide" />
    </template>
  </app-slide-base>
</template>

<script>
import AppSlideBase from '~/components/AppSlideBase'
// import IconArrow from '~/components/icons/IconArrow'
import ShapeT from '~/components/icons/ShapeT'

export default {
  components: {
    AppSlideBase,
    // IconArrow,
    ShapeT
  },
  methods: {
    changeSlide() {
      this.$root.$emit('change-slide')
    }
  }
}
</script>

<style lang="scss">
</style>
