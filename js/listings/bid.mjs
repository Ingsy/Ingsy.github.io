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
            alert("something went wrong! please make sure You are logged in, the listing is active and that you have enough credit")
        } else {
            alert("you are currently the higest bidder. good luck")
        }

        return bid;
    } catch (error) {
        console.log(error)
    }

}




