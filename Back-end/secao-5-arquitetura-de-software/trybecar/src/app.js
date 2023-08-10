const express = require('express');
const { passengerModel, travelModel, driversModel } = require('./models');
const carService = require('./services/car.services');

const app = express();

app.use(express.json());

const passengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  return passenger || false;
};

app.get('/passengers', async (_req, res) => {
    const passengers = await passengerModel.findAll();
    return res.status(200).json(passengers);
  });

app.get('/passengers/:passengerId', async (req, res) => {
    const { passengerId } = req.params;
    const passenger = await passengerModel.findById(passengerId);
    if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
    return res.status(200).json(passenger);
  });

app.delete('/passengers/:passengerId', async (req, res) => {
    const { passengerId } = req.params;
    await passengerModel.deleteById(passengerId);
    return res.status(204).end();
  });
  
app.post('/passengers/:passengerId/request/travel', async (req, res) => {
    const { passengerId } = req.params;
    const { startingAddress, endingAddress, waypoints } = req.body;

  const passenger = await passengerExists(passengerId);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

  const travelId = await travelModel.insert({
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  });
  const newTravel = await travelModel.findById(travelId);

  return res.status(201).json(newTravel);
  });
  
app.get('/drivers/open/travels', async (_req, res) => { 
    const travelsFromDB = await travelModel.openTravels();
  
    res.status(200).json(travelsFromDB);
  });
  
app.get('/drivers', async (_req, res) => {
    const driversFromDb = await driversModel.findAll();

    res.status(200).json(driversFromDb);
  });

app.get('/drivers/:driverId', async (req, res) => {
    const { driverId } = req.params;

    const driver = await driversModel.findById(driverId);
    
    res.status(200).json(driver);
  });

app.post('/drivers', async (req, res) => {
    const driver = req.body;

    const insertId = await driversModel.insert(driver);

    res.status(201).json(`motorista cadastrado com o id ${insertId}`);
});

app.post('/cars', async (req, res) => {
  const { model, licensePlate, year, color, driverId } = req.body;
  const serviceResponse = await carService.createCar({
    model, 
    licensePlate, 
    year, 
    color, 
    driverId,
  });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
});

app.get('/cars', async (_req, res) => {
  const serviceResponse = await carService.findAll();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;

  const { travelStatusId } = await travelModel.findById(travelId);
  const INCREMENT_STATUS = 1;
  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  await travelModel.update(nextTravelStatusId, driverId, travelId);
  const travel = await travelModel.findById(travelId);

  res.status(200).json(travel);
});

module.exports = app;