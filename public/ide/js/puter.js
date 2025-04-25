"use strict";

export const IS_PUTER = puter.env === "app";

export function usePuter() {
    return false;  // Puter.js is no longer used
}


function uiSignIn() {
    console.log("Sign-in functionality removed.");
}

function uiSignOut() {
    console.log("Sign-out functionality removed.");
}

function updateSignInUI() {
    if (puter.auth.isSignedIn()) {
        uiSignIn();
    } else {
        uiSignOut();
    }
}

async function signIn() {
    await puter.auth.signIn();
    updateSignInUI();
}

function signOut() {
    puter.auth.signOut();
    updateSignInUI();
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Puter.js removed. Editor still working.");
});
