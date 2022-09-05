const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    kind: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    screen: {
        type: mongoose.Schema.Types.ObjectId, ref: 'screen', required: true
    },
    mapping: {
        required: true,
        type: mongoose.Schema.Types.Mixed
    }
});

module.exports = mongoose.model('tobject', solutionSchema)
