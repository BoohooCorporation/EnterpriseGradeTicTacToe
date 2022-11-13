<script lang="ts">
  // let count: number = 0
  // const increment = () => {
  //   count += 1
  // }
  let squares: any = [
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
  ]

  let last: String = ''

  const handleClick = (n: number) => {
    let s = squares

    if (squares[n].value === '') {
      if (last === 'X') {
        squares[n].value = 'O'
        last = 'O'
      } else {
        squares[n].value = 'X'
        last = 'X'
      }
    }

    let conditions = [
      squares[0].value === squares[1].value &&
        squares[1].value === squares[2].value &&
        squares[0].value !== '',
      squares[3].value === squares[4].value &&
        squares[4].value === squares[5].value &&
        squares[3].value !== '',
      squares[6].value === squares[7].value &&
        squares[7].value === squares[8].value &&
        squares[6].value !== '',
      squares[0].value === squares[3].value &&
        squares[3].value === squares[6].value &&
        squares[0].value !== '',
      squares[1].value === squares[4].value &&
        squares[4].value === squares[7].value &&
        squares[1].value !== '',
      squares[2].value === squares[5].value &&
        squares[5].value === squares[8].value &&
        squares[2].value !== '',
      squares[0].value === squares[4].value &&
        squares[4].value === squares[8].value &&
        squares[0].value !== '',
      squares[2].value === squares[4].value &&
        squares[4].value === squares[6].value &&
        squares[2].value !== '',
    ]

    if (conditions.includes(true)) {
      alert('We have a winner!')
      squares.forEach((s: any) => (s.value = ''))
    }

    if (squares.every((s: any) => s.value !== '')) {
      alert('Draw!')
      squares.forEach((s: any) => (s.value = ''))
    }
  }
</script>

<!-- <button on:click={increment}>
  count is {count}
</button> -->

<!-- 3x3 square grid of buttons using tailwind -->
<div class="grid grid-cols-3 gap-4">
  {#each squares as { id, value }}
    <button class="bg-gray-200 hover:bg-gray-100 text-gray-800 text-4xl font-bold p-4 h-40 w-40 rounded" on:click={() => handleClick(id)}>
      {value}
    </button>
  {/each}
</div>
