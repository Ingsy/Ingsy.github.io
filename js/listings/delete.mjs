
import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/listings";
const method = "delete";

export async function removeListing(id) {
    if (!id) {
        throw new Error("Delete requires a listingID");
    }
    const deleteListingURL = `${API_AUCTION_URL}${action}/${id}`;
    const response = await authFetch(deleteListingURL, {
        method
    })
    alert("listing deleted")
    return await response.json();

}