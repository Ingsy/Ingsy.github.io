import { authFetch } from "../api/authFetch.mjs";
import { load } from "../storage/index.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/profiles";
const method = "put";

export async function updateAvatar(listingData) {
    try {
        const name = load("userName");
        const updateAvatarURL = `${API_AUCTION_URL}${action}/${name}/media`;

        const response = await authFetch(updateAvatarURL, {
            method,
            body: JSON.stringify(listingData)
        });
        if (!response.ok) {
            throw new Error("Please provide a valid URL to update your avatar!")
        } else {
            window.location.reload
            alert("Your avatar is now updated")

        }
        return await response.json();
    } catch (error) {
        console.log(error)
    }

}