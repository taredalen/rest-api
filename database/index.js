const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DEV_DB)
    .then(() => console.log('Successfully connected to the DB'))
    .catch(err => console.log(err));
