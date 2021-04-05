// let filteredByPriceHotels = [];
function filterByPrice(hotels) {
    // get filtering price
    let ourSlider = document.getElementById("myRange");
    let ourDefaultValue = document.querySelector('#demo').childNodes[0].data;
    let ourValue = document.querySelector('#demo');
    ourSlider.oninput = function () {
        ourValue.innerHTML = `${this.value}`;

        // filter by price
        filteredByPriceHotels = hotels.filter(byPrice);
        function byPrice(val) {
            return (val.price <= (ourValue.childNodes[0].data));
        }

        document.querySelector('.container').innerHTML = ``;
        for (let index = 0; index < filteredByPriceHotels.length; index++) {

            // calculate nights (Put the event listener that calculates nights in both calendars)
            let startDate;
            let endDate;
            let totalNights;
            let startDateToDate;
            let endDateToDate;
            document.querySelector('#checkin').addEventListener('change', (e) => {
                startDate = e.target.value;
                startDateToDate = new Date(startDate);
                totalNights = (endDateToDate - startDateToDate) / (24 * 60 * 60 * 1000);

            });
            document.querySelector('#checkout').addEventListener('change', (e) => {
                endDate = e.target.value;
                endDateToDate = new Date(endDate);
                totalNights = (endDateToDate - startDateToDate) / (24 * 60 * 60 * 1000);

            });

            const outtmplfilteredprice = renderFilteredHotel(filteredByPriceHotels[index]);
            document.querySelector('.container').innerHTML += outtmplfilteredprice;
        }

    }

}

function renderFilteredHotel(hotelObj) {
    const template = `
<div class="hotel" style="display: flex; justify-content: center;">
<div class="hotel-img col-3"><img style="padding: 0;" class="col-12" src="${hotelObj.thumbnail}" height="200px" width="200px" alt="thumbnail photo"></img></div>
<div class="hotel-info col-4">
    <div class="hotel-name col-12" style="font-size: large;"><strong>${hotelObj.hotelName}</strong></div>
    <div class="hotel-rating col-10">
        <span class="hotel-stars col-8">${getRating(hotelObj.rating)}</span>
        <span class="col-2" style="font-size: small; padding: 5px;">Hotel</span>
    </div><br>
    <div class="hotel-city col-4">${hotelObj.city}</div><br>
    <div class="hotel-ratings col-10">
        <span class="rateTo10 col-5"><strong style="padding: 3px; border-radius: 4px; color: white; background-color: green;">${hotelObj.ratings.no}</strong></span>
        <span class="rateComment col-5"><strong>${hotelObj.ratings.text}</strong></span>
    </div>
</div>
<div class="hotel-other-details col-2">
    <div class="hotel-website-offer col-12">
        <div style="font-size: small;" class="col-12">Hotel Website</div>
        <div class="hotel-website-price col-12" style="font-size: small;"><strong>$${hotelObj.price}</strong></div>
    </div><br><br><br>
    <div class="hotel-more-offer col-12">

        <div style="font-size: small;" class="col-12">More deals from</div>
        <div>
            <span class="hotel-more-price col-12" style="font-size: small; padding: 5px;"><strong>$${hotelObj.price}</strong></span>
            <span style="padding: 5px;"><select name="moreOffers" id="moreOffers"></select></span>
        </div>

    </div>
</div>
<div class="hotel-deal col-3">
    <div class="hotel-price col-12">
        <div class="col-12">Hotel Website</div>
        <div class="hotel-onenight-price col-12" style="font-size: xx-large;"><strong>$${hotelObj.price}</strong></div>
        <div class="hotel-total-price col-12">${3} nights for <strong style="color: green">$${3 * (hotelObj.price)}</strong></div>
    </div><br>
    <div class="view-deal-btn col-12"><a href="#">View Deal</a></div>
</div>
</div>
`;
    return template;
}

// ----------- filter by stars -------------------


// let currentStars;
function myFunction1(){
    let check1 = document.getElementById("starsrating");
    let currentStars = check1.value;
    filterByStars(currentStars);
    return check1.value;    
}

let filteredByStarsHotels;
function filterByStars(currentStars) {
    let ourValue;
    fetch('./src/data.json').then(response => {
        return response.json();
    }).then(data => {
        const hotelsStarsFiltered = data[1].entries;
        document.querySelector('.container').innerHTML = ``;

        // filter by stars
        filteredByStarsHotels = hotelsStarsFiltered.filter(byStars);
        function byStars(val) {
            if(currentStars === "all"){
                return true;
            }else {
               return (val.rating.toString() === currentStars.charAt(0)); 
            }
            
        }
        

        for (let index = 0; index < filteredByStarsHotels.length; index++) {
    
            const outtmplfilteredstars = renderFilteredStarsHotel(filteredByStarsHotels[index]);
            document.querySelector('.container').innerHTML += outtmplfilteredstars;
        }
    
    
    }).catch(err => {
        console.log('UNABLE TO FETCH HOTEL DATA!!')
    });
    
}

