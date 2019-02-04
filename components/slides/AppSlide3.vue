<template id="slide3">
  <app-slide-base
    class="slide3"
  >
    <template slot="header">
      <h2>
        <transition name="dissolve" mode="out-in" appear>
          <span>
            Each year, Tel Aviv Digital accepts a limited number of projects with progressive clients who understand the value of 
          </span>
        </transition>
        <span @click="changeSlide">
          design and aesthetics.
        </span>
      </h2>
    </template>

    <template slot="shape">
      <shape-t />
    </template>
  </app-slide-base>
</template>

<script>
import AppSlideBase from '~/components/slides/AppSlideBase'
import ShapeT from '~/components/shapes/ShapeT'

export default {
  components: {
    AppSlideBase,
    ShapeT
  },
  mounted() {
    this.$root.$emit('update-colors')
  },
  destroyed() {
    this.$root.$emit('update-colors')
  },
  methods: {
    changeSlide() {
      this.$root.$emit('change-slide')
    }
  }
}
</script>

<style scoped ang="scss">
</style>
