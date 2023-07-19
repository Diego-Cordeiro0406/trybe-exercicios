const descriptionvalidator = (req, res, next) => {
    const property = ['rating', 'difficulty', 'createdAt'];
    const haveProperty = property.every((prop) => prop in req.body.description);

    if (!haveProperty) {
        return res.status(400).json({ message: 'Há alguma propriedade faltando' });
    }
    
    next();
};

module.exports = descriptionvalidator;