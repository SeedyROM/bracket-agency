<template>
  <div id="content">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
@import '@/styles/site.scss';
</style>
