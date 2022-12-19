import { writable } from "svelte/store";

// stores the currently selected list
// when set to 999 it means that the user is viewing the "All" list
// when set to null it means the user is viewing the List overview
export let selectedList =writable(0);
export let selectedItem = writable(0);

// User
export let userID = writable(1);

// States 
export let profileState = writable(false);
export let burgerState = writable(false);
export let settingsState = writable(false);
export let editState = writable(false);
export let listSettingState = writable(true);
export let memberState = writable(false);
// Settings
export let buttonRight = writable(true);

// search 
export let searchState = writable(false);
export let searchQuery = writable("");

export let users = writable([
    {
        id: 0,
        name: "Admin",
        username: "admin",
        email: "example@test.com",
        password: "1234",
        profileImg: "https://thispersondoesnotexist.com/image",
        uLists: []
    },
    {
        id: 1,
        name: "Jane Doe",
        username: "janedoe",
        email: "test@example.com",
        password: "1234",
        profileImg: "https://thispersondoesnotexist.com/image",
        uLists: [1, 2, 3]
    },
    {
        id: 2,
        name: "John Doe",
        username: "johndoe",
        email: "test@example.com",
        password: "1234",
        profileImg: "https://thispersondoesnotexist.com/image",
        uLists: [0, 1, 2]
    }  
]);


export let lists = writable([
    {
        lID: 0,
        lName: "Personal",
        lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
        lMembers: [1, 2],
        lItems: [
            {
                iID: 0,
                iName: "Milk",
                iDone: false,
                iAmount: 2,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png",
                iCreatedBy: "janedoe"
            },

            {
                iID: 1,
                iName: "Bread",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 2,
                iName: "Eggs",
                iDone: false,
                iAmount: 12,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 3,
                iName: "Butter",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 4,
                iName: "Cookies",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 5,
                iName: "Sausages",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 6,
                iName: "Chicken",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 7,
                iName: "Pork",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },
            
            {
                iID: 8,
                iName: "Beef",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 9,
                iName: "Fish",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 10,
                iName: "Rice",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 11,
                iName: "Pasta",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 12,
                iName: "Potatoes",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 13,
                iName: "Tomatoes",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },  

            {
                iID: 14,
                iName: "Onions",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 15,
                iName: "Garlic",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 16,
                iName: "Lettuce",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 17,
                iName: "Cucumber",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 18,
                iName: "Carrots",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 19,
                iName: "Apples",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 20,
                iName: "Oranges",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

    ]},

    {
        lID: 1,
        lName: "Work",
        lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
        lMembers: [1, 2],
        lItems: [
            {
                iID: 0,
                iName: "Cake",
                iDone: false,
                iAmount: 2,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 1,
                iName: "Water",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 2,
                iName: "Muffins",
                iDone: false,
                iAmount: 12,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            }
    ]},

    {
        lID: 2,
        lName: "WG",
        lIcon: "https://cdn-icons-png.flaticon.com/512/151/151917.png",
        lMembers: [1, 2],
        lItems: [
            {
                iID: 0,
                iName: "Beer",
                iDone: true,
                iAmount: 2,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },
                
            {
                iID: 1,
                iName: "Chrips",
                iDone: false,
                iAmount: 1,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },
                
            {
                iID: 2,
                iName: "Vodka",
                iDone: false,
                iAmount: 12,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },
            {
                iID: 3,
                iName: "Butter",
                iDone: false,
                iAmount: 12,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 4,
                iName: "Cookies",
                iDone: false,
                iAmount: 20,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 5,
                iName: "Sausages",
                iDone: false,
                iAmount: 4,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 6,
                iName: "Chicken",
                iDone: false,
                iAmount: 2,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 7,
                iName: "Pork",
                iDone: false,
                iAmount: 9,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },
            
            {
                iID: 8,
                iName: "Beef",
                iDone: false,
                iAmount: 2,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 9,
                iName: "Fish",
                iDone: false,
                iAmount: 6,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            },

            {
                iID: 10,
                iName: "Rice",
                iDone: false,
                iAmount: 10,
                iIcon: "https://cdn-icons-png.flaticon.com/512/2662/2662503.png"
            }
    ]}

]);
