<template>
    <div>
        <h1>Products</h1>
        <SingleProductApp 
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"/>
    </div>

    <h1>Cart - Total {{ cartTotal }}</h1>
    <section class="cart">
        <SingleProductApp
        v-for="product in $store.state.cart"
        :key="product.id"
        :product="product"/>
    </section>

</template>

<script>
import SingleProductApp from './SingleProductApp.vue';

export default {
    computed: {
        cartTotal() {
            return this.$store.getters.cartTotal
        }
    },
    components: { SingleProductApp }
}
</script>

<style scoped>

div{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

</style>