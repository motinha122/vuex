<template>
  <div class="hello">
    <h1 v-if="!isLogged">Login on about page</h1>
    <h1 v-if="isLogged">You are logged as<br>
    {{ $store.state.user.name }} {{ $store.state.user.email }}</h1>
    <ProductsApp/>
  </div>
</template>

<script>
import ProductsApp from './ProductsApp.vue';

export default {
    name: "HelloWorld",
    computed: {
        isLogged() {
            return this.$store.state.isLogged;
        }
    },
    components: { ProductsApp }
}
</script>

<style scoped>

</style>
