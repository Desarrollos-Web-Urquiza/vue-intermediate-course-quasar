<script setup lang="ts">
import { ref } from 'vue';


const selectedValue = ref('');

</script>

<template>
    <q-btn-toggle toggle-color="primary" push spread v-model="selectedValue" :options="[
        {label: 'All', value: ''},
        {label: 'Open', value: 'open'},
        {label: 'Closed', value: 'closed'},

    ]"/> 
   
</template>


<style scoped>

</style>