import * as listeners from "../../js/handlers/index.mjs";
import * as profileAPI from "../../js/api/profile.mjs";
import { setLogOut } from "../../js/api/auth/logout.mjs";
import { displayListings } from "../../js/handlers/displayListings.mjs";
import * as storage from "../../js/storage/index.mjs";

export const ProfileName = document.querySelector("#ProfileName");
export const MyAvatar = document.querySelector("#MyAvatar");
export const MyCredits = document.querySelector("#MyCredit");
export const AvatarForm = document.querySelector("#editAvatar");

export async function initPage() {
    const profile = await profileAPI.getProfile();
    storeProfile(profile);

    const listings = await profileAPI.getProfileListings();
    displayListings(listings, "#myListingsOnly");

    ProfileName.innerHTML = profile.name;
    MyCredits.innerHTML = profile.credits;
    MyAvatar.src = profile.avatar;

    listeners.setCreateListingFormListener("#createListing");
    listeners.setCreateListingFormListener("#createListingMobile");
    setLogOut();
    setUpdateAvatarListener();
}

export function storeProfile(profile) {
    storage.save("profile", { name: profile.name, email: profile.email });
    storage.saveString("email", profile.email);
    storage.saveString("userName", profile.name);
    storage.saveString("avatar", profile.avatar);
    storage.save("credits", profile.credits);
}

export function setUpdateAvatarListener() {
    if (AvatarForm) {
        AvatarForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const avatar = Object.fromEntries(formData.entries())

            profileAPI.updateAvatar(avatar)
            alert("Your avatar is now updated!")
        })
    }
}
