<!-- @format -->
<script>
  //Get app state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/state";

  //Import UI components
  import SearchForm from "$lib/ui_components/other/SearchForm.svelte";
  import Tabs from "$lib/ui_components/Tabs.svelte";
  import FaqsButton from "$lib/ui_components/buttons/FaqsButton.svelte";

  //Set current page title
  $PAGE_TITLE = "NetPorts";

  //Set default search protocol to TCP
  $CURRENT_SEARCH.protocol = "TCP";
  $CURRENT_SEARCH.status = "";

  $: faqs = false;

</script>

<!--
  APP HomePage
-->
<h1 id="top">
  Lookup the service associated with a Transfer Protocol Port
  Number
</h1>
<SearchForm />

<FaqsButton on:tabs={()=>{
  faqs = !faqs
}}/>

{#if faqs}
  <Tabs />
{/if}


<style>
  h1 {

    font-weight: 500;
    font-size: 1em;
    padding: 0.1em 1em 1em;
    border-radius: 7px;
    text-align: center;
    width: 60ch;
    color: aliceblue;
  }

  @media (max-width: 768px) {
    h1 {
      width: 100%;
    }
  }
</style>
