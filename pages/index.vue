<template>
  <div class="outer">
    <app-toggle-button
      :show-content="showContent"
    />

    <!-- Background Area -->
    <app-stage
      :show-content="showContent"
    />

    <!-- Content Area -->
    <app-content
      :show-content="showContent"
    />
  </div>
</template>

<script>
import AppStage from '~/components/AppStage'
import AppContent from '~/components/AppContent'
import AppToggleButton from '~/components/AppToggleButton'
// import {mapMutations} from 'vuex'

export default {
  components: {
    AppStage,
    AppContent,
    AppToggleButton
  },
  data: function() {
    return {
      showContent: false
    }
  },
  created() {
    this.$root.$on('toggle-content', this.toggleContent)
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent
    }
  }
}
</script>

<style scoped lang="scss">
.outer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
