const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateAttention: {
        type: String,
        required: true
    },
    dateExit: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('service', ServiceSchema);