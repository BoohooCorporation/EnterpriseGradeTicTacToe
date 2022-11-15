<script lang="ts">
  let squares: Array<{id: number, val: String}> = [
    { id: 0, val: '' },
    { id: 1, val: '' },
    { id: 2, val: '' },
    { id: 3, val: '' },
    { id: 4, val: '' },
    { id: 5, val: '' },
    { id: 6, val: '' },
    { id: 7, val: '' },
    { id: 8, val: '' },
  ]

  let last: String = ''

  const handleClick = (n: number) => {
    let s = squares

    if (squares[n].val === '') {
      if (last === 'X') {
        squares[n].val = 'O'
        last = 'O'
      } else {
        squares[n].val = 'X'
        last = 'X'
      }
    }

    setTimeout(() => {
      let conditions: boolean[] = [
        s[0].val == s[1].val && s[1].val == s[2].val && s[0].val != '',
        s[3].val == s[4].val && s[4].val == s[5].val && s[3].val != '',
        s[6].val == s[7].val && s[7].val == s[8].val && s[6].val != '',
        s[0].val == s[3].val && s[3].val == s[6].val && s[0].val != '',
        s[1].val == s[4].val && s[4].val == s[7].val && s[1].val != '',
        s[2].val == s[5].val && s[5].val == s[8].val && s[2].val != '',
        s[0].val == s[4].val && s[4].val == s[8].val && s[0].val != '',
        s[2].val == s[4].val && s[4].val == s[6].val && s[2].val != '',
      ]
    
      if (conditions.includes(true)) {
        alert('We have a winner!')
        squares.forEach((square: any) => (square.val = ''))
      }
    
      if (squares.every((square: any) => square.val !== '')) {
        alert('Draw!')
        squares.forEach((square: any) => (square.val = ''))
      }
    }, 50)
  }
  </script>

<div class="grid grid-cols-3 gap-4">
  {#each squares as { id, val }}
    <button class="bg-gray-200 hover:bg-gray-100 text-gray-800 text-4xl font-bold p-4 h-40 w-40 rounded" on:click={() => handleClick(id)}>
      {val}
    </button>
  {/each}
</div>
