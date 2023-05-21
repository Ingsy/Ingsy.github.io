
import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/listings";
const method = "delete";

export async function removeListing(id) {
    try {
        const deleteListingURL = `${API_AUCTION_URL}${action}/${id}`;
        const response = await authFetch(deleteListingURL, {
            method
        })

        if (!response.ok) {
            throw new Error("Delete requires a listingID");
        } else {
            alert("Listing deleted")
        }


        return await response.json();
    } catch (error) {
        console.log(error)
    }

}