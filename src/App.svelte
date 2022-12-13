<script>
  import Container from './lib/components/Container.svelte';
  import PostForm from './lib/components/PostForm.svelte';
  import PostList from './lib/components/PostList.svelte';

  let posts = [];

  const handleOnCreatePost = ({ detail }) => {
    posts = [...posts, detail];
  };

  const handleMarkedAsChecked = ({ detail }) => {
    const index = posts.indexOf(detail);

    posts = posts.map((post, idx) => {
      if (index === idx) return { ...post, checked: true };
      return post;
    });
  };
</script>

<Container>
  <h1 class="title">Svelte Post app</h1>
  <h6 class="text-center">Manage your posts with svelte.</h6>
  <PostForm on:onCreatePost={handleOnCreatePost} />
  <PostList {posts} on:onMarkAsChecked={handleMarkedAsChecked} />
</Container>

<style>
  .title {
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem;
    margin-bottom: 0;
  }
</style>
