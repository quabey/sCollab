<script>
    import { users, userID, profileState, buttonRight } from "../stores.js";

    //functions
    import { getID } from "../functions.js";

    function handleProfile (event) {
        profileState.set(false);
    }

    function handleLogout (event) {
        
        profileState.set(false);
        userID.set(null);
    }

    function handleLogin (username) {
        let id = getID(username);
        if (id != null) {
            userID.set(id);
            profileState.set(false);
        }
        else {
            alert("Username not found, example Username: 'janedoe' and 'johndoe'");
        }
    }

    let loginName = "";
</script>






<div class="w-full absolute h-full backdrop-blur-sm bg-white/30 z-0">
    <div class="flex justify-center content-center ">
        
        <div class="z-10 w-4/5 bg-white rounded-2xl mt-10 drop-shadow-lg p-5 flex flex-col">
            {#if $userID != null }
            <div class="flex justify-between">
                
                <h1 class="text-3xl w-auto bg-green-400">Your Profile</h1>
                <button on:click={() => handleProfile()}>
                    <div class="bg-green-400 rounded-full ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" width="25px">
                    </div>
                </button>
            </div>
            <div class="flex items-center justify-around">
                <img src="{$users[$userID].profileImg}" alt="" width="70px" class="rounded-lg m-5">
                <div class="flex flex-col ml-2">
                    <h1 class="text-2xl bg-green-400">{$users[$userID].name}</h1>
                    <div class="w-min">
                        <h1 class="text-lg bg-green-400 mt-2 w-auto"> @{$users[$userID].username} </h1>
                    </div>
                    
                    
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <div class=" flex">
                    <h1 class="w-auto flex"> Email: <h1 class="bg-green-400">{$users[$userID].email}</h1> </h1>
                </div>
                <div class=" flex ">
                    <h1 class="w-auto flex">Password: <h1 class="bg-green-400">{$users[$userID].password}</h1></h1>
                </div>
            </div>
            <div class="flex content-center justify-center mt-3">
                <button class="bg-green-400 rounded-md p-2" on:click={() => handleLogout()}>
                    <div class="">
                        <h1>Logout</h1>
                    </div>
                </button>
            </div>
            {:else}
            <div class="flex justify-between">
                
                <h1 class="text-3xl w-auto bg-green-400">Login</h1>
                <button on:click={() => handleProfile()}>
                    <div class="bg-green-400 rounded-full ">
                        <img src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="" width="25px">
                    </div>
                </button>
            </div>
            <div class="">
                <h2>Login with username</h2>
                <input class="border-2 border-green-400" type="text" bind:value={loginName}>
                <button on:click={() => handleLogin(loginName)}>
                <div class="bg-green-400 rounded-lg mt-3">
                    Login
                </div>
            </button>
            </div>
            {/if}
        </div>
    </div>
</div>