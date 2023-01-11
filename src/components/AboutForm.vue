<template>
    <div class="form">
        <label>Name</label>
        <input v-model="userName" type="text">
        <label>E-mail</label>
        <input v-model="userEmail" type="text">
        <br>
        <button @click="login">Update Profile</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            userEmail: ''
        }
    },
    methods: {
        login() {
            const newUser = {
                name: this.userName,
                email: this.userEmail
            }
            this.$store.commit('storeUser', newUser);
            this.$store.commit('logUser');
            console.log('Updated Successfully');
        }
    },
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 30rem;
}

button{
    cursor: pointer;
    background-color: #60B983;
    color: white;
    border: none;
    font-family: 'Jost';
}
</style>