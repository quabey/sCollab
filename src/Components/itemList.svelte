<script> 
    export let listID = 0;
    import { lists } from "../stores.js";

    let list;

    let unsubscribe = lists.subscribe(value => {
    list = value;
});
</script>

<div class="flex justify-between m-5 border-b-4 pb-2">
    <div class="">
        <img src="{list[listID].lIcon}" alt="" width="40px">
    </div>
    <div class="flex w-full justify-between ml-10">
        <h2>No. {listID + 1}</h2>
        <h2>{list[listID].lName}</h2>
        <div class="flex "> 
            <!-- lenght of lItems with iDone true -->
            <h2>{list[listID].lItems.filter(item => item.iDone == true).length} / {list[listID].lItems.length}</h2>
        </div>
        
    </div>
    
</div>

