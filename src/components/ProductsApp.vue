<template>
    <div>
        <h1>Products</h1>
        <SingleProductApp 
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"/>

    </div>
    <section class="cart">
        <h1>Cart</h1>
        <SingleProductApp
        v-for="product in $store.state.cart"
        :key="product.id"
        :product="product"/>
    </section>

</template>

<script>
import SingleProductApp from './SingleProductApp.vue';

export default {
    components: { SingleProductApp }
}
</script>

<style scoped>

div{
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>