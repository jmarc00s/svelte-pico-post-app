<script>
  import Post from './Post.svelte';

  export let posts;

  console.log(posts);
</script>

<div class="grid">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
