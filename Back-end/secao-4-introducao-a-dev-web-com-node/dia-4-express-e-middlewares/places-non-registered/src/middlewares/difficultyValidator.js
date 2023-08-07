const difficultyValidator = (req, res, next) => {
   const { difficulty } = req.body;
   
   if (difficulty === 'Fácil' || difficulty === 'Médio' || difficulty === 'Difícil') {
     return next();
   }

   res.status(400).json({ message: 'O campo difficulty deve ser "Fácil", "Médio" ou "Difícil"' });
};

module.exports = difficultyValidator;