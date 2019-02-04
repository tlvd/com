<template>
  <transition name="slide" mode="in-out" appear>
    <component :is="currentSlide" />
  </transition>
</template>

<script>
import AppSlideBase from '~/components/AppSlideBase'
// import IconArrow from '~/components/icons/IconArrow'
import AppSlide1 from '~/components/AppSlide1'
import AppSlide2 from '~/components/AppSlide2'
import AppSlide3 from '~/components/AppSlide3'
import AppSlide4 from '~/components/AppSlide4'

export default {
  components: {
    AppSlideBase,
    // IconArrow,
    AppSlide1,
    AppSlide2,
    AppSlide3,
    AppSlide4
  },
  data() {
    return {
      slide1: 'AppSlide1',
      slide2: 'AppSlide2',
      slide3: 'AppSlide3',
      slide4: 'AppSlide4',
      currentSlide: 'AppSlide1'
    }
  },
  created() {
    this.$root.$on('change-slide', this.updateSlide)
  },
  methods: {
    updateSlide() {
      if (this.currentSlide === this.slide1) {
        this.currentSlide = this.slide2
      } else if (this.currentSlide === this.slide2) {
        this.currentSlide = this.slide3
      } else if (this.currentSlide === this.slide3) {
        this.currentSlide = this.slide4
      } else {
        this.currentSlide = this.slide1
      }
    }
  }
}
</script>

<style scoped lang="scss">
.shape-container {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 50%;
  cursor: pointer;
  z-index: 2;
}
</style>
