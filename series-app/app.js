const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.cricapi.com/v1/series?apikey=60083543-b87f-4e54-ac3c-b56bab75df07&offset=0.cricapi.com/v1/shttps://api.cricapi.com/v1/currentMatches?apikey=60083543-b87f-4e54-ac3c-b56bab75df07&offset=0eries?apikey=60083543-b87f-4e54-ac3c-b56bab75df07&offset=0://api.cricapi.com/v1/currentMatches?apikey=60083543-b87f-4e54-ac3c-b56bab75df07&offset=0"

    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on("data", function(data){

            const series = JSON.parse(data)

            let output = "<html><head>";
            output += "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css'>";
            output += "<style>li { margin-bottom: 10px; }</style>";
            output += "</head><body>";
            output += "<h1>List of all series</h1>";
            output += "<ul>";
            for (let i = 0; i < series.data.length; i++) {
              output += "<li>";
              output += "<strong>" + series.data[i].name + "</strong>";
              output += " (" + series.data[i].startDate + ")";
              output += "</li>";
            }
            output += "</ul>";
            output += "</body></html>";
            res.send(output);
        
        })            
    })

    

});

app.listen(8000, function(){
    console.log("Server is Active");
})
