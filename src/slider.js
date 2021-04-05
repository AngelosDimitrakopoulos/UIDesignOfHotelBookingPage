
// Creating array of hotel prices (by fetching those values from data.json)

let priceList = [];
fetch('./src/data.json').then(response => {
    return response.json();
})
    .then(data => {
        // Work with JSON data here
        let priceData = data[1].entries; // Get entries records from data.json

        Object.entries(priceData).forEach(priceData => {
            priceList.push(priceData[1].price);
        });

        let maxValue = Math.max.apply(null, priceList);

        document.querySelector('.slidecontainer').innerHTML = `<input type="range" min="0" max="${maxValue}" value="${maxValue}"  step="100" class="slider" id="myRange">`;

        // Show (after fetching hotel prices) the values of slider
        let slider = document.getElementById("myRange");
        let output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function () {
            output.innerHTML = `${this.value}`;
        }
        
       
    }).catch(err => {
        console.log('UNABLE TO FETCH HOTEL PRICES !!')
    });







