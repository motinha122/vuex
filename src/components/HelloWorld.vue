<template>
  <div class="hello">
    <h1 v-if="isLogged == false">Login on about page</h1>
    <h1 v-if="isLogged == true">You are logged as<br>
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
            console.log(this.$store.state.isLogged);
            return this.$store.state.isLogged;
        }
    },
    components: { ProductsApp }
}
</script>

<style scoped>

</style>
