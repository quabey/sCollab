import { lists, users, userID } from "./stores";
// calculate the amount of items that are done
function calcDone (list) {
    return list.lItems.filter(item => item.iDone == true).length;
}

// calulate the amount of items that are not done
function calcNotDone (list) {
    return list.lItems.length - calcDone(list);
}

// calculate the amount of total items of all lists
export function getTotalItems () {
    return getDoneItems() + getNotDoneItems();
}

// calculate the the number of all items in all lists that are done
export function getDoneItems () {
    let total = 0;
    lists.subscribe((list) => {
        list.forEach((lItems) => {
            total += calcDone(lItems);
        });
    });
    return total;
}

// calculate the the number of all items in all lists that are not done
export function getNotDoneItems () {
    let total = 0;
    lists.subscribe((list) => {
        list.forEach((lItems) => {
            total += calcNotDone(lItems);
        });
    });
    return total;
}

// get id from username
export function getID (username) {
    let id = null;
    users.subscribe((user) => {
        user.forEach((u) => {
            if (u.username == username) {
                id = u.id;
            }
        });
    });
    return id;
}