const {Data, profileData, historyData} = require('../../models/model');

async function add(req, res) {
    const data = req.body
    const timestamp = data.timestamp

    const exist = await Data.findOne({
        timestamp: timestamp,
    });

    if (exist) {
        res.status(400).json({ message: 'not found' })
        return false
    }
    try {
        const dataToSave = await Data.insertMany(data);
        res.json(dataToSave.content)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function addProfile(req, res) {
    const data = req.body
    const profileAddress = data.profileAddress
    const name = data.name
    const telegram = data.telegram
    const twitter = data.twitter
    const website = data.website
    console.log('debug->test')
    const exist = await profileData.findOne({
        profileAddress: profileAddress,
    });
    if (exist) {
        try {
            const data = await profileData.findOneAndUpdate({ profileAddress: profileAddress }, { name: name, telegram: telegram, twitter: twitter, website: website });
            res.json(data.content)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    } else {
        try {
            const dataToSave = await profileData.insertMany(data);
            res.json(dataToSave.content)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

}

async function addHistory(req, res) {
    const data = req.body
    try {
        const dataToSave = await historyData.insertMany(data);
        res.json(dataToSave.content)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    add,
    addHistory,
    addProfile
}