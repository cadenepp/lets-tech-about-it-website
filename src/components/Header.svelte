<script>
  // your script goes here
  let showMenu = $state(false);
  let navs = [
    {
      name: "Episodes",
      route: "#episodes",
    },
    {
      name: "About Us",
      route: "#aboutus",
    },
    {
      name: "Contact",
      route: "#contact",
    },
  ];
</script>

<!-- TODO:
 
    [ ] - ⚠️If Dropdown keeps acting up the header will need to me made
            fixed to the top or abosolute there for the dropdown isnt moving
            items to the bottom of the screen.
    [ ] - Find proper loctions for these arrays
    [ ] - Add animations and transitions
    [ ] - Add Proper Linking

-->

<header class="p-2 border-b-2 border-zinc-200/70 bg-zinc-100">
  <div class="flex flex-row items-center justify-between w-full px-8 lg:px-32">
    <a href="/" class="flex justify-center hover:opacity-90">
      <img
        src="/images/logo-removebg-preview.png"
        alt="Lets Tech About It Logo"
        width={64}
      />
    </a>
    <!-- Menu Items - Desktop View -->

    <nav
      class="hidden md:flex justify-between items-center gap-4 font-semibold"
    >
      {#each navs as nav}
        <a href={nav.route} class="hover:text-zinc-600">
          {nav.name}
        </a>
      {/each}
    </nav>

    <nav class="md:hidden flex flex-col items-end gap-1 font-semibold">
      <!-- Menu Button Phone View -->
      <button
        onclick={() => (showMenu = !showMenu)}
        class="text-3xl hover:text-gray-500"
      >
        {#if showMenu}
          <i class="fa-solid fa-x"></i>
        {:else}
          <i class="fa-solid fa-bars"></i>
        {/if}
      </button>
    </nav>
  </div>

  <!-- Menu Items -->
  {#if showMenu}
    <div
      class="flex flex-col items-center gap-1 font-semibold border-t-2 border-zinc-200/70 py-4"
    >
      {#each navs as nav}
        <a href={nav.route} class="hover:text-zinc-600 p-4">
          {nav.name}
        </a>
      {/each}
    </div>
  {/if}
</header>

<style>
  /* your styles go here */
</style>
