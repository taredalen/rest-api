const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/routes');

require('./database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/api', routes);

app.listen(port);
