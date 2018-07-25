<template>
  <div>
    <h1>Hello World</h1>
    {{ $store.state.count }}
    <button @click="$store.dispatch('increment')">Inc me!</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
