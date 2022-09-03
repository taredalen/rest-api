const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =  mongoose.Schema({
    username: { type: String, required: true },
    local: {
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password,10);
}

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.local.password);
}

module.exports = mongoose.model('user', userSchema);