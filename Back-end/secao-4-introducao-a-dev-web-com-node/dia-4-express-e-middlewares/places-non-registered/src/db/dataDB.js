const connect = require('./connection');

const insert = (places) => connect.execute(
    `INSERT INTO places
    (name, rating, difficulty, createdAt) VALUES (?, ?, ?, ?)`,
    [places.name, places.rating, places.difficulty, places.createdAt],
);

const deleteActivitie = (id) => connect.execute('DELETE FROM places WHERE place_id = ?', [id]);

module.exports = {
    insert,
    deleteActivitie,
 };