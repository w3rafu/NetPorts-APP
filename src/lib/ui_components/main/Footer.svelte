<!-- @format -->
<script>
  import { page } from "$app/stores";
  import GoogleIcon from "../other/GoogleIcon.svelte";
  import { USER_FAVORITES } from "$lib/utilities/state";
  import {fade } from "svelte/transition";
</script>

<nav>
  <!--Search Page-->
  <a
    href="/"
    class:active={$page.url.pathname === "/" ||
      $page.url.pathname === "/results"}
  >
    <GoogleIcon name="mystery" size={"1.6em"} /> <span>Search</span>
  </a>

  <!--List Page-->
  <a href="/list" class:active={$page.url.pathname === "/list"}>
    <GoogleIcon name="lists" size={"1.6em"} /> <span>List</span>
  </a>

  <!--Favorites Page-->
  <a href="/favorites" class:active={$page.url.pathname === "/favorites"}>
    <GoogleIcon name="favorite" size={"1.6em"} /> <span>Favorites</span>

      {#if $USER_FAVORITES.length > 0}
      <div class="bubble" transition:fade={{duration: 500}}>
        {$USER_FAVORITES.length}
      </div>
      {/if}
   
  </a>
</nav>

<style>
  .bubble {
    position: absolute;
    background-color: var(--pink);
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-size: 0.8em;
    margin-right: -40px;
    margin-top: -35px;
    padding: .3em 0 .2em;
    font-weight: bold;
  }
  .active {
    background-color: var(--lightblue);
    color: white;
    font-weight: bold;
    animation: fade 0.1s ease-in-out;

  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  nav {
    align-items: center;
    background-color: #081122d5;
    display: flex;
    justify-content: space-evenly;
    text-align: center;


  }

  a {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    width: 100%;
    border: none;
  }

</style>
