<script>
  import { useNavigate } from 'svelte-navigator';
  import { fade } from 'svelte/transition';
  import { addPost } from '../../store';

  let title = '';
  let description = '';
  let goToPosts = true;
  const navigate = useNavigate();

  const handleSubmit = () => {
    addPost({ title, description });
    title = '';
    description = '';

    if (goToPosts) {
      navigate('/posts');
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="title">Title</label>
  <input type="text" name="title" bind:value={title} />

  <label for="description">Description</label>
  <textarea name="description" bind:value={description} />

  <label for="goToPosts">
    <input type="checkbox" bind:checked={goToPosts} />
    Go to posts after creating ?
  </label>

  {#if title.length && description.length}
    <input transition:fade={{ duration: 150 }} type="submit" value="Create post" />
  {/if}
</form>

<style>
  input[type='submit'] {
    margin-top: 1rem;
  }
</style>
