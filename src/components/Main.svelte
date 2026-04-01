<script lang="ts">
  import PrimaryButton from "./ui/PrimaryButton.svelte";

  // your script goes here

  /*
    TODO:
    [ ] - Find proper loctions for these arrays
    [ ] - Add animations and transitions
    [ ] - Add Proper Linking
    [ ] - Hosts Section
    [ ] - Lastest Episode Section
    [ ] - Load Episodes
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

  const count = 8;

  const boxes = Array.from({ length: count });
</script>

<main class="flex flex-col flex-1 p-4 h-full">
  <section
    id="hero-section"
    class="flex flex-col py-8 lg:px-32 sm:px-8 min-h-screen h-full gap-60 pt-40"
  >
    <!-- Make a grid -->
    <div
      class="flex flex-col lg:justify-center text-left gap-6 md:gap-8 lg:gap-10 h-fit"
    >
      <h2 class="text-6xl md:text-7xl lg:text-8xl font-bold uppercase">
        Let's Tech <br /> About It
      </h2>
      <p class="text-zinc-700">
        Exploring ideas, habits, and stories that shape modern technology.
      </p>
      <button
        title="Explore"
        class="w-fit bg-amber-400 px-12 py-2.5 rounded-2xl text-sm"
      >
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
    class="flex flex-col py-8 lg:px-32 sm:px-8 min-h-screen h-full"
  >
    <h3 class="font-bold text-3xl mb-10">A Bit About Us</h3>

    <div class="flex flex-col lg:flex-row gap-12 justify-center items-center">
      <img
        src="/images/IMG_4187.jpg"
        alt="Group of Three doing a podcast"
        class="rounded-xl lg:w-1/2"
      />
      <div class="flex flex-col gap-6 mt-6">
        <h2 class="font-bold text-4xl">Who Are We?</h2>
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
        <PrimaryButton otherStyle={"px-12 py-2.5"} title="Join Us" />
      </div>
    </div>
  </section>

  <section
    id={"aboutus"}
    class="flex flex-col py-8 lg:px-32 sm:px-8 min-h-screen h-full pt-30"
  >
    <div class="flex flex-col gap-12">
      <div class="flex flex-row justify-between items-center">
        <h2 class="text-4xl font-semibold">Tune Into The Podcast</h2>
        <PrimaryButton
          title="View Episodes"
          otherStyle="px-6 py-2"
          secondary={true}
        />
      </div>

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
    </div>
  </section>

  <section
    id={"aboutus"}
    class="flex flex-col py-8 lg:px-32 sm:px-8 min-h-screen h-full"
  >
    <div>
      <h2>Introducing the Hosts</h2>
      <!-- Card Grid -->
      <div class="flex flex-col gap-4 items-center justify-center">
        <!-- Cards: 1 -->
        <div class=" bg-red-100 w-full flex flex-col items-center justify-center">
          <div
            class="group w-80 md:w-80 min-h-60 bg-zinc-400 rounded-lg flex flex-row justify-center items-center text-zinc-200"
          >
            <p
              class=" text center text-5xl font-bold opacity-0 group-hover:opacity-90"
            >
              Host
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p>Name</p>
            <p>Job Title</p>
            <p>Description</p>
            <PrimaryButton title="Contact" otherStyle="px-6 py-2" />
          </div>
        </div>
        <!-- Cards 2 -->
        <div class="">
          <div
            class="group w-80 md:w-80 min-h-60 bg-zinc-400 rounded-lg flex flex-row justify-center items-center text-zinc-200"
          >
            <p
              class=" text center text-5xl font-bold opacity-0 group-hover:opacity-90"
            >
              Co-Host 2
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p>Name</p>
            <p>Job Title</p>
            <p>Description</p>
            <PrimaryButton title="Contact" otherStyle="px-6 py-2" />
          </div>
        </div>

        <!-- Card: 3 -->
        <div class="">
          <div
            class="group w-80 md:w-80 min-h-60 bg-zinc-400 rounded-lg flex flex-row justify-center items-center text-zinc-200"
          >
            <p
              class=" text center text-5xl font-bold opacity-0 group-hover:opacity-90"
            >
              Co-Host 3
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p>Name</p>
            <p>Job Title</p>
            <p>Description</p>
            <PrimaryButton title="Contact" otherStyle="px-6 py-2" />
          </div>
        </div>
      </div>
    </div>
  </section>

    <section
    id={"sponsor-ad"}
    class="flex flex-col py-8 lg:px-32 sm:px-8 h-full"
  >
  <div>
    <h1>Partner With Us</h1>
    <p>Small but mighty — our listeners are active builders, not passive scrollers.</p>
    <PrimaryButton title="Get in Touch" otherStyle='px-4 py-2'/>
  </div>
    </section>

</main>

<style>
  /* your styles go here */
</style>
