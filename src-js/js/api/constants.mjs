export const API_HOST_URL = "https:/api.noroff.dev";
export const API_BASE_URL = "/api/v1";
export const API_AUCTION_BASE = "/auction";
export const API_AUCTION_URL = `${API_HOST_URL}${API_BASE_URL}${API_AUCTION_BASE}`;



export const searchForm = document.querySelector("#searchform");
export const searchInput = document.querySelector("#searchInput");


export const listingsEnded = document.querySelector(".endedListings");
export const listingsActive = document.querySelector(".activeListings");
export const myListingsOnly = document.querySelector(".myListingsOnly");
export const allListings = document.querySelector(".all-listings");

export const ProfileName = document.querySelector("#ProfileName");
export const userName = localStorage.getItem("userName");
export const Avatar = document.querySelector("#avatar");
export const avatar = localStorage.getItem("avatar");
