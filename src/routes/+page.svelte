<!-- @format -->
<script>
  //Get app state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/utilities/state";

  //Import UI components
  import SearchForm from "$lib/ui_components/main/SearchForm.svelte";
  import Tabs from "$lib/ui_components/main/Tabs.svelte";
  import FaqsButton from "$lib/ui_components/buttons/FaqsButton.svelte";

  //Set current page title
  $PAGE_TITLE = "NetPorts";

  //Set default search protocol to TCP
  $CURRENT_SEARCH.protocol = "tcp";

  //Resets the search status in case of returning to the home page
  $CURRENT_SEARCH.status = "";

  //Conditional variable to show/hide faqs
  $: faqs = false;
</script>

<!--
  APP HomePage Structure
-->
<SearchForm />
<!--Button to show/hide faqs-->
<FaqsButton
  on:clicked={() => {
    faqs = !faqs;
  }}
/>
<!--Tabs component-->
{#if faqs}
  <Tabs />
{/if}
