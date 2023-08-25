const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const { ping, loginController, userController, secretController } = require('./controllers');
const { error } = require('./middlewares');
const validateAdmin = require('./middlewares/admin');
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/ping', ping);

app.post('/login', loginController.login);

app.get('/users/me', validateJWT, userController.getUser);

app.get('/top-secret', validateJWT, validateAdmin, secretController.getSecret);

app.use(error);

module.exports = app;
