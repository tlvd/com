<template>
  <div class="outer">    
    <section class="azrieli" />
    <section class="azrieli-circle" />

    <icon-tlvd
      :class="{animate: showContent}"
      class="logo"
      width="172px" 
      height="37px" 
      icon-color="transperant"
    >
      <icon-tlvd-child />
    </icon-tlvd>
  </div>
</template>

<script>
// import Icon from '~/components/icons/Icon'
import IconTlvd from '~/components/icons/IconTlvd'
import IconTlvdChild from '~/components/icons/IconTlvdChild'

export default {
  components: {
    IconTlvd,
    IconTlvdChild
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
.outer {
  position: absolute;
  @extend .flex;
  width: 100%;
  height: 100%;
}

.logo {
  position: absolute;
  z-index: -1;
  fill: $black;
  width: 172px;
  // height: 172px * 0.21511628;
  // height: calc(width);
  @include fp(width, 80, 200);
  opacity: 1;
  transition: opacity 3.666s ease-in-out;
  &.animate {
    opacity: 0;
  }
}

.azrieli {
  position: absolute;
  width: 100%;
  height: 100%;
  @extend .background-image;
}

.azrieli-circle {
  @extend .background-image;
  position: absolute;
  width: 100%;
  height: 100%;
  // z-index: 10;
  clip-path: circle(28% at center);
  transform: rotate(0deg);
  @include animation(animateCircle, 120s, 0s, linear, infinite, none, hidden);
  @include md {
    clip-path: circle(26% at center);
  }
  @include xx {
    clip-path: circle(24% at center);
  }
}

// Keyframes Animations
@keyframes animateCircle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
