const { createUser } = require('../queries/users.queries');

const User = require('../database/models/user.model');



exports.signup = async (req, res, next) => {

    console.log(" Password", req.body.local.password);


    //const body = req.body;

    try {
        const user = await createUser(req.body);
        res.status(200).json(user);
    } catch(e) {
        res.status(400).json({ message: e.message })


    }
}


