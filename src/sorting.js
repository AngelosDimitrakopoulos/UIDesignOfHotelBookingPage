// De douleuei, thelei ligo psaksimo sto diplo loop gia to gemisma ton arrays pou deixnoun
// an ena recommendation einai sta filters


// function myFunction4() {
//     let check3 = document.getElementById("hotelsorting");
//     let currentRecommendations = check3.value;
//     filterByRecommendations(currentRecommendations);
//     return check3.value;
// }

// let filteredByRecommendationsHotels;

// let pos1 = [];


// function filterByRecommendations(currentRecommendations) {
//     fetch('./src/data.json').then(response => {
//         return response.json();
//     }).then(data => {
//         let hotelsRecommendationsFiltered = data[1].entries;
//         document.querySelector('.container').innerHTML = ``;
//         for (let indexrec = 0; indexrec < hotelsRecommendationsFiltered.length; indexrec++) {

//             pos1 = [];

//             for (let indexr = 0; indexr < hotelsRecommendationsFiltered[indexrec].filters.length; indexr++) {
//                 pos1.push(hotelsRecommendationsFiltered[indexrec].filters[indexr].name);
//             }

//         }
//             filteredByRecommendationsHotels = hotelsRecommendationsFiltered.filter(byRecommendations);
//             function byRecommendations(val) {

//                 if(currentRecommendations === "All Recommendations"){
//                     return true;
//                 }else {

//                     console.log(currentRecommendations);
//                     console.log(pos1);
//                     return (pos1.includes(currentRecommendations));
//                 }
//             }

//             for (let index = 0; index < filteredByRecommendationsHotels.length; index++) {
    
//                 const outtmplfilteredrecommendations = renderFilteredRecommendationsHotel(filteredByRecommendationsHotels[index]);
//                 document.querySelector('.container').innerHTML += outtmplfilteredrecommendations;
//             }
        

//     }).catch(err => {
//         console.log('UNABLE TO FETCH HOTEL DATA!!')
//     });

// }

// function renderFilteredRecommendationsHotel(hotelObj) {
//     const template = `
// <div class="hotel" style="display: flex; justify-content: center;">
// <div class="hotel-img col-3"><img style="padding: 0;" class="col-12" src="${hotelObj.thumbnail}" height="200px" width="200px" alt="thumbnail photo"></img></div>
// <div class="hotel-info col-4">
//     <div class="hotel-name col-12" style="font-size: large;"><strong>${hotelObj.hotelName}</strong></div>
//     <div class="hotel-rating col-10">
//         <span class="hotel-stars col-8">${getRating(hotelObj.rating)}</span>
//         <span class="col-2" style="font-size: small; padding: 5px;">Hotel</span>
//     </div><br>
//     <div class="hotel-city col-4">${hotelObj.city}</div><br>
//     <div class="hotel-ratings col-10">
//         <span class="rateTo10 col-5"><strong style="padding: 3px; border-radius: 4px; color: white; background-color: green;">${hotelObj.ratings.no}</strong></span>
//         <span class="rateComment col-5"><strong>${hotelObj.ratings.text}</strong></span>
//     </div>
// </div>
// <div class="hotel-other-details col-2">
//     <div class="hotel-website-offer col-12">
//         <div style="font-size: small;" class="col-12">Hotel Website</div>
//         <div class="hotel-website-price col-12" style="font-size: small;"><strong>$${hotelObj.price}</strong></div>
//     </div><br><br><br>
//     <div class="hotel-more-offer col-12">

//         <div style="font-size: small;" class="col-12">More deals from</div>
//         <div>
//             <span class="hotel-more-price col-12" style="font-size: small; padding: 5px;"><strong>$${hotelObj.price}</strong></span>
//             <span style="padding: 5px;"><select name="moreOffers" id="moreOffers"></select></span>
//         </div>

//     </div>
// </div>
// <div class="hotel-deal col-3">
//     <div class="hotel-price col-12">
//         <div class="col-12">Hotel Website</div>
//         <div class="hotel-onenight-price col-12" style="font-size: xx-large;"><strong>$${hotelObj.price}</strong></div>
//         <div class="hotel-total-price col-12">${3} nights for <strong style="color: green">$${3 * (hotelObj.price)}</strong></div>
//     </div><br>
//     <div class="view-deal-btn col-12"><a href="#">View Deal</a></div>
// </div>
// </div>
// `;
//     return template;
// }








