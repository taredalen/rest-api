const { app } = require('../app');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { findUserPerEmail, findUserPerId, getUser } = require('../controllers/user.controller')

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await findUserPerId(id);
        done(null, user);
    } catch (e) {
        done(e);
    }
});

passport.use('local', new LocalStrategy({ usernameField: 'email'}, async(email, password, done) => {
    try {
        const user = await findUserPerEmail(email);

        if (user) {
            const match = await user.comparePassword(password);
            if (match) done(null, user);
            else done(null, false, { message: 'wrong password'});
        } else {
            done(null, false, { message: 'user not found'})
        }
    } catch (e) {
        done(e);
    }
}));