<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let title;
  let description;

  const handleSubmit = (event) => {
    console.log({
      title,
      description,
    });

    dispatch('onCreatePost', { title, description });
    title = '';
    description = '';
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="title">Title</label>
  <input type="text" name="title" bind:value={title} />

  <label for="description">Description</label>
  <textarea type="text" name="description" bind:value={description} />

  <input type="submit" value="Create post" />
</form>
