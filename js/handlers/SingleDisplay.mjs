import { displayBids } from "./displayListings.mjs";
import { userName } from "../api/constants.mjs";
//import { makeBid } from "./displayListings.mjs";
import { getListing } from "../listings/read.mjs";



export async function displaySingleListing(listings, containerId) {
    const listingContainer = document.querySelector(containerId);

    listingContainer.innerHTML = "";
    for (let i = 0; i < listings.lenght; i++) {
        let listingHTML = "";

        listingHTML += `
div class="col-sm-12 col-md-6 col-lg-6">
            <h1>${listings[i].title}</h1>
            <div class="card card-single-listing mx-auto align-items-center">
              <h5 class="card-title mt-3 mb-0">${listings[i].title}</h5>

             
              <div class="card-body">
                <div class="card-div2 mb-3">
                <div>
                  <img src="${listings[i].media}" class="card-img-bid-small rounded float-left d-block" alt="...">
                  <img src="${listings[i].media}" class="card-img-bid-small rounded float-left d-block" alt="...">
                </div> 
                <div>
                  <img src="${listings[i].media}" class="rounded float-right card-img-bid-big d-block" alt="....">
                </div>
              </div>
              <hr class="mt-1 mb-2" />
                
                
                <div class="card-div m-3">
                  <h3>${listings[i].seller.name}</h3>
                  <h3>bidding ends:${listings[i].endsAt}</h3>
                </div>`;
        if (listings[i].description) {
            listingHTML += ` <hr class="mt-1 mb-2" />
description: 
 <p class="text-start mt-2">${listings[i].description}</p> 
<hr class="mt-1 mb-2" />`;
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
            listingHTML += `<button class="btn del-button" type="button" id="${listings[i].id}">delete</button>`;
        }
        listingHTML += ` 
              
              <hr class="mt-2" />
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
                <button class="mt-3 btn btn-yellow" onclick="makeBid(event, '${listings[i].id}')">Place BID</button>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div> `;
        return listingHTML;
    }
}


export async function singleListing() {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    let listing = await getListing(id);
    displaySingleListing([listing], "#singleListing");


}