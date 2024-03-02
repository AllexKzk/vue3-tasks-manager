<template>
  <ModalCustom
    :isVisible="isVisible"
    title="Delete task"
    @close="close"
    @ok="deleteTask"
  >
  </ModalCustom>
</template>
<script setup lang="ts">
import ModalCustom from '@/components/common/ModalCustom.vue';

import { useTasksStore } from '@/stores/tasks.ts';

const tasksStore = useTasksStore();

const props = defineProps<{ taskId: number, isVisible: boolean }>()

const emit = defineEmits(['close'])
const close = () => emit('close')

const deleteTask = () => {
  tasksStore.removeTask(props.taskId)
  close()
}

</script>