const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });
const ToDo = mongoose.model('ToDo', todoSchema);
module.exports = ToDo;
