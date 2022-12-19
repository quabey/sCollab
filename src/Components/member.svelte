<script>

    import { lists, users, userID, selectedList} from "../stores";
    import {memberState} from "../stores.js";

    let addUser = '';

    function handleMemberPop() {
        memberState.set(false);
    }

    function handleRemove(id) {
        $lists[$selectedList].lMembers = $lists[$selectedList].lMembers.filter(member => member != id);
        $lists = $lists;
    }

    function convertUsernameToID(username) {
        for (let i = 0; i < $users.length; i++) {
            if ($users[i].username == username) {
                return i;
            }
        }
    }

    function handleAdd() {
        if (addUser != '') {
            let tmpID = convertUsernameToID(addUser);
            $lists[$selectedList].lMembers = [...$lists[$selectedList].lMembers, tmpID];
            $lists = $lists;
            addUser = '';
            $users[tmpID].uLists = [...$users[tmpID].uLists, $selectedList];
        }

    }
</script>

<!-- User List -->


<!-- Add new user -->

<div class="w-full absolute h-full backdrop-blur-sm bg-white/30 z-0">
    <div class="flex justify-center content-center ">
        <div class="z-10 w-4/5 bg-white rounded-2xl mt-10 drop-shadow-lg p-5 flex flex-col">
            <div class="flex justify-between">
                <h1 class="text-3xl w-auto bg-green-400">Member: {$lists[$selectedList].lName}</h1>
                <button on:click={() => handleMemberPop()}>
                    <div class="bg-green-400 rounded-full ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" width="25px">
                    </div>
                </button>
            </div>
        
            <!-- Options -->
            <div class="flex flex-col gap-3 mt-4">
                {#each $lists[$selectedList].lMembers as member}
                <div class="flex flew-row">
                    <div class="bg-green-400 mr-2 text-lg">Name: </div>
                    <div class="border-green-400 border-2">
                        {$users[member].name}
                    </div>
                    {#if member != $userID}
                    <button on:click={() => handleRemove(member)}>
                        <div class="bg-green-400 rounded-full p-1 ml-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/1843/1843344.png" alt="" width="20px">
                        </div>
                    </button>
                    {/if}
                </div> 
                {/each}
            </div>
            <!-- Add User -->
            <div class="flex flex-col gap-3 mt-4">
                <div class="bg-green-400 mr-2 text-lg w-[6.5rem]">Add User: </div>
                <div class="flex flew-row">
                    
                    <div class="border-green-400 border-2 align-center content-center place-center">
                        <input type="text" placeholder="username" bind:value={addUser} class="content-center">
                    </div>
                    <button on:click={() => handleAdd()}>
                        <div class="bg-green-400 rounded-full p-1 ml-2 w-8 h-8 content-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" alt="" width="20px">
                        </div>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</div>
