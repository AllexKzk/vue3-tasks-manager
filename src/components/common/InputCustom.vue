<template>
  <div class="input-container">
    <div class="group">      
      <input :type="type" v-model="value" required>
      <span class="highlight" />
      <span class="bar" />
      <label :class="{ active: active }"> {{ label }} </label>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  type: { type: String, default: 'text' },
  label: { type: String, required: false },
  active: { type: Boolean, default: false },
})

const value = defineModel()

</script>
<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  padding: 1em;
}
.group { 
  position: relative; 
}
input {
  font-size: 1.2em;
  display: block;
  width: 100%;
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid #757575;
}
input:focus {
  border-bottom: none;
  outline: none;
}

label {
  color: #999; 
  font-size: 1.2em;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all; 
}

input:focus ~ label, input:valid ~ label, .active {
  top: -20px;
  font-size: 1.2em;
  color: #11999E;
}

.bar 	{
  position: relative;
  display: block;
  width: 100%;
}
.bar:before, .bar:after {
  content:'';
  height: 2px; 
  width: 0;
  bottom: 1px; 
  position: absolute;
  background:#11999E; 
  transition: 0.2s ease all; 
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%; 
}

input:focus ~ .bar:before, input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  top: 25%; 
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}
</style>