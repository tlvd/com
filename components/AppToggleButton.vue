<template>
  <div
    :class="{animate: showContent}"
    class="app-toggle-button"
    @click="toggle"
  >
    <icon-arrow
      class="open"
    />
    <icon-arrow
      class="close"
    />
  </div>
</template>

<script>
import IconArrow from '~/components/icons/IconArrow'

export default {
  components: {
    IconArrow
  },
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$root.$emit('toggle-content')
    }
  }
}
</script>

<style scoped lang="scss">
.app-toggle-button {
  position: fixed;
  top: 0;
  right: 0;
  width: 55px;
  height: 33px;
  background: darken($red, 0);
  cursor: pointer;
  z-index: 1000;
  overflow: hidden;
  // transition: right 0.666s cubic-bezier(0.62, 0.03, 0.11, 0.96);
  svg {
    fill: $brand;
    position: absolute;
    top: 12px;
    transition: right 0.666s cubic-bezier(0.62, 0.03, 0.11, 0.96);
    &.open {
      right: 10px;
    }
    &.close {
      right: -80px;
      transform: rotate(180deg);
    }
  }
  &.animate {
    // right: calc(50% - 55px);
    svg.open {
      right: 80px;
    }
    svg.close {
      right: 10px;
    }
  }
}
</style>
