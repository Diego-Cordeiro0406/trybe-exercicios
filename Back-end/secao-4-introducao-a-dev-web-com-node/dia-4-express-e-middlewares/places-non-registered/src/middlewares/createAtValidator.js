const createAtValidator = (req, res, next) => {
   const { createdAt } = req.body.description;
   const validation = createdAt.includes('/');
   if (!validation) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato dd/mm/aaaa' });
   }
   next();
};

module.exports = createAtValidator;