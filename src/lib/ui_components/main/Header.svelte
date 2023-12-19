<!-- @format -->
<script>
  import { PAGE_TITLE, CURRENT_SEARCH, PAGE_SERVICE } from "$lib/utilities/state";
  import { page } from "$app/stores";
  import ButtonHeader from "../buttons/ButtonHeader.svelte";
  import { fade } from "svelte/transition";
</script>


  <header>

    <div class="title">
      <!--Settings Button-->
      {#if $page.url.pathname === "/"}
        <ButtonHeader name="Settings" path="/settings" />
      {:else}
        <!--Go Back Button-->
        <ButtonHeader name="arrow_back_ios" path="/" />
      {/if}

  
      <!--Page Title-->
      <h2 class:resultPage={$page.url.pathname === "/results"} >
        {$PAGE_TITLE}

        {#if $page.url.pathname === "/results"}
        {#if $PAGE_SERVICE}
        <span class="sname" in:fade={{duration: 1000}}>
          -> {$PAGE_SERVICE}
        </span>

        {/if}
      {/if}
   
       
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



  .resultPage {
    text-transform: uppercase;

  }

  .sname {
    color: var(--lime);
    text-shadow: 0 0 20px var(--lime);
   
  }

  @media(max-width: 768px){
    .resultPage {
      font-size: 1.3em;
    }
  }
</style>
