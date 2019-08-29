const mongoose = require('mongoose')

const snkrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
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
    colorway: {
        type: [String],
        required: true,
        minlength: 3,
        maxlength: 20
    }

})

module.exports = Snkr = mongoose.model('snkrs', snkrSchema)