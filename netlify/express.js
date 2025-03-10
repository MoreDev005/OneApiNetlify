// netlify/functions/express.js
const serverless = require('serverless-http');
const app = require('../server'); // Mengimpor aplikasi Express

module.exports.handler = serverless(app); // Ekspor fungsi serverless
