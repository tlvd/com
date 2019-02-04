<template>
  <transition name="showContent" mode="out-in">
    <section
      v-if="showContent"
      :class="{invert: dayTime}"
      class="fs content"
    >
      <transition name="fadeSlower" mode="out-in" appear>
        <app-title
          v-if="showContent"
          title="Tel Aviv Digital"
        />
      </transition>

      <app-slides />

      <!-- <h2> -->
      <!-- Tel Aviv Digital is a creative communications agency, which specializes in developing branded advertising and interactive experiences. -->
      <!-- </h2> -->

      <!-- <div class="wrapper"> -->
      <!-- <p class="left"> -->
      <!-- Each year, Tel Aviv Digital accepts a limited number of projects with progressive clients who understand the value of design and aesthetics.  -->
      <!-- </p> -->

      <!-- <p class="right"> -->
      <!-- For project related inquiries, please reach out to our business agent. -->
      <!-- </p> -->
      <!-- </div> -->
    </section>
  </transition>
</template>

<script>
import AppTitle from '~/components/AppTitle'
import AppSlides from '~/components/AppSlides'

export default {
  components: {
    AppTitle,
    AppSlides
  },
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dayTime: false
    }
  },
  created() {
    this.$root.$on('update-colors', this.updateColors)
  },
  methods: {
    updateColors() {
      this.dayTime = !this.dayTime
    }
  }
}
</script>

<style lang="scss">
.content {
  right: 0;
  position: absolute;
  transform: translateX(0%);
  width: 100%;
  height: 100%;
  z-index: 3;
  @include lg {
    width: 62%;
  }
  @include xl {
    width: 50%;
  }
}
// .content {
//   background: $black;
//   background: $red;
// }

// p {
//   @include fp(font-size, 14, 17);
//   color: $brand-alt;
// }
// .wrapper {
//   display: flex;
//   p {
//     // @include fp(font-size, 16, 22);
//     // color: $brand;
//   }
// }

// .left {
//   flex: 0 0 50%;
//   // margin-right: 7%;
// }

// .right {
//   flex: 1;
// }
</style>
