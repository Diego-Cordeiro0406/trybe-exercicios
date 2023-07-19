const priceValidator = (req, res, next) => {
    const property = ['price'];
    const { price } = req.body;

    const everyProperty = property.every((prop) => prop in req.body);
    if (!everyProperty) {
      return res.status(401).json({ message: 'O campo price é obrigatório' });
    }
    
    const nan = Number(price);
    if ((Number.isNaN(nan)) || (nan < 0)) {
     return res.status(400)
      .json({ message: 'O campo price deve ser um número maior ou igual a zero' });
    }

    next();
};

module.exports = priceValidator;