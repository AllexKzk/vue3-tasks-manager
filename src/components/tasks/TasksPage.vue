<template>
  <div class="page-container">
    <TaskModal />
    <h2 style="margin: auto;">Tasks:</h2>
    <div class="dates-container">
      <TaskDate v-for="[day, tasks] in Object.entries(schedule)" :key="day" :day="day" :tasks="tasks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import TaskModal from '../task-modal/TaskModal.vue';
import TaskDate from './components/TaskDate.vue';

import { useTasksStore } from '../../stores/tasks';
import type Task from '@/interfaces/Task';

const tasksStore = useTasksStore();

const schedule = computed(() => {
  const days: { [day: string]: Task[] } = {};
  tasksStore.tasks.forEach((task: Task) => {
    if (days?.[task.due]) {
      days[task.due].push(task)
    } else {
      days[task.due] = [task]
    }
  })
  return days;
})

</script>
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
}
.dates-container {
  display: flex;
  margin: auto;
  width: 50%;
  flex-direction: column;
  margin-top: 2em;
  max-height: 90%;
  height: min-content;
  overflow-y: auto;
}
</style>