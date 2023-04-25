import { authFetch } from "../api/authFetch.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/listings";
const method = "put";

export async function updateAvatar(postData) {
    if (!postData.id) {
        throw new Error("Update requires a postID");
    }
    const updateAvatarURL = `${API_AUCTION_URL}${action}/${postData.id}`;

    const response = await authFetch(updateAvatarURL, {
        method,
        body: JSON.stringify(postData)
    });
    return await response.json();
}