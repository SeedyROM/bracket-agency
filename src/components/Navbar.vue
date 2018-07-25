<template>
  <slide-y-up-transition :duration="700">
    <nav
      v-if="showing"
      class="navbar is-black"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          to="/">
          <span class="logo">
            Bracket Agency
          </span>
        </router-link>

        <a
          :class="{ 'is-active': showNav }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div
        :class="{ 'is-active': showNav }"
        class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/what">Who Are We</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
    </div></nav>
  </slide-y-up-transition>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'

export default {
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      showing: false,
      showNav: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showing = true
    }, 200)
  },
}
</script>

<style lang="scss" scoped>
  @import '@/styles/_typography.scss';
  @import '@/styles/_globals.scss';

  .navbar-burger {
    height: inherit;
  }

  .logo {
    @include fluid-type($min-screen-width, $max-screen-width, 30px, 50px);
    font-family: $brand-logo-font;
    display: inline-block;
    margin-bottom: -0.13em;
  }

  .navbar-item {
    margin-right: 1em;
  }

  .navbar-menu {
    background: #0a0a0a;
  }

  a {
    font-family: $brand-display-font;
    text-transform: uppercase;
    color: #f3f3f3;
  }

  a:hover {
    color: #ddd;
  }
</style>
