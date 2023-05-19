import { API_AUCTION_URL } from "../constants.mjs";



const action = "/auth/register";
const method = "post";

export async function register(profile) {
    try {
        const registerURL = API_AUCTION_URL + action;
        console.log(registerURL)
        const body = JSON.stringify(profile);

        const response = await fetch(registerURL, {
            headers: {
                "content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            },
            mode: 'cors',
            method,
            body
        })

        const result = await response.json();
        if (!response.ok) {
            alert("We could not register this account. Please try again")
        } else {
            alert("You are now registered. Please log in to precede");
            setTimeout(function () {
                window.location.href = "/pages/login";
            }, 2500);
        }

        return result;



    } catch (error) {
        console.log(error);
    }
}