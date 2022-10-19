/* eslint-disable no-console */
const database = require('../../database');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  const id = parseInt(req.params.id);

  database
    .query(
      'UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?',
      [title, genre, picture, artist, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not found');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing album');
    });
};
