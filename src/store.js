import { writable } from 'svelte/store'
import { FILTERS } from './constants'

const filter = writable(FILTERS.All)

const taskList = writable([
  {
    id: 1,
    title: 'Task1',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Task2',
    isCompleted: false
  }
])

export { taskList, filter }
