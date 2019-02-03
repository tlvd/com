<template
  id="slide4"
  v-if="currentSlide='slide4'"
>
  <app-slide-base
    class="slide4"
  >
    <template slot="header">
      <h2>For project related inquiries, please reach out to our <span @click="changeSlide">business agent</span>.</h2>
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

<style lang="scss">
</style>
