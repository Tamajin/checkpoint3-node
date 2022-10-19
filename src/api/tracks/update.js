/* eslint-disable no-console */
const database = require('../../database');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  const id = parseInt(req.params.id);

  database
    .query(
      'UPDATE track SET title = ?, youtube_url = ?, id_album = ? WHERE id = ?',
      [title, youtube_url, id_album, id]
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
      res.status(500).send('Error editing track');
    });
};
