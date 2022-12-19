<script>
  // Components
  import MoreButton from "./Components/moreButton.svelte";
  import Navbar from "./Components/navbar.svelte";
  import ListList from "./Components/listList.svelte";
  import OpenList from "./Components/openList.svelte";
  import Profile from "./Components/profile.svelte";
  import Settings from "./Components/settings.svelte";
  import AddItem from "./Components/addItem.svelte";
  import ListSettings from "./Components/listSettings.svelte";

  // Stores
  import { selectedList, profileState, settingsState, listSettingState } from "./stores";
</script>

{#if $settingsState}
<div class="z-10 absolute h-screen w-screen mt-20"><Settings /></div>
  
{/if}

{#if $listSettingState}
<div class="z-10 absolute h-screen w-screen mt-20"><ListSettings /></div>
  
{/if}


{#if $profileState}
<div class="absolute h-screen w-screen z-10 animate-in slide-in-from-top duration-700 mt-20">
  <Profile />
</div>
{/if}

<div class="sticky z-9">
  <Navbar />
</div>

<div class="fixed bottom-2 right-2 scale-110 z-10">
  <AddItem />
</div>
{#if $selectedList == null}
<div class="animate-in slide-in-from-bottom duration-700">
  <ListList />
</div>
{:else}
  <div class="">
    <OpenList openListID = {$selectedList}/>
  </div>
  
{/if}

