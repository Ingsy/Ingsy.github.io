import * as listeners from "./js/handlers/index.mjs";
import * as LOGIN from "./js/handlers/login.mjs";
//import { createListing } from "./js/listings/create.mjs";
import { setLogOut } from "./js/api/auth/logout.mjs";
import * as storage from "./js/storage/index.mjs";
//import * as listings from "./js/listings/index.mjs"


const path = location.pathname;

function checkRouting() {
    if (path === "/profile/login/login.html") {
        LOGIN.setLoginFormListener();
        return;
    } else if (path === "/profile/register/register.html") {
        listeners.setRegisterFormListener();
        return;
    }

    if (!storage.isLoggedIn()) {
        window.location.href = "/profile/login/login.html"

    }

    if (path === "/profile/profile/profile.html") {
        listeners.setCreateListingFormListener();
        setLogOut();
    }

}

window.onpaint = checkRouting();


//createListing({
//    title: "testing to create listing",
//    description: "test 2",
//    endsAt: "2023-05-24",
//})


//removeListing()

//listings.getListings()

