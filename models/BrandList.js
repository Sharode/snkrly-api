const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String
    }
})

module.exports = Brand = mongoose.model('brands', brandSchema)