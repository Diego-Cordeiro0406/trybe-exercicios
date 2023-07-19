const express = require('express');

const nameValidator = require('../middlewares/nameValidator');
const priceValidator = require('../middlewares/priceValidator');
const descriptionValidator = require('../middlewares/descriptionvalidator');
const createAtValidator = require('../middlewares/createAtValidator');
const difficultyValidator = require('../middlewares/difficultyValidator');
const ratingValidator = require('../middlewares/ratingValidator');

const router = express.Router();

router.post('/',
nameValidator,
priceValidator,
descriptionValidator,
createAtValidator,
difficultyValidator,
ratingValidator, (req, res) => {
   res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;