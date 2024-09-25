const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    profile: {
        required: true,
        type: String
    },
    sender: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    timestamp: {
        required: true,
        type: String,
        unique: true
    },
})
dataSchema.index({ timestamp: 1 }, { unique: true })
module.exports = mongoose.model('profile', dataSchema)