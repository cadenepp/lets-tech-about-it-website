<script lang="ts">
/*
    TODO:
    [ ] - Find proper loctions for these arrays
    [ ] - Add animations and transitions
    [ ] - Add Proper Linking
*/
  // your script goes here
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
    {
      name: "Sponsors",
      route: "#contact",
    },
  ];

  let mediaNavs = [
    {
      name: "Spotify",
      link: "#",
      icon: "fa-brands fa-spotify",
      color: 'text-green-500'
    },
    {
      name: "Instagram",
      link: "#",
      icon: "fa-brands fa-instagram",
      color: 'text-purple-500'
    },
    {
      name: "Amazon Music",
      link: "#",
      icon: "fa-brands fa-amazon",
      color: 'text-nutral-80'
    },
  ];
</script>

<footer class="flex flex-col gap-4 items-center bg-zinc-100 border-t-2 border-zinc-200/60 pt-8 md:px-8 lg:px-16">
  <div class="flex flex-col gap-6 md:flex-row md:justify-between  items-center w-full py-4 ">
    <a href="/" class="flex justify-center hover:opacity-90 md:items-center ">
      <img
        src="/images/logo-removebg-preview.png"
        alt="Lets Tech About It Logo"
        width={56}
      />
    </a>
   

    <!-- Website Links -->
    <nav class=" flex flex-row items-center gap-6 font-medium  ">
      {#each navs as nav}
        <a href={nav.route} class="hover:text-zinc-600">
          {nav.name}
        </a>
      {/each}
    </nav>

     <!-- Social Media Links -->
    <nav class=" flex flex-row items-center gap-6 justify-center font-medium text-2xl ">
      {#each mediaNavs as nav}
        <a href={nav.link} title={nav.name} class="hover:text-zinc-600">
          
          <i class={nav.icon + ''}></i>
        </a>
      {/each}
    </nav>

   

  </div>
    <p class="py-6 border-t-2 border-zinc-200 text-center w-[80%]">©️2026 Lets Tech About It. All Right resevered Soon.</p>
</footer>

<style>
  /* your styles go here */
</style>
