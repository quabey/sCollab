<script>
  import MoreButton from "./Components/moreButton.svelte";
  import Navbar from "./Components/navbar.svelte";
  import ListList from "./Components/listList.svelte";
  import OpenList from "./Components/openList.svelte";
  import { selectedList } from "./stores";
</script>

<Navbar />
<div class="absolute bottom-2 right-2 scale-110">
  <MoreButton />
</div>
{#if $selectedList == 999}
  <ListList />
{:else}
  <OpenList openListID = {$selectedList}/>
{/if}
