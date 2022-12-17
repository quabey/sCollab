import { selectedList, userID, profileState, burgerState, settingsState, buttonRight } from "./stores";


// ====================================================== //
// ============== Handle States ========================= //
// ====================================================== //

export function handleProfile(state) {
  profileState.set(state);   
}

export function handleBurgerState(state) {
    burgerState.set(state);
}

export function handleSettingsState(state) {
    settingsState.set(state);
}

export function handleAppSettingsState(state) {
    settingsState.set(state);
}

// ====================================================== //
// ============== Handle User =========================== //
// ====================================================== //



export function handleUserID(state) {
    userID.set(state);
}

// ====================================================== //
// ============== Handle List =========================== //
// ====================================================== //

export function handleSelectedList(state) {
    selectedList.set(state);
}
