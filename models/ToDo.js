const { Timestamp } = require('mongodb');
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {

        text:{
            type: String,
            required: true
        },
    },
    {
        timestamp:true
    }
)

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;