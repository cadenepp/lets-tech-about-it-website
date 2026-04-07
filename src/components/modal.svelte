<script lang="ts">
  import type { Snippet } from "svelte";

  type propType = {
    onClose: () => void;
    isOpen: boolean;
    children: Snippet;
  };

  let props: propType = $props();
  
  $effect(()=> {
    console.log(document.querySelector("#overlay"));

    document
    .querySelector("#overlay")
    ?.addEventListener("click", () => props.onClose);
  })
  

  
</script>

<div
  id="overlay"
  class="overlay-bg fixed top-0 left-0 w-full h-full bg-s1/80 z-10 flex justify-center items-center"
  // onclick={ props.onClose}
  role="button"
  tabindex="0"
  onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? props.onClose?.() : null}
>
  <div
    class="modal relative bg-zinc-100 w-fit p-12 rounded-lg z-1000 mx-auto flex flex-col justify-center items-center"
    
  >
    <button
      type="button"
      class="close-button cursor-pointer absolute -top-[6%] right-[3%] py-5 hover:opacity-80"
      onclick={props.onClose}>❌</button
    >
    {@render props.children()}
  </div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
  /* your styles go here */
</style>
