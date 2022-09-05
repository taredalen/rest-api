const Model = require('../models/screen.model');

exports.getScreens = async (req, res, next) => {
    try {
        const projectId = req.params.prjid;
        const screens = await Model.findOne({ prjid: projectId });
        res.status(200).json({ screens: screens, user: req.user});
    } catch(e) {
        next(e);
    }
}