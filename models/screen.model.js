const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    prjid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'project', required: true
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('screen', solutionSchema)
