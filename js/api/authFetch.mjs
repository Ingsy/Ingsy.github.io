import { load } from "../storage/index.mjs";



export function headers() {
    const token = load("token");
    return {
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Authorization": `Bearer ${token}`
    }
}

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        mode: 'cors',
        headers: headers()
    });
}