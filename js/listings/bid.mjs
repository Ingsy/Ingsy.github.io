import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";


const action = "/listings";
const method = "post";




export async function BidOnListing(listingId, amount) {



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




