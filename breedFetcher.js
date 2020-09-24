const request = require('request');
const input = process.argv.slice(2);
// console.log(input[0]);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  if (error) console.log ('Error: invalid domain name.'); 
  console.log('statusCode:', response && response.statusCode); 
  if (body) {
    const data = JSON.parse(body); // to change data format from string to object
    console.log('Type: ', typeof data);
    console.log('Body:\n', data[0].description); // to acces the first element of the array which is an object and then access the description key in that object
  } else {
    console.log(`${input[0]} is not found.`)
  }
});