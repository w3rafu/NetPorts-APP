<!-- @format -->
<script>
  import { goto } from "$app/navigation";
  import { CURRENT_SEARCH } from "$lib/state";

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
        placeholder="420"
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
    on:click={() => {
      if ($CURRENT_SEARCH.port) {
        goto(`/results?port=${$CURRENT_SEARCH.port}&protocol=${$CURRENT_SEARCH.protocol}`);
      } else {
        alert("Please enter a port number");
        let input = document.querySelector("input")
        if(input){
            input.focus()
            input.classList.add('error')
        };
      }
    }}
  >
    Show me!
  </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
  }
  .card {
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin-top: 15px;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
  }
  h4 {
    font-weight: bold;
    margin-bottom: 0.4em;
    text-align: center;
    color: aliceblue;
  }

  input,
  select {
    border: none;
    padding: 0.3em;
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.7em;
    border-radius: 7px;
    color: rgb(31, 26, 69);
    background-color: rgb(255, 255, 255);
  }
  input {
    width: 80%;
  }

  select {
    border-radius: 7px;
    width: 80%;
  }

  .search {
    color: white;
    border: none;
    padding: 1em 2em;
    background-color: #009432;
    font-weight: bold;
    border-radius: 7px;
    font-size: large;
    width: 90%;
    text-decoration: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }
  :global(.error) {
    background-color: rgb(220, 94, 94) !important;
  }
</style>
