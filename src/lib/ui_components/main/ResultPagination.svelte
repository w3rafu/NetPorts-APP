<!-- @format -->
<script>
  //Gets port and protocol from patern /results?port=port&protocol=protocol
  /**
   * @type {string}
   */
  export let port;
  /**
   * @type {string}
   */
  export let protocol;

  //Import user state
  import { USER_FAVORITES } from "$lib/utilities/state";

  //Import utilities
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  //Import UI components
  import GoogleIcon from "../other/GoogleIcon.svelte";

  //Boolean that controls the visibility of the component
  let loaded = false;

  /**
   * @type {number}
   */
  let prevPort;
  /**
   * @type {number}
   */
  let nextPort;

  //Before the app mounts,
  //Set the previous and next port numbers
  onMount(() => {
    //Calculates the previous and next port numbers
    prevPort = parseInt(port) - 1;
    nextPort = parseInt(port) + 1;

    //Check if the current port is in the user favorites
    if ($USER_FAVORITES.includes(port)) {
      currentIsFavorite = true;
    }

    //Show the component
    loaded = true;
  });

  //Object that contains the previous and next port numbers navigation
  let newRoute = {
    previous: () => {
      goto(`/results?port=${prevPort}&protocol=${protocol}`);
    },
    next: () => {
      goto(`/results?port=${nextPort}&protocol=${protocol}`);
    },
  };

  //Function to run when the user clicks the favorite button
  async function handleFavorite() {
    if ($USER_FAVORITES.includes(port)) {
      $USER_FAVORITES = $USER_FAVORITES.filter((p) => p !== port);
      currentIsFavorite = !currentIsFavorite;
      return;
    } else {
      $USER_FAVORITES = [...$USER_FAVORITES, port];
      currentIsFavorite = !currentIsFavorite;
    }
  }

  //Boolean that controls the style of the favorite button
  let currentIsFavorite = false;
</script>

{#if loaded}
  <div id="pagination" in:fade={{ duration: 1000, delay: 500 }}>
    <!--
    Previous Port Button
  -->
    <div class="left">
      <button on:click={newRoute.previous} disabled={prevPort === 0}>
        <span>
          <GoogleIcon name={"arrow_back_ios"} size={"1.1em"} />
        </span>
        TCP {prevPort}
      </button>
    </div>
    <!--
    Favorite Port Button
  -->

    {#key currentIsFavorite}
      <button
        on:click={handleFavorite}
        class="fav"
        class:fav-active={currentIsFavorite === true}
      >
        <GoogleIcon name={"favorite"} size={"1.5em"} />
      </button>
    {/key}
    <!--
    Next Port Button
  -->
    <div class="right">
      <button on:click={newRoute.next}>
        TCP {nextPort}
        <span>
          <GoogleIcon name={"arrow_forward_ios"} size={"1.1em"} />
        </span>
      </button>
    </div>
  </div>
{/if}

<style>

  #pagination {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1em 0;
    width: 80%;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--ui);
    border: none;
    font-size: large;
    cursor: pointer;
    color: white;
    border-radius: 7px;
    padding: 1em 2em;
    gap: 0.3em;
    font-weight: bold;
  }
  button:hover {
    background-color: var(--lightblue);
    box-shadow: 0 0 20px var(--lightblue);
  }

  span {
    color: var(--lime);
    text-shadow: 0 0 10px var(--lime);
    display: flex;
    align-items: center;
  }

  .fav {
    padding: .9em 2em;
  }

  .fav:hover,
  .fav-active {
    background-color: var(--pink);
    box-shadow: 0 0 20px var(--pink);
  }

  @media (max-width: 768px) {
    #pagination {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 500px) {
    button {
      padding: 1em !important;
    }
    .fav {
      padding: .9em 2em !important;
    }
  }
</style>
