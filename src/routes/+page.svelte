<!-- @format -->
<script>
  //Get app state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/state";

  //Import UI components
  import SearchForm from "$lib/ui_components/other/SearchForm.svelte";
  import Tabs from "$lib/ui_components/Tabs.svelte";

  //Set current page title
  $PAGE_TITLE = "NetPorts";

  //Set default search protocol to TCP
  $CURRENT_SEARCH.protocol = "TCP";
</script>

<!--
  APP HomePage
-->
<h1>
  Lookup the service associated with a Transfer Protocol Port
  Number
</h1>
<SearchForm />
<Tabs />

<style>
  h1 {
    font-size: 1em;
    font-weight: 500;

    margin-bottom: 1em;
    padding: 1em 1em;
    border-radius: 7px;

    text-align: center;
  }

  @media (max-width: 768px) {
    h1 {
      width: 100%;
    }
  }
</style>
