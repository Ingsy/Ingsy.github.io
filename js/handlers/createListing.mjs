import { createListing } from "../listings/create.mjs";


export function setCreateListingFormListener(id) {
    const form = document.querySelector(id);
    if (form) {
        console.log("Add Create listing form listener");
        form.addEventListener("submit", (event) => {
            console.log("hello");
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const listing = Object.fromEntries(formData.entries());

            createListing(listing);
        });
    }
}