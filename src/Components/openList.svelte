<script>
    // stores
    import { lists } from "../stores.js";
    // components
    import ItemList from "./itemList.svelte";
    import ListMenu from "./listMenu.svelte";

    let list;
    let unsubscribe = lists.subscribe(value => {
        list = value;
    });

    let test = true;

    export let openListID = 0;

    // async const getIDone(iID, opID) {
    //     return await $lists[opID].lItems[iID].iDone;
    // }
</script>

<div class="">
    <ListMenu/>
</div>
<div class="">
    {#each list[openListID].lItems as item }
    <div class="flex flex-row justify-between p-2 border-b-2 mx-2 items-center">
        <div class="">
            <img src="{item.iIcon}" alt="Icon" width="40px">
        </div>
        <div class="text-2xl bg-green-400 drop-shadow-lg">
            {item.iName}
            
        </div>
        <div class="flex place-content-center">
            <div class="mr-5 bg-green-400 text-2xl rounded-full px-2 drop-shadow-lg">{item.iAmount}</div>
            
            <label class="container scale-125 drop-shadow-lg">
                <input type="checkbox" bind:checked={$lists[openListID].lItems[item.iID].iDone}>   
                <span class="checkmark"></span>
            </label>
            <label for="" class="width-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            </label>
        </div>
        
    </div>
    {/each}
</div>