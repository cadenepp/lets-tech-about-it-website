<script lang="ts">
  import type { Snippet } from "svelte";

  type propType = {
    children: Snippet;
  };

  let { children }: propType = $props();
</script>

<div
  class="flex flex-col relative before:absolute before:top-0 before:left-0 before:w-2/6 before:h-1.5 before:bg-primary-600 after:absolute after:bottom-0 after:right-0 after:w-2/4 after:h-1.5 after:bg-primary-600 py-6 w-full"
>
  {@render children()}
</div>

<!-- markup (zero or more items) goes here -->

<style>
  /* your styles go here */
</style>
