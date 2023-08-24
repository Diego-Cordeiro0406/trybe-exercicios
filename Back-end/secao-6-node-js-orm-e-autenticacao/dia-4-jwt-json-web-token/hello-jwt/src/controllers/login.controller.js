const jwt = require('jsonwebtoken');
const { validateLogin } = require('../middlewares');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const login = (req, res) => {
  const { username, password } = req.body;
  const validate = validateLogin.validateinputs({ username, password });
  if (validate) {
    return res.status(401).json({ message: validate });
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const admin = req.body.username === 'diego' && req.body.password === 's3cr3t';
  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);
  
  const { data } = jwt.verify(token, secret);
  
  console.log(data);
  res.status(201).json({ token });
};

module.exports = {
  login,
};