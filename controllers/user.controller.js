const { createUser } = require('../queries/users.queries');

exports.signup = async (req, res, next) => {
    const body = req.body;
    try {
        await createUser(body);
    } catch(e) {
        console.log(e);
    }
}


