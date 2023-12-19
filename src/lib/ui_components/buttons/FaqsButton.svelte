<!-- @format -->
<script>
  /**
   * This component is a button that shows/hides the faqs component
   */

  //Import navigation utils
  import { goto } from "$app/navigation";

  //Import event dispatcher
  import { createEventDispatcher } from "svelte";
  //Create event dispatcher
  let dispatch = createEventDispatcher();

  //Variable to show/hide the faqs component
  let open = false;

  //Function to run when the user clicks the button
  //It will scroll to the faqs component
  $: if (open) {
    goto("#tabs");
  }
</script>

<!--
    The button that shows/hides the faqs component
-->

<button
  class:active={open === true}
  on:click={() => {
    dispatch("clicked");
    open = !open;
  }}
>
  {#if open === false}
    <span class="material-symbols-outlined"> person_raised_hand </span>
    FAQ's
  {:else}
    X
  {/if}
</button>

<style>
  button {
    display: flex;
    gap: 0.5em;
    background-color: transparent;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    padding: 1em 2em;
    border-radius: 7px;
    border: none;
    font-size: large;
    cursor: pointer;
    color: white;
    font-weight: bold;
    margin-bottom: 1.9em;
  }

  button:hover {
    background-color: var(--pink);
    box-shadow: 0 0 20px var(--pink);
  }

  .active {
    background-color: var(--pink);
    box-shadow: 0 0 20px var(--pink);
  }
</style>
