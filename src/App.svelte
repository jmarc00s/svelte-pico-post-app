<script>
  import Container from './lib/components/Container.svelte';
  import Navbar from './lib/components/Navbar.svelte';
  import PostForm from './lib/components/PostForm.svelte';
  import PostList from './lib/components/PostList.svelte';
</script>

<Navbar />
<Container>
  <PostForm />
  <PostList />
</Container>
