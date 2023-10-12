<!-- @format -->
<script>
  //Import APP state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/state";
  import { onMount } from "svelte";

  //Import data from "server"
  export let data;
  console.log(data);
  //Set current search to the data that was passed from the server
  onMount(() => {
    //If there was an error, set the page title to "Error"
    if (data.result.status === "error") {
      $PAGE_TITLE = "Error";
    } else {
      //If not set current page title
      //With the protocol and port number that the user searched for
      $PAGE_TITLE = data.protocol + " " + data.port;
    }
  });
</script>

<!--
    The Results page is the page that shows the results of the search
 -->

<div class="content-wrapper">
  {#if data.result.status === "error"}
    <h2>{data.result.description}</h2>
  {:else}
    <div class="result">
      <h1>{data.result.port}</h1>
      <h2>{data.result.protocol}</h2>
      <p>{data.result.description}</p>
    </div>
  {/if}
</div>
