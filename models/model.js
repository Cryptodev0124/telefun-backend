const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    ShitlordAddress: {
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
const Data = mongoose.model('Data', dataSchema)

const profileSchema = new mongoose.Schema({
    profileAddress: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    telegram: {
        required: false,
        type: String
    },
    twitter: {
        required: false,
        type: String
    },
    website: {
        required: false,
        type: String
    }
})
const profileData = mongoose.model('profile', profileSchema)

const historySchema = new mongoose.Schema({
    buyer: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    },
    token: {
        required: true,
        type: String
    },
    contract: {
        required: true,
        type: String
    },
    timestamp: {
        required: true,
        type: String,
        unique: true
    },
})
const historyData = mongoose.model('history', historySchema)
module.exports = { Data, profileData, historyData}
