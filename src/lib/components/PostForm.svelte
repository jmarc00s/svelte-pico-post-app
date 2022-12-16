<script>
  import { useNavigate } from 'svelte-navigator';
  import { addPost } from '../../store';

  let title;
  let description;
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
  <textarea type="text" name="description" bind:value={description} />

  <label for="goToPosts">
    <input type="checkbox" bind:checked={goToPosts} />
    Go to posts when creating ?
  </label>

  <input type="submit" value="Create post" />
</form>

<style>
  input[type='submit'] {
    margin-top: 1rem;
  }
</style>
