const User = require('../database/models/user.model');

exports.createUser = async (user) => {
    try {
        console.log('user.password',user.local.password);
        const hashedPassword = await User.hashPassword(user.local.password);
        const newUser = await new User({
            username: user.username,
            local: {
                email: user.local.email,
                password: hashedPassword
            }
        })
        return newUser.save();
    } catch(e) {
        throw e;
    }
}

exports.findUserPerEmail = (email) => {
    return User.findOne({ 'local.email': email }).exec();
}

exports.findUserPerId = (id) => {
    return User.findById(id).exec();
}
