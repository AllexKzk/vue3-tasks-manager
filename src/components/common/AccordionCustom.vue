<template>
  <button :class="['header', variant]" @click="toggleBlock">
    {{ title }}
    <ArrowIcon :style="arrowStyle" />
  </button>
  <div class="accordion" :style="accordionStyle">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import ArrowIcon from './icons/ArrowIcon.vue'

const props = defineProps({
  title: { type: String, required: true },
  variant: { type: String, default: 'primary' },
  active: { type: Boolean, default: false }
})

const state = reactive({ isOpen: props.active })

const arrowStyle = computed(() => ({
  transform: `rotate(${state.isOpen ? '-90deg' : '0deg'})`
}))

const accordionStyle = computed(() => ({
  maxHeight: state.isOpen ? '500px' : '0'
}))

const toggleBlock = () => {
  state.isOpen = !state.isOpen
}
</script>
<style scoped>
.header {
  width: 100%;
  margin: 0.2em 0;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  padding: 18px;
  text-align: left;
  outline: none;
  transition: all 0.4s;

  display: flex;
  justify-content: space-between;

  font-size: 1.2em;

  svg {
    width: 1em;
  }
}

.primary {
  background: linear-gradient(45deg, rgba(48, 227, 202, 1) 0%, rgba(17, 153, 158, 1) 70%);
  background-size: 200% 200%;
  &:hover {
    background-position: 50%;
  }
  border: none;
}

.outlined {
  border: 1px solid #11999e;
  background: none;
  color: #11999e;
  svg {
    filter: invert(52%) sepia(73%) saturate(4862%) hue-rotate(154deg) brightness(93%) contrast(87%);
  }
}

.accordion {
  background-color: white;
  max-height: 0;
  overflow: auto;
  transition: max-height 0.2s ease-out;
}
</style>
