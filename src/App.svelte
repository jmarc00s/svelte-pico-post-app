<script>
  import Container from "./lib/components/Container.svelte";
  import PostList from "./lib/components/PostList.svelte";

  let posts = [{
    title: 'Post 01'
  }];

</script>


<Container>
  <h1 class="text-center">Svelte Post app</h1>
  <h4 class="text-center">Manage your posts with svelte.</h4>
  <PostList posts={posts} />
</Container>