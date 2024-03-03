import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Task from '@/interfaces/Task'

export const useTasksStore = defineStore('useTasksStore', () => {
  const storageString = localStorage.getItem('tasks') /* without backend */
  const tasks = ref<Task[]>(
    storageString
      ? JSON.parse(storageString)
      : []
  )
  let lastId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0

  function findTaskById(taskId?: number) {
    return tasks.value.findIndex((task: Task) => task.id === taskId)
  }

  function save() {
    /* todo: replace for backend */
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  function addTask(newTask: Task) {
    lastId += 1
    tasks.value.push({ ...newTask, id: lastId })
    save()
  }

  function removeTask(taskId: number) {
    const index = findTaskById(taskId)
    if (index !== undefined) {
      tasks.value.splice(index, 1)
      save()
    }
  }

  function changeTask(updatedTask: Task) {
    const index = findTaskById(updatedTask.id)
    console.log(updatedTask, index)
    if (index !== undefined) {
      tasks.value[index] = updatedTask
      save()
    }
  }

  return { tasks, addTask, removeTask, changeTask }
})
