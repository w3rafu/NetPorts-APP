<!-- @format -->
<script>
  import { page } from "$app/stores";
  import GoogleIcon from "./other/GoogleIcon.svelte";
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
  </a>
</nav>

<style>
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
    background-color: var(--darkblue);
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin: 1em;
    border-radius: 7px;
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

  a:nth-child(1) {
    border-radius:  7px 0 0 7px ;
  }


 a:nth-child(3) {
    border-radius: 0 7px 7px 0;
  }
</style>
