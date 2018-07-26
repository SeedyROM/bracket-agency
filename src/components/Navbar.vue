<template>
  <slide-y-up-transition :duration="700">
    <nav
      v-if="showing"
      class="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          to="/">
          <span
            class="logo"
            @click="navbarVisible = false">
            Bracket Agency
          </span>
        </router-link>
        <a
          :class="{ 'is-active': navbarVisible }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="navbarVisible = !navbarVisible">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <slide-y-up-transition>
        <div
          :class="{ 'is-active': navbarVisible }"
          class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link
                to="/what"
                @click.native="navbarVisible = false">Who Are We</router-link>
            </div>
            <div class="navbar-item">
              <router-link
                to="/contact"
                @click.native="navbarVisible = false">Contact</router-link>
            </div>
          </div>
        </div>
      </slide-y-up-transition>
    </nav>
  </slide-y-up-transition>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import { pageLoadTime } from '../defaults'

export default {
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      showing: false,
      navbarVisible: false,
      width: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showing = true
    }, pageLoadTime)

    this.width = window.outerWidth
    window.addEventListener('resize', () => {
      this.width = window.outerWidth
    })
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
    margin-bottom: -0.132em;
  }

  .navbar-item {
    margin-right: 1em;

    &:hover, &:active {
      background-color: transparent !important;
    }
  }

  .navbar-menu.is-active {
    position: absolute;
    width: 100%;
    background: #0a0a0a;
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
