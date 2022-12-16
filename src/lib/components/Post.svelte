<script>
  import { markPostAsViewed } from '../../store';
  import Badge from './Badge.svelte';
  export let post;
</script>

<article>
  <header>
    <div>
      <h4>{post.title}</h4>
      {#if post.checked}
        <Badge color="success">Checked</Badge>
      {:else}
        <Badge color="error">Not checked</Badge>
      {/if}
    </div>
  </header>
  <p>{post.description}</p>
  <footer>
    {#if !post.checked}
      <button on:click={() => markPostAsViewed(post)} class="secondary"
        >Mark as checked</button
      >
    {/if}
  </footer>
</article>

<style>
  header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    margin-bottom: 0;
  }
</style>
