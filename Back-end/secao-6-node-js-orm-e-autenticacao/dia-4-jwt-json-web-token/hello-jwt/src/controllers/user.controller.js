// const jwt = require('jsonwebtoken');
// const { validateLogin } = require('../middlewares');

// const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const getUser = (req, res) => {
  const { user } = req;
  console.log(user);
  res.status(200).json(user.data);
};

module.exports = {
  getUser,
};