<template>
  <button :class="variant">
    {{ title }}
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: false },
  variant: { type: String, default: 'primary' }
})
</script>
<style scoped>
button {
  color: white;
  font-size: 1.2em;
  background-size: 200% 200%;
  transition: all 0.5s ease;
  border: none;
  padding: 0.5em 0.7em;
  border-radius: 0.2em;
}

.primary {
  background-image: linear-gradient(90deg, rgba(48,227,202,1) 0%, rgba(17,153,158,1) 70%);
  &:hover {
    background-position: 60%;
  }
}

.outlined {
  border: 1px solid #11999E;
  color: #11999E;
  background: none;
  &:hover {
    color: white;
    border-color: none;
    background-image: linear-gradient(90deg, rgba(48,227,202,1) 0%, rgba(17,153,158,1) 70%);
  }
}
.pill {
  border-radius: 1.2em;
}

</style>