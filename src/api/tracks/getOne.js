/* eslint-disable no-console */
const database = require('../../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query('SELECT * FROM track where id = ?', [id])
    .then(([track]) => {
      if (track[0] != null) {
        res.json(track[0]);
      } else {
        res.status(404).send('No track found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving track from database');
    });
};
