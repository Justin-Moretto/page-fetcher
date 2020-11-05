const request = require('request');
const fs = require('fs');
//const readline = require('readline');

const args = process.argv.slice(2, 4);
const url = args[0];
const path = args[1];

request(url, function(error, response, body) {
  if (error) {
    throw error;
  } else {
    //download the given url into an html file at given path
    fs.writeFile(`${path}`, body, function(error, result) {
      if (error) {
        throw error;
      } else {
        fs.stat(path, (error, stats) => {
          if (!error) console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
        });
      }
    });
  }
});

//stretch not done:  If the file already exists, let the user know and prompt them to type in Y(followed by the enter key) to overwrite the file, otherwise skip and exit the app. We suggest using the readline module, which we've previously used.