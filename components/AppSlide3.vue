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
import AppSlideBase from '~/components/AppSlideBase'
import ShapeT from '~/components/icons/ShapeT'

export default {
  components: {
    AppSlideBase,
    ShapeT
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
