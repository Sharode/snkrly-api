const mongoose = require('mongoose')

const testSnkrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    brand:{
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    releaseDate: {
        type: Date,
        default: Date.now()
    },
    retro:{
        type: Boolean,
        required: true
    },
    colorway: {
        type: [String],
        required: true,
        minlength: 3,
        maxlength: 20
    }
})

module.exports = TestSnkrs = mongoose.model('testsnkrs', testSnkrSchema)