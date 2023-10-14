<!-- @format -->
<script>
//UI Components
  import GoogleIcon from "$lib/ui_components/other/GoogleIcon.svelte";
  import {getResults} from "$lib/search";

  //Information from the parent component
  /**
   * @type {{ result: { services: any; port: any; }; }}
   */
   export let data;

  //Whether the user wants to search more about the port
  let yes = false;

  //Hides the google search box
  //When the user clicks "No, thanks"
  const noThanks = () => {
    let box = document.getElementById("google");
    if (box) box.style.display = "none";
  };

  let googleResults = [];

  function limit(string, limit) {  
    return string.substring(0, limit)
}
</script>

<svelte:head>
  <script async src="https://cse.google.com/cse.js?cx=d3d7b8c07e9dd4029"></script>
</svelte:head>

<div class="result" id="google">
  <h2>
    <GoogleIcon size={"1.3em"} name={"travel_explore"} />
    From Google:
  </h2>
  <hr />
  <div class="wrapper">
    <h3 id="google-title">
      Would you like to search more about
      <span class="accent">{data.result.services}</span>
      port <span class="accent">{data.result.port} </span>?
    </h3>

    <div class="buttons">
      <button
        class="search-button"
        on:click={async () => {
            let results = await getResults(data.result.services)
           googleResults = [...results];
           yes = true;
          let buttons = document.querySelector(".buttons");
          let title = document.querySelector("#google-title");
            //@ts-ignore
          if (buttons) buttons.style.display = "none";
           //@ts-ignore
          if (title) title.style.display = "none";
        }}>Yes</button
      >
      <button on:click={noThanks} class="search-button">No, thanks</button>
    </div>
    {#if yes}
      <p class:hide={yes === true}>Search Results</p>
      <div class="gcse-search"></div>
      {#if yes}
        {#each googleResults as result}
          <div class="google-result">
            <a href={result.link} target="_blank">
              <h3>{result.title}</h3>
            </a>
            <p>{limit(result.snippet, 100)}</p>
          </div>
        {/each}
      {/if}
    {/if}
  </div>
</div>

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
  .google-result {
    margin-bottom: 1em;
  }

  .search-button {
    background-color: var(--lightblue);
    color: white;
    border: none;
    border-radius: 7px;
    padding: 0.5em 1em;
    font-size: 1em;
    font-weight: bold;
    margin: 0.5em 0;
    cursor: pointer;
    box-shadow: 0 0 20px var(--lightblue);
  }
  .buttons {
    display: flex;
    gap: 1em;
    margin-top: 10px;
  }

  .accent {
    color: var(--green);
  }
  .hide {
    display: none;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: .3em
  }
</style>
