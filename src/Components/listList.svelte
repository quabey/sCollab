<script>
    // component
    import ItemList from "./itemList.svelte";
    // functions 
    import { getTotalItems, getDoneItems } from "../functions.js";
    import { handleUserID, handleSelectedList } from "../handler.js";
    // stores
    import { lists, selectedList } from "../stores.js";
</script>

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
    <button class="w-full" on:click={() => handleSelectedList(list.lID)}>
        <ItemList listID={list.lID} />
    </button>
    {/each}
</div>