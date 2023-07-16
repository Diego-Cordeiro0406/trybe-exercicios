const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const lerDados = async () => {
  const data = await fs.readFile(moviesPath);
  const movies = JSON.parse(data);
  return movies;
};

const adicionarDados = async (newMovie) => {
  const readMovies = await lerDados();
  const newMovies = newMovie;
  const AllMovies = JSON.stringify([...readMovies, newMovies]); 
 const result = await fs.writeFile(moviesPath, AllMovies);
  return result;
};

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const movies = await lerDados();
  
  const mv = await movies.filter((el) => el.movie.includes(q));
  
  return res.status(200).json(mv);
});

// app.get('/movies/search', async (req, res) => {
//   try {
//     const { q } = req.query;
//     const movies = await lerDados();
  
// if (q) {
//   const filteredMovies = movies.filter((element) => element.movie.includes(q));
//   return res.status(200).json(filteredMovies);
// }
// res.status(200).end();
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// });

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await lerDados();

    const findById = movies.find((movie) => movie.id === Number(id));

    res.status(200).json(findById);
});

app.get('/movies', async (req, res) => {
    const movies = await lerDados();

    res.status(200).json({ movies });
});

app.post('/movies', async (req, res) => {
    const newMovie = req.body;
    await adicionarDados(newMovie);
    
    res.status(201).json({ message: 'Filme adicionado' });
});

app.put('/movies/:id', async (req, res) => {
   const { id } = req.params;
   const { movie, price } = req.body;
   const movies = await lerDados();
   
   const index = await movies.findIndex((mov) => mov.id === Number(id));
   
   if (index === -1) return res.status(404).json({ message: 'Filme não encontrado' });
   console.log(index);
   movies[index] = { id: Number(id), movie, price };
   const updatedMovies = JSON.stringify(movies);
   await fs.writeFile(moviesPath, updatedMovies);

   res.status(200).json(movies[index]);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await lerDados();
  
  const deletedMovie = await movies.filter((mov) => mov.id !== Number(id));
  const verifyMovie = await movies.find((mov) => mov.id === Number(id));
  if (verifyMovie === undefined) return res.status(404).json({ message: 'Filme não encontrado' });

  const updatedMovies = JSON.stringify(deletedMovie);
  await fs.writeFile(moviesPath, updatedMovies);

  res.status(200).json({ message: 'Filme excluido' });
});

module.exports = app;