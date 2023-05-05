import * as listeners from "./handlers/index.mjs";
import * as LOGIN from "./handlers/login.mjs";
import { getProfileListings } from "../js/api/profile.mjs";
import { initPage as initProfilePage } from "../pages/profile/profile.mjs";

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
        return;
    }

    if (path === "/" || path.includes("index")) {
        if (storage.isLoggedIn()) {
            getProfileListings("#myListingsOnly")
            listeners.listingFeed();
            listeners.listingFeed("searchformMobile");
            listeners.setCreateListingFormListener("#createListing");
            listeners.setCreateListingFormListener("#createListingMobile");
            //listeners.getProfileListings()
            //searchformMobile
            listeners.allListings();
        } else {
            window.location.href = "/pages/public"
        }
    }
}

window.onpaint = checkRouting();


//listings.createListing({
//    title: "testing to create listing & deleting",
//    description: "test 2",
//    endsAt: "2023-05-24",
//    media: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]
//})


//removeListing("f450b8c5-a1f4-49bf-86fa-2aa551b0b78e")

//listings.updateAvatar({
//    id: "04040e6a-9ca0-4fe1-8831-1bee8746aa0c",
//    media: ["https://s3-us-west-2.amazonaws.com/assertible/integrations/swagger-logo-horizontal.jpeg"]
//})

//removeListing({
//    id: "0f4162a3-75b9-47da-9246-d8277ed672bb"
//})