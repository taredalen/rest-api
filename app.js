const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const solution = require('./routes/solution.routes');
const user = require('./routes/user.routes');

const cors = require('cors');

require('./database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

exports.app = app;
require('./config/session.config');
require('./config/passport.config');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());

app.use(bodyParser.json({limit: '200mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

app.use('/api', solution);
app.use('/user', user);


app.listen(port);
