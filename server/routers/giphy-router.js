const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const axios = require('axios');

const giphyURL = 'https://api.giphy.com/v1/gifs';
const apiKey = process.env.GIPHY_API_KEY;
console.log('Key is', apiKey);


//the code below is for getting a rnadom gif using axios

router.get('/', (request, response) => {

  let url =  `${giphyURL}/random?api_key=${apiKey}`

  axios.get(url)
    .then(res => {
      response.send(res.data);
    })
    .catch(error => {
      console.log('error in giphy request', error);
    })
})

/////the code below is for getting the favorites off the db
// Start the GET
router.get('/displayFavs', (request, response) => {
    console.log('Inside the GET');
    // Below, fill out queryText once database is decided
    const queryText = `SELECT * FROM gifs`;
    pool.query(queryText)
        .then((result) => {
            response.send(result.rows);
            console.log(result.rows, 'in get router');
        })
        .catch((error) => {
            console.log('Cannot GET!');
            response.sendStatus(500);
        })
})
// End the GET



//search code
router.get('/:searchBar', (request, response)=>{
  let url = '';
  console.log(request.params.searchBar);
if(request.params.searchBar == null || request.params.searchBar == '' || request.params.searchBar == 'undefined'){
  url =  `${giphyURL}/random?api_key=${apiKey}`
  console.log(url);


} else{
  let searchBar = request.params.searchBar;
  console.log(searchBar);
  url = `${giphyURL}/search?q=${searchBar}&api_key=${apiKey}`;
  console.log(url);
}
  axios.get(url)
    .then(res => {
      response.send(res.data);
    })
    .catch(error => {
      console.log('error in search giphy', error);
    })
})




// Start the POST
router.post('/', (request, response) => {
    console.log('POSTing req.body', request.body);
    // Below, fill out queryText once database is decided
    const queryText = `INSERT INTO gifs (url)
                        VALUES ($1)`;
    pool.query(queryText, [request.body.gif])
    .then((result) => {
        response.sendStatus(201);
    })
    .catch((error) => {
        console.log('Cannot POST', error);
        response.sendStatus(500);
    })
})
// End the POST

module.exports = router;
