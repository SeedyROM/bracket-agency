<template>
  <div id="test">
    <div id="counter">
      <h1 class="title is-1">Counter</h1>
      <div id="count">{{ $store.state.count }}</div>
      <button
        class="button is-info is-rounded"
        @click="$store.dispatch('increment')"
      >
        Increment me!
      </button>
      <button
        class="button is-info is-rounded"
        @click="$store.dispatch('decrement')"
      >
        Decrement me?
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

#test {
  color: white;
  padding: 1em;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;

  #counter {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #count {
    line-height: 1.2;
    margin-bottom: 0.25em;
    padding: 1em;
    width: 250px;
    height: 250px;
    font-size: 80px;
    text-align: center;
    border-radius: 100%;
    background: $primary;
  }

  .title.is-1 {
    color: #fff;
  }

  button {
    margin-bottom: 1.5em;
  }
}
</style>
