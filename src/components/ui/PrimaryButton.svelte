<script lang="ts">
  // your script goes here
  type buttonType = {
    otherStyle?: string;
    title: string;
    secondary?: boolean;
    route?:string
  };

  const props: buttonType = $props();
</script>

<a href={props.route}>
<button
  class={(props.secondary
    ? ` w-fit rounded-2xl text-sm cursor-pointer text-nowrap h-fit bg-zinc-50 border-2 border-zinc-200/50 text-amber-400 `
    : `w-fit h-fit bg-amber-400 rounded-2xl text-sm cursor-pointer `) +
    props.otherStyle}
  title={props.title}
  
>
  {props.title}
</button>
</a>
<style>
  /* your styles go here */
</style>
