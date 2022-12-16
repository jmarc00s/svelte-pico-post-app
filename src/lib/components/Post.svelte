<script>
  import { fade } from 'svelte/transition';
  import { markPostAsViewed } from '../../store';
  import Badge from './Badge.svelte';
  export let post;
</script>

<article transition:fade={{ duration: 200 }}>
  <header>
    <div>
      <h4>{post.title}</h4>
      {#if post.checked && post.checkedDate}
        <Badge color="success">
          Seen at {post.checkedDate.toLocaleDateString()}
          {post.checkedDate.toLocaleTimeString()}
        </Badge>
      {:else if post.checked}
        <Badge color="success">Seen</Badge>
      {:else}
        <Badge color="error">Not seen yet</Badge>
      {/if}
    </div>
  </header>
  <p>{post.description}</p>
  <footer>
    {#if !post.checked}
      <button
        transition:fade={{ duration: 200 }}
        on:click={() => markPostAsViewed(post)}
        class="secondary">Mark as Seen</button
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
