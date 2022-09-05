require('./database');

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const express = require('express');
const index = require('./routes');
const cors = require('cors');

const app = express();
exports.app = app;

const port = process.env.PORT || 3000;


app.use(cookieParser());

require('./config/jwt.config');

// require('./config/session.config');
// require('./config/passport.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());
app.use(index);

app.listen(port);



