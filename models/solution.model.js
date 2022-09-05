const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    mapping: {
        required: true,
        type: mongoose.Schema.Types.Mixed
    },
});

module.exports = mongoose.model('solution', solutionSchema)
