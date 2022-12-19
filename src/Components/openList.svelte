<script>
    // stores
    import { lists, profileState, editState, selectedItem, memberState} from "../stores.js";
    import { searchState, searchQuery } from "../stores.js";
    // components
    import ItemList from "./itemList.svelte";
    import ListMenu from "./listMenu.svelte";
    import EditItem from "./editItem.svelte";
    import Member from "./member.svelte";


    let list;
    let unsubscribe = lists.subscribe(value => {
        list = value;
    });

    let test = true;

    export let openListID = 0;

    function handleEditPop(id) {
        editState.set(true);
        selectedItem.set(id);
    }

</script>

{#if $editState}
    <div class="z-10 fixed h-screen w-screen"><EditItem /></div>
{/if}

{#if $memberState}
    <div class="z-10 fixed h-screen w-screen"><Member /></div>
{/if}

<div class="">
    <ListMenu/>
</div>
<div class="animate-in slide-in-from-bottom duration-700">
    {#each list[openListID].lItems as item }

    {#if $searchQuery == "" || item.iName.toLowerCase().includes($searchQuery.toLowerCase())}
    
    <div class="flex flex-row justify-between p-2 border-b-2 mx-2 items-center">
            <div class="">
                <img src="{item.iIcon}" alt="Icon" width="40px">
            </div>
            <button on:click={() => handleEditPop(item.iID)}>
                <div class="text-2xl bg-green-400 drop-shadow-lg">
                    {item.iName}
                </div>
            </button>
            <div class="flex place-content-center">
                <div class="mr-5 bg-green-400 text-2xl rounded-full px-2 drop-shadow-lg">{item.iAmount}</div>
                
                <label class="container scale-125 drop-shadow-lg">
                    <input type="checkbox" bind:checked={$lists[openListID].lItems[item.iID].iDone}>   
                    <span class="checkmark"></span>
                </label>
            </div>
    </div>
    {/if}
    {/each}
</div>

