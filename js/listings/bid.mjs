import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/listings";
const method = "post";




export async function BidOnListing(listingId, amount) {
    // eslint-disable-next-line no-unused-vars
    const token = load("token");
    console.log(listingId, !listingId);
    if (!listingId) {
        throw new Error("bidding requires ID");
    }
    const BidOnListingURL = `${API_AUCTION_URL}${action}/${listingId}/bids`;

    const response = await authFetch(BidOnListingURL, {
        method,
        body: JSON.stringify({
            amount: amount
        }),
    });
    return await response.json();
}




