/* eslint-disable no-console */
const database = require('../../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query(
      'SELECT t.title AS track, t.youtube_url, a.title AS album_title FROM track t INNER JOIN album a ON a.id=t.id_album WHERE id_album=?',
      [id]
    )
    .then(([track]) => {
      res.json(track);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving album from database');
    });
};
