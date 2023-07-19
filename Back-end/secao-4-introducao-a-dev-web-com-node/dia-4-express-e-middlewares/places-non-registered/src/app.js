const express = require('express');
require('express-async-errors');

const placesRouter = require('./routes/placesRouter');

const app = express();
app.use(express.json());

app.use('/activities', placesRouter);

module.exports = app;