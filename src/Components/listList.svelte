<script>
    import { lists } from "../stores.js";
    import ItemList from "./itemList.svelte";
</script>

<div class="">
    {#each $lists as list}
        <ItemList listID={list.lID} />
    {/each}
</div>