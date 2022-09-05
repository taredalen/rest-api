const { findUserPerEmail } = require('../controllers/user.controller');

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUserPerEmail(email);
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        req.login(user);
        res.redirect('/protected');
      } else {
        res.status(400).json({ error: 'Wrong password' });
      }
    } else {
      res.status(400).json({ error: 'User not found' });
    }
  } catch(e) {
    next(e);
  }

}

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/');
}