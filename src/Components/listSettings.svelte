<script>
    import { users, userID, profileState, settingsState, listSettingState, lists, selectedList, memberState } from "../stores.js";

    function handleProfile (event) {
        profileState.set(false);
    }

    function handleSettings (event) {
        listSettingState.set(false);
    }

    function handleMember() {
        listSettingState.set(false);
        memberState.set(true);
    }
</script>






<div class="w-full absolute h-full backdrop-blur-sm bg-white/30 z-0">
    <div class="flex justify-center content-center ">
        <div class="z-10 w-4/5 bg-white rounded-2xl mt-10 drop-shadow-lg p-5 flex flex-col">
            <div class="flex justify-between">
                <h1 class="text-3xl w-auto bg-green-400">List-Settings</h1>
                <button on:click={() => handleSettings()}>
                    <div class="bg-green-400 rounded-full ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" width="25px">
                    </div>
                </button>
            </div>
            <div class="flex flex-col gap-3 mt-4">
                <div class="flex flew-row">
                    <div class="bg-green-400 mr-2 text-lg">Name: </div>
                    <div class="border-green-400 border-2">
                        <input type="text" bind:value={$lists[$selectedList].lName}>
                    </div>
                </div>
            </div>
            <div class="flex content-center justify-center mt-3">
                <button class="bg-green-400 rounded-md p-2" on:click={() => handleMember()}>
                    <div class="">
                        <h1>Edit Members</h1>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>