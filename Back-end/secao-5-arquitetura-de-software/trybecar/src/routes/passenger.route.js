const route = require('express').Router();
const { passengerController } = require('../controllers');
const validateTravelFields = require('../controllers/middlewares/validateTravelFields');

route.post('/:passengerId/request/travel', validateTravelFields, passengerController.createTravel);

module.exports = route;
