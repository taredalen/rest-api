const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    mapping: {
        required: true,
        type: mongoose.Schema.Types.Mixed
    },
   // author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
});

module.exports = mongoose.model('solution', solutionSchema)
