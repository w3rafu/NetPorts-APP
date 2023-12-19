<!-- @format -->
<script>
    import { PAGE_TITLE, CURRENT_SEARCH } from "$lib/utilities/state";
    $PAGE_TITLE  = "Port List";
    $CURRENT_SEARCH.status = ""

    import PortList from "$lib/ui_components/main/PortList.svelte";
</script>

  <PortList />