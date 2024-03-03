<template>
  <ButtonCustom
    v-if="!task"
    style="margin: 0.5em auto"
    @click="showModal = true"
    title="Add new task"
  />
  <ModalCustom :isVisible="showModal" title="Add new task" @close="close" @ok="update">
    <InputCustom label="Title:" v-model="modalState.title" />
    <TextAreaCustom label="Description:" v-model="modalState.description" />
    <InputCustom label="Date:" type="date" v-model="modalState.due" />
  </ModalCustom>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

import ButtonCustom from '@/components/common/ButtonCustom.vue'
import InputCustom from '@/components/common/InputCustom.vue'
import TextAreaCustom from '@/components/common/TextAreaCustom.vue'
import ModalCustom from '@/components/common/ModalCustom.vue'

import { useTasksStore } from '@/stores/tasks'
import type Task from '@/interfaces/Task'

const tasksStore = useTasksStore()

const emit = defineEmits(['close'])
const props = defineProps<{ task?: Task; isVisible?: boolean }>()
const modalState = reactive<Task>({
  id: props.task?.id ?? undefined,
  title: props.task?.title ?? '',
  description: props.task?.description ?? '',
  due: props.task?.due ?? new Date().toISOString().slice(0, 10)
})

const showModal = ref(props.isVisible ?? false)

const setModal = () => {
  modalState.id = props.task?.id ?? undefined
  modalState.title = props.task?.title ?? ''
  modalState.description = props.task?.description ?? ''
  modalState.due = props.task?.due ?? new Date().toISOString().slice(0, 10)
}

watch(
  () => showModal.value,
  () => {
    if (showModal.value) {
      setModal()
    }
  }
)

watch(
  () => props.isVisible,
  () => {
    showModal.value = props.isVisible
    if (props.isVisible) {
      setModal()
    }
  }
)

const update = () => {
  console.log({ ...modalState })
  if (modalState.id === undefined) {
    tasksStore.addTask(modalState)
  } else {
    tasksStore.changeTask(modalState)
  }
}

const close = () => {
  showModal.value = false
  emit('close')
}
</script>
