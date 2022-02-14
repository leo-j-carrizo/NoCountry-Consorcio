const express = require('express');
const cors = require('cors');

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4003);

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/example', require('../routes/example.routes'));

module.exports = app;