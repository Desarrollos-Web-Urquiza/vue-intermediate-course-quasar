<script setup lang="ts">
// import { defineProps, withDefaults } from 'vue'

interface Props {
    color?: string,
    size?: string,
    thickness?: number,
    showText?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: '3rem',
  thickness: 2,
  showText: true

})



</script>

<template>
    <div class="column items-center">
        <q-spinner :color="props.color" :size="props.size" :thickness="props.thickness" />
        <span v-if="props.showText" class="q-mt-sm">Loading</span>
    </div>

</template>


<style scoped>

</style>