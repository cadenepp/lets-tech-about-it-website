<script lang="ts">
  import "./layout.css";
  import favicon from "/images/favicon-32x32.png";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Modal from "svelte-simple-modal";

  import {
    INITIAL_INNER_HEIGHT,
    INITIAL_INNER_WIDTH,
  } from "../constants/constants";

  let { children } = $props();

  let y = $state(0);
  let innerHeight = $state(INITIAL_INNER_HEIGHT);
  let innerWidth = $state(INITIAL_INNER_WIDTH);

  const goTop = () => {
    document.body.scrollIntoView();
  };

</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
  class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-10 " +
      (y > 0
        ? " opacity-full pointer-events-auto"
        : " pointer-events-none opacity-0")}
  >
    <button
      title="Scroll up"
      onclick={goTop}
      class="ml-auto rounded bg-zinc-200 text-zinc-800 px-2 py-2 lg:px-3 lg:py-3 hover:bg-zinc-300 cursor-pointer border-2 border-zinc-300/60"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
  <Header />
  <Modal>
    {@render children()}
  </Modal>
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
