<!-- @format
  
<script>
  import { afterNavigate } from "$app/navigation";
  import { CURRENT_SEARCH } from "$lib/utilities/state";
  import { onMount } from "svelte";
  import GoogleIcon from "./GoogleIcon.svelte";
  import { fade } from "svelte/transition";

  /**
   * @type {any}
   */
  export let data;

  // Get CVE data from NIST
  //We are searching the port number as
  //a keyword in the NIST database
  async function getCVE() {
    //Port to request
    let port = data.result.port;
    //NIST API endpoint
    let nist = `https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Port%20${port}%20$&keywordExactMatch`;
    //Fetch the data
    let response = await fetch(nist);
    //Convert the response to JSON
    let json = await response.json();
    //Get the vulnerabilities
    let items = json.vulnerabilities;

    //Get the results div
    if (items.length === 0) {
      let results = document.getElementById("cve-results");
      results.innerHTML = `<p>This port has been associated with these vulnerabilities ${port}</p>`;

      let label = document.getElementById("searching-label")
      
      if(label) label.style.display = "none";
    }


    if (items.length > 0) {
      let results = document.getElementById("cve-results");
    let title = document.getElementById("cve-label") ;
    title.innerHTML = `This port has been associated to these vulnerabilities:
      <br />`;
      results.appendChild(title);
      items.forEach((item) => {
        let div = document.createElement("div");
        document.getElementById("searching-label").style.display = "none";
        div.innerHTML = `
      <details class="cve-tab">
        <summary><h3>${item.cve.id}</h3></summary>
        <h4>Base Severity: ${item.cve.metrics.cvssMetricV2[0].baseSeverity} </h4>
      <p>${item.cve.descriptions[0].value}</p>
      </details>
      `;
        results.appendChild(div);
      });
    }
  }
  onMount(() => {
    setTimeout(() => {
      getCVE();
    }, 5000);
  });

  afterNavigate(() => {
    setTimeout(() => {
      getCVE();
    }, 5000);
  });
</script>

{#key $CURRENT_SEARCH}
  <div class="result" in:fade={{ duration: 1000 }}>
    <h2>
      <GoogleIcon size={"1.1em"} name={"quick_reference_all"} />
      From NIST CVE:
    </h2>
    <hr />
    <div class="wrapper">
      <div class="row">
        <p id="cve-label"></p>
        <div id="cve-results">
          <h3 id="searching-label">Searching...</h3>
        </div>
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
    font-size: 0.9em;
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

  :global(.cve-tab h3) {
    display: inline;
  }
  :global(.cve-tab summary){
    margin-bottom: 1em;
    cursor: pointer;
  }
  :global(#cve-label) {

    margin-bottom: 1em;
  }
</style>
 -->