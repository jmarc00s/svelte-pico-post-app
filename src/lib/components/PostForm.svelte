<script>
  import { addPost } from '../../store';

  let title;
  let description;

  const handleSubmit = () => {
    //dispatch('onCreatePost', { title, description });
    addPost({ title, description });
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
