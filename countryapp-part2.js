/*Part 2*/

var jsonReader = require("./json-file-reader.js")

var findCountry = function (data){
  var country = process.argv[2]
  for (var i = 0; i < data.length; i++) {
  if (data[i].name == country){
     console.log(data[i].name)
     console.log(data[i].topLevelDomain)
  }
  }
}

jsonReader.readFile("countries.json",findCountry)



