const Model = require('../models/user.model');


exports.signup = async (req, res, next) => {
    try {
        const user = req.body;
        const hashedPassword = await Model.hashPassword(user.local.password);
        const newUser = await new Model({
            username: user.username,
            local: {
                email: user.local.email,
                password: hashedPassword
            }
        }).save();
        res.status(200).json(newUser);
    } catch(e) {
        res.status(400).json({ message: e.message })
    }
}

exports.findUserPerEmail = (email) => {
    return Model.findOne({ 'local.email': email }).exec();
}

exports.findUserPerId = (id) => {
    return Model.findById(id).exec();
}



