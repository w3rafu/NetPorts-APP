<!-- @format -->
<script>
  //Import APP state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/utilities/state";

  //Import UI components
  import GoogleSearch from "$lib/ui_components/other/GoogleSearch.svelte";
  import ResultPagination from "$lib/ui_components/main/ResultPagination.svelte";

  //Lifecycle Utility
  import { onMount } from "svelte";
  import IANAresult from "$lib/ui_components/other/IANAresult.svelte";
  import { afterNavigate } from "$app/navigation";

  //Receive data from the load function (page.server.js)
  export let data;

  //Set current search state to the data that was passed after calling firebase
  onMount(() => {
    //If there was an error, set the page title to "Error"
    if (data.result.status === "error") {
      $PAGE_TITLE = "Error";
      $CURRENT_SEARCH.status = "error";
    }
  });
  
  //Set the page title to the port number
  $PAGE_TITLE = `Port ${data.result.port}, ${data.result.protocol}`;

  afterNavigate(() => {
    $PAGE_TITLE = `Port ${data.result.port}, ${data.result.protocol}`;
  });

  console.log($CURRENT_SEARCH);
</script>

<!--
    The Results page is the page that shows the results of the search
 -->
<!--If there is an error, display the error description-->
{#key data.result.port}
  {#if data.result.status === "error"}
    <h2>{data.result.description}</h2>
  {:else}
    <div class="result">
      <!--If there is no error, display the results-->
      <IANAresult {data} />
      <!--Google search option-->
      <GoogleSearch {data} />
    </div>
    <!--Move to nearby ports-->
    <ResultPagination
      port={data.port}
      protocol={data.protocol}
    />
  {/if}
{/key}
<style>
  .result{
    width: 80%;
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
