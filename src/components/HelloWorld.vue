<template>
  <div class="hello">
    <h1 v-if="isLogged == false">Login on about page</h1>
    {{ $store.state.user.name }} {{ $store.state.user.email }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    isLogged() {
      console.log(this.$store.state.isLogged);
      return this.$store.state.isLogged;
    }
  }
}
</script>

<style scoped>

</style>
