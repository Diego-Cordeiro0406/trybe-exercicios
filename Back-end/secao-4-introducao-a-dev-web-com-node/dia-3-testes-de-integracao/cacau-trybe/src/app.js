const express = require('express');
require('express-async-errors');

const chocolatesRouter = require('./routes/chocolatesRouter');

const app = express();
app.use(express.json());
app.use('/chocolates', chocolatesRouter);

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

module.exports = app;