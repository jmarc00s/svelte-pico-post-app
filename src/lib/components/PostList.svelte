<script>
  import { createEventDispatcher } from 'svelte';
  import Post from './Post.svelte';

  export let posts;

  const dispatch = createEventDispatcher();

  const onMarkAsChecked = ({ detail }) => dispatch('onMarkAsChecked', detail);
</script>

<div class="grid">
  {#each posts as post}
    <Post {post} on:onMarkAsChecked={onMarkAsChecked} />
  {/each}
</div>
