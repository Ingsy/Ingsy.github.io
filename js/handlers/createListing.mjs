import { createListing } from "../listings/create.mjs";


export function setCreateListingFormListener(id) {
    const form = document.querySelector(id);
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const listing = Object.fromEntries(formData.entries());
            listing.media = listing.media.split(",")

            createListing(listing);
        });
    }
}