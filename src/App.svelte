<script>
  import Container from './lib/components/Container.svelte';
  import PostForm from './lib/components/PostForm.svelte';
  import PostList from './lib/components/PostList.svelte';
</script>

<Container>
  <h1 class="title">Svelte Post app</h1>
  <h6 class="text-center">Manage your posts with svelte.</h6>
  <PostForm />
  <PostList />
</Container>

<style>
  .title {
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem;
    margin-bottom: 0;
  }
</style>
