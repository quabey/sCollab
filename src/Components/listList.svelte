<script>
    import { lists, selectedList } from "../stores.js";
    import ItemList from "./itemList.svelte";

    function handleClick (id) {
        selectedList.set(id);
    }
</script>

<div class="">
    {#each $lists as list}
    <button class="w-full" on:click={() => handleClick(list.lID)}>
        <ItemList listID={list.lID} />
    </button>
    {/each}
</div>