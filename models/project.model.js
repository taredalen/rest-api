const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
});

module.exports = mongoose.model('project', solutionSchema)
