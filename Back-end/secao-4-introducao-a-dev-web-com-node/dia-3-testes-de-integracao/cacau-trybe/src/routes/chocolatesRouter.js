const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const cacauTrybe = require('../cacauTrybe');
const validateId = require('../middlewares/validateId');

const chocolatesPath = path.resolve(__dirname, '../files/cacauTrybeFile.json');

const router = express.Router();

router.get('/', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
  });

  router.get('/total', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    
    const total = await chocolates.reduce((acc, _curr) => acc + 1, 0);
    const totalChocolates = { totalChocolates: total };

    res.status(200).json(totalChocolates);
  });

  router.get('/search', async (req, res) => {
    const { name } = req.query;
    const chocolates = await cacauTrybe.getAllChocolates();

    const filteredChocolate = await chocolates
    .filter((chocolate) => chocolate.name.includes(name));
    if (filteredChocolate.length === 0) {
      res.status(404).send([]);
    }

    res.status(filteredChocolate.length === 0 ? 404 : 200).json(filteredChocolate);
  });

  router.put('/:id', validateId, async (req, res, next) => {
    try {
      const { id } = req.params;
    const { name, brandId } = req.body;
    const chocolate = await cacauTrybe.getAllChocolates();

    const index = chocolate.findIndex((choc) => choc.id === Number(id));
    if (index === -1) return res.status(404).json({ message: 'Nenhum chocolate encontrado' });

    chocolate[index] = { id: Number(id), name, brandId };
    const chocolates = chocolate[index];
    const updatedChocolate = JSON.stringify(chocolate);
    await fs.writeFile(chocolatesPath, updatedChocolate);
   res.status(201).json({ chocolates });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', validateId, async (req, res) => {
    const { id } = req.params;
    const chocolate = await cacauTrybe.getChocolateById(Number(id));
    if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
    res.status(200).json({ chocolate });
  });
  
  router.get('/brand/:brandId', async (req, res) => {
    const { brandId } = req.params;
    const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
    res.status(200).json({ chocolates });
  });

module.exports = router;