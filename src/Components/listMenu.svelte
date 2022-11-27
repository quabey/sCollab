<script>
    // stores
    import { lists, selectedList } from "../stores.js";
    // components

    // functions
    function handleClick (event) {
        selectedList.set(null);
    }
</script>

<div class="bg-green-400 h-20 flex items-center justify-between">
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

    <!-- Colaborators -->
    {#if $lists[$selectedList].lMembers != null}
        <div class="flex bg-white rounded-full p-2 drop-shadow-lg">
            {#each $lists[$selectedList].lMembers as Memeber}
            <div class="">
                <img src="{Memeber.mIcon}" alt="" width="32px" class="rounded-full drop-shadow-md">
            </div>
            {/each}
        </div>
    {:else}
        <div class="bg-white text-xl p-2 rounded-full drop-shadow-lg">
            Collab
        </div>
    {/if}
    
    <!-- Sort Button -->
    <div class="flex text-xl bg-white rounded-full p-2 mr-3 ml-2 gap-2 drop-shadow-lg">
        <h2>Sort</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" alt="" width="20px">
    </div>
</div>