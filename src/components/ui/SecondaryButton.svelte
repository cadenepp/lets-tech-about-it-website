<script lang="ts">
  // your script goes here
  type buttonType = {
    otherStyle?: string;
    title: string;
    secondary?: boolean;
    route?: string;
    icon?: boolean;
    iconType?: string;
  };

  const props: buttonType = $props();
</script>

<a href={props.route}>
  <button
    class={"bg-zinc-50 text-primary-300 border-none rounded-lg w-fit max-w-45 h-fit px-4 py-2 ease-in duration-400 hover:bg-primary-600 hover:text-text-primary cursor-pointer hover:shadow-[0px_0px_0px_5px_#ffed76] " +
      props.otherStyle}
    title={props.title}
    id="secondaryButton"
  >
    {props.title}
    {#if props.icon}
      <i class={`${props.iconType} ml-2`}></i>
    {/if}
  </button>
</a>
<!-- class={"overflow-hidden relative px-6 max-w-50 w-fit h-12 bg-zinc-100 text-primary-300 border-primary-300/30 hover:outline-4 ease-in-out duration-100 hover:border-zinc-100  border-2 rounded-md text-base font-medium cursor-pointer relative z-10" + -->

<style>
  /* your styles go here */
</style>
