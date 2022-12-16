<script>
  import { store } from '../../store';
  import Post from './Post.svelte';

  let posts = [];

  const unsubscribe = store.subscribe((value) => {
    posts = value;
  });
</script>

<div class="grid">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
