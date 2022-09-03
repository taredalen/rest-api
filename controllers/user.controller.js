const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Model = require('../models/user.model');

exports.signup = async (req, res) => {
        const { username, email, password } = req.body;
        try {
            let user = await Model.findOne({ email});
            if (user) {
                return res.status(400).json({ msg: "User Already Exists"});
            }
            user = new Model({ username, email, password});

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = { user: { id: user.id }};

            jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 10000 },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
}

exports.login = async (req, res) => {

    const { email, password } = req.body;
    console.log('req.body on server', req.body)
    try {
        let user = await Model.findOne({ email });
        console.log('user from db', user);
        if (!user) return res.status(400).json({ message: "User Not Exist" });

        const isMatch = await bcrypt.compare(password.toString(), user.password.toString());
        if (!isMatch) return res.status(400).json({ message: "Incorrect Password !" });

        const payload = { user: { id: user.id } };

        jwt.sign(payload,  process.env.JWT_KEY, { expiresIn: 3600},
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ user, token });
            }
        );
    } catch (e) {
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
}

exports.findUserPerId =  async (req, res) => {
    console.log('router to get me route hit');
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await Model.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({message: "Error in Fetching user"});
    }
}


