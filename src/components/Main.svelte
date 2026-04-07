<script lang="ts">
  import { mediasData as medias, hostData } from "../constants/sampleData";
  import HostCardListing from "./HostCardListing.svelte";
  import Modal from "./modal.svelte";
  import SpotifyPlayer from "./SpotifyPlayer.svelte";
  import HeaderWrapper from "./ui/HeaderWrapper.svelte";
  import PrimaryButton from "./ui/PrimaryButton.svelte";
  import SecondaryButton from "./ui/SecondaryButton.svelte";

  // your script goes here

  // const { open } = getContext<Context>("simple-modal");
  const bgImage = "/images/IMG_49401.png";
  const adsSectionImg = "/images/deep-umFjugV4fZ4-unsplash.jpg";

  const contactEmail = "contact@letstechabit.com";
  const MailLink = "mailto:contact@letstechabit.com?subject=Hello&body=Hello%20World"
  const yahooLink = "http://compose.mail.yahoo.com/?to=contact@letstechabit.com";
  const gmailLink = "https://mail.google.com/mail/u/0/?to=contact@letstechabit.com&su=Subject&body=Message&tf=cm";

  let isContactOpen = $state(true);
  let isCopyed = $state("");

  const openContactModal = () => (isContactOpen = true);
  const closeContactModal = () => (isContactOpen = false);

  const copyContactToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      isCopyed = "✅ Copied";
      setTimeout(() => (isCopyed = ""), 2000);
    } catch (err) {
      isCopyed = "⚠️Failed to Copy";
    }
  };

  const sendAnEmailGmail = () => {
    try {
      window.open(gmailLink, "_blank");
    } catch (error) {
      console.log("");
    }
  };
  const sendAnEmailYahoo = () => {
    try {
      window.open(yahooLink, "_blank");
    } catch (error) {
      console.log("");
    }
  };
  const sendAnEmailMail = () => {
    try {
      window.open(MailLink, "_blank");
    } catch (error) {
      console.log("");
    }
  };

  /*
    TODO:
    [x] - Find proper loctions for these arrays
    [ ] - Add animations and transitions
    [ ] - Add Proper Linking
    [x] - Hosts Section
    [x] - Lastest Episode Section
    [x] - Load Episodes
*/
</script>

