<template>
  <transition name="showContent" mode="out-in">
    <section
      v-if="showContent"
      class="content"
    >
      <!-- <transition name="fade" mode="out-in" appear> -->
      <!-- <div -->
      <!-- v-if="circle" -->
      <!-- class="circle-line" -->
      <!-- /> -->
      <!-- </transition> -->

      <transition name="fadeShape" mode="out-in" appear>
        <div
          v-if="circle"
          class="shape-container"
        >
          <shape-t />
        </div>
      </transition>

      <!-- <transition name="fade" mode="out-in" appear> -->
      <!-- <div class="triangle-line" /> -->
      <!-- </transition> -->

      <transition name="fadeSlower" mode="out-in" appear>
        <app-title
          v-if="tlvd"
          title="Tel Aviv Digital"
        />
      </transition>

      <transition name="fade" mode="out-in" appear>
        <h2 v-if="slide1">
          Our goal is to get the world talking, staring, interacting and most importantly, remembering <span>your brand</span>.
        </h2>
      </transition>

      <h2>
        <!-- Tel Aviv Digital is a creative communications agency, which specializes in developing branded advertising and interactive experiences. -->
      </h2>

      <div class="wrapper">
        <p class="left">
          <!-- Each year, Tel Aviv Digital accepts a limited number of projects with progressive clients who understand the value of design and aesthetics.  -->
        </p>

        <p class="right">
          <!-- For project related inquiries, please reach out to our business agent. -->
        </p>
      </div>
    </section>
  </transition>
</template>

<script>
import AppTitle from '~/components/AppTitle'
import ShapeT from '~/components/icons/ShapeT'

export default {
  components: {
    AppTitle,
    ShapeT
  },
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tlvd: false,
      slide1: false,
      slide2: false,
      slide3: false,
      circle: false
    }
  },
  mounted() {
    this.circle = true
    this.slide1 = true
    this.tlvd = true
    // setTimeout(() => (this.init = false), 6800)
  }
}
</script>

<style scoped lang="scss">
.content {
  right: 0;
  position: absolute;
  transform: translateX(0%);
  width: 100%;
  height: 100%;
  background: $black;
  background: $red;
  // padding: 100px 6%;
  z-index: 5;
  // &.animate {
  //   right: 0%;
  // }
  @include lg {
    width: 62%;
    transform: translateX(0%);
  }
  @include xl {
    // right: 0%;
    width: 50%;
    transform: translateX(0%);
  }
}

.shape-container {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 50%;
  // overflow: hidden;
}

.shape-t {
  position: absolute;
  width: 62%;
  display: block;
  margin: 0 19%;
  stroke: rgba($brand, 0.66);
  stroke-width: 2px;
  fill: none;
  // transform: rotate(-111deg);
  // padding: 20px;
}

h2 {
  opacity: 1;
  width: 62%;
  margin: 0 0 0 60px;
  position: absolute;
  @include fp(font-size, 15, 20);
  top: 40%;
  transform: translateY(-40%);
  transition: all 0.222s ease-out;
  span {
    display: inline-block;
  }
}

p {
  @include fp(font-size, 14, 17);
  color: $brand-alt;
}
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
