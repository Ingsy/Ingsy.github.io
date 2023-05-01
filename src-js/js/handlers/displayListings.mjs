import { getListings } from "../listings/read.mjs";
import {
  //listingsWithImg,
  //listingsWithNoImg,
  getSellerURL,
  myListingsOnly,
  allListingsbtn,
  userName,
  searchForm,
  searchInput,

} from "../api/constants.mjs";
import { removeListing } from "../listings/delete.mjs";


export function displayListings(listings, containerId) {
  const listingContainer = document.querySelector(containerId);
  listingContainer.innerHTML = "";
  for (let i = 0; i < listings.length; i++) {
    console.log(listings[i]);
    let listingHTML = "";
    listingHTML = `
        <div class="col">
            <div class="card text-center mx-auto align-items-center">
            <h5 class="card-title mt-3 mb-0">${listings[i].title}</h5>`;
    if (listings[i].media) {
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
  <div class="carousel-item active">
    <img
      src="${listings[i].media}"
      class="d-block card-img-bid"
      alt="..."
    />
  </div>
  <div class="carousel-item">
    <img
      src="${listings[i].media}"
      class="d-block card-img-bid"
      alt="..."
    />
  </div>
  <div class="carousel-item">
    <img
      src="${listings[i].media}"
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
                  <h3>${listings[i]._seller}</h3>
                  <h3>bidding ends: ${listings[i].endsAt}</h3>
                </div>
                <hr class="mt-1 mb-2" />`;
    if (listings[i].description) {
      listingHTML += `    
                
                <button
                type="button"
                class="btn"
                data-container="body"
                data-bs-toggle="popover"
                data-placement="right"
                title="${listings[i].title}"
                data-bs-content="${listings[i].description}"
              >
                description
              </button>`;
    }
    listingHTML += `
                <a class="btn" type="button" href="/single-listing.html?id=${listings[i].id}">
                  <i class="fa-solid fa fa-info"></i>
                </a>
                <button
                  class="btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsebids"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  href="collapsetext"
                >
                ${listings[i]._count.bids}
                  Bids
                  <i class="fa-solid fa fa-coins"></i>
                </button>

                <div class="collapse" id="collapsebids">
                  <div class="card2 card-body">
                  <hr/>
                  <div class="card-div">
                    <h3 class="card-text">${getSellerURL.seller}</h3>
                    <h3 class="card-text">${listings[i]._bids}</h3>
                    <h3 class="card-text">${listings[i]._bids}</h3>
                  </div>
                  <hr/>
                  </div>
                </div>`;
    if (listings[i]._seller === userName) {
      listingHTML += `<button class="btn del-button" type="button" aria-expanded="false"id="${listings[i].id}>
    <i class="fa-solid fa fa-trash"></i>
  </button>`;
    }
    listingHTML += ` 
                
                <hr class="mt-2" />
                <div>
                  <button
                  class="btn-2 w25 btn-yellow"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#BidBtn"
                  aria-expanded="false"
                  href="collapsetext"
                > 
                  BID
                </button>
          
                <div class="collapse" id="BidBtn">
                  <form id="BidOnListing" class="form-inline mx-auto" role="form">
                    <div class="form-group">
                    <label for="Bid" class="form-label"></label>
                    <input type="number" name="Bid" class="form-control" placeholder="Place your Bid">
                  </div>
                  <button type="submit" class="mt-3 btn btn-yellow">Place BID</button>
                </form>
                </div>
                </div>
              </div>
            </div>
          </div> `;
    listingContainer.innerHTML += listingHTML;
  }
}

//-search -listings -filter 

export async function listingFeed() {
  const listings = await getListings();

  myListingsOnly.addEventListener("click", function () {
    const filtered = listings.filter(listing => listing.title === userName);
    displayListings(filtered, "#listingsFeed")
  });

  allListingsbtn.addEventListener("click", async function () {
    displayListings(listings, "#listingsFeed")
  });

  function doSearch(searchValue) {
    const filteredSearch = listings.filter(function (listing) {
      if (listing.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      if (listing.author.name.toLowerCase().includes(searchValue)) {
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