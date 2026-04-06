<script lang="ts">
  import type { HostType } from "../type/types";
  import HostCard from "./HostCard.svelte";

  type propsType = {
    data: HostType[];
  };

  // your script goes here
  let { data = [] }: propsType = $props();

  $effect(() => {
    console.log("Host Data Coming back: " + data.length);
  });
</script>

<div class="flex flex-1 flex-col px-6 gap-12 lg:flex-row">
  {#each data as host}
    <HostCard {host} />
  {/each}
</div>

<style>
  /* your styles go here */
</style>
