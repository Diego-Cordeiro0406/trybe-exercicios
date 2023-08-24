const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const extractToken = (token) => token.split(' ')[1];

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  
  if (!bearerToken) return res.status(401).json({ message: 'Token não encontrado' });

  const token = extractToken(bearerToken);

  try {
    const decode = jwt.verify(token, secret);
    
    req.user = decode;
  next();
  } catch (error) {
    res.status(401).json({ error });
  }
};