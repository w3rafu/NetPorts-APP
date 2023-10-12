<!-- @format -->
<script>
  /**
   * @type {string}
   */
  export let name;

  /**
   * @type {string | URL}
   */
  export let path;

  //Import utils
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onDestroy, onMount } from "svelte";

  let icons;

  onMount(() => {
    icons = document.querySelectorAll("header .material-symbols-outlined");
    if($page.url.pathname === "/info"){
      icons[1].classList.add("hide");
  }
});



</script>

<button
  on:click={() => {
    goto(path);
  }}
>
  <span class="material-symbols-outlined">
    {name}
  </span>
</button>

<style>
  button {
    background-color: transparent;
    border: none;
    font-size: large;
    cursor: pointer;
    color: white;
  }
  .material-symbols-outlined {
    font-size: 1.6em;
  }
 :global(.hide){
    opacity: 0;
 }
</style>
