/*Part 1*/

var fs = require('fs')

function findCountry(country){
fs.readFile("countries.json", function (err,data) {
  if (err){
    throw err;
  }

  ParsedData = JSON.parse(data)
    for (var i = 0; i < ParsedData.length; i++) {
      if (ParsedData[i].name == country){
         console.log(ParsedData[i].name)
         console.log(ParsedData[i].topLevelDomain)
      }

    }

});}

findCountry(process.argv[2])
