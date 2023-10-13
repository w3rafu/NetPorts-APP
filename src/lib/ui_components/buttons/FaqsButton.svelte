<script>
    import { createEventDispatcher } from "svelte";
    import { goto } from "$app/navigation";
    let dispatch = createEventDispatcher();
</script>

<button on:click={() => {
    dispatch('tabs')
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
        padding: 1em;
        border-radius: 7px;
        border: none;
        font-size: large;
        cursor: pointer;
        color: white;
        font-weight: bold;
        margin-bottom: 1.9em;
    }
</style>