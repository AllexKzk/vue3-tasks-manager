<template>
  <div class="textarea-container">
    <label v-if="label" for="textarea"> {{ label }} </label>
    <textarea id="textarea" v-model="value" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  label: { type: String, required: false }
})

const value = defineModel({ type: String, required: true })
</script>
<style scoped>
.textarea-container {
  display: flex;
  flex-direction: column;
  padding: 1em;

  label {
    color: #999;
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }

  textarea {
    resize: none;
    border: 1px solid #11999e;
    font-size: 1.2em;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border: 1px solid #11999e;
      box-shadow: 0 0 4px #30e3ca;
    }
  }
}
</style>
