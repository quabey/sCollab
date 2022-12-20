<script>
    
    import { lists, users, userID, selectedList} from "../stores";
    import {alertState} from "../stores.js";
  import ItemList from "./itemList.svelte";

    function handleAlert(id){
        alert("You alerted the User '" + $users[id].name +  "'' to the list '" + $lists[$selectedList].lName + "'with the message: \n    " + messages + ".");
    }

    function handleAlertPop() {
        alertState.set(false);
    }

    let messages = 'New item(s) added to list';
</script>

<div class="w-full absolute h-full backdrop-blur-sm bg-white/30 z-0">
    <div class="flex justify-center content-center ">
        <div class="z-10 w-4/5 bg-white rounded-2xl mt-10 drop-shadow-lg p-5 flex flex-col">
            <div class="flex justify-between">
                <h1 class="text-3xl w-auto bg-green-400">Alert: {$lists[$selectedList].lName}</h1>
                <button on:click={() => handleAlertPop()}>
                    <div class="bg-green-400 rounded-full ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" width="25px">
                    </div>
                </button>
            </div>
            <div class="pt-4 flex flex-col">
                <label class=""> 
                    <input type=radio bind:group={messages} name="messages" value={'New item(s) added to list'} class="">
                    New item(s) added to list
                </label>
                <label class=""> 
                    <input type=radio bind:group={messages} name="messages" value={$users[$userID].name + " is going grocerie shopping"} class="">
                    Going grocerie shopping
                </label>
                <label class=""> 
                    <input type=radio bind:group={messages} name="messages" value={'We need to go shopping soon'} class="">
                    We need to go shopping soon
                </label>        
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
                    <button on:click={() => handleAlert(member)}>
                        <div class="bg-green-400 rounded-full p-1 ml-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149446.png" alt="" width="22px">
                        </div>
                    </button>
                    {/if}
                </div> 
                {/each}
            </div>
        </div>
    </div>
</div>


