<!-- @format -->
<!--
  This file controls the structure of the app
-->
<script>
  //Import utils
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  //import UI components
  import Footer from "$lib/ui_components/main/Footer.svelte";
  import Header from "$lib/ui_components/main/Header.svelte";
</script>

<!--
  Temporal import for Google Icons
-->
<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<!--
  APP STRUCTURE
-->

<Header />
  {#key $page.url.pathname}
    <main in:fade={{duration: 500, delay: 100}}>
      <div class="content-wrapper">
        <slot />
      </div>
    </main>
  {/key}
<Footer />

<!--
  Import Stylesheet
-->
<style>
    @import url("../app.css");
</style>
