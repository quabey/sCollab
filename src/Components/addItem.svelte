<script>
    import { lists, users, userID } from "../stores";


/**
   * @param {number} lID
   * @param {string} name
   * @param {boolean} done
   * @param {number} amount
   */
function addItem (lID, name, done, amount) {
    $lists[lID].lItems = [...$lists[lID].lItems, {
        iID: $lists[lID].lItems.length,
        iName: name,
        iAmount: amount,
        iDone: false,
        iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
    }]
    
    $lists = $lists;
}


let stupid = 'test';
</script>




<div class="">
    <button on:click={()=> addItem(0, stupid, false, 4)}>
        <div class="bg-green-400 p-2 rounded-full drop-shadow-2xl">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px">
        </div>
</button>
</div>