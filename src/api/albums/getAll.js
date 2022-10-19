/* eslint-disable no-console */
const database = require('../../database');

module.exports = (req, res) => {
  database
    .query('SELECT * FROM album')
    .then(([album]) => {
      res.json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving album from database');
    });
};
