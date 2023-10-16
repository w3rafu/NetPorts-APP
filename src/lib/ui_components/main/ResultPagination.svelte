<!-- @format -->
<script>
  /**
   * @type {any}
   */
  export let port;
  /**
   * @type {string}
   */
  export let protocol;

  import { CURRENT_SEARCH } from "$lib/utilities/state";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import GoogleIcon from "../other/GoogleIcon.svelte";
  import { fade } from "svelte/transition";



  let loaded = false;

  let prevPort;
  let nextPort;

  onMount(() => {
    prevPort = (parseInt(port) - 1) ;
    nextPort = (parseInt(port) + 1) ;
    loaded = true;
  });

</script>

{#if loaded}
  <div id="pagination" in:fade={{duration: 1000, delay: 500}}>
    <div class="left">
      <button
        on:click={() => {
          goto(`/results?port=${prevPort}&protocol=${protocol}`);
        }}
        disabled={prevPort === 0}
      >
        <span>
          <GoogleIcon name={"arrow_back_ios"} size={"1.1em"} />
        </span>

        TCP {prevPort}
      </button>
    </div>
    <div class="right">
      <button
        class="button"
        on:click={() => {
          goto(`/results?port=${nextPort}&protocol=${protocol}`);
        }}
      >
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
    padding: 1em;
    gap: 0.3em;
    font-weight: bold;
  }
  span {
    color: var(--lime);
    text-shadow: 0 0 10px var(--lime);
    display: flex;
    align-items: center;
  }

  @media(max-width: 768px){
    #pagination{
      width: 100%;
      justify-content: space-between;
    }
  }
</style>
