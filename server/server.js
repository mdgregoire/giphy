const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const giphyRouter = require('./routers/giphy-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // NEEDED FOR ANGULARJS
app.use(express.static('server/public'));
// app.use('/giphy', giphyRouter);

let port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('up and running on port', port);
});
