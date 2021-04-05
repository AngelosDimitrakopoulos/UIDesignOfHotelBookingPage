
// Target and fill dropdown menu with Room Types

const newSelect = document.querySelector('#roomtype'); // room type
const locationArea = document.querySelector('#hotellocation'); // hotel location
const guestRatingsArea = document.querySelector('#guestrating'); // guest ratings
const starsRatingArea = document.querySelector('#starsrating'); // stars ratings
const sortingAllFiltersArea = document.querySelector('#hotelsorting'); // recommendations

fetch('./src/data.json').then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    let index = 0;
    let roomTypes = data[0].roomtypes; // Get roomtypes records from data.json
    let entriesData = data[1].entries; // Get entries records from data.json
    let locationsDataOriginal = [];
    let locationsData = [];


    // ----- ROOM TYPES -----
    for (let index = 0; index < roomTypes.length; index++) {
        // Create an option element
        let optRoomType = document.createElement("option");
        optRoomType.innerHTML = roomTypes[index].name;
        // Append it to the select element
        newSelect.appendChild(optRoomType);
    }
    // ----- HOTEL LOCATIONS -----
    for (let index1 = 0; index1 < entriesData.length; index1++) {
        locationsDataOriginal[index1] = entriesData[index1].city;
    }
    // Remove duplicate hotel locations (passing clear data to locationsData array)
    $.each(locationsDataOriginal, function(i, el){
        if($.inArray(el, locationsData) === -1) locationsData.push(el);
    });
    
    for (let index2 = 0; index2 < locationsData.length; index2++) {
        // Create an option element
        let optLocation = document.createElement("option");
        optLocation.innerHTML = locationsData[index2];
        // Append it to the select element
        locationArea.appendChild(optLocation);
    }

    // ----- GUEST RATINGS -----
    let guestRatingsDataNumbers = [];
    let guestRatingsDataOriginal = [];
    let guestRatingsData = [];
    for (let index3 = 0; index3 < entriesData.length; index3++) {
        guestRatingsDataNumbers[index3] = entriesData[index3].guestrating;
    }
    for (let index3 = 0; index3 < guestRatingsDataNumbers.length; index3++) {
        if(guestRatingsDataNumbers[index3]>=0 && guestRatingsDataNumbers[index3]<2){
            guestRatingsDataOriginal[index3] = "Okay";
        }else if(guestRatingsDataNumbers[index3]>=2 && guestRatingsDataNumbers[index3]<6){
            guestRatingsDataOriginal[index3] = "Fair";
        }else if(guestRatingsDataNumbers[index3]>=6 && guestRatingsDataNumbers[index3]<7){
            guestRatingsDataOriginal[index3] = "Good";
        }else if(guestRatingsDataNumbers[index3]>=7 && guestRatingsDataNumbers[index3]<8.5){
            guestRatingsDataOriginal[index3] = "Very Good";
        }else if(guestRatingsDataNumbers[index3]>=8.5 && guestRatingsDataNumbers[index3]<=10){
            guestRatingsDataOriginal[index3] = "Excellent";
        }else {
            console.log('invalid score');
        }
    }
    // Remove duplicate guest ratings (passing clear data to locationsData array)
    $.each(guestRatingsDataOriginal, function(i, el){
        if($.inArray(el, guestRatingsData) === -1) guestRatingsData.push(el);
    });
    
    for (let index2 = 0; index2 < guestRatingsData.length; index2++) {
        // Create an option element
        let optGuestRatings = document.createElement("option");
        optGuestRatings.innerHTML = guestRatingsData[index2];
        // Append it to the select element
        guestRatingsArea.appendChild(optGuestRatings);
    }


    // ----- STAR RATINGS -----
    let starsRatingsDataNumbers = [];
    let starsRatingsDataOriginal = [];
    let starsRatingsData = [];
    for (let index3 = 0; index3 < entriesData.length; index3++) {
        starsRatingsDataNumbers[index3] = entriesData[index3].rating;
    }
    for (let index3 = 0; index3 < guestRatingsDataNumbers.length; index3++) {
        if(starsRatingsDataNumbers[index3] === 0){
            starsRatingsDataOriginal[index3] = "0 stars";
        }else if(starsRatingsDataNumbers[index3] === 1){
            starsRatingsDataOriginal[index3] = "1 stars";
        }else if(starsRatingsDataNumbers[index3] === 2){
            starsRatingsDataOriginal[index3] = "2 stars";
        }else if(starsRatingsDataNumbers[index3] === 3){
            starsRatingsDataOriginal[index3] = "3 stars";
        }else if(starsRatingsDataNumbers[index3] === 4){
            starsRatingsDataOriginal[index3] = "4 stars";
        }else if(starsRatingsDataNumbers[index3] === 5){
            starsRatingsDataOriginal[index3] = "5 stars";
        }else {
            console.log('invalid score');
        }
    }
    // Remove duplicate guest ratings (passing clear data to locationsData array)
    $.each(starsRatingsDataOriginal, function(i, el){
        if($.inArray(el, starsRatingsData) === -1) starsRatingsData.push(el);
    });
    
    for (let index2 = 0; index2 < starsRatingsData.length; index2++) {
        // Create an option element
        let optStarsRating = document.createElement("option");
        // optStarsRating.innerHTML = starsRatingsData[index2];
        optStarsRating.setAttribute("value", `${starsRatingsData[index2]}`);
        optStarsRating.innerHTML = `${starsRatingsData[index2]}`;
        
        // Append it to the select element
        starsRatingArea.appendChild(optStarsRating);
    }

    // ----- SORTING -----
    let sortingAllFiltersDataOriginal = [];
    let sortingAllFiltersData = [];

    for (let index1 = 0; index1 < entriesData.length; index1++) {
        for(let indexs = 0; indexs<entriesData[index1].filters.length; indexs++){
            sortingAllFiltersDataOriginal.push(entriesData[index1].filters[indexs].name);
        }
    }
    // Remove duplicate hotel recomendations (passing clear data to sortingAllFiltersData array)
    $.each(sortingAllFiltersDataOriginal, function(i, el){
        if($.inArray(el, sortingAllFiltersData) === -1) sortingAllFiltersData.push(el);
    });

    for (let index2 = 0; index2 < sortingAllFiltersData.length; index2++) {
        // Create an option element
        let optSortingAllFilters = document.createElement("option");
        optSortingAllFilters.setAttribute("value", `${sortingAllFiltersData[index2]}`);
        optSortingAllFilters.innerHTML = `${sortingAllFiltersData[index2]}`;
        // Append it to the select element
        sortingAllFiltersArea.appendChild(optSortingAllFilters);

    }

}).catch(err => {
    console.log('UNABLE TO FETCH ROOM TYPES!!')
});















