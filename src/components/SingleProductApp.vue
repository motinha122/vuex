<template>
    <div class="card">
        {{ product.name }} - {{ product.price }}
        <button  @click="addToCart()">Adicionar</button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    computed: {
        isInCart() {
            console.log(this.$store.state.isLogged);
            return this.$store.state.isLogged;
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addProductCart', this.product)
        },
        removeFromCart() {
            this.$store.commit('removeProduct', this.product)
        }
    },
}
</script>

<style scoped>
.card {
    background-color: #60B983;
    color: white;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 20rem;
    width: 100%;
}

button {
    cursor: pointer;
    background-color: white;
    color: #60B983;
    border: none;
    font-family: 'Jost';
}
</style>