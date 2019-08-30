const mongoose = require('mongoose')

const testbrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String
    }
})

module.exports = TestBrand = mongoose.model('testbrands', testbrandSchema)