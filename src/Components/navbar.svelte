<script>
    // component
    import ItemList from "./itemList.svelte";
    // functions 
    import { getTotalItems, getDoneItems } from "../functions.js";
    // stores
    import { users, lists, selectedList, profileState, userID, settingsState, listSettingState} from "../stores.js";

    function handleProfile (event) {
        profileState.set(true);
        listSettingState.set(false);
    }

    function handleSettings() {
        settingsState.set(true);
        listSettingState.set(false);
    }
</script>

<style>

</style>

<div class="w-full bg-green-400 h-20 pt-5 sticky top-0 flex justify-between">
    <button on:click={() => handleSettings()}>
        <div class="ml-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="search" width="40px">
        </div>
    </button>
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
            <img src="{$users[$userID].profileImg}" alt="profile" width="40px" class="rounded-full">
            {:else}
            <img src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png" alt="logged out" width="40px">
        {/if}
            
        </div>
    </button>
</div>