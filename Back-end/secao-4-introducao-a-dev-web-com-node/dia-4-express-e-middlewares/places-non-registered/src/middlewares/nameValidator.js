const nameValidator = (req, res, next) => {
  const property = ['name'];
  const everyProperty = property.every((prop) => prop in req.body);
  if (!everyProperty) {
    return res.status(401).json({ message: 'O campo name é obrigatório' });
  }
  const lenMinProperty = property.every((prop) => {
    const value = req.body[prop];
    return value.length >= 4;
  });

  if (!lenMinProperty) {
    return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }

  next();
};

module.exports = nameValidator;