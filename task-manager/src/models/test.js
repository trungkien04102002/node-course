const mongoose = require('mongoose')
const validator = require('validator')

const Test = mongoose.model('Test', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    isOK: {
        type: Boolean,
        default: false
    }
})

module.exports = Test