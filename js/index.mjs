import * as listeners from "./handlers/index.mjs";
import * as LOGIN from "./handlers/login.mjs";
import { getProfileListings } from "../js/api/profile.mjs";
import { initPage as initProfilePage } from "../pages/profile/profile.mjs";
import { singleListing } from "./handlers/SingleDisplay.mjs";
//import { removeListing } from "./listings/delete.mjs";

import * as storage from "./storage/index.mjs";

//import * as listings from "./listings/index.mjs"

const path = location.pathname;

function checkRouting() {
    if (path.includes("login")) {
        LOGIN.setLoginFormListener();
        return;
    }

    if (path.includes("register")) {
        listeners.setRegisterFormListener();
        return;
    }

    if (path.includes("profile")) {
        initProfilePage();
        listeners.deleteListing();
        return;
    }

    if (path === "/" || path.includes("single-listing")) {
        singleListing("#singleListing");
        return;
    }

    if (path === "/" || path.includes("index")) {
        if (storage.isLoggedIn()) {
            getProfileListings("#myListingsOnly")
            listeners.listingFeed();
            listeners.setCreateListingFormListener("#createListing");
            listeners.setCreateListingFormListener("#createListingMobile");
            listeners.allListings();
        }

        else {
            window.location.href = "/pages/public"
            //   listeners.allListings();
            //   listeners.listingFeed();
        }
    }
}

window.onpaint = checkRouting();


//removeListing("8058a4c4-8da1-4644-bf2e-ce392c4487dc")