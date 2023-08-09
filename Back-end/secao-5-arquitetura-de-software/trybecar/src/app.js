const express = require('express');
const {
  passengerModel, travelModel, driversModel } = require('./models');

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
  // app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  //   const { driverId, travelId } = req.params;
  //   const INCREMENT_STATUS = 1;
  
  //   const [[{ travel_status_id: travelStatusId }]] = await connection.execute(
  //     `SELECT
  //       TR.id,
  //       TR.driver_id,
  //       TR.starting_address,
  //       TR.ending_address,
  //       TR.request_date,
  //       TR.travel_status_id,
  //       TS.status,
  //       WP.address,
  //       WP.stop_order
  //     FROM travels AS TR INNER JOIN travel_status AS TS 
  //       ON TR.travel_status_id = TS.id
  //     LEFT JOIN waypoints AS WP 
  //       ON WP.travel_id = TR.id
  //     WHERE TR.id = ?;`,
  //     [travelId],
  //   );
  
  //   const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;
  
  //   await connection.execute(
  //     'UPDATE travels SET travel_status_id = ?, driver_id = ? WHERE id = ?',
  //     [nextTravelStatusId, driverId, travelId],
  //   );
  
  //   const [travelsFromDB] = await connection.execute(
  //     `SELECT
  //       TR.id,
  //       TR.driver_id,
  //       TR.starting_address,
  //       TR.ending_address,
  //       TR.request_date,
  //       TR.travel_status_id,
  //       TS.status,
  //       WP.address,
  //       WP.stop_order
  //     FROM travels AS TR INNER JOIN travel_status AS TS 
  //       ON TR.travel_status_id = TS.id
  //     LEFT JOIN waypoints AS WP 
  //       ON WP.travel_id = TR.id
  //     WHERE TR.id = ?;`,
  //     [travelId],
  //   );
  
  //   const travelWithWaypointsUpdated = groupWaypoints(camelize(travelsFromDB));
  
  //   res.status(200).json(travelWithWaypointsUpdated);
  // });

module.exports = app;