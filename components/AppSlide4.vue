<template
  v-if="currentSlide='slide4'"
  id="slide4"
>
  <app-slide-base
    class="slide4"
  >
    <template slot="header">
      <h2>
        <transition name="dissolve" mode="out-in" appear>
          <span>
            For project related inquiries, please reach out to our 
          </span>
        </transition>
        <span @click="changeSlide">
          Design Agent.
        </span>
      </h2>
    </template>

    <template slot="shape">
      <shape-l />
    </template>
  </app-slide-base>
</template>

<script>
import AppSlideBase from '~/components/AppSlideBase'
import ShapeL from '~/components/icons/ShapeL'

export default {
  components: {
    AppSlideBase,
    ShapeL
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

<style scoped lang="scss">
span:nth-child(2) {
  color: $black;
}
</style>
