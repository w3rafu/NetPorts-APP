<!-- @format -->
<script>
  import GoogleIcon from "./GoogleIcon.svelte";
</script>

<section id="social">
    <button>
        <GoogleIcon size={"1.5em"} name={"share"} />
        Share
    </button>
    <button>
        <GoogleIcon size={"1.5em"} name={"favorite"} />
        Favorite
    </button>
    <button>
        <GoogleIcon size={"1.5em"} name={"home"} />
        Home
    </button>
</section>

<style>
    #social {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        background-color: var(--darkblue);
        border-radius: 7px;
        margin-top: .4em;
    }
    #social button{
        align-items: center;
        display: flex;
        gap: .3em;
        font-weight: bold;
        cursor: pointer;
        background-color: transparent;
        color: white;
        border:none;
        padding: 1em 2em;
        width: 33%;
        text-align: center;
        justify-content: center;
    }

    #social span:hover {
        opacity: 1;
    }


    
</style>