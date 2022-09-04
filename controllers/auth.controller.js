const passport = require('passport');

exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.status(400).json({ message: err.message });
    }
    else if (!user) {
      res.status(400);
    }
    else {
      req.login(user, (err) => {
        if (err) next(err);
        else {
          res.send(`Connexion successful.`)
          res.status(200);
        }
      });
    }
  })(req, res, next);
};


exports.signout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send(`Signout successful.`)
    res.status(200);
  });
};
