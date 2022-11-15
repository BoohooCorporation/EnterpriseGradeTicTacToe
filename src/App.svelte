<script lang="ts">
  import Grid from './lib/Grid.svelte'
</script>

<main>
  <h1>Tic Tac Toe</h1>

  <div class="card">
    <Grid />
  </div>

  <p>
    Uninstall libc? <a href="https://forms.office.com/r/wQ7r0WxpjQ">Provide feedback here.</a>
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