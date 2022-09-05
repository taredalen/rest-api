const Model = require('../models/project.model');

exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Model.find({ user: req.user._id });
        res.status(200).json({ projects: projects, user: req.user});
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
}



