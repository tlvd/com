<template>
  <div>
    <app-slide-base
      v-show="slide1"
      class="slide1">
      <template slot="header">
        <h2>Our goal is to get the world talking, staring, interacting and most importantly, remembering <span @click="updateSlide">your brand</span></h2>
      </template>

      <template slot="shape">
        <shape-t />
      </template>
    </app-slide-base>
    
    <app-slide-base
      v-show="slide2"
      class="slide2"
    >
      <template slot="header">
        <h2>Tel Aviv Digital is a creative communications agency, which specializes in developing branded advertising and interactive experiences.</h2>
      </template>

      <template slot="shape">
        <shape-t />
      </template>
    </app-slide-base>

    <app-slide-base
      v-show="slide3"
      class="slide3"
    >
      <template slot="header">
        <h2>Each year, Tel Aviv Digital accepts a limited number of projects with progressive clients who understand the value of design and aesthetics.</h2>
      </template>

      <template slot="shape">
        <shape-t />
      </template>
    </app-slide-base>

    <app-slide-base
      v-if="slide4"
      class="slide4"
    >
      <template slot="header">
        <h2>For project related inquiries, please reach out to our business agent.</h2>
      </template>

      <template slot="shape">
        <shape-t />
      </template>
    </app-slide-base>
  </div>
</template>

<script>
import AppSlideBase from '~/components/AppSlideBase'
import ShapeT from '~/components/icons/ShapeT'

export default {
  components: {
    AppSlideBase,
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
      slide1: true,
      slide2: false,
      slide3: false,
      slide4: false
    }
  },
  methods: {
    updateSlide(e) {
      this.slide1 = false
      this.slide2 = true
    }
  }
}
</script>

<style lang="scss">
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
  transform: rotate(-111deg);
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
    // position: absolute;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
