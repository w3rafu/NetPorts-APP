<!-- @format -->
<script>
    import { PAGE_TITLE, CURRENT_SEARCH, USER_FAVORITES } from "$lib/utilities/state";
    $PAGE_TITLE  = "Favorites";
    $CURRENT_SEARCH.status = ""
</script>

<section id="faves">
  {#each $USER_FAVORITES as favorite}
  <details class="card">
    <summary>
      <h2>
        <span class="accent">{favorite.services}</span>
        port {favorite.port}
      </h2>
      <button class="delete"
        on:click={() => {
          USER_FAVORITES.update((faves) => {
            return faves.filter((fave) => fave.port !== favorite.port);
          });
        }}
      
      >X</button>
    </summary>
  </details>
{/each}
</section>


<style>
  #faves{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5em;
  }
  .card {
    background-color: var(--ui);
    width: 100%;
    padding: 1em 1em;
    border-radius: 7px;
  }
  summary{
    justify-content: space-between;
  }
  summary h2 {
    display: inline;
  }
  .delete{
    background: none;
    color: white;
    border: none;
    color: var(--lime);
    font-weight: 600;
    font-size: .8em;
    background-color: var(--lime);
    color: black;
    padding: .2em .5em;
    border-radius: 50%;

  }
  .accent {
    color: var(--lime)
  }
</style>