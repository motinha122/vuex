<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ $store.state.user.name }} {{ $store.state.user.email }}
  </div>
</template>

<script>
export default {
  created() {
    
  }
}
</script>