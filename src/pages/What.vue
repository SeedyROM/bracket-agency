<template>
  <div id="about">
    <div
      id="what"
      class="content">
      <h1 class="title is-1">{{ $t('copy.whatAreWe.header') }}</h1>
      <p>
        {{ $t('copy.whatAreWe.body') }}
      </p>
    </div>
    <div
      id="us"
      class="content">
      <h1 class="title is-1">{{ $t('copy.whoAreWe.header') }}</h1>
      <p>
        {{ $t('copy.whoAreWe.body') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/styles/theme.scss';
  @import '@/styles/_globals.scss';
  @import '@/styles/_typography.scss';

  $what-background: darken($primary, 10%);
  $us-background: desaturate(darken($turquoise, 15%), 20%);

  h1, h2, h3, h4, h5 {
    letter-spacing: 3px;
    color: $white !important;
    font-family: $brand-display-font;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid #f3f3f3;
    text-transform: uppercase;
  }

  .title.is-1 {
    @include fluid-type($min-screen-width, $max-screen-width, 20px, 40px);
  }

  #about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;

    & > div {
      margin-bottom: 0;
      padding-bottom: 3em;
    }

    @media only screen and (max-width: $tablet-breakpoint) {
      display: block;
    }
  }

  #what {
    background: $what-background;
  }

  #us {
    background: $us-background;
  }

  p {
    color: #FFF;
    @include fluid-type($min-screen-width, $max-screen-width, 14px, 18px);
  }
</style>
