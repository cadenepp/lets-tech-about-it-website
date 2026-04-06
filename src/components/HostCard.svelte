<script lang="ts">
  import type { HostType } from "../type/types";

  type propsType = {
    host: HostType;
  };
  let { host }: propsType = $props();

  // your script goes here
  let imgeurl =
    "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?&h=750&w=1260";
</script>

<article
  class="card card--1 mr-6.25 lg:w-1/3 bg-white w-full relative rounded-xl overflow-hidden h-full"
>
  <div
    class="card__img invisible bg-cover bg-center bg-no-repeat w-full h-60 rounded-t-xl"
  ></div>
  <a href={host.linkedInLink} title="card_link">
    <div
      class="card__img--hover top-0 bg-cover bg-center bg-no-repeat w-full absolute h-60 rounded-t-xl"
    ></div>
  </a>
  <div class="card_info z-2 rounded-b-xl">
    <span class="card_category uppercase text-[13px] tracking-[2px] font-light"
      >{host.jobtitle}</span
    >
    <h3 class="card_title roboto text-2xl font-bold">{host.name}</h3>

    <span class="card_by text-[12px] font-light"
      >Contact <a
        href={host.linkedInLink}
        class="card_author text-amber-700 font-medium decoration-0"
        title="title">{host.name}</a
      ></span
    >
  </div>
</article>

<style>
  /* your styles go here */
  .card--1 .card__img,
  .card--1 .card__img--hover {
    background-image: url("https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  }
  .card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }
  .card__img--hover {
    transition: 0.2s all ease-out;
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
  }
  .card_info {
    padding: 16px 24px 24px 24px;
  }

  .card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
  }
  .card:hover .card_info {
    background-color: transparent;
    position: relative;
  }
</style>
