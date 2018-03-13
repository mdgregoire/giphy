const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // NEEDED FOR ANGULARJS
app.use(express.static('server/public'));


let env = require('dotenv');
env.config();

const giphyRouter = require('./routers/giphy-router');
app.use('/giphy', giphyRouter);

let port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('up and running on port', port);
});
