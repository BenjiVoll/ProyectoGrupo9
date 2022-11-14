const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    diseases: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    category: {

    }
    // status: {
    //     type: Schema.ObjectId,
    //     ref: 'status'
    // }
});

module.exports = mongoose.model('pet', PetSchema);