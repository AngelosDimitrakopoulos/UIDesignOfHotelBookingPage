

 let citiesOriginal = [];
 let cities = [];
  fetch('./src/data.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    let entryData = data[1].entries; // Get entries records from data.json

    // Loop through entries records (creating citiesOriginal array which can hold duplicates)
    Object.entries(entryData).forEach(entryData => {
        citiesOriginal.push(entryData[1].city);
    });
    // Remove duplicate cities (passing clear data to cities array)
    $.each(citiesOriginal, function(i, el){
        if($.inArray(el, cities) === -1) cities.push(el);
    });

    let output = "";
    const datalist = document.querySelector('#citiesInput');
    for(let i = 0; i<cities.length; i++){
        output += `<option value="${cities[i]}"></option>\n`;
    }
    datalist.innerHTML = output;

  }).catch(err => {
    console.log('UNABLE TO FETCH CITIES!!')
  });


