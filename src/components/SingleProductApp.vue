<template>
    <div class="card">
        {{ product.name }} - {{ product.price }}
        <section v-if="product.isOnCart" class="quantity">
            <button @click="removeOne()"> - </button>
            <span>{{ product.quantity }}</span>
            <button @click="addOne()"> + </button>
        </section>
        <button v-if="!product.isOnCart" @click="addToCart()">Adicionar</button>
        <button v-if="product.isOnCart" @click="removeFromCart()">Remover</button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart() {
            this.$store.commit('addProductCart', this.product);
        },
        removeFromCart() {
            this.$store.commit('removeProduct', this.product);
        },
        addOne() {
            this.$store.commit('addQuantity', this.product);
        },
        removeOne() {
            this.$store.commit('removeQuantity', this.product);
        },
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
    max-width: 18rem;
    width: 100%;
}

button {
    cursor: pointer;
    width: 5rem;
    background-color: white;
    color: #60B983;
    border: none;
    margin: 0 10px;
}

.quantity{
    margin: 10px 0;
}
.quantity button{
    width: 1.5rem;
    font-weight: bold;
}

</style>