<script lang="ts">
  // let count: number = 0
  // const increment = () => {
  //   count += 1
  // }
  let squares: any = [false, false, false, false, false, false, false, false, false]
</script>

<!-- <button on:click={increment}>
  count is {count}
</button> -->

<!-- 3x3 square grid of buttons using tailwind -->
<div class="grid grid-cols-3 gap-4">
  {#each squares as square}
  <button class="bg-gray-200 hover:bg-gray-100 text-gray-800 text-4xl font-bold py-4 px-4 h-40 w-40 rounded">
    {square}
  </button>
  {/each}
</div>