<script>
    import { createEventDispatcher } from "svelte";
    import { goto } from "$app/navigation";
    let dispatch = createEventDispatcher();
    let open = false;

    $: if(open){
        goto("#tabs")
    } 

</script>

<button 
    class:active={open === true}
    on:click={() => {
    dispatch('tabs')
    open  = !open
    goto("#tabs")
    }}>
    {#if open === false}
    <span class="material-symbols-outlined">
        person_raised_hand
     </span>
     FAQ's
    {:else}
        X
    {/if}

</button>

<style>
    button {
        display: flex;
        gap: .5em;
        background-color: transparent;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        padding: 1em 2em;
        border-radius: 7px;
        border: none;
        font-size: large;
        cursor: pointer;
        color: white;
        font-weight: bold;
        margin-bottom: 1.9em;
    }

    button:hover{
        background-color: var(--pink);
        box-shadow: 0 0 20px var(--pink)
    }

    .active {
        background-color: var(--pink);
        box-shadow: 0 0 20px var(--pink);
    }
</style>