<script>
    import { lists, users, userID} from "../stores";
    import {editState, selectedItem, selectedList} from "../stores.js";

    let newName = 'New Item';


    function handleAdd(lID) {
        if (lID != null) {
        addItem(lID);
        }
        else 
        {
            addList();
        }
    }

    function addUserToList(lID) {
        $users[$userID].uLists = [...$users[$userID].uLists, lID];
        $users = $users;
    }

    function addList() {
        $lists = [...$lists, {
            lID: $lists.length,
            lName: "New List",
            lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
            lMembers: [$userID],
            lItems: [],
            lCreatedBy: $users[$userID].username
        }]
        $lists = $lists;
        $selectedList = $lists.length - 1;

        addUserToList($lists.length - 1);
    }

    function addItem (lID) {
        $lists[lID].lItems = [...$lists[lID].lItems, {
            iID: $lists[lID].lItems.length,
            iName: newName,
            iAmount: 1,
            iDone: false,
            iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png",
            iCreatedBy: $users[$userID].username
        }]

        $lists = $lists;
        handleEditPop($lists[lID].lItems.length - 1);
}
    function handleEditPop(id) {
        editState.set(true);
        selectedItem.set(id);
    }
</script>

{#if $userID != null}

<div class="">
    <button on:click={()=> handleAdd($selectedList)}>
        <div class="bg-green-400 p-2 rounded-full drop-shadow-2xl">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px">
        </div>
</button>
</div>

{/if}