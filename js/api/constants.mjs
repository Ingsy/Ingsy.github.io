export const API_HOST_URL = "https:/api.noroff.dev";
export const API_BASE_URL = "/api/v1";
export const API_AUCTION_BASE = "/auction";
export const API_AUCTION_URL = `${API_HOST_URL}${API_BASE_URL}${API_AUCTION_BASE}`;


const _seller = "/listings";
export const getSellerURL = `${API_AUCTION_URL}${_seller}?_seller=true&_bids=true`;

export const activeListingsURL = `${API_AUCTION_URL}${_seller}?_active=true`;



export const searchForm = document.querySelector("#searchform");
export const searchInput = document.querySelector("#searchInput");



export const listingsEnded = document.querySelector(".ended-listings");
export const listingsActive = document.querySelector("#activeListings");
export const myListingsOnly = document.querySelector("#myListingsOnly");
export const allListingsbtn = document.querySelector(".all-listings");

export const ProfileName = document.querySelector("#ProfileName");
export const userName = localStorage.getItem("userName");
export const MyAvatar = document.querySelector("#MyAvatar");
export const avatar = localStorage.getItem("avatar");
export const MyCredits = document.querySelector("#MyCredit");
export const Credits = localStorage.getItem("credits")


