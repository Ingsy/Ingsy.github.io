import { displayBids } from "./displayListings.mjs";
import { userName } from "../api/constants.mjs";
//import { makeBid } from "./displayListings.mjs";



export function displaySingleListing(listing) {
    let listingHTML = "";

    listingHTML += `
div class="col-sm-12 col-md-6 col-lg-6">
            <h1>${listing.title}</h1>
            <div class="card card-single-listing mx-auto align-items-center">
              <h5 class="card-title mt-3 mb-0">${listing.title}</h5>

             
              <div class="card-body">
                <div class="card-div2 mb-3">
                <div>
                  <img src="${listing.media}" class="card-img-bid-small rounded float-left d-block" alt="...">
                  <img src="${listing.media}" class="card-img-bid-small rounded float-left d-block" alt="...">
                </div> 
                <div>
                  <img src="${listing.media}" class="rounded float-right card-img-bid-big d-block" alt="....">
                </div>
              </div>
              <hr class="mt-1 mb-2" />
                
                
                <div class="card-div m-3">
                  <h3>${listing.seller.name}</h3>
                  <h3>bidding ends:${listing.endsAt}</h3>
                </div>`;
    if (listing.description) {
        listingHTML += ` <hr class="mt-1 mb-2" />
description: 
 <p class="text-start mt-2">${listing.description}</p> 
<hr class="mt-1 mb-2" />`;
    }
    listingHTML += `          

                <button
                class="btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#list_${listing.id}"
                aria-expanded="false"
                aria-controls="collapseExample"
                href="collapsetext"
              >
              ${listing._count.bids}
                Bids
                <i class="fa-solid fa fa-coins"></i>
              </button>

              <div class="collapse" id="list_${listing.id}">
                <div class="card2 card-body">
                <hr/>
                `;
    listingHTML += displayBids(listing.bids);
    listingHTML += `
                
                </div>
              </div>`;
    if (listing.seller.name === userName) {
        listingHTML += `<button class="btn del-button" type="button" id="${listing.id}">delete</button>`;
    }
    listingHTML += ` 
              
              <hr class="mt-2" />
              <div>
                <button
                class="btn-2 w25 btn-yellow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bidbtn_${listing.id}"
                aria-expanded="false"
                href="collapsetext"
              > 
                BID
              </button>
        
              <div class="collapse" id="bidbtn_${listing.id}">
                <form  class="form-inline mx-auto" role="form" onsubmit="return false">
                  <div class="form-group">
                  <label for="Bid" class="form-label"></label>
                  <input id="bidAmount_${listing.id}" type="number" name="Bid" class="form-control" placeholder="Place your Bid">
                </div>
                <button class="mt-3 btn btn-yellow" onclick="makeBid(event, '${listing.id}')">Place BID</button>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div> `;
    return listingHTML;
}