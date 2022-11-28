<script>
    // component
    import ItemList from "./itemList.svelte";
    // functions 
    import { getTotalItems } from "../functions.js";
    import { getDoneItems} from "../functions.js";
    // stores
    import { lists, selectedList, profileState, userID} from "../stores.js";

    function handleProfile (event) {
        profileState.set(true);
    }
</script>

<style>

</style>

<div class="w-full bg-green-400 h-20 pt-5 sticky top-0 flex justify-between">
    <div class="ml-3">
        <img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger" width="40px">
    </div>
    <div class="">
        <h2 class="bg-white text-2xl drop-shadow-lg">
            {#if $selectedList == null}
                Your lists
            {:else}
                {$lists[$selectedList].lName}
            {/if}
        </h2>
    </div>
    <button on:click={() => handleProfile()}>
        <div class="mr-2">
            {#if $userID != null}
            <img src="https://thispersondoesnotexist.com/image" alt="profile" width="40px" class="rounded-full">
            {:else}
            <img src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png" alt="burger" width="40px">
        {/if}
            
        </div>
    </button>
    
</div>