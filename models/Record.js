const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema 
const RecordSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    records: {
        type: Array,
        default: []
    }
})

module.exports = Record = mongoose.model('record', RecordSchema)