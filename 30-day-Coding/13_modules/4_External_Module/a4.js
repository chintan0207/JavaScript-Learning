const _ = require('lodash');
const axios = require('axios');

const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice());


console.log(`Reversed Array: ${reversedArray}`);


axios.get('https://api.github.com')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });