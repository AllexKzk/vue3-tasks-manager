<template>
  <input type="checkbox" v-model="value" />
</template>
<script setup lang="ts">
const value = defineModel()
</script>
<style scoped>
input {
  accent-color: #11999e;
  padding: 0.1em;
  margin: 0 0.5em;
  cursor: pointer;
}
</style>
