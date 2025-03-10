// server.js
const express = require('express');
const app = express();
const read = require('./baca.js')
const router = express.Router();
router.get('/', async (req, res) => {
  res.send('P bang')
});
app.use("/", router);
module.exports = app; // Ekspor aplikasi Express
