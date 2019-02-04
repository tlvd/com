<template>
  <svg
    class="shape shape-t"
    width="100%"
    height="100%"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle cx="256" cy="256" r="250" />
    </g>
  </svg>
</template>

<style scoped lang="scss">
.shape-t {
  position: absolute;
  width: 62%;
  display: block;
  margin: 0 19%;
  stroke: rgba($brand, 0.33);
  stroke-width: 2px;
  fill: none;
  transform: rotate(-90deg);
  // padding: 20px;
}
// svg {
//   cursor: pointer;
// }
</style>
