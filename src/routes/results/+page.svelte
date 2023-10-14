<!-- @format -->
<script>
  //Import APP state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/state";
  import GoogleSearch from "$lib/ui_components/GoogleSearch.svelte";
  import GoogleIcon from "$lib/ui_components/other/GoogleIcon.svelte";
  import Share from "$lib/ui_components/other/Share.svelte";
  import { query } from "firebase/firestore";
  //Lifecycle Utility
  import { onMount } from "svelte";

  //Receive data from firebase
  export let data;
  console.log(data);

  //Set current search state
  //to the data that was passed from firebase
  onMount(() => {
    //If there was an error, set the page title to "Error"
    if (data.result.status === "error") {
      $PAGE_TITLE = "Error";
      $CURRENT_SEARCH.status = "error";
    } else {
      //If not set current page title
      //With the protocol and port number that the user searched for
      $PAGE_TITLE = data.protocol + " " + data.port;
      $CURRENT_SEARCH.status = "success";
    }
  });



  let yes = false;
</script>

<!--
    The Results page is the page that shows the results of the search
 -->

{#if data.result.status === "error"}
  <h2>{data.result.description}</h2>
{:else}
  <div class="result">
    <h2>
      <GoogleIcon size={"1.3em"} name={"quick_reference_all"} />
      From IANA:
    </h2>
    <hr />
    <div class="wrapper">
      <!--
        Service Name
      -->
      <div class="row">
        <h3>Service Name:</h3>
        {#if data.result.services !== ""}
          <p>{data.result.services}</p>
        {:else}
          <p>None</p>
        {/if}
      </div>
      <!--
        Service Description
      -->
      <div class="row">
        <h3>Description:</h3>
        <p>{data.result.description}</p>
      </div>
      <!--
        Registration Date
      -->
      <div class="row">
        <h3>Registration:</h3>
        {#if data.result.registrationDate !== ""}
          <p>{data.result.registrationDate}</p>
        {:else}
          <p>Not Specified</p>
        {/if}
      </div>
      <!--
        Modification Date
      -->
      <div class="row">
        {#if data.result.modificationDate !== ""}
          <h3>Modified:</h3>
          <p>{data.result.modificationDate}</p>
        {/if}
      </div>

      <!--
        Reference
      -->
      <div class="row">
        {#if data.result.modificationDate !== ""}
          <h3>Reference:</h3>
          <a href={data.result.referenceLink} target="_blank"
            >{data.result.reference}</a
          >
        {/if}
      </div>
    </div>
  </div>
  <GoogleSearch {data} />
{/if}

<Share />

<style>



  .result {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--darkblue);
    width: 100%;
    border-radius: 7px;
    padding: 1.5em;
    margin-top: 0.3em;
    margin-bottom: 1em;
    font-size: 1em;
  }

  .row {
    align-items: center;
    display: flex;
    gap: 0.5em;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }

 

  a {
    color: var(--lightblue);
  }


</style>
