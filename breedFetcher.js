const request = require('request');
// const breedName = process.argv[2]; // moved to index.js

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) callback(error); 
    // console.log('statusCode:', response && response.statusCode); // moved to index.js
    const data = JSON.parse(body); // to change data format from string to object
    // console.log('Type: ', typeof data);
    callback(error, data[0].description); // to acces the first element of the array which is an object and then access the description key in that object
  });
};

module.exports = fetchBreedDescription;

