const { findUserPerId } = require('../controllers/user.controller');
const { app } = require('../app');
const jwt = require('jsonwebtoken');

//const options = { expiresIn: '7d', algorithm: 'RS256' };

const createJwtToken = (user) => {

    const playload = { sub: user._id.toString() };
    const token = jwt.sign(playload, process.env.JWT_KEY_PRIVATE);
    console.log('token', token)
    return token;
}

exports.createJwtToken = createJwtToken;

const extractUserFromToken = async (req, res, next) => {
    console.log('extractUserFromToken');
    const token = req.cookies.jwt;
    console.log(token);
    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_KEY_PRIVATE);
            console.log("\nJWT verification result: " + JSON.stringify(decodedToken));
            const user = await findUserPerId(decodedToken.sub);
            if (user) {
                req.user = user;
                next();
            } else {
                res.clearCookie('jwt');
                res.redirect('/');
            }
        } catch(e) {
            res.clearCookie('jwt');
            res.redirect('/');
        }
    } else {
        next();
    }
}



const addJwtFeatures = (req, res, next) => {
    req.isAuthenticated = () => !!req.user;
    req.logout = () => res.clearCookie('jwt')
    req.login = (user) => {
        const token = createJwtToken(user);
        res.cookie('jwt', token);
    }
    next();
}

app.use(extractUserFromToken);
app.use(addJwtFeatures);
