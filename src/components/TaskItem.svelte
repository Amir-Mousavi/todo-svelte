<script>
  import { taskList } from '../store'

  function onDelete() {
    taskList.update(list => list.filter(t => t.id !== task.id))
  }

  function onCheck() {
    taskList.update(list =>
      list.map(t => {
        if (t.id === task.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }

        return t
      })
    )
  }

  export let task
</script>

<main>
  <div class="container">
    <div>
      <input
        on:click={onCheck}
        bind:checked={task.isCompleted}
        type="checkbox"
      />
      {task.title}
    </div>
    <button on:click={onDelete}>X</button>
  </div>
</main>

<style>
  .container {
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    box-shadow: 1px 1px 2px 0 #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container:hover {
    background: #eee;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
