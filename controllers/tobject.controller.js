const Model = require('../models/tobject.model');

exports.getTobjects = async (req, res, next) => {
    try {
        const screenId = req.params.screen;
        const tobjects = await Model.findOne({ screen: screenId });
        res.status(200).json({ tobjects: tobjects, user: req.user});
    } catch(e) {
        next(e);
    }
}

exports.updateTobjects = async (req, res, next) => {
    const screenId = req.params.screen;
    try {
        const mapping = req.body.mapping;
        const changes = await Model.updateOne({ screen: screenId}, {$set: {mapping: mapping}});
        res.status(200).json({ changes: changes, user: req.user});
    } catch(e) {
        res.status(400);
    }
}
