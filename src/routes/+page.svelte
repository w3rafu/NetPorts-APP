<!-- @format -->
<!--
  APP HomePage
-->
<script>
  //Get app state
  import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/state";

  //Import UI components
  import SearchForm from "$lib/ui_components/other/SearchForm.svelte";

  //Set current page title
  $PAGE_TITLE = "NetPorts";

  //Set default search protocol to TCP
  $CURRENT_SEARCH.protocol = "TCP";
</script>


<!--
  APP HomePage
  content-wrapper limits the width of the page
  and centers it in the screen
-->

<div class="content-wrapper">
    <h1>Lookup the service associated with a Transfer Protocol Port Number</h1>
    <SearchForm />
</div>


<style>
  
  h1 {
    background-color: #0000002e;
    padding: 1em .5em;
    border-radius: 7px;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: .5rem;
    text-align: center;
    width: 60ch;
  }
  @media (max-width: 700px){
    h1{
      width: 100%;
    }
  }

</style>
