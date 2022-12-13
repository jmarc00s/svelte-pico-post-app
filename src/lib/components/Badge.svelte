<script>
  export let color;
</script>

<div class={color}>
  <slot />
</div>

<style>
  div {
    padding: 0.25rem 0.5rem;
    border-radius: 50px;
    color: white;
  }

  .error {
    background-color: rgb(170, 76, 76);
  }

  .success {
    background-color: rgb(36, 124, 75);
  }
</style>
