<script>
    // stores
    import { lists, selectedList } from "../stores.js";
    // components

    // functions
    function handleClick (event) {
        selectedList.set(null);
    }
</script>

<div class="bg-green-400 h-20 flex items-center">
    <div class="ml-3 p-2 ">
        <!-- Home Button -->
        <button class="drop-shadow-lg" on:click={() => handleClick(0)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Icon" width="35px">
        </button>
    </div>
    <div class="flex drop-shadow-lg">
        <div class="my-2 ml-2 bg-white rounded-l-full h-min p-2">
            <!-- Search -->
            <img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="search" width="30px">
        </div>
        <div class="my-2 mr-2 bg-white rounded-r-full h-min p-2">
            <!-- Settings -->
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="search" width="30px">
        </div>
    </div>
    {#if $lists[$selectedList].lMembers != null}
        <div class="flex members">
        <!-- Colaborators -->
            {#each $lists[$selectedList].lMembers as Memeber}
                <img src="{Memeber.mIcon}" alt="" width="35px" class="rounded-full">
            {/each}
        </div>
    {/if}
    
</div>