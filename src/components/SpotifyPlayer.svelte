<script lang="ts">
  import { onMount } from "svelte";

  // your script goes here
  let embedContainer: HTMLDivElement;
  let uri = "show:1YCxDWLjM9lxR03E1nLYRs";

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);


    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const options = {
        uri: `spotify:${uri}`,
        width: "100%",
        height: "232",
      };

      const callback = (controller: any) => {
        console.log("Player ready", controller);
        controller.togglePlay();

        // Example: auto play
        // EmbedController.play();
      };

      IFrameAPI.createController(embedContainer, options, callback);
    };

    // return () => {
    //   document.body.removeChild(script);
    // };
  });
</script>

<!-- markup (zero or more items) goes here -->

<div bind:this={embedContainer}></div>

<style>
  /* your styles go here */
</style>
