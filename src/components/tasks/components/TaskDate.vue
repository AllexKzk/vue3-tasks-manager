<template>
  <div :class="['date-containter', isHidden ? 'hidden' : '']">
    <div class="date-header">
      <p>{{ day }}:</p>
      <ArrowIcon @click="isHidden = !isHidden"/>
    </div>
    <span class="split" />
    <div class="tasks-container">
      <div v-for="task in tasks" :key="task.id">
        <TaskCheckbox :task="task" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type Task from '@/interfaces/Task';
import TaskCheckbox from './TaskCheckbox.vue';
import ArrowIcon from '@/components/common/icons/ArrowIcon.vue';
import { ref } from 'vue';

defineProps<{
  day: string,
  tasks: Task[]
}>()

const isHidden = ref(false)

</script>
<style scoped>
.date-containter {
  max-height: 50%;
  margin: 1em;
}

.hidden {
  .tasks-container {
    max-height: 0%;
  }
  svg {
    transform: rotate(-90deg);
  }
}

.date-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0;

  border-bottom: 1px solid #11999E;
  border-top: 1px solid #11999E;

  p {
    margin: auto 0;
    color: #11999E;
  }

  svg {
    margin: auto 1em;
    width: 1em;
    height: 1em;
  }
}

.tasks-container {
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: column;
  max-height: 90%;
  overflow-y: auto;
  transition: all 0.5s;
}
</style>