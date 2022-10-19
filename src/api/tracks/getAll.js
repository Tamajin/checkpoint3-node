/* eslint-disable no-console */
const database = require('../../database');

module.exports = (req, res) => {
  database
    .query('SELECT * FROM track')
    .then(([track]) => {
      res.json(track);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving track from database');
    });
};
