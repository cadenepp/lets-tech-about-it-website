<script lang="ts">
  import type { buttonType } from "../../type/types";

  // your script goes here

  const props: buttonType = $props();
</script>

<!-- From Uiverse.io by Javierrocadev -->
<button
  class={"overflow-hidden  w-fit max-w-46 px-10 py-2 h-12 bg-p1 text-text-primary border-none rounded-md font-bold cursor-pointer relative z-10 group " +
    props.otherStyle}
  title={`Click to ${props.title}`}
  onclick={props.onClick}
>
  {props.title ? `${props.title}` : "Type Text"}
  <span
    class="absolute w-50 h-32 -top-8 -left-2 bg-primary-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
  ></span>
  <span
    class="absolute w-50 h-32 -top-8 -left-2 bg-primary-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
  ></span>
  <span
    class="absolute w-50 h-32 -top-8 -left-2 bg-primary-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute right-10 z-10"
  >
    {props.title ? `${props.title}` : "Type Text"}</span
  >
</button>

<style>
  /* your styles go here */
</style>
