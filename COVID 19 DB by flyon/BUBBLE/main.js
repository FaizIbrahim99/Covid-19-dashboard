$(document).ready(function() {
    // Get JSON data from url
    $.getJSON("https://api.covid19india.org/data.json", function(data) {
        var states = [];
        var confirmed = [];
        var recovered = [];
        var deaths = [];

        var total_active;
        var total_confirmed;
        var total_recovered;
        var total_deaths;

        // Take the first element in statewise array and add the objects values into the above variables
        total_active = data.statewise[0].active;
        total_confirmed = data.statewise[0].confirmed;
        total_recovered = data.statewise[0].recovered;
        total_deaths = data.statewise[0].deaths;

        // The each loop select a single statewise array element
        // Take the data in that array and add it to variables
        $.each(data.statewise, function(id, obj) {
            states.push(obj.state);
            confirmed.push(obj.confirmed);
            recovered.push(obj.recovered);
            deaths.push(obj.deaths);
        });

        // Remove the first element in the states, confirmed, recovered, and deaths as that is the total value
        states.shift();
        confirmed.shift();
        recovered.shift();
        deaths.shift();

        //loop through the data and push into dataChart
        var dataChart = [];
        confirmed.forEach(function (data, i) {
            dataChart.push({
            x: parseFloat(data),
            y: parseFloat(deaths[i]),
            r: 10,
          });
        });

        // Chart initialization
        var myChart = document.getElementById("myChart3").getContext("2d");
        var chart = new Chart(myChart, {
            type: "bubble",
            data: {
                labels: states,
                datasets: [{
                        label: "Confirmed Cases/Deaths",
                        data: dataChart,
                        backgroundColor: "#f1c40f",
                    },


                ],
            },
            option: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            },
        });
    });
});