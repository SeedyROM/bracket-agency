import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    navbar: {
      whoAreWe: 'Who Are We',
      contact: 'Contact',
    },
    copy: {
      whoAreWe: {
        header: 'Who Are We',
        body: `After I ran into Helen at a restaurant,
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
        would be ready. Waste of resources.`,
      },

      whatAreWe:
      {
        header: 'What Are we',
        body: `It's a simple lift and shift job.
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
      enable out of the box brainstorming.`,
      },
    },
  },
}

export default new VueI18n({
  locale: 'en',
  messages,
})
