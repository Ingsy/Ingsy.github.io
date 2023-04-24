import { createListing } from "../listings/create.mjs";


export function setCreateListingFormListener() {
    const form = document.querySelector("#createListing");

    if (form) {
        form.addEventListener("submit", (event) => {

            const form = event.target;
            const formData = new FormData(form);
            const listIt = Object.fromEntries(formData.entries());

            createListing(listIt);
        });
    }
}