import { createListing } from "../listings/create.mjs";


export function setCreateListingFormListener(id) {
    const form = document.querySelector(id);
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const listing = Object.fromEntries(formData.entries());
            if (listing.media.length > 0) {
                listing.media = listing.media.split(",");
            } else {
                listing.media = [];
            }
            createListing(listing);
        });
    }
}