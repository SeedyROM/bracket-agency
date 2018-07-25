<template>
  <transition name="bounceDown">
    <nav
      v-if="showing"
      class="navbar is-black"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <span class="logo">
            Bracket Agency
          </span>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showing: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showing = true
    }, 500)
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
    @include fluid-type($min-screen-width, $max-screen-width, 25px, 50px);
    font-family: $brand-logo-font;
    display: inline-block;
    margin-bottom: -0.13em;
  }
</style>
