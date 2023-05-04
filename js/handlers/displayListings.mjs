import {
  getListings,
  getListing,
  getActiveListings,
  getMyListings
} from "../listings/read.mjs";
import { BidOnListing } from "../listings/bid.mjs";
import {
  listingsActive,
  myListingsOnly,
  allListingsbtn,
  userName,
  searchForm,
  searchInput,

} from "../api/constants.mjs";
import { removeListing } from "../listings/delete.mjs";

function displayBids(bids) {
  let bidsHtml = "";
  for (let i = 0; i < bids.length; i++) {
    const bid = bids[i];
    bidsHtml += ` 
    <div class="card-div">
      <h3 class="card-text m-2">${bid.bidderName}</h3>
      <h3 class="card-text m-2">${bid.created}</h3>
      <h3 class="card-text m-2">${bid.amount}</h3>
    </div>
    <hr/>
    `;
  }
  return bidsHtml;
}

function displayListing(listing) {
  let listingHTML = "";
  listingHTML = `
        <div class="col" id="listItem_${listing.id}">
            <div class="card text-center mx-auto align-items-center">
            <h5 class="card-title mt-3 mb-0">${listing.title}</h5>`;
  if (listing.media) {
    listingHTML += `<div
id="carouselExampleIndicators"
class="carousel slide carousel-dark"
data-bs-ride="true"
>
<div class="carousel-indicators">
  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="0"
    class="active"
    aria-current="true"
    aria-label="Slide 1"
  ></button>
  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="1"
    aria-label="Slide 2"
  ></button>
  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="2"
    aria-label="Slide 3"
  ></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active overflow-hidden">
    <img
      src="${listing.media}"
      class="d-block card-img-bid"
      alt="..."
    />
  </div>
  <div class="carousel-item overflow-hidden">
    <img
      src="${listing.media}"
      class="d-block card-img-bid"
      alt="..."
    />
  </div>
  <div class="carousel-item overflow-hidden">
    <img
      src="${listing.media}"
      class="d-block card-img-bid"
      alt="..."
    />
  </div>
</div>
<button
  class="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide="prev"
>
  <span
    class="carousel-control-prev-icon"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Previous</span>
</button>
<button
  class="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide="next"
>
  <span
    class="carousel-control-next-icon"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`;
  }
  listingHTML += `
              
              <div class="card-body text-center">
              <div class="card-div2">
                  <h3 class="me-3">${listing.seller.name}</h3>
                  <h3>ends: ${listing.endsAt}</h3>
                </div>
                <hr class="mt-1 mb-2" />`;
  if (listing.description) {
    listingHTML += `    
                
                <button
                type="button"
                class="btn"
                data-container="body"
                data-bs-toggle="popover"
                data-placement="right"
                title="${listing.title}"
                data-bs-content="${listing.description}"
              >
                description
              </button>`;
  }
  listingHTML += `
                <a class="btn" type="button" href="/single-listing.html?id=${listing.id}">
                  <i class="fa-solid fa fa-info"></i>
                </a>
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
    listingHTML += `<button class="btn del-button" type="button" aria-expanded="false" id="${listing.id}>
    <i class="fa-solid fa fa-trash"></i>
    delete listing
  </button>`;
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

export function displayListings(listings, containerId) {
  const listingContainer = document.querySelector(containerId);
  listingContainer.innerHTML = "";
  for (let i = 0; i < listings.length; i++) {
    listingContainer.innerHTML += displayListing(listings[i]);
  }
}

async function makeBid(event, id) {
  event.preventDefault();
  const amountInput = document.querySelector(`#bidAmount_${id}`);
  await BidOnListing(id, parseInt(amountInput.value))

  let listing = document.querySelector(`#listItem_${id}`);
  const listingData = await getListing(id);
  listing.outerHTML = displayListing(listingData);
  return false;
}

window.makeBid = makeBid;

//-search -listings -filter 

export async function listingFeed() {
  const listings = await getListings();
  const activeListings = await getActiveListings();
  const myListings = await getMyListings();

  myListingsOnly.addEventListener("click", function () {
    displayListings(myListings, "#listingsFeed")
  });

  listingsActive.addEventListener("click", function () {
    displayListings(activeListings, "#listingsFeed")
  });

  allListingsbtn.addEventListener("click", async function () {
    displayListings(listings, "#listingsFeed")
  });

  function doSearch(searchValue) {
    const filteredSearch = listings.filter(function (listing) {
      if (listing.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (listing.seller.name.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (listing.id.toString().includes(searchValue)) {
        return true;
      }
      return false;
    });
    displayListings(filteredSearch, "#listingsFeed");
    if (filteredSearch.length === 0) {
      alert("No listings found");
    }
  }

  // onchange only fires when input not in focus
  searchInput.onchange = (event) => doSearch(event.target.value.trim().toLowerCase());
  searchForm.onsubmit = (event) => {
    event.preventDefault();

    doSearch(searchInput.value);
    return false;
  }
}

export async function allListings() {
  let listings = await getListings();
  displayListings(listings, "#listingsFeed");

  removeListing();
}