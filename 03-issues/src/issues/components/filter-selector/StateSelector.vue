<script setup lang="ts">
import { ref } from 'vue';
import { useIssuesStore } from 'src/stores/issues';

const issuesStore = useIssuesStore();

</script>

<template>
    <q-btn-toggle toggle-color="primary" push spread v-model="issuesStore.state" :options="[
        {label: 'All', value: ''},
        {label: 'Open', value: 'open'},
        {label: 'Closed', value: 'closed'},

    ]"/> 
   
</template>


<style scoped>

</style>