<script>
    import { FILTERS } from '../constants'
    import { filter } from '../store'

    let currentFilter 

    filter.subscribe(filterValue => {
        currentFilter = filterValue
    })

    function onFilterChange(event) {
        filter.set(event.target.value)
    }

</script>
<main>
  <div>
    <small>Filter:</small>
    <select on:change={onFilterChange} value={currentFilter}>
      <option value={FILTERS.All}>All</option>
      <option value={FILTERS.Completed}>Completed</option>
      <option value={FILTERS.Uncompleted}>Uncompleted</option>
    </select>
  </div>
</main>

<style>
    div {
        padding: 20px 0;
    }
</style>
