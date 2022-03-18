<script>
  import { taskList } from '../store'
  import { v4 as uuidv4 } from 'uuid';


  let value

  taskList.subscribe(newList => {
    console.log({ newList });
  })

  function onAdd(event) {
    event.preventDefault()

    if (value === '') {
      return
    }

    const newTask = {
      id: uuidv4(),
      title: value,
      isCompleted: false
    }
    taskList.update(oldList => [newTask, ...oldList])

    value = ''
  }
</script>

<main>
  <form on:submit={onAdd}>
    <input bind:value placeholder="Task title..." type="text" />
  </form>
</main>
