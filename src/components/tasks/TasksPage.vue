<template>
  <ButtonCustom class="back" @click="backHome" variant="outlined pill">
    <ArrowIcon />
  </ButtonCustom>
  <div class="page-container">
    <TaskModal />
    <h2 style="margin: 0.5em auto">Tasks:</h2>
    <div class="dates-container">
      <TaskBar @change="updateFilters" />
      <AccordionCustom v-for="[day, tasks] in Object.entries(schedule)" :key="day" :title="day">
        <div v-for="task in tasks" :key="task.id" class="tasks-container">
          <TaskCheckbox :task="task" />
        </div>
      </AccordionCustom>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

import TaskModal from '../task-modal/TaskModal.vue'
import AccordionCustom from '@/components/common/AccordionCustom.vue'

import { useTasksStore } from '../../stores/tasks'
import type Task from '@/interfaces/Task'
import TaskCheckbox from './components/TaskCheckbox.vue'
import TaskBar from './components/TaskBar.vue'
import ButtonCustom from '../common/ButtonCustom.vue'
import ArrowIcon from '../common/icons/ArrowIcon.vue'
import router from '@/router'

const tasksStore = useTasksStore()

const state = reactive({ tasks: tasksStore.tasks })

const schedule = computed(() => {
  const days: { [day: string]: Task[] } = {}
  state.tasks.forEach((task: Task) => {
    if (days?.[task.due]) {
      days[task.due].push(task)
    } else {
      days[task.due] = [task]
    }
  })
  return days
})

const updateFilters = (filters: { name: string; date: Date | undefined }) => {
  state.tasks = tasksStore.tasks.filter(
    (task: Task) =>
      (!filters.name || task.title === filters.name) &&
      (!filters.date || task.due === filters.date.toString())
  )
}

const backHome = () => {
  router.push('/')
  router.go(1)
}
</script>
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  width: 100%;
}
.dates-container {
  display: flex;
  margin: 0.5em auto;
  width: 50%;
  flex-direction: column;
}
.tasks-container {
  margin: 0.5em 0;
}
.back {
  position: absolute;
  top: 2em;
  left: 2em;
  svg {
    height: 1em;
    width: 1em;
    transform: rotate(100grad);
    filter: invert(63%) sepia(59%) saturate(6705%) hue-rotate(152deg) brightness(90%) contrast(87%);
  }
  &:hover {
    svg {
      filter: invert(100%) sepia(0%) saturate(7497%) hue-rotate(40deg) brightness(94%) contrast(91%);
    }
  }
}
</style>
