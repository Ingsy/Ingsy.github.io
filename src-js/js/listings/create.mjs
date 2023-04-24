import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/listings";
const method = "post";


export async function createListing(postData) {
    const createListingURL = API_AUCTION_URL + action;
    // eslint-disable-next-line no-unused-vars
    const token = load("token");

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify({
            title: postData.title,
            description: postData.description,
            tags: postData.tagsArray,
            media: postData.media,
            endsAt: postData.endsAt
        }),
    });

    const listIt = await response.json();

    console.log(listIt);

    alert("You just listed an Item!")
}