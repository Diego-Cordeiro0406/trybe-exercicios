const BookService = require('../services/book.service')

const getAll = async (_req,res) => {
  try {
    const books = await BookService.getAll();

    res.status(200).json(books);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: 'Ocorreu um erro'});
  }
};

const getById = async (req,res) => {
    try {
      const { id } = req.params;
      const books = await BookService.getById(id);
      
      if(!books) return res.status(404).json({ message: 'Book not found' })

      res.status(200).json(books);
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: 'Ocorreu um erro'});
    }
  };

const create = async (req,res) => {
    try {
      const newBook = req.body;
      await BookService.create(newBook);

      res.status(201).json({message: 'Livro criado com sucesso!'});
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: 'Ocorreu um erro'});
    }
  };

const update = async (req,res) => {
    try {
      const { id } = req.params;
      const updatedBook = req.body;
      const verifyBook = await BookService.getById(id)
      await BookService.update(id, updatedBook);
      
      if(!verifyBook) return res.status(404).json({ message: 'Book not found' })

      res.status(200).json({message: 'Livro atualizado com sucesso!'});
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: 'Ocorreu um erro'});
    }
  };

const deleteBook = async (req,res) => {
    try {
      const { id } = req.params;
      const verifyBook = await BookService.getById(id)
      await BookService.deleteBook(id);
      
      if(!verifyBook) return res.status(404).json({ message: 'Book not found' })

      res.status(200).json({message: 'Livro deletado com sucesso!'});
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: 'Ocorreu um erro'});
    }
  };

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteBook,
}