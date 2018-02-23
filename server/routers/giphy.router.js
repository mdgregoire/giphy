const express = require('express'); 
const router = express.Router();
const pool = require('../modules/pool');

// Start the GET
router.get('/', (request, response) => {
    console.log('Inside the GET');
    // Below, fill out queryText once database is decided
    const quertText = ``;
    pool.query(quertText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Cannot GET!');
            res.sendStatus(500);
        })
})
// End the GET

// Start the POST
router.post('/', (request, response) => {
    console.log('POSTing req.body', req.body);
    // Below, fill out queryText once database is decided
    const quertText = ``;
    pool.query(quertText, [req.body.image])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Cannot POST', err);
        res.sendStatus(500);
    })
})
// End the POST

module.exports = router;