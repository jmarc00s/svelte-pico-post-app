<script>
  import { Link } from 'svelte-navigator';
</script>

<header>
  <nav>
    <ul>
      <li><strong><Link to="/">Svelte posts app</Link></strong></li>
    </ul>
    <ul>
      <li><Link to="/posts/add">Add a post</Link></li>
    </ul>
  </nav>
</header>

<style>
  header {
    padding: 0.5rem 1rem;
    background-color: #233440;
  }
</style>
