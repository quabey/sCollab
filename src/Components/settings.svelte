<script>
    import { users, userID, profileState, settingsState, buttonRight } from "../stores.js";

    function handleProfile (event) {
        profileState.set(false);
    }

    function handleSettings (event) {
        settingsState.set(false);
    }
</script>






<div class="w-full absolute h-full backdrop-blur-sm bg-white/30 z-0">
    <div class="flex justify-center content-center ">
        <div class="z-10 w-4/5 bg-white rounded-2xl mt-10 drop-shadow-lg p-5 flex flex-col">
            <div class="flex justify-between">
                <h1 class="text-3xl w-auto bg-green-400">Settings</h1>
                <button on:click={() => handleSettings()}>
                    <div class="bg-green-400 rounded-full ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" width="25px">
                    </div>
                </button>
            </div>
        
            <!-- Options -->
            <div class="flex flex-col gap-3 mt-4">
              <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" bind:checked={$buttonRight} class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-md font-medium text-gray-900 bg-green-400">Set Home button to right</span>
            </label>
            </div>
            <!-- About -->
            <div class="flex-col flex mt-4">
                <h1 class="bg-green-400 w-min text-lg mb-1"> About</h1>
                <p class="bg-green-400 w-auto text-sm">made by Nils Banse</p>
                <p class="bg-green-400 text-sm">for IID Group Project</p>
                <p class="bg-green-400 text-sm">contact: nils.banse@hs-flensburg.de</p>
                <p class="bg-green-400 text-sm underline"><a href="https://github.com/quabey/">Check out my Github</a></p>
            </div>
            

    
        </div>
    </div>

</div>