// server.js
const express = require('express');
const app = express();
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello from Express on Netlify!');
});
app.use("/.netlify/functions/express", router);
module.exports = app; // Ekspor aplikasi Express
