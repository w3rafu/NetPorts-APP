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
    <span class="material-symbols-outlined">
       person_raised_hand
    </span>
    FAQ's
</button>

<style>
    button {
        display: flex;
        gap: .5em;
        background-color: rgba(0, 0, 0, 0.353);
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
        background-color: #0b0822;
    }

    .active {
        background-color: #0b0822;
    }
</style>