<script lang="ts">
  // import svelteLogo from './assets/svelte.svg'
  import Grid from './lib/Grid.svelte'
</script>

<main>
  <h1>Tic Tac Toe</h1>

  <div class="card">
    <Grid />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="muted">
    Made by Andrew and Neeron
  </p>
</main>

<style>
  .muted {
    color: #888;
  }
</style>