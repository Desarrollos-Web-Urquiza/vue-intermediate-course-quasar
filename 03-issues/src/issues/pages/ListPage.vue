<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/composables/issue-list/IssueList.vue';
import useIssues from 'src/issues/composables/useIssues';
// C:\Users\pc\Documents\htdocs\Taller\Proyectos personales\vue-intermediate-course-quasar\03-issues\src\issues\composables\useIssues.ts


const { issuesQuery } = useIssues();
  

</script>

<template>
    <div class="row q-mb-md">
        <div class="col-12">
            <span class="text-h4">GitHub Issues</span>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-4">

            <!-- TODO: Filtros -->
            <FilterSelector />
        </div>
        <div class="col-xs-12 co-md-8">
            <!-- TODO: Loader -->
            <LoaderSpinner v-if="issuesQuery.isLoading.value" color="secondary" size="5rem" :thickness="6" />

            <IssueList v-else />
        </div>
    </div>

</template>


<style scoped>

</style>