const express = require('express');

const nameValidator = require('../middlewares/nameValidator');
const priceValidator = require('../middlewares/priceValidator');
const createAtValidator = require('../middlewares/createAtValidator');
const difficultyValidator = require('../middlewares/difficultyValidator');
const ratingValidator = require('../middlewares/ratingValidator');
const dataDB = require('../db/dataDB');

const router = express.Router();

router.post('/',
nameValidator,
priceValidator,
createAtValidator,
difficultyValidator,
ratingValidator, async (req, res) => {
   const place = req.body;

   try {
     const [result] = await dataDB.insert(place);

     res.status(201)
     .json({ message: `Atividade cadastrada com sucesso com o id ${result.insertId}` });
   } catch (error) {
     console.log(error);
     res.status(500).json({ message: 'correu um erro ao cadastrar uma pessoa' });
   }
});

router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   try {
     const [result] = await dataDB.deleteActivitie(id);
     res.status(200)
     .json({ message: `Atividade com o id ${result.insertId} removida com sucesso!` });
   } catch (error) {
      console.log(error);
     res.status(500).json({ message: 'Nenhuma atividade encontrada com esse id' });
   }
});
module.exports = router;