<script>
    // component
    import ItemList from "./itemList.svelte";
    // functions 
    import { getTotalItems } from "../functions.js";
    import { getDoneItems} from "../functions.js";
    // stores
    import { lists, selectedList } from "../stores.js";

    function handleClick (id) {
        selectedList.set(id);
    }
</script>

<div class="">
    <div class="flex flex-row justify-between p-2 border-b-2 mx-2 items-center">
        <div class=""> 
            <img src="https://cdn-icons-png.flaticon.com/512/151/151917.png" alt="" width="52">
        </div>
        <div class="flex w-full justify-between ml-10">
            <div class="text-2xl bg-green-400 drop-shadow-lg"><h2>All items</h2></div>
            <div class="flex text-2xl bg-green-400 px-2 rounded-full drop-shadow-lg"> 
                <!-- lenght of lItems with iDone true -->
                <h2>{getDoneItems()}/{getTotalItems()}<h2>
            </div>
        </div>
    </div>

    {#each $lists as list}
    <button class="w-full" on:click={() => handleClick(list.lID)}>
        <ItemList listID={list.lID} />
    </button>
    {/each}
</div>