const Model = require('../models/user.model');


exports.signup = async (req, res, next) => {
    try {
        const hashedPassword = await Model.hashPassword(req.body.password);
        const newUser = await new Model({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        }).save();
        res.status(200).json(newUser);
    } catch(e) {
        res.status(400).json({ message: e.message })
    }
}

exports.findUserPerEmail = (email) => {
    return Model.findOne({ 'email': email }).exec();
}

exports.findUserPerId = (id) => {
    return Model.findOne({ _id: id }).exec();
}