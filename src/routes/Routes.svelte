<script>
  import { Router, Route } from 'svelte-navigator';
  import Posts from '../lib/pages/Posts.svelte';
  import Home from '../lib/pages/Home.svelte';
  import Navbar from '../lib/components/Navbar.svelte';
  import Container from '../lib/components/Container.svelte';
  import AddPost from '../lib/pages/AddPost.svelte';
</script>

<Router>
  <Navbar />

  <Container>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/posts">
      <Posts />
    </Route>
    <Route path="/posts/add">
      <AddPost />
    </Route>
  </Container>
</Router>
