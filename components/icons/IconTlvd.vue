<template>
  <svg
    :width="width" 
    :height="height" 
    :aria-labelledby="iconName" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 201 512 111" 
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 512
    },
    height: {
      type: [Number, String],
      default: 111
    },
    iconColor: {
      type: String,
      default: 'transparent'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
