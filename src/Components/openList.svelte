<script>
    import { lists } from "../stores.js";
    import ItemList from "./itemList.svelte";

    let list;
    let unsubscribe = lists.subscribe(value => {
        list = value;
    });

    export let openListID = 0;
</script>


<div class="">
    {#each list[openListID].lItems as item }
    <div class="flex flex-row justify-between p-2 border-b-2 mx-2 items-center">
        <div class="">
            <img src="{item.iIcon}" alt="Icon" width="40px">
        </div>
        <div class="text-2xl bg-green-400 place-content-center align-middle ">
            {item.iName}
            
        </div>
        <div class="flex place-content-center">
            <div class="mr-5 bg-green-400 text-2xl rounded-full px-2 align-middle">{item.iAmount}</div>
            
            <label class="container scale-125">
                <input type="checkbox" bind:checked={$lists[openListID].lItems[item.iID].iDone}> 
                <span class="checkmark"></span>
            </label>
        </div>
        
    </div>
    {/each}
</div>