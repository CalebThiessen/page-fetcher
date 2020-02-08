
const request = require('request');

var fs = require('fs');

var myArgs = process.argv.slice(2);


request(myArgs[0], function (error, response, body) {
  
  
  if (response && response.statusCode === 200) {console.log("Invalid URL");
return };

  fs.writeFile(myArgs[1], body, function (err) {
    if (err) throw err;
    const stats = fs.statSync(myArgs[1]);
    console.log(`Downloaded and saved ${stats.size} bytes to ${myArgs[1]}`);
   
  });
  

});


//> node fetcher.js http://www.example.com/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html