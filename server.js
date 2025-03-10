// server.js
const express = require('express');
const app = express();
const read = require('./baca.js')
const router = express.Router();
router.get('/', async (req, res) => {
  let baca = await read('ls ../');
  res.send(baca)
});
app.use("/.netlify/functions/express", router);
module.exports = app; // Ekspor aplikasi Express
