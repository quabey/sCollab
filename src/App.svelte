<script>
  // Components
  import MoreButton from "./Components/moreButton.svelte";
  import Navbar from "./Components/navbar.svelte";
  import ListList from "./Components/listList.svelte";
  import OpenList from "./Components/openList.svelte";
  import Profile from "./Components/profile.svelte";
  import Settings from "./Components/settings.svelte";

  // Stores
  import { selectedList, profileState, settingsState } from "./stores";
</script>

{#if $settingsState}
<div class="z-10 absolute h-screen w-screen"><Settings /></div>
  
{/if}


{#if $profileState}
<div class="absolute h-screen w-screen z-10">
  <Profile />
</div>
{/if}

<div class="sticky">
  <Navbar />
</div>

<div class="absolute bottom-2 right-2 scale-110 z-10">
  <MoreButton />
</div>
{#if $selectedList == null}
  <ListList />
{:else}
  <OpenList openListID = {$selectedList}/>
{/if}



