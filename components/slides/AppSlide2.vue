<template id="slide2">
  <app-slide-base class="slide2">
    <template slot="header">
      <h2>
        <transition name="dissolve" mode="out-in" appear>
          <span>
            Tel Aviv Digital is a creative communications agency, which specializes in developing branded advertising and 
          </span>
        </transition>
        <span @click="changeSlide">
          interactive experiences.
        </span>
      </h2>
    </template>

    <template slot="shape">
      <shape-v />
    </template>
  </app-slide-base>
</template>

<script>
import AppSlideBase from '~/components/slides/AppSlideBase'
import ShapeV from '~/components/shapes/ShapeV'

export default {
  components: {
    AppSlideBase,
    ShapeV
  },
  methods: {
    changeSlide() {
      this.$root.$emit('change-slide')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
