// I cannot pass the selected values from events of javascript
// I get the correct number of nights and print them but I 
// hardcopied the value 3 for every booking...

// ***** Creating star rating *****

let stars0 = `
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
`;

let stars1 = `
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
`;

let stars2 = `
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
`;

let stars3 = `
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
`;

let stars4 = `
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
`;

let stars5 = `
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
`;

function getRating(i) {
    if (i === 0) {
        return stars0;
    } else if (i === 1) {
        return stars1;
    } else if (i === 2) {
        return stars2;
    } else if (i === 3) {
        return stars3;
    } else if (i === 4) {
        return stars4;
    } else if (i === 5) {
        return stars5;
    } else {
        return "invalid rating";
    }
}

// let priceList = [];
// let filteredByPriceHotels = [];
let ourValue;
fetch('./src/data.json').then(response => {
    return response.json();
}).then(data => {
    const hotels = data[1].entries;
    filterByPrice(hotels);
    // filterByStars(hotels);

    for (let index = 0; index < hotels.length; index++) {

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
            console.log(totalNights);
            // if(totalNights<=0){
            //     document.querySelector('.hotel-total-price').innerHTML = `<strong style="color: red">Invalid Dates</strong>`;
            // }else{
            //     document.querySelector('.hotel-total-price').innerHTML = `${totalNights} nights for <strong style="color: green">$${totalNights*prices[index]}</strong>`;
            // }

        });
        document.querySelector('#checkout').addEventListener('change', (e) => {
            endDate = e.target.value;
            endDateToDate = new Date(endDate);
            console.log(startDateToDate);
            console.log(endDateToDate);
            totalNights = (endDateToDate - startDateToDate) / (24 * 60 * 60 * 1000);
            console.log(totalNights);

            // if(totalNights<=0){
            //     document.querySelector('.hotel-total-price').innerHTML = `<strong style="color: red">Invalid Dates</strong>`;
            // }else{
            //     document.querySelector('.hotel-total-price').innerHTML = `${totalNights} nights for <strong style="color: green">$${totalNights*prices[index]}</strong>`;
            // }
        });

        const outtmpl = renderHotel(hotels[index]);
        document.querySelector('.container').innerHTML += outtmpl;
    }


}).catch(err => {
    console.log('UNABLE TO FETCH HOTEL THUMBNAILS!!')
});


function renderHotel(hotelObj) {
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



