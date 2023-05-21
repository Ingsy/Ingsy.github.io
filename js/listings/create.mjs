import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/listings";
const method = "post";


export async function createListing(listingData) {
    try {
        const createListingURL = API_AUCTION_URL + action;
        const response = await authFetch(createListingURL, {
            method,
            body: JSON.stringify({
                title: listingData.title,
                description: listingData.description,
                media: listingData.media, //mediaArray
                endsAt: listingData.endsAt,
            }),
        });
        const listing = await response.json();
        if (!response.ok) {
            alert("Something went wrong! please check that you filled out the required inputs, and check that your image/s have a valid URL")
        } else {
            alert("You just listed an Item!");
            window.location.reload();
        }

        return listing;
    } catch (error) {
        console.log(error);
    }

}

