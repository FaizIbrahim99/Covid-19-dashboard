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

        // console.log(confirmed);
        $("#confirmed").append(total_confirmed);
        $("#active").append(total_active);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);

        // Chart initialization
        var myChart = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(myChart, {
            type: "polarArea",
            data: {
                labels: states,
                datasets: [{
                        label: "Confirmed Cases",
                        data: confirmed,
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 205, 86)',
                            'rgba(255, 99, 132)',
                            'rgba(255, 159, 64)',
                            'rgba(255, 205, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(54, 162, 235)',
                            'rgba(153, 102, 255)',
                            'rgba(123, 203, 207)',
                            'rgba(78, 203, 207)',
                            'rgba(128,0,0)',
                            'rgba(128,128,0)',
                            'rgba(128,0,128)',
                            'rgba(220,20,60)',
                            'rgba(255,215,0)',
                            'rgba(0,100,0)',
                            'rgba(60,179,113)',
                            'rgba(65,105,225)',
                            'rgba(255,20,147)',
                            'rgba(139,69,19)',
                            'rgba(0,0,0))',
                            'rgba(189,183,107)',
                            'rgba(255,0,255)',
                            'rgba(255,255,255)',
                            'rgba(255,140,0)',
                            'rgba(85,107,47)',
                            'rgba(46,139,87)',
                            'rgba(25,25,112)',
                            'rgba(139,0,139)',
                            'rgba(218,112,214)',
                            'rgba(255,235,205)',
                            'rgba(50,205,50)',
                            'rgba(205,92,92)',
                            'rgba(184,134,11)',
                            'rgba(240,230,140)',
                            'rgba(0,250,154)',
                            'rgba(32,178,170)',
                            'rgba(0,255,255)',
                        ],
                        hoverOffset: 37

                    },


                ],
            },

        });
    });
});