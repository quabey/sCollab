import { writable } from "svelte/store";

export let selectedList =writable(2);

export let lists = writable([
    {lID: 0, lName: "Personal", lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png", lItems: [
        {iID: 0, iName: "Milk", iDone: false, iAmount: 2, iIcon: ""},
        {iID: 1, iName: "Bread", iDone: false, },
        {iID: 2, iName: "Eggs", iDone: false, amount: 12}
    ]},
    {lID: 1, lName: "Work", lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png", lItems: [
        {iID: 0, iName: "Cake", iDone: false, iAmount: 2, iIcon: ""},
        {iID: 1, iName: "Water", iDone: false, iAmount: 1, iIcon: ""},
        {iID: 2, iName: "Muffins", iDone: false, iAmount: 12, iIcon: ""}
    ]},
    {lID: 2, lName: "WG", lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png", lItems: [
        {iID: 0, iName: "Beer", iDone: true, iAmount: 2, iIcon: ""},
        {iID: 1, iName: "Chrips", iDone: false, iAmount: 1, iIcon: ""},
        {iID: 2, iName: "Vodka", iDone: false, iAmount: 12, iIcon: ""}
    ]}

]);
