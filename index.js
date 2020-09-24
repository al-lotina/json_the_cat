const fetchBreedDescription = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  // console.log('statusCode:', response && response.statusCode); 
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});