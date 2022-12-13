<script>
  import Container from './lib/components/Container.svelte';
  import PostForm from './lib/components/PostForm.svelte';
  import PostList from './lib/components/PostList.svelte';

  let posts = [];

  const handleOnCreatePost = ({ detail }) => {
    posts = [...posts, detail];
  };
</script>

<Container>
  <h1 class="title">Svelte Post app</h1>
  <h4 class="text-center">Manage your posts with svelte.</h4>
  <PostForm on:onCreatePost={handleOnCreatePost} />
  <PostList {posts} />
</Container>

<style>
  .title {
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem;
    margin-bottom: 0;
  }
</style>
