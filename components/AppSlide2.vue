<template id="slide2">
  <app-slide-base
    class="slide2"
  >
    <template slot="header">
      <h2>
        Tel Aviv Digital is a
        <span>
          creative communications 
        </span>
        agency, which specializes in developing branded advertising and interactive experiences.
      </h2>
    </template>

    <template slot="shape">
      <shape-t @click.native="changeSlide" />
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

<style lang="scss">
</style>
