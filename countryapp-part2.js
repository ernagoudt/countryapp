/*Part 2*/

var jsonReader = require("./json-file-reader.js")

var findCountry = function (country){
  country = process.argv[2]
  for (var i = 0; i < parsedData.length; i++) {
  if (parsedData[i].name == country){
     console.log(parsedData[i].name)
     console.log(parsedData[i].topLevelDomain)
  }
  }
}

jsonReader.readFile("countries.json",findCountry)



