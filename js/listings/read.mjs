import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL, getSellerURL } from "../api/constants.mjs";

const action = "/listings";
// eslint-disable-next-line no-unused-vars
const method = "get";

export async function getListings() {
    const getListingURL = `${getSellerURL}`;
    const response = await authFetch(getListingURL)
    return await response.json();
}

export async function getListing(id) {
    if (!id) {
        throw new Error("Get requires ID");
    }
    const getListingURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;
    const response = await authFetch(getListingURL)
    return await response.json();
}



