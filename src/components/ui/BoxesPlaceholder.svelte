<script lang="ts">
    // your script goes here
    
  const count = 8;

  const boxes = Array.from({ length: count });
</script>

<style>
    /* your styles go here */
</style>


      <div class="grid grid-cols-2 gap-12 mx-auto">
        {#each boxes as _, index}
          <div
            class="group w-50 md:w-80 min-h-50 bg-zinc-400 rounded-lg flex flex-row justify-center items-center text-zinc-200"
          >
            <p
              class=" text center text-5xl font-bold opacity-0 group-hover:opacity-90"
            >
              0{index + 1}
            </p>
          </div>
        {/each}
      </div>