<script> 
    export let listID = 0;
    import { lists } from "../stores.js";

    let list;
    let unsubscribe = lists.subscribe(value => {
        list = value;
    });
</script>

<div class="flex flex-row justify-between p-2 border-b-2 mx-2 items-center">
    <div class="">
        <img src="{list[listID].lIcon}" alt="" width="52px">
    </div>
    <div class="flex w-full justify-between ml-10">
        <div class="text-2xl bg-green-400 drop-shadow-lg flex gap-2">
            <h2>
                {list[listID].lName}
            </h2>
            <div class="">
                {#if list[listID].lMembers != null}
                    <img src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png" alt="" width="30px">
                {/if}
            </div>
        </div>
        <div class="flex text-2xl bg-green-400 px-2 rounded-full drop-shadow-lg"> 
            <!-- lenght of lItems with iDone true -->
            {#if $lists[listID].lItems.filter(item => item.iDone == true).length != $lists[listID].lItems.length}
                <h2>
                    <h2>{list[listID].lItems.filter(item => item.iDone == true).length}/{list[listID].lItems.length}</h2>
                </h2>
            {:else}
                <img src="https://cdn-icons-png.flaticon.com/512/3388/3388530.png" alt="" width="25px">
            {/if}
        </div>
        
    </div>
    
</div>

