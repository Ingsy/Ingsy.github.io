import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/listings";
const method = "post";


export async function createListing(listingData) {
    const createListingURL = API_AUCTION_URL + action;
    // eslint-disable-next-line no-unused-vars
    const token = load("token");
    //const mediaArray = listingData.media.split(",");
    // use split and/or index of to fix Date/time

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify({
            title: listingData.title,
            description: listingData.description,
            media: listingData.media,
            endsAt: listingData.endsAt
        }),
    });

    if (listingData.media) {
        const img = document.createElement("img");
        img.src = listingData.media;
        img.alt = `Image from ${listingData.title}`;
    }

    const listing = await response.json();

    console.log(listing);

    alert("You just listed an Item!")
}