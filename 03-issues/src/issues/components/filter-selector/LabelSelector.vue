<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue' 
import useLabels from '../../composables/useLabels' 

const { labelsQuery } = useLabels();

console.log('labelsQuery', labelsQuery.data.value);

</script>

<template>
    <LoaderSpinner v-if="labelsQuery.isLoading.value" size="50px" :thickness="1" :showText="false" />

    <q-chip v-else v-for="label of labelsQuery.data.value" :key="label.id" :style="{ color: `#${label.color}` }"  outline clickable>
        {{ label.name }}
    </q-chip>

</template>


<style scoped>

</style>