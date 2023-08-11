const express = require('express');
const { passengerModel, travelModel } = require('./models');
const { carService, travelService, driverService } = require('./services');

const app = express();

app.use(express.json());

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
  
    const travelData = { passengerId, ...req.body };
    const serviceResponse = await travelService.requestTravel(travelData);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(400).json({ message: serviceResponse.data });
    }

  return res.status(201).json(serviceResponse.data);
  });
  
app.get('/drivers/open/travels', async (_req, res) => { 
    const travelsFromDB = await travelService.getOpenTravels();
    if (travelsFromDB.status !== 'SUCCESSFUL') {
      return res.status(400).json({ message: travelsFromDB.data });
    }
  
    res.status(200).json(travelsFromDB.data);
  });
  
app.get('/drivers', async (_req, res) => {
    const driversFromDb = await driverService.findAll();
    
    if (driversFromDb.status === 'NOT_FOUND') {
      return res.status(400).json(driversFromDb.data);
    }
    res.status(200).json(driversFromDb.data);
  });

app.get('/drivers/:driverId', async (req, res) => {
    const { driverId } = req.params;

    const driver = await driverService.findById(driverId);
    if (driver.status === 'NOT_FOUND') {
      res.status(404).json(driver.data);
    }
    res.status(200).json(driver.data);
  });

app.post('/drivers', async (req, res) => {
    const driver = req.body;

    const newDriver = await driverService.createDriver(driver);

    res.status(201).json(`motorista cadastrado com o id ${newDriver.data.id}`);
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