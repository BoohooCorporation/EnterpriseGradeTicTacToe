<script lang="ts">
  let squares: Array<{ id: number; val: String; highlighted: boolean }> = [
    { id: 0, val: '', highlighted: false },
    { id: 1, val: '', highlighted: false },
    { id: 2, val: '', highlighted: false },
    { id: 3, val: '', highlighted: false },
    { id: 4, val: '', highlighted: false },
    { id: 5, val: '', highlighted: false },
    { id: 6, val: '', highlighted: false },
    { id: 7, val: '', highlighted: false },
    { id: 8, val: '', highlighted: false },
  ]

  let last: String = ''
  let state: 'Win'|'Draw'|''|'Remove' = ''

  const handleClick = (n: number) => {
    if (state == 'Remove') {
      squares.forEach((square) => {
        square.highlighted = false
      })
    }

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
    let squares_: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < 9; i++) {
      if (conditions[i]) {
        squares[squares_[i][0]].highlighted = true
        squares[squares_[i][1]].highlighted = true
        squares[squares_[i][2]].highlighted = true
        break
      }
    }
    if (conditions.includes(true)) {
      state = 'Win'
    } else if (squares.every((square: any) => square.val !== '')) {
      state = 'Draw'
    }

    setTimeout(() => {
      if (state == 'Win') {
        alert('We have a winner!')
        squares.forEach((square: any) => (square.val = ''))
      }

      if (state == 'Draw') {
        alert('Draw!')
        squares.forEach((square: any) => (square.val = ''))
      }

      state = 'Remove'
    }, 50)
  }
</script>

<div class="grid grid-cols-3 gap-4">
  {#each squares as { id, val, highlighted }}
    <button
      class="bg-gray-200 hover:bg-gray-100 text-gray-800 text-4xl font-bold p-4 h-40 w-40 rounded"
      class:highlighted
      on:click={() => handleClick(id)}
    >
      {val}
    </button>
  {/each}
</div>

<style>
  .highlighted {
    background-color: #65f582;
  }
</style>