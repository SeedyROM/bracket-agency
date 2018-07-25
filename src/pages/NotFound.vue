<template>
  <div>
    <h1 class="title is-2">Page Not Found</h1>
    <h3 class="subtitle is-3"><em>This isn't the page you're looking for...</em></h3>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/theme.scss';
@import '@/styles/_typography.scss';

div {
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-grow: 2;
}
.title {
  margin-top: -1.88em;
}
.title, .subtitle {
  color: #f3f3f3;
  font-family: $brand-display-font;
}
</style>
