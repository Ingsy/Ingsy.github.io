import * as listeners from "./handlers/index.mjs";
import * as LOGIN from "./handlers/login.mjs";
import { getProfileListings } from "../js/api/profile.mjs";
import { initPage as initProfilePage } from "../pages/profile/profile.mjs";
import { singleListing } from "./handlers/SingleDisplay.mjs";
import { setLogOut } from "./api/auth/logout.mjs";
import * as storage from "./storage/index.mjs";


const path = location.pathname;

async function checkRouting() {
    if (path.includes("login")) {
        LOGIN.setLoginFormListener();
        return;
    }

    if (path.includes("register")) {
        listeners.setRegisterFormListener();
        return;
    }

    if (path.includes("profile")) {
        await initProfilePage();
        listeners.deleteListing();
        return;
    }

    if (path.includes("single-listing")) {
        await singleListing("#singleListing");
        return;
    }

    if (path === "/" || path.includes("index")) {
        if (storage.isLoggedIn()) {
            getProfileListings("#myListingsOnly")
            listeners.listingFeed();
            listeners.setCreateListingFormListener("#createListing");
            listeners.setCreateListingFormListener("#createListingMobile");
            listeners.allListings();
            setLogOut();
        }

        else {
            window.location.href = "/pages/public"
        }
    }

    if (path.includes("public")) {
        listeners.allListings();
        listeners.listingFeed();
    }
}

window.onpaint = checkRouting();


//removeListing("8058a4c4-8da1-4644-bf2e-ce392c4487dc")