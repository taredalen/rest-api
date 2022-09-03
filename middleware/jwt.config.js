const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('token');
  if (!token) return res.status(401).json({ message: 'Auth Error' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.clearCookie('jwt')
    res.status(500).send({ message: 'Invalid Token' });
  }
};


exports.createJwtToken = (user) => {
  const jwtToken = jwt.sign({ sub: user._id.toString() }, process.env.JWT_KEY);
  return jwtToken;
}

const extractUserFromToken = (req, res, next) => {

}