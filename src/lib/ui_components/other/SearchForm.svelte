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
    Show me!
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
    padding: 1.3em .5em .4em;
    width:80%;

  }
  h4 {
    font-weight: 500;
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
    height: 70px;
  }
  input,
  select {
    width: 90%;
  }
  @media (max-width: 768px) {
    input,
    select {
      width: 70%;
      height: 55px;
      text-align: center;
    }
  }

  .search {
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
  }

  @media (max-width: 768px) {
    .card {
      grid-template-columns: 1fr;
    }
  }
  :global(.error) {
    background-color: rgb(220, 94, 94) !important;
  }
</style>
