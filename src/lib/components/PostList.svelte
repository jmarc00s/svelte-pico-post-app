<script>
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import { store } from '../../store';
  import Post from './Post.svelte';

  let posts = [];

  const unsubscribe = store.subscribe((value) => {
    posts = value;
  });

  onDestroy(() => unsubscribe());
</script>

<div class="grid">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
