const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

request(url, (err, res, body) => {
  console.log("Error: ", err);
  console.log('StatusCode: ', res && res.statusCode);


  fs.writeFile(path, body, function(err) {
    let bytesSize = body.length;

    if (err) return console.log(err);
    console.log(`Downloaded and saved ${bytesSize} bytes to ${path}`);
  });
});