function renderFilteredStarsHotel(hotelObj) {
    const template = `
<div class="hotel" style="display: flex; justify-content: center;">
<div class="hotel-img col-3"><img style="padding: 0;" class="col-12" src="${hotelObj.thumbnail}" height="200px" width="200px" alt="thumbnail photo"></img></div>
<div class="hotel-info col-4">
    <div class="hotel-name col-12" style="font-size: large;"><strong>${hotelObj.hotelName}</strong></div>
    <div class="hotel-rating col-10">
        <span class="hotel-stars col-8">${getRating(hotelObj.rating)}</span>
        <span class="col-2" style="font-size: small; padding: 5px;">Hotel</span>
    </div><br>
    <div class="hotel-city col-4">${hotelObj.city}</div><br>
    <div class="hotel-ratings col-10">
        <span class="rateTo10 col-5"><strong style="padding: 3px; border-radius: 4px; color: white; background-color: green;">${hotelObj.ratings.no}</strong></span>
        <span class="rateComment col-5"><strong>${hotelObj.ratings.text}</strong></span>
    </div>
</div>
<div class="hotel-other-details col-2">
    <div class="hotel-website-offer col-12">
        <div style="font-size: small;" class="col-12">Hotel Website</div>
        <div class="hotel-website-price col-12" style="font-size: small;"><strong>$${hotelObj.price}</strong></div>
    </div><br><br><br>
    <div class="hotel-more-offer col-12">

        <div style="font-size: small;" class="col-12">More deals from</div>
        <div>
            <span class="hotel-more-price col-12" style="font-size: small; padding: 5px;"><strong>$${hotelObj.price}</strong></span>
            <span style="padding: 5px;"><select name="moreOffers" id="moreOffers"></select></span>
        </div>

    </div>
</div>
<div class="hotel-deal col-3">
    <div class="hotel-price col-12">
        <div class="col-12">Hotel Website</div>
        <div class="hotel-onenight-price col-12" style="font-size: xx-large;"><strong>$${hotelObj.price}</strong></div>
        <div class="hotel-total-price col-12">${3} nights for <strong style="color: green">$${3 * (hotelObj.price)}</strong></div>
    </div><br>
    <div class="view-deal-btn col-12"><a href="#">View Deal</a></div>
</div>
</div>
`;
    return template;
}


// ----------- filter by guestRating -------------------


function myFunction2(){
    let check2 = document.getElementById("guestrating");
    let currentGuestRating = check2.value;
    filterByGuestRating(currentGuestRating);
    return check2.value;    
}

let filteredByGuestRatingHotels;
function filterByGuestRating(currentGuestRating) {
    fetch('./src/data.json').then(response => {
        return response.json();
    }).then(data => {
        const hotelsGuestRatingFiltered = data[1].entries;
        document.querySelector('.container').innerHTML = ``;

        // filter by guestRating
        filteredByGuestRatingHotels = hotelsGuestRatingFiltered.filter(byGuestRating);
        function byGuestRating(val) {
            if(currentGuestRating === "all"){
                return true;
            }else if(currentGuestRating === "Okay"){
                return (val.guestrating>=0 && val.guestrating<2);
            }else if(currentGuestRating === "Fair"){
                return (val.guestrating>=2 && val.guestrating<6);
            }else if(currentGuestRating === "Good"){
                return (val.guestrating>=6 && val.guestrating<7);
            }else if(currentGuestRating === "Very Good"){
                return (val.guestrating>=7 && val.guestrating<8.5);
            }else if(currentGuestRating === "Excellent"){
                return (val.guestrating>=8.5 && val.guestrating<=10);
            }else {
                console.log('something went wrong');
            }            
        }
        

        for (let index = 0; index < filteredByGuestRatingHotels.length; index++) {
    
            const outtmplfilteredguestrating = renderFilteredGuestRatingHotel(filteredByGuestRatingHotels[index]);
            document.querySelector('.container').innerHTML += outtmplfilteredguestrating;
        }
    
    
    }).catch(err => {
        console.log('UNABLE TO FETCH HOTEL DATA!!')
    });
    
}

