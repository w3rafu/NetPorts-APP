<!-- @format -->
<script>
  import { CURRENT_SEARCH } from "$lib/utilities/state";
  import GoogleIcon from "./GoogleIcon.svelte";
  import { fade } from "svelte/transition";

  /**
   * @type {any}
   */
   export let data;
</script>

{#key $CURRENT_SEARCH}
<div class="result" in:fade={{duration: 1000}}>
    <h2>
      <GoogleIcon size={"1.1em"} name={"quick_reference_all"} />
      From IANA:
    </h2>
    <hr />
    <div class="wrapper">
        <div class="row">
            <h3>Protocol:</h3>
            {#if data.result.services !== ""}
              <p class="accent">{data.result.protocol}</p>
            {:else}
              <p>None</p>
            {/if}
          </div>
      <!--
          Service Name
        -->
      <div class="row">
        <h3>Service Name:</h3>
        {#if data.result.services !== ""}
          <p class="accent">{data.result.services}</p>
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
        {#if data.result.reference !== ""}
          <h3>Reference:</h3>
          <a href={data.result.referenceLink} target="_blank"
            >{data.result.reference}</a
          >
        {/if}
      </div>
    </div>
  </div>
{/key}


<style>
    .accent {
        color: var(--lime);
        font-weight: bold;
    }
  .result {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--ui);
    backdrop-filter: blur(3px);
    width: 100%;
    border-radius: 7px;
    padding: 1.5em;

    margin-bottom: 1em;
    font-size: .9em;
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
    color: var(--lime);
  }
</style>
