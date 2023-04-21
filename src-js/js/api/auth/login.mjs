import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile, userName) {
    const loginURL = API_AUCTION_URL + action;
    const body = JSON.stringify(profile, userName);

    const response = await fetch(loginURL, {
        headers: {
            "content-Type": "application/json",
        },
        method,
        body,
    });

    const result = await response.json();

    storage.saveString("token", result.accessToken);
    storage.save("profile", { name: result.name, email: result.email });
    storage.saveString("userName", result.name);
    if (result.accessToken !== undefined && response.ok) {
        alert("You are now logged in");
        setTimeout(function () {
            window.location.href = "/profile.html";
        }, 2500);

    } else if (result.accessToken === undefined) {
        alert("Sign in unsuccessful. Please try again or register an account")
    }
    // eslint-disable-next-line no-undef
    return json;
}
