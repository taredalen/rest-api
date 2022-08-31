const passport = require('passport');


exports.signIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err);
        } else if (!user) {
           // res.render('auth/auth-form', { errors: [ info.message ], isAuthenticated: req.isAuthenticated(), currentUser: req.user });
        } else {
            req.login(user, (err) => {
                if (err) { next(err) } else {
                    res.redirect('/api');
                }
            })
        }
    })(req, res, next);
}

/*
exports.signout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/auth/signin/form');
    });
}

 */