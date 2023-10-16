<!-- @format -->
<script>
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/utilities/state";
  import { page } from "$app/stores";
  import ButtonHeader from "../buttons/ButtonHeader.svelte";
</script>


  <header

  >
    <div class="title">
      <!--Settings Button-->
      {#if $page.url.pathname === "/"}
        <ButtonHeader name="Settings" path="/settings" />
      {:else}
        <!--Go Back Button-->
        <ButtonHeader name="arrow_back_ios" path="/" />
      {/if}

      <!--Page Title-->
      <h2 class:resultPage={$page.url.pathname === "/results"}>
        {$PAGE_TITLE}
      </h2>

      <!--Info Button-->
      <ButtonHeader name="help" path="/info" />
    </div>
  </header>


<style>
  header {
    align-items: center;
    background-color: #081122d5;
    color: white;
    display: flex;
    justify-content: space-between;
    grid-area: header;
    padding: 1em;
    backdrop-filter: blur(3px);
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

  .result {
    width: 100%;
    padding: 1.5em 1em;
  }
  .result h2 {
    text-shadow: none !important;
  }

  .resultPage {
    text-transform: uppercase;

  }
</style>
