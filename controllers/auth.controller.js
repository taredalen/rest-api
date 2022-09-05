const passport = require('passport');

/*
exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log(user);

    if (err) {
      next(err);
    } else if (!user) {

    } else {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.redirect(process.env.ROUTE_SEC);
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


 */

const { findUserPerEmail } = require('../controllers/user.controller');


exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUserPerEmail(email);
    if (user) {
      const match = await user.comparePassword(password);
      console.log('user', user);

      if (match) {
        req.login(user);
        res.redirect('/protected');
      } else {
        res.render('signin', { error: 'Wrong password' });
      }
    } else {
      res.render('signin', { error: 'User not found' });
    }
  } catch(e) {
    next(e);
  }

}

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/');
}