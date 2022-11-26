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
    <div class="flex flex-row justify-between p-2 border-b-2 mx-2 h">
        <div class="">
            <img src="{item.iIcon}" alt="Icon">
        </div>
        <div class="">
            {item.iName}
            {item.iAmount}
        </div>
        <div class="">
            <label class="container">
                <input type="checkbox" bind:checked={$lists[openListID].lItems[item.iID].iDone}> 
                <span class="checkmark"></span>
            </label>
        </div>
        
    </div>
    {/each}
</div>