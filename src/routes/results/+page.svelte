<!-- @format -->
<script>
  //Import APP state
  import {
    PAGE_TITLE,
    CURRENT_SEARCH,
    PAGE_SERVICE,
  } from "$lib/utilities/state";

  //Receive data from the load function (page.server.js)
  export let data;

  //Shorcuts to the current search state
  $: port = data.result.port;
  $: protocol = data.result.protocol;
  $: services = data.result.services;
  $: status = data.result.status;
  $: description = data.result.description;

  //Import UI components
  import GoogleSearch from "$lib/ui_components/other/GoogleSearch.svelte";
  import ResultPagination from "$lib/ui_components/main/ResultPagination.svelte";

  //Lifecycle Utility
  import { onMount } from "svelte";
  import IANAresult from "$lib/ui_components/other/IANAresult.svelte";
  import { afterNavigate } from "$app/navigation";

  //Set current search state to the data that was passed by the load function
  //Before the page is loaded
  onMount(() => {
    //If there was an error, set the page title to "Error"
    if (status === "error") {
      $PAGE_TITLE = "Error";
      $CURRENT_SEARCH.status = "error";
    } else {
      //Set the page title to the port number
      $PAGE_TITLE = `Port ${port}`;
      $PAGE_SERVICE = services;
    }
  });

  //Update the header after the page is navigated to, 
  //set the page title to the port number
  afterNavigate(() => {
    $PAGE_TITLE = `Port ${port}`;
    $PAGE_SERVICE = services;
  });
</script>

<!--
    The Results page is the page that shows the results of the search
 -->

<!--If there is an error, display the error description-->
{#key port}
  {#if status === "error"}
    <h2 id="not-found">{description}</h2>
    <!--Move to nearby ports-->
    <ResultPagination {port}{protocol}{services}/>
  {:else}
    <div class="result">
      <!--If there is no error, display the results-->
      <IANAresult {data} />
      <!--Google search option-->
      <GoogleSearch {data} />
    </div>
    <!--Move to nearby ports-->
    <ResultPagination {port}{protocol}{services}/>
  {/if}
{/key}

<style>
  .result {
    width: 80%;
  }

  :global(.sname) {
    color: var(--lime);
  }
  @media (max-width: 768px) {
    .result {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .result {
      width: 100%;
    }
  }
</style>
