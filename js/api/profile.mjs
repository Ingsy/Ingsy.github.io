import { authFetch } from "./authFetch.mjs";
import { load } from "../storage/index.mjs";
import { API_AUCTION_URL } from "./constants.mjs";

const action = "/profiles";
const method = "put";


export async function getProfile() {
    const name = load("userName");
    const url = `${API_AUCTION_URL}${action}/${name}`;

    const response = await authFetch(url);
    return await response.json();
}

export async function getProfileListings() {
    const name = load("userName");
    const url = `${API_AUCTION_URL}${action}/${name}/listings?_seller=true&_bids=true`;

    const response = await authFetch(url);
    return await response.json();
}

export async function updateAvatar(listingData) {
    console.log(listingData)
    const name = load("userName");
    const updateAvatarURL = `${API_AUCTION_URL}${action}/${name}/media`;

    const response = await authFetch(updateAvatarURL, {
        method,
        body: JSON.stringify(listingData)
    });
    return await response.json();
}