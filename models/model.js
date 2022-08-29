const mongoose = require('mongoose');

const solutionItemSchema = new mongoose.Schema({
    selector: {
        required: true,
        type: String
    },
    value: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('mapping', solutionItemSchema)
