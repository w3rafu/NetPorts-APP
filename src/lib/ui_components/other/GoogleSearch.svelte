<!-- @format -->
<script>
  //UI Components
  import GoogleIcon from "$lib/ui_components/other/GoogleIcon.svelte";

  //Search Helpers
  import { getResults, limit } from "$lib/utilities/search";

  //Information from the parent component
  /**
   * @type {any}
   */
  export let data;

  //Whether the user wants to search more about the port
  let searchMore = false;

  //The results from google search
  /**
   * @type {any[]}
   */
  let googleResults = [];

  //Function to run when the user clicks the search button
  async function handleSearch() {
    //Set the state to true
    searchMore = true;

    //Get the results from google search (src/lib/utilities/search.js)
    let results = await getResults(
      data.result.services,
      data.result.port,
      data.result.protocol
    );
    //Create a copy of the results
    googleResults = [...results];

    //Hide the search buttons and title
    let buttons = document.getElementById("search-button");
    let title = document.getElementById("google-title");
    if (buttons)
    buttons.style.display = "none";
    if(title)
    title.style.display = "none";
  }
</script>

<!--
  Add Google Search script to the head of the document
-->
<svelte:head>
  <script
    async
    src="https://cse.google.com/cse.js?cx=d3d7b8c07e9dd4029"
  ></script>
</svelte:head>

<!--
  The Google Results card
-->
<div class="result" id="google">
  <!--Title-->
  <h2>
    <GoogleIcon size={"1.1em"} name={"travel_explore"} />
    From Google:
  </h2>
  <hr />

  <div class="wrapper">

    <!-- If not searching yet -->
    <h3 id="google-title">
      Would you like more information about
      <span class="accent">{data.result.services}</span>
      port <span class="accent">{data.result.port} </span>?
    </h3>

    <!-- Search button -->
    <button id="search-button" on:click={handleSearch}>
      {#if searchMore}
        Searching...
      {:else}
        Yes, please do a search
      {/if}
    </button>

    <!--If searching-->
    {#if searchMore}
      <p class:hide={searchMore === true}>Search Results</p>
      <!--For each result-->
      {#each googleResults as result}
        <div class="google-result">
          <a href={result.link} target="_blank">
            <h3>{result.title}</h3>
          </a>
          <small class="link">{result.formattedUrl}</small>
          <p>{limit(result.snippet, 120)}</p>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .link {
    color: var(--lime);
  }
  .result {
    display: grid;
    grid-template-columns: 1fr;
    background-color: var(--ui);
    backdrop-filter: blur(3px);
    width: 100%;
    border-radius: 7px;
    padding: 1.5em;
    margin-top: 0.3em;
    margin-bottom: 1em;
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    .result {
      width: 100%;
    }
  }
  .google-result {
    margin-bottom: 1em;
  }

  #search-button {
    background-color: var(--lightblue);
    color: white;
    border: none;
    border-radius: 7px;
    padding: 0.5em 1em;
    font-size: 1em;
    font-weight: bold;
    margin: 1em 0;
    cursor: pointer;
    box-shadow: 0 0 20px var(--lightblue);
  }

  #search-button:hover {
    background-color: var(--lime);
    color: var(--darkblue);
    box-shadow: 0 0 20px var(--lime);
  }

  .accent {
    color: var(--lime);
    font-weight: 600;
  }
  .hide {
    display: none;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }
  h3 {
    font-weight: 400;
  }
</style>
