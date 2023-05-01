import { authFetch } from "../api/authFetch.mjs";
import { load } from "../storage/index.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/profiles";
const method = "put";

export async function updateAvatar(listingData) {
    console.log(listingData)
    const name = load("userName");
    const updateAvatarURL = `${API_AUCTION_URL}${action}/${name}/media`;

    const response = await authFetch(updateAvatarURL, {
        method,
        body: JSON.stringify(listingData)
    });
    return await response.json();
}