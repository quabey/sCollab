<script>
    // component
    import ItemList from "./itemList.svelte";
    // functions 
    import { getTotalItems, getDoneItems } from "../functions.js";
    import { handleUserID, handleSelectedList } from "../handler.js";
    // stores
    import { lists, selectedList } from "../stores.js";
    import { userID, users, profileState } from "../stores.js";

    function handleProfile() {
        profileState.set(true);
    }
</script>

{#if $userID != null}

<div class="">
    <div class="flex flex-row p-2 border-b-2 mx-2 items-center">
        <div class="text-2xl bg-green-400 drop-shadow-lg rounded-l-full pl-2"><h2>Total:</h2></div>
        <div class="flex text-2xl bg-green-400 px-2 rounded-r-full drop-shadow-lg"> 
                <h2>
                    {getDoneItems()}/{getTotalItems()}
                </h2>
        </div>
        
    </div>

    {#each $lists as list}
        {#if $users[$userID].uLists.includes(list.lID) || $userID == 0}
            <button class="w-full" on:click={() => handleSelectedList(list.lID)}>
                <ItemList listID={list.lID} />
            </button>
        {/if}
    {/each}
</div>

{/if}
{#if $userID == null}
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl">Please login to see your lists</h1>
        <button class="bg-green-400 text-white rounded-full px-2 py-1 drop-shadow-lg" on:click={() => handleProfile()}>Login</button>
    </div>
{/if}	