<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutForm/>
  </div>
</template>

<script>
import AboutForm from '@/components/AboutForm.vue';

export default {
  name: 'AboutView',
  components: { AboutForm }
}
</script>

<style scoped>
.about{
  display:flex;
  flex-direction: column;
  align-items: center;
}

</style>