function renderFilteredGuestRatingHotel(hotelObj) {
    const template = `
<div class="hotel" style="display: flex; justify-content: center;">
<div class="hotel-img col-3"><img style="padding: 0;" class="col-12" src="${hotelObj.thumbnail}" height="200px" width="200px" alt="thumbnail photo"></img></div>
<div class="hotel-info col-4">
    <div class="hotel-name col-12" style="font-size: large;"><strong>${hotelObj.hotelName}</strong></div>
    <div class="hotel-rating col-10">
        <span class="hotel-stars col-8">${getRating(hotelObj.rating)}</span>
        <span class="col-2" style="font-size: small; padding: 5px;">Hotel</span>
    </div><br>
    <div class="hotel-city col-4">${hotelObj.city}</div><br>
    <div class="hotel-ratings col-10">
        <span class="rateTo10 col-5"><strong style="padding: 3px; border-radius: 4px; color: white; background-color: green;">${hotelObj.ratings.no}</strong></span>
        <span class="rateComment col-5"><strong>${hotelObj.ratings.text}</strong></span>
    </div>
</div>
<div class="hotel-other-details col-2">
    <div class="hotel-website-offer col-12">
        <div style="font-size: small;" class="col-12">Hotel Website</div>
        <div class="hotel-website-price col-12" style="font-size: small;"><strong>$${hotelObj.price}</strong></div>
    </div><br><br><br>
    <div class="hotel-more-offer col-12">

        <div style="font-size: small;" class="col-12">More deals from</div>
        <div>
            <span class="hotel-more-price col-12" style="font-size: small; padding: 5px;"><strong>$${hotelObj.price}</strong></span>
            <span style="padding: 5px;"><select name="moreOffers" id="moreOffers"></select></span>
        </div>

    </div>
</div>
<div class="hotel-deal col-3">
    <div class="hotel-price col-12">
        <div class="col-12">Hotel Website</div>
        <div class="hotel-onenight-price col-12" style="font-size: xx-large;"><strong>$${hotelObj.price}</strong></div>
        <div class="hotel-total-price col-12">${3} nights for <strong style="color: green">$${3 * (hotelObj.price)}</strong></div>
    </div><br>
    <div class="view-deal-btn col-12"><a href="#">View Deal</a></div>
</div>
</div>
`;
    return template;
}



// ----------- filter by location -------------------


function myFunction3(){
    let check3 = document.getElementById("hotellocation");
    let currentLocation = check3.value;
    filterByLocation(currentLocation);
    return check3.value;    
}

let filteredByLocationHotels;
function filterByLocation(currentLocation) {
    fetch('./src/data.json').then(response => {
        return response.json();
    }).then(data => {
        const hotelsLocationFiltered = data[1].entries;
        document.querySelector('.container').innerHTML = ``;

        // filter by Location
        filteredByLocationHotels = hotelsLocationFiltered.filter(byLocation);
        function byLocation(val) {
            if(currentLocation === "all"){
                return true;
            }else {
                return (val.city === currentLocation);
            }          
        }
        

        for (let index = 0; index < filteredByLocationHotels.length; index++) {
    
            const outtmplfilteredlocation = renderFilteredLocationHotel(filteredByLocationHotels[index]);
            document.querySelector('.container').innerHTML += outtmplfilteredlocation;
        }
    
    
    }).catch(err => {
        console.log('UNABLE TO FETCH HOTEL DATA!!')
    });
    
}

function renderFilteredLocationHotel(hotelObj) {
    const template = `
<div class="hotel" style="display: flex; justify-content: center;">
<div class="hotel-img col-3"><img style="padding: 0;" class="col-12" src="${hotelObj.thumbnail}" height="200px" width="200px" alt="thumbnail photo"></img></div>
<div class="hotel-info col-4">
    <div class="hotel-name col-12" style="font-size: large;"><strong>${hotelObj.hotelName}</strong></div>
    <div class="hotel-rating col-10">
        <span class="hotel-stars col-8">${getRating(hotelObj.rating)}</span>
        <span class="col-2" style="font-size: small; padding: 5px;">Hotel</span>
    </div><br>
    <div class="hotel-city col-4">${hotelObj.city}</div><br>
    <div class="hotel-ratings col-10">
        <span class="rateTo10 col-5"><strong style="padding: 3px; border-radius: 4px; color: white; background-color: green;">${hotelObj.ratings.no}</strong></span>
        <span class="rateComment col-5"><strong>${hotelObj.ratings.text}</strong></span>
    </div>
</div>
<div class="hotel-other-details col-2">
    <div class="hotel-website-offer col-12">
        <div style="font-size: small;" class="col-12">Hotel Website</div>
        <div class="hotel-website-price col-12" style="font-size: small;"><strong>$${hotelObj.price}</strong></div>
    </div><br><br><br>
    <div class="hotel-more-offer col-12">

        <div style="font-size: small;" class="col-12">More deals from</div>
        <div>
            <span class="hotel-more-price col-12" style="font-size: small; padding: 5px;"><strong>$${hotelObj.price}</strong></span>
            <span style="padding: 5px;"><select name="moreOffers" id="moreOffers"></select></span>
        </div>

    </div>
</div>
<div class="hotel-deal col-3">
    <div class="hotel-price col-12">
        <div class="col-12">Hotel Website</div>
        <div class="hotel-onenight-price col-12" style="font-size: xx-large;"><strong>$${hotelObj.price}</strong></div>
        <div class="hotel-total-price col-12">${3} nights for <strong style="color: green">$${3 * (hotelObj.price)}</strong></div>
    </div><br>
    <div class="view-deal-btn col-12"><a href="#">View Deal</a></div>
</div>
</div>
`;
    return template;
}


