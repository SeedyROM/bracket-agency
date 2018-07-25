<template>
  <div id="page">
    <navbar />
    <slide-x-right-transition
      :duration="200"
      mode="out-in">
      <router-view v-if="showing" />
    </slide-x-right-transition>
  </div>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar,
    SlideXRightTransition,
  },
  data() {
    return {
      showing: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showing = true
    }, 400)
  },
}
</script>

<style lang="scss">
@import '@/styles/site.scss';
</style>
