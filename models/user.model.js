const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =  mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password,10);
}

userSchema.methods.comparePassword = async function (password) {
    console.log(await bcrypt.compare(password, this.password));
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('user', userSchema);