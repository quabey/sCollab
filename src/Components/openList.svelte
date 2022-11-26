<!-- Todo: add header, add list  -->
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
    <label for="">
        <input type="checkbox" bind:value={$lists[openListID].lItems[item.iID].iDone} />  
        {item.iName}
        {item.iDone}
        {$lists[openListID].lItems[item.iID].iDone}
    </label>
    {/each}
</div>