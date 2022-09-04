const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    mapping: {
        required: true,
        type: mongoose.Schema.Types.Mixed
    }
    /*
    method: {
        required: true,
        type: String
    },
    value: {
        required: true,
        type: String
    }

     */
});

module.exports = mongoose.model('solution', solutionSchema)
