const { findUserPerId } = require('../controllers/user.controller');
const { app } = require('../app');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const publicKEY = fs.readFileSync('./public.key', 'utf8');
const privateKEY  = {
    key: fs.readFileSync('./private.key', 'utf8'),
    passphrase:  process.env.PASSPHRASE
};

const createJwtToken = (user) => {
    const playload = { sub: user._id.toString() };
    const options = { expiresIn: '7d', algorithm: 'RS256' };
    return jwt.sign(playload, privateKEY, options);
}

exports.createJwtToken = createJwtToken;

const extractUserFromToken = async (req, res, next) => {
    console.log('----extractUserFromToken---');
    const token = req.cookies.jwt;
    if (token) {
        try {
            const options = { expiresIn: '7d', algorithms: ['RS256'] };
            const decodedToken = jwt.verify(token, publicKEY, options);
            const user = await findUserPerId(decodedToken.sub);
            if (user) {
                console.log('NEXT  in extractUserFromToken')
                req.user = user;
                next();
            } else {
                console.log('not user in extractUserFromToken')
                res.clearCookie('jwt');
                res.redirect('/');
            }
        } catch(e) {
            console.log(e);
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
