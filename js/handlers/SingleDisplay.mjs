import { displayBids } from "./displayListings.mjs";
import { userName } from "../api/constants.mjs";
import { setLogOut } from "../api/auth/logout.mjs";
import { BidOnListing } from "../listings/bid.mjs";
import { deleteListing } from "./deleteListing.mjs";
import { getListing } from "../listings/read.mjs";
import { isLoggedIn } from "../storage/index.mjs";


export function displayMedia(media) {
  let mediaHtml = "";
  for (let i = 0; i < media.length && i < 3; i++) {
    const url = media[i];
    mediaHtml += `<img src="${url}" class="single-listing-image" alt="image of listing" />`;
  }
  return mediaHtml;
}


export async function displaySingleListing(listings, containerId) {
  const listingContainerSingle = document.querySelector(containerId);
  listingContainerSingle.innerHTML = ""; //cannot read property "lenght" of null!
  for (let i = 0; i < listings.length; i++) {
    let listingHTML = "";

    listingHTML += `
<div class="col-sm-12" id="listItem_${listings[i].id}">
            <div class="card card-single-listing mx-auto align-items-center">
              <h5 class="card-title mt-3 mb-0 capitalize">${listings[i].title}</h5>
              <div class="card-body">
                <div class ="row image-container">`;
    listingHTML += displayMedia(listings[i].media);
    listingHTML += `
                </div>
              <hr class="hr m-2" />
                <div class="card-div m-3">
                  <h3 class="me-2">Seller: <span class="capitalize">${listings[i].seller.name}</span></h3>
                  <h3>Bidding ends: ${listings[i].endsAt.slice(0, 10)}</h3>
                </div>`;
    if (listings[i].description) {
      listingHTML += `
      <div class="description">
                <h3 class="text-start">description: </h3>
                <p class="text-start mt-2">${listings[i].description}</p> 
                </div>`;
    }
    listingHTML += `  
  
          
                <button
                class="btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#list_${listings[i].id}"
                aria-expanded="false"
                aria-controls="collapseExample"
                href="collapsetext"
              >
              ${listings[i]._count.bids}
                Bids
                <i class="fa-solid fa fa-coins"></i>
              </button>

              <div class="collapse" id="list_${listings[i].id}">
                <div class="card2 card-body">
                <hr/>
                `;
    listingHTML += displayBids(listings[i].bids);
    listingHTML += `
                
                </div>
              </div>`;
    if (listings[i].seller.name === userName) {
      listingHTML += `<button class="btn del-button" type="button" id="${listings[i].id}">Delete</button>`;
    }
    listingHTML += ` 
              
              <hr class="hr m-3" />
              <div>
                <button
                class="btn-2 w25 btn-yellow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bidbtn_${listings[i].id}"
                aria-expanded="false"
                href="collapsetext"
              > 
                BID
              </button>
        
              <div class="collapse" id="bidbtn_${listings[i].id}">
                <form  class="form-inline mx-auto" role="form" onsubmit="return false">
                  <div class="form-group">
                  <label for="Bid" class="form-label"></label>
                  <input id="bidAmount_${listings[i].id}" type="number" name="Bid" class="form-control" placeholder="Place your Bid">
                </div>
                <button class="mt-3 btn btn-yellow" onclick="makeBidSingle(event, '${listings[i].id}')">Place BID</button>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div> `;
    listingContainerSingle.innerHTML += listingHTML;
  }
}

export async function makeBid(event, id) {
  event.preventDefault();
  const amountInput = document.querySelector(`#bidAmount_${id}`);
  await BidOnListing(id, parseInt(amountInput.value))

  const listingData = await getListing(id);
  displaySingleListing([listingData], "#singleListing");
  return false;
}

window.makeBidSingle = makeBid;


export async function singleListing() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  let listingData = await getListing(id);
  displaySingleListing([listingData], "#singleListing");
  deleteListing();
  if (isLoggedIn()) {
    const element = document.querySelector("#logout");
    element.text = "Logout";
    setLogOut();
  }
}