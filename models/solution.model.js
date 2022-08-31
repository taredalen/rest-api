const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    content: {
        required: true,
        type: mongoose.Schema.Types.Mixed
    }
});

module.exports = mongoose.model('solution', solutionSchema)
