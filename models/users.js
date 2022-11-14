const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    animal: {
        type: Schema.ObjectId,
        ref: 'Animal'
    },
    // status: {
    //     type: Schema.ObjectId,
    //     ref: 'status'
    // }
});

module.exports = mongoose.model('users', UsersSchema);