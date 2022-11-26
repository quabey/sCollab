<script>
    import { selectedList } from "../stores.js";

    function handleclick (event) {
        selectedList.set(999);
    }
</script>

<button on:click={() => handleclick()}>
    <div class="bg-green-400 p-2 rounded-full">
        <img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px">
    </div>
</button>
