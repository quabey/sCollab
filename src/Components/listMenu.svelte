<script>
    // stores
    import { lists, selectedList, buttonRight, settingsState, users, memberState, listSettingState } from "../stores.js";
    import { searchQuery, searchState } from "../stores.js";
    // components

    // functions
    function handleClick (event) {
        selectedList.set(null);
        searchQuery.set("");
        searchState.set(false);
    }

    function handleSettings (event) {
        listSettingState.set(true);
    }

    function handleMemberPop () {
        memberState.set(true);
    }

    function handleSearch () {
        searchState.set(!$searchState);
    }
</script>

<div class="bg-green-400 h-20 flex items-center justify-between">

    {#if !$buttonRight}
    <div class="ml-3 p-2 ">
        <!-- Home Button -->
        <button class="drop-shadow-lg" on:click={() => handleClick(0)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Icon" width="35px">
        </button>
    </div>
    {/if}

    <div class="flex drop-shadow-lg h-min">
        <button on:click={() => handleSearch()}>
            <div class="my-2 ml-2 bg-white rounded-l-full p-2 flex">
                <!-- Search -->
                <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="search" width="30px">
            </div>
        </button>
        <button on:click={() => handleSettings()}>
            <div class="my-2 mr-2 bg-white rounded-r-full  p-2">
                <!-- Settings -->
                <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="search" width="30px">
            </div>
        </button>
        
    </div>

    
    <!-- Colaborators -->
    {#if $lists[$selectedList].lMembers != null}
        <button on:click={() => handleMemberPop()}>
            <div class="flex bg-white rounded-full p-2 drop-shadow-lg ml-3">
                {#each $lists[$selectedList].lMembers as Memeber}
                <div class="">
                    <img src="{$users[Memeber].profileImg}" alt="" width="32px" class="rounded-full drop-shadow-md">
                </div>
                {/each}
            </div>
        </button>
        {:else}
            <div class="bg-white text-xl p-2 rounded-full drop-shadow-lg">
                Collab
            </div>
    {/if}

    
    <!-- Sort Button -->
    <div class="flex text-xl bg-white rounded-full p-2 ml-2 gap-2 drop-shadow-lg">
        <h2>Sort</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" alt="" width="20px">
    </div>
    
        {#if $buttonRight}
    <div class="mr-3 p-2 ">
        <!-- Home Button -->
        <button class="drop-shadow-lg" on:click={() => handleClick(0)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Icon" width="35px">
        </button>
    </div>
    {/if}
</div>

{#if $searchState}
    <div class="content-center justify-center flex h-12  bg-green-400 py-2 animate-in slide-in-from-top">
        <input class="" type="text" bind:value={$searchQuery} placeholder="Search...">
    </div>
{/if}