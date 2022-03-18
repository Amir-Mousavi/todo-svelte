<script>
  import { taskList } from '../store'
  import { FILTERS } from '../constants'
  import { filter } from '../store'
  import TaskItem from './TaskItem.svelte'

  let tasks = []
  let filteredTasks
  let currentFilter

  filter.subscribe(filterValue => {
    currentFilter = filterValue
    setFilteredTasks()
  })

  taskList.subscribe(newList => {
    tasks = newList
    setFilteredTasks()
  })

  function setFilteredTasks() {
    switch (currentFilter) {
      case FILTERS.All:
        filteredTasks = [...tasks]
        break

      case FILTERS.Completed:
        filteredTasks = [...tasks.filter(t => t.isCompleted)]
        break

      case FILTERS.Uncompleted:
        filteredTasks = [...tasks.filter(t => !t.isCompleted)]
    }
  }
</script>

<main>
  <div class="task-list">
    {#each filteredTasks as task}
      <TaskItem {task} />
    {/each}
  </div>
</main>

<style>
  .task-list {
    display: flex;
    flex-direction: column;
  }
</style>
