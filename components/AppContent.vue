<template>
    <section
      :class="{animate: showContent}"
      class="content"
    >

      <div class="circle-line" />

      <app-title
        title="Tel Aviv Digital"
      />

      <!-- <app-title -->
        <!-- class="" -->
        <!-- title="Our goal is to get the world talking, staring, blogging and most importantly, remembering your brand." -->
      <!-- /> -->

      <h2>
        Our goal is to get the world talking, staring, blogging and most importantly, remembering your brand.
      </h2>

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
</template>

<script>
import AppTitle from '~/components/AppTitle'

export default {
  components: {
    AppTitle
  },
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
// .circle-line {
//   width: 28%;
//   height: 28%;
//   background: $red;
// }
.content {
  // @extend .flex;
  position: absolute;
  right: -100%;
  width: 100%;
  height: 100%;
  background: $black;
  background: $red;
  padding: 100px 6%;
  z-index: 5;
  transition: right 0.666s cubic-bezier(0.62, 0.03, 0.11, 0.96);
  &.animate {
    right: 0%;
    // transition: right 1.333s cubic-bezier(1, 0, 0, 1);
  }
  // @include md {
  //   width: 88%;
  // }
  @include lg {
    right: -62%;
    width: 62%;
  }
  @include xl {
    right: -50%;
    width: 50%;
  }
}

.msg1 h1 {
  font-size: $h1;
}

.animate {
  h2 {
    // transform: translateY(0px);
    opacity: 1;
    transition: opacity 1.666s ease-out;
    transition-delay: 0.666s;
  }
}

h2 {
  opacity: 0;
  width: 62%;
  position: absolute;
  @include fp(font-size, 15, 20);
  // font-weight: 400;
  margin-bottom: 34px;
  top: 15%;
  transform: translateY(-15%);
  transition: all 0.222s ease-out;
}

p {
  @include fp(font-size, 14, 17);
  color: $brand-alt;
}
.wrapper {
  display: flex;
  p {
    // @include fp(font-size, 16, 22);
    // color: $brand;
  }
}

.left {
  flex: 0 0 50%;
  // margin-right: 7%;
}

.right {
  flex: 1;
}
</style>
