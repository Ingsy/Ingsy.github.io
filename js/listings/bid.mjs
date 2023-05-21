import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/listings";
const method = "post";

export async function BidOnListing(listingId, amount) {
    try {
        const BidOnListingURL = `${API_AUCTION_URL}${action}/${listingId}/bids`;

        const response = await authFetch(BidOnListingURL, {
            method,
            body: JSON.stringify({
                amount: amount
            }),
        });
        const bid = await response.json();
        if (!response.ok) {
            alert(bid.errors.map(error => error.message || "Something went wrong. Make sure you are logged in and have enough credits!").join(","));
        } else {
            alert("You are currently the higest bidder. Good luck!")
        }
        return bid;
    } catch (error) {
        console.log(error)
    }
}




