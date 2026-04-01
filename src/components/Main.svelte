<script lang="ts">
  // your script goes here

  /*
    TODO:
    [ ] - Find proper loctions for these arrays
    [ ] - Add animations and transitions
    [ ] - Add Proper Linking
*/

  let medias = [
    {
      name: "Spotify",
      link: "#",
      icon: "fa-brands fa-spotify",
      color: "text-green-500",
    },
    {
      name: "Podcast",
      link: "#",
      icon: "fa-solid fa-podcast",
      color: "text-purple-500",
    },
    {
      name: "Amazon Music",
      link: "#",
      icon: "fa-brands fa-amazon",
      color: "text-nutral-80",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4 h-full">
  <section
    id="hero-section"
    class="flex flex-col py-8 px-4 sm:py-14 sm:px-8 min-h-screen h-full gap-90 pt-40"
  >
    <!-- Make a grid -->
    <div
      class="flex flex-col lg:justify-center text-left gap-6 md:gap-8 lg:gap-10 h-fit"
    >
      <h2 class="text-6xl md:text-7xl lg:text-8xl font-bold uppercase">
        Let's Tech <br /> About It
      </h2>
      <p>Exploring ideas, habits, and stories that shape modern technology.</p>
      <button title="Explore" class="w-fit bg-amber-400 px-6 py-2 rounded-2xl">
        View Podcast <i class="fa-solid fa-play"></i>
      </button>
    </div>

    <!-- Small Media Display Section -->
    <nav class="h-fit flex flex-row items-center gap-1">
      <span class="mr-4"
        >Avaliable on <i class="fa-solid fa-arrow-right"></i></span
      >
      {#each medias as media}
        <!-- content here -->
        <a
          href={media.link}
          title={media.name}
          class={media.color + " text-3xl"}
        >
          <i class={media.icon}></i>
        </a>
      {/each}
    </nav>
  </section>

  <section
    id={"aboutus"}
    class="flex flex-col py-8 px-4 sm:py-14 sm:px-8 min-h-screen h-full"
  >
    <h3 class="font-bold text-2xl mb-10">A Bit About Us</h3>

    <div class="flex flex-col lg:flex-row gap-12">
      <img
        src="/images/IMG_4187.jpg"
        alt="Group of Three doing a podcast"
        class="rounded-xl lg:w-1/2"
      />
      <div>
        <h2 class="font-bold text-2xl pt-12 pb-4 lg:pt-0">Who Are We?</h2>
        <p class="text-zinc-700">
          We are a dedicated group of developers with a passion for giving back
          to our community through the medium of podcasting. Our primary goal
          with this podcast is to share valuable insights and information
          gathered from a variety of sources, including employers, educational
          institutions, peers, and other knowledgeable individuals, all relevant
          to the themes we explore in each episode.<br /><br /> We aim to create a
          welcoming space for listeners from all walks of life to come together and
          engage in meaningful discussions. Whether you are a seasoned professional,
          a student, or simply someone with an interest in technology and development,
          we would love for you to join us for our episodes. Your participation can
          help us foster a richer dialogue and build a stronger community around the
          topics we cover.
        </p>
        <button>Join Us</button>
      </div>

      
    </div>
  </section>
</main>

<style>
  /* your styles go here */
</style>
