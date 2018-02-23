const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Start the GET
router.get('/', (request, response) => {
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
