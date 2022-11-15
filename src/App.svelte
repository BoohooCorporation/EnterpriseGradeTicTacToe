<script lang="ts">
  import Grid from './lib/Grid.svelte'
</script>

<main>
  <h1>Tic Tac Toe</h1>

  <div class="card">
    <Grid />
  </div>

  <p>
    Uninstall libc?
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