const express = require(`express`);
const app = express();
const port = 4001;
const authorsController = require('./controllers/routes.js'); // require out controller
const methodOverride = require('method-override');
const mongoose = require('mongoose');
app.use(methodOverride('_method'));
// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set(`view engine`, `ejs`);
app.listen(port, () => { // begin listening/run server
    console.log(`Listening on port ${port}`);
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose error: ', err);
});

