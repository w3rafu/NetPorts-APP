<!-- @format -->
<script>
  import { goto } from "$app/navigation";
  import { CURRENT_SEARCH } from "$lib/state";

  $: searching = false;
</script>

<div class="container">
  <div class="card">
    <div>
      <h4>Port number:</h4>
      <input
        type="number"
        bind:value={$CURRENT_SEARCH.port}
        min="0"
        max="1024"
        placeholder="e.g. 420"
      />
    </div>
    <div>
      <h4>Protocol:</h4>
      <select bind:value={$CURRENT_SEARCH.protocol}>
        <option value="UDP">UDP</option>
        <option value="TCP" selected>TCP</option>
        <option value="ANY">ANY</option>
      </select>
    </div>
  </div>
  <button
    class="search"
    class:searching={searching === true}
    on:click={() => {
      if ($CURRENT_SEARCH.port) {
        searching = true
        goto(
          `/results?port=${$CURRENT_SEARCH.port}&protocol=${$CURRENT_SEARCH.protocol}`
        );
      } else {
        alert("Please enter a port number");
        let input = document.querySelector("input");
        if (input) {
          input.focus();
          input.classList.add("error");
        }
      }
    }}
  >
  {#if searching}
    Searching...
  {:else}
    Show me!
  {/if}
  
  </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2em;
  }
  .card {
    align-items: center;
    display: grid;
    background-color: rgba(0, 0, 0, 0.353);
    grid-template-columns: 1fr 1fr;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    text-align: center;
    justify-content: center;
    padding: .6em 1em .4em;
    width:80%;
    backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
  }
  h4 {
    font-weight: bold;
    font-size: .8em;
    letter-spacing: 0.05em;
    margin-bottom: 0.4em;
    text-align: center;
    color: rgb(170, 214, 253);
  }

  input,
  select {
    cursor: pointer;
    border: none;
    padding: 0.1em 0.3em;
    font-size: 1.7em;
    font-weight: bold;
    margin-bottom: 0.7em;
    border-radius: 7px;
    color: rgb(255, 255, 255);
    background-color: var(--lightblue);
    box-shadow: 0 0 20px var(--lightblue);
    height: 70px;
  }

  input:focus{
    background-color: var(--lightblue);
    outline: none;
    border: none;
  }
  input,
  select {
    width: 90%;
  }

  select:hover {
    background-color: var(--lightblue);
  }
  @media (max-width: 768px) {
    input,
    select {
      width: 90%;
      height: 55px;
      text-align: center;
    }
  }

  .search {
    cursor: pointer;
    color: white;
    border: none;
    padding: 1em 1.5em;
    background-color: #009432;
    font-weight: bold;
    font-size: large;
    width: 80%;
    text-decoration: none;
    display: block;
    text-align: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    box-shadow: 0 0 20px #009432;

  }

  .search:hover {
    background-color: #009432;

  }

  @media (max-width: 768px) {
    .card {
      grid-template-columns: 1fr;
    }
    .card, .search {
      width: 90%;
    }
  }
  :global(.error) {
    background-color: #ED4C67!important;
    box-shadow: 0 0 20px #ED4C67!important;
  }
  .searching {
    background-color: #C4E538 !important;
    box-shadow: 0 0 20px #C4E538 !important;
    color: var(--darkblue);
  }
</style>
