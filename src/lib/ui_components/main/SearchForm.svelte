<!-- @format -->
<script>
  /**
   * This file controls the form to search for a port number
  */

  //Import Utilities
  import { goto } from "$app/navigation";
  //Import state
  import { CURRENT_SEARCH } from "$lib/utilities/state";

  //Variable to show/hide the searching message
  $: searching = false;

  //Function to run when the user clicks the search button
  //It will set the searching variable to true
  //And then it will redirect the user to the results page
  //With the port number and protocol that the user entered
  //If the user didn't enter a port number, it will show an alert
  //And focus on the input field and add an error class to it
  function search() {
    if ($CURRENT_SEARCH.port) {
      searching = true;
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
  }

</script>

<!--
  The search form component
-->
<section id="search-form">
  <div class="card">
      <!-- The title -->
    <div>
      <h1>Lookup information transport services and related CVE's</h1>
    </div>
      <!-- The Port Number -->
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
    <!-- The protocol -->
    <div>
      <h4>Protocol:</h4>
      <select bind:value={$CURRENT_SEARCH.protocol}>
        <option value="udp">UDP</option>
        <option value="tcp" selected>TCP</option>
        <option value="any">ANY</option>
      </select>
    </div>
  </div>
  <!-- The search button -->
  <button
    class="search"
    class:searching={searching === true}
    on:click={search}
  >
    {#if searching}
      Searching...
    {:else}
      Show me!
    {/if}
  </button>
</section>

<style>
  h1 {
    font-size: 1.2em;
    color: rgb(207, 229, 248);
    margin: 0.5em 0;
  }
  #search-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-bottom: 2em;
  }
  .card {
    align-items: center;
    display: grid;
    background-color: #081122ac;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    text-align: center;
    justify-content: center;
    padding: 0.4em 1em 0.5em;
    width: 80%;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
  h4 {
    font-weight: bold;
    font-size: 0.8em;
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
    text-align: center;
  }

  input::placeholder {
    color: rgb(255, 255, 255);
  }

  input:focus {
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
    .card,
    .search {
      width: 100%;
    }
    #search-form {
      width: 100%;
    }
  }
  :global(.error) {
    background-color: #ed4c67 !important;
    box-shadow: 0 0 20px #ed4c67 !important;
  }
  .searching {
    background-color: #c4e538 !important;
    box-shadow: 0 0 20px #c4e538 !important;
    color: var(--darkblue);
  }
</style>
