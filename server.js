var express = require("express");
var moment = require("moment");

var app = express();

app.get("/:input", function(req, res) {
   console.log("got request: " + req.params.input);
   var dateInput = req.params.input;
   var response = "";
   
   var dateMoment = moment(new Date(dateInput));
   if (dateMoment.isValid()) {
       response = {
            "unix": dateMoment.format("X"), 
            "natural": dateMoment.format("MMMM DD, YYYY")
       }
       res.json(response);
   } else {
       res.json({
          "unix":null,
          "natural":null
       });
   }
});

app.listen(8080, function() {
    console.log("Listening on port 8080!");
});