const Model = require('../models/project.model');

exports.getProjects = async (req, res, next) => {
    try {
        const result = await Model.find({ user: req.user._id });
        console.log(req.user)

        res.status(200).json(result, req.isAuthenticated(),req.user);
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}


