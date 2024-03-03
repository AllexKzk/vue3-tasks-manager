<template>
  <transition name="modal-dropdown">
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-container">
        <h2>{{ title }}</h2>
        <span class="split" />
        <div class="modal-content">
          <slot></slot>
          <div class="buttons-footer">
            <ButtonCustom @click="close" variant="outlined" title="Close" />
            <ButtonCustom style="margin-left: 0.5em" @click="ok" title="Ok" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import ButtonCustom from './ButtonCustom.vue'

defineProps({
  isVisible: Boolean,
  title: String
})

const emit = defineEmits(['close', 'ok'])

const close = () => {
  emit('close')
}

const ok = () => {
  emit('ok')
  close()
}
</script>
<style scoped>
.split {
  background: #999;
  opacity: 0.5;
  height: 1px;
}

.buttons-footer {
  display: flex;
  justify-content: space-around;
}

.modal-overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 105%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;

  h2 {
    color: #11999e;
    margin: 0.5em auto;
  }
}

.modal-content {
  padding: 1em;
  transition: transform 0.3s ease;
}

.close-button {
  margin-top: 1em;
  cursor: pointer;
}

.modal-dropdown-enter-active,
.modal-dropdown-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.modal-dropdown-enter-from,
.modal-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.modal-dropdown-enter-to,
.modal-dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
