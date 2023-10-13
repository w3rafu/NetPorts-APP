<!-- @format -->
<script>
  import { PAGE_TITLE } from "$lib/state";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import ButtonHeader from "./buttons/ButtonHeader.svelte";
</script>
{#key $PAGE_TITLE}
<header class:result={$page.url.pathname === "/results"} >

    <div class="title" >
      <!--Settings Button-->
      {#if $page.url.pathname === "/"}
        <ButtonHeader name="Settings" path="/settings" />
      {:else}
        <!--Go Back Button-->
        <ButtonHeader name="arrow_back_ios" path="/" />
      {/if}

      <!--Page Title-->
      <h2>{$PAGE_TITLE}</h2>

      <!--Info Button-->
      <ButtonHeader name="help" path="/info" />
    </div>

</header>
{/key}
<style>
  header {
    align-items: center;
    background-color: var(--darkblue);
    color: white;
    display: flex;
    justify-content: space-between;
    grid-area: header;
    padding: 1em;
  }

  .title {
    align-items: center;
    justify-content: space-between;
    display: flex;
    gap: 0.5em;
    width: 100%;
  }
  h2 {
    font-size: 1.7em;
  }
</style>
