<script>
    import { lists, users, userID } from "../stores";


function addItem (lID, name, done, amount) {
    $lists[lID].lItems = [...$lists[lID].lItems, {
        iID: $lists[lID].lItems.length + 1,
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
Click
</button>
</div>