<main class="flex flex-col flex-1 h-full">
  <!-- Hero Section -->
  <section
    id="hero-section"
    class="flex flex-col py-8 lg:px-32 px-8 h-full gap-50 pt-40 bg-cover bg-center"
    style={`background-image: url(${bgImage});`}
  >
    <div
      class="flex flex-col lg:justify-center text-left gap-6 md:gap-8 lg:gap-10 h-fit"
    >
      <h2
        class="text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-primary-300!"
      >
        Let's Tech <br /> About It
      </h2>
      <p class="text-zinc-200/70">
        Exploring ideas, habits, and stories that shape modern technology.
      </p>

      <PrimaryButton title="Join Us" onClick={openContactModal} />
      
    </div>

    <!-- Small Media Display Section -->
    <nav class="h-fit flex flex-row items-center gap-1 justify-end">
      <span class="mr-4 text-zinc-100"
        >Avaliable on <i class="fa-solid fa-arrow-right"></i></span
      >
      {#each medias as media}
        <!-- content here -->
        <a
          href={media.link}
          title={media.name}
          class={media.color + " cursor-pointer text-3xl  "}
        >
          <i
            class={media.icon +
              " cursor-pointer hover:opacity-50 ease-in duration-200 "}
          ></i>
        </a>
      {/each}
    </nav>
  </section>

  <!-- Soptify Player Section -->
  <section
    id={"episodes"}
    class="flex flex-col py-8 lg:px-32 px-8 h-full pt-30 gap-8"
  >
    <HeaderWrapper>
      <div class="flex flex-row items-center justify-between">
        <h2 class="text-3xl font-semibold">Tune Into The Podcast</h2>
        <SecondaryButton
          title="View Episodes"
          // otherStyle="px-10 py-2"
          route={"https://open.spotify.com/show/1YCxDWLjM9lxR03E1nLYRs"}
        />
      </div>
    </HeaderWrapper>

    <SpotifyPlayer />
  </section>

  <!-- About Section -->
  <section
    id={"aboutus"}
    class="flex flex-col justify-center mt-20 lg:px-32 px-8 min-h-screen h-full lg:h-fit"
  >
    <article
      class="flex flex-col lg:flex-row gap-12 justify-center items-center"
    >
      <img
        src="/images/IMG_4187.jpg"
        alt="Group of Three doing a podcast"
        class="rounded-xl lg:w-1/2"
      />
      <div class="flex flex-col gap-6 mt-6">
        <h2 class="font-bold text-4xl text-primary-300!">Who Are We?</h2>

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
        <PrimaryButton otherStyle={"px-12 py-2.5"} title="Join Us" onClick={openContactModal}/>
      </div>
    </article>
  </section>

  <!-- Host Section -->
  <section
    id={"host"}
    class="flex flex-col py-24 lg:py-0 lg:px-32 px-8 min-h-screen h-full gap-20 justify-center lg:min-h-0 lg:pb-40"
  >
    <HeaderWrapper
      ><h2 class="text-3xl font-medium mx-auto">Introducing the Hosts</h2>
    </HeaderWrapper>
    <!-- Card Grid -->
    <HostCardListing data={hostData} />
  </section>

  <!-- Ads Section / Partner Section -->
  <!--id={"sponsor-ad partner-ad"}-->
  <section
    id="contact"
    class="flex flex-col lg:px-32 px-8 h-full justify-center items-center"
  >
    <div
      class="w-[120%] bg-zinc-200 flex flex-col items-center justify-center gap-4 py-12 px-12 rounded-lg bg-cover bg-center"
      style="background-image: url({adsSectionImg});"
    >
      <h6 class="text-2xl font-bold text-center text-text-primary">
        Partner With Us
      </h6>
      <p class="text-center text-sm text-zinc-100 w-1/2">
        Small but mighty — our listeners are active builders, not passive
        scrollers.
      </p>
      <PrimaryButton title="Get in Touch" otherStyle=" mt-8" onClick={openContactModal} />
    </div>
  </section>

  {#if isContactOpen}
        <!-- content here -->
        <Modal onClose={closeContactModal} isOpen={isContactOpen}>
          <div class="flex flex-col gap-4 justify-center items-center">
            <h1 class="font-bold text-lg">Contact Infomation</h1>
            <div class="bg-white p-1 px-4 rounded-lg shadow">
              <input
                type="text"
                value={contactEmail}
                readonly
                class=" outline-0 border-0"
              />
              <button
                onclick={copyContactToClipboard}
                title="Copy to Clipboard"
                class=""
              >
                <i class="fa-regular fa-clipboard"></i></button
              >
            </div>
            <div>
              <button
                title="Send by Gmail"
                class="w-fit px-10 py-2 rounded-lg bg-s1 shadow text-zinc-200"
                onclick={sendAnEmailGmail}
              >
                <i class="fa-brands fa-google"></i>
              </button>
              <button
                title="Send by Gmail"
                class="w-fit px-10 py-2 rounded-lg bg-s1 shadow text-zinc-200"
                onclick={sendAnEmailYahoo}
              >
                <i class="fa-brands fa-yahoo"></i>
              </button>
              <button
                title="Send by Gmail"
                class="w-fit px-10 py-2 rounded-lg bg-s1 shadow text-zinc-200"
                onclick={sendAnEmailYahoo}
              >
                📥
              </button>
            </div>
            <span
              class={isCopyed == "✅ Copied"
                ? "text-green-400"
                : "text-red-400"}>{isCopyed}</span
            >
          </div>
        </Modal>
      {/if}
</main>

<style>
  /* your styles go here */
</style>
