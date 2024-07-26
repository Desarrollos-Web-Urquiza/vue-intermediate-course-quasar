<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

const route = useRoute();
const { id = ''} = route.params;
console.log('id', id);

</script>

<template>
  <LoaderSpinner color="white" />

  <router-link class="text-white" to="/" >Go back</router-link>

  <!-- Header -->
  <IssueCard />
    
  <!-- Comentarios -->
  <LoaderSpinner :thickness="1" size="1.5rem" :show-text="false"  />

  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>
    <IssueCard v-for="comment of 5" :key="comment" />

  </div>


</template>


<style scoped>

</style>