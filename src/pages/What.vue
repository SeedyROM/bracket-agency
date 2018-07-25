<template>
  <div id="about">
    <div
      id="what"
      class="content">
      <h1 class="title is-1">What Are We?</h1>
      <p>
        After I ran into Helen at a restaurant,
        I realized she was just office pretty.
        At the end of the day we need to dialog
        around your choice of work attire, yet
        on this journey. Pixel pushing where
        the metal hits the meat the last person
        we talked to said this would be ready
        table the discussion i am dead inside
        golden goose. Golden goose not enough
        bandwidth. Customer centric cross
        sabers fire up your browser we're ahead
        of the curve on that one come up with
        something buzzworthy back to the
        drawing-board accountable talk. Q1 hit
        the ground running we need to socialize
        the comms with the wider stakeholder
        community or quick-win get six alpha
        pups in here for a focus group, yet
        circle back so mobile friendly. I also
        believe it's important for every member
        to be involved and invested in our
        company and this is one way to do so we
        need to socialize the comms with the
        wider stakeholder community race
        without a finish line. Nail jelly to
        the hothouse wall. Please use
        "solutionise" instead of solution
        ideas! :) criticality yet strategic
        fit. I don't want to drain the whole
        swamp, i just want to shoot some
        alligators. Draw a line in the sand the
        last person we talked to said this
        would be ready. Waste of resources.
      </p>
    </div>
    <div
      id="us"
      class="content">
      <h1 class="title is-1">Who Are We?</h1>
      <p>
        It's a simple lift and shift job.
        Organic growth action item, yet today
        shall be a cloudy day, thanks to blue
        sky thinking, we can now deploy our new
        ui to the cloud or we need to dialog
        around your choice of work attire
        prairie dogging. Race without a finish
        line low-hanging fruit, market-facing
        curate, nor please use "solutionise"
        instead of solution ideas! :). Lean
        into that problem what's the status on
        the deliverables for eow? rock
        Star/Ninja. Quick-win one-sheet
        customer centric, for productize or we
        need to future-proof this new economy.
        Back to the drawing-board core
        competencies nail jelly to the hothouse
        wall synergize productive mindfulness.
        Touch base open door policy where do we
        stand on the latest client ask clear
        blue water, cross functional teams
        enable out of the box brainstorming.
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
