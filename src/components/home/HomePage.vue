<template>
  <main>
    <div class="nav-container">
      <h1>Welcome Home!</h1>
      <nav>
        <ButtonCustom @click="goToTasks" variant="outlined">
          All Tasks
        </ButtonCustom>
        <TaskModal />
      </nav>
      <div class="today-tasks">
        <AccordionCustom title="Tasks for today:" :active="true">
          <div v-for="task in todayTasks" :key="task.id">
            <TaskCheckbox :task="task" />
          </div>
        </AccordionCustom>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import TaskModal from '../task-modal/TaskModal.vue'
import { useTasksStore } from '@/stores/tasks'
import type Task from '@/interfaces/Task'
import AccordionCustom from '../common/AccordionCustom.vue'
import TaskCheckbox from '../tasks/components/TaskCheckbox.vue'
import ButtonCustom from '../common/ButtonCustom.vue'
import router from '@/router'

const todayTasks = computed(() =>
  useTasksStore().tasks.filter((task: Task) => task.due === new Date().toISOString().slice(0, 10))
)
const goToTasks = () => {
  router.push('/tasks');
  router.go(1);
}
</script>
<style scoped>
@import '/src/styles/_colors.css';

h1 {
  color: #30e3ca;
  background: linear-gradient(90deg, rgba(48, 227, 202, 1) 0%, rgba(17, 153, 158, 1) 70%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
.nav-container {
  margin: -20em auto;

  nav {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    a {
      margin: 0.3em auto;
      transition: all 0.3s;
    }
    a:hover {
      color: #11999e;
    }
  }
}
.today-tasks {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1em auto;
}
</style>
