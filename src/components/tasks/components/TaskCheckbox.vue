<template>
  <div :class="['task-container', state.isChecked ? 'checked' : '']">
    <div class="label">
      <CheckboxCustom v-model="state.isChecked" />
      <p>{{ task.title }}</p>
    </div>
    <div class="tools">
      <CrossIcon @click="state.isDelete = true" />
      <DeleteTaskModal
        :taskId="task.id!"
        :isVisible="state.isDelete"
        @close="state.isDelete = false"
      />
      <EditIcon @click="state.isEdit = true" />
      <TaskModal :task="task" :isVisible="state.isEdit" @close="state.isEdit = false" />
      <ArrowIcon />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue'

import type Task from '@/interfaces/Task'
import CheckboxCustom from '@/components/common/CheckboxCustom.vue'
import CrossIcon from '@/components/common/icons/CrossIcon.vue'
import ArrowIcon from '@/components/common/icons/ArrowIcon.vue'
import EditIcon from '@/components/common/icons/EditIcon.vue'
import { useTasksStore } from '@/stores/tasks'
import DeleteTaskModal from '@/components/task-modal/DeleteTaskModal.vue'
import TaskModal from '@/components/task-modal/TaskModal.vue'

const props = defineProps<{
  task: Task
}>()

const state = reactive({
  isChecked: props.task?.isDone ?? false,
  isDelete: false,
  isEdit: false
})

watch(
  () => state.isChecked,
  () => useTasksStore().changeTask({ ...props.task, isDone: state.isChecked })
)
</script>
<style scoped>
.task-container {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  padding: 0.1em;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 7px #11999e;
    p {
      color: #11999e;
    }
    svg {
      transform: translateY(0em);
    }
  }
}
.checked {
  color: #999;
  text-decoration-line: line-through;
  &:hover {
    p {
      color: #999;
    }
    svg {
      transform: translateY(1.5em);
    }
  }
}

.label {
  display: flex;
}
.tools {
  display: flex;
  position: relative;
  overflow: hidden;

  margin: auto 1em;
  svg {
    margin: auto 0.7em;
    height: 100%;
    width: 0.9em;

    transition: all 0.5s;
    transform: translateY(1.5em);
  }
}
</style>
