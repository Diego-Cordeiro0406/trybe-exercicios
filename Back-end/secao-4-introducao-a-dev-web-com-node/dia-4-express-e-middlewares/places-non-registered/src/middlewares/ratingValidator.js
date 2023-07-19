const ratingValidator = (req, res, next) => {
    const { rating } = req.body.description;

    const nan = Number(rating);
    if ((Number.isNaN(nan)) || (nan < 0) || (nan > 5)) {
      return res
      .status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
    }
      next();
 };
 
 module.exports = ratingValidator;