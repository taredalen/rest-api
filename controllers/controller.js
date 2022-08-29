const Model = require('../models/model');

exports.postElement =  async(req, res, next) => {
    try {
        const data = await new Model({
            method: req.body.method,
            value: req.body.value
        }).save();
        res.status(200).json(data);
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}

exports.getElements = async (req, res, next) => {
    try {
        res.json(await Model.find())
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}

exports.deleteElements = async (req, res, next) => {
    try {
        await Model.deleteMany({});
        res.send(`Everything has been deleted.`)
        res.status(200);
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}