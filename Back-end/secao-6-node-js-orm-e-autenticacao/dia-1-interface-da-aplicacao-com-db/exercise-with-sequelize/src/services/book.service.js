const { Books } = require('../models');

const getAll = async () => Books.findAll();

const getById = async (id) => Books.findByPk(id);

const create = async (book) => Books.create(book);

const update = async (id, book) => Books.update(book, {where: { id }});

const deleteBook = async (id) => Books.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
};