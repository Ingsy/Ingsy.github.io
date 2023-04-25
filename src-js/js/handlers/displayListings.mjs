import { getListings } from "../listings/read.mjs";
import {
    listingsEnded,
    listingsWithImg,
    listingsWithNoImg,
    myListingsOnly,
    allListings,
    userName,
    searchForm,
    searchInput
} from "../api/constants.mjs";
import { removeListing } from "../listings/delete";

export function displayListings(listings, containerId) {
    const listingContainer = document.querySelector(containerId);
    listingContainer.innerHTML = "";
    for (let i = 0; i < listings.length; i++) {
        let listingHTML = "";
        listingHTML = `
        <div class="col">
            <div class="card text-center align-items-center">`;
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
              
              <div class="card-body">
                <div class="card-div">
                  <h5 class="card-title text-start">${listings[i].title}</h5>
                  <h5 class="card-text">${listings[i].endsAt}</h5>
                </div>
                <hr class="mt-1 mb-2" />

                <a class="btn" type="button" href="/single-listing.html?id=${listings[i].id}">
                  <i class="fa-solid fa fa-info"></i>
                  info
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
                  <i class="fa-solid fa fa-coins"></i>
                  bids
                </button>

                <div class="collapse" id="collapsebids">
                  <div class="card2 card-body">
                    <div class="card-div2">
                      <h3 class="card-text">date</h3>
                      <h3 class="card-text">Credit: 30</h3>
                    </div>
                    <hr class="m-3" />
                  </div>
                </div>
                <hr class="mt-2" />
                <button class="btn-2 w3 btn-yellow">BID</button>
              </div>
            </div>
          </div> `;
        listingContainer.innerHTML += listingHTML;
    }
}

//-search -listings -filter 

export async function listingFeed() {
    const listings = await getListings();
    listingsWithImg.addEventListener("click", function () {
        const filtered = listings.filter(listing => listing.media);
        displayListings(filtered, "#listingsFeed")
    });

    listingsWithNoImg.addEventListener("click", function () {
        const filtered = listings.filter(listing => !listing.media);
        displayListings(filtered, "#listingsFeed")
    });

    myListingsOnly.addEventListener("click", function () {
        const filtered = listings.filter(listing => listing.author.name === userName);
        displayListings(filtered, "#listingsFeed")
    });

    allListings.addEventListener("click", async function () {
        displayListings(listings, "#listingsFeed")
    });

    function doSearch(searchValue) {
        const filteredSearch = listings.filter(function (listings) {
            if (listing.title.toLowerCase().includes(searchValue)) {
                return true;
            }
            if (listing.author.name.toLowerCase().includes(searchValue)) {
                return true;
            }
            return false;
        });
        displayListings(filteredSearch, "listingsFeed");
        if (filteredSearch.length === 0) {
            alert("No listings found");
        }
    }

}