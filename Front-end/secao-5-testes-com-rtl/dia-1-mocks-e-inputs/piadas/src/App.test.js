// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testando aplicação com api de piadas', () => {

  afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });
it('Testando se ao atualizar a pagina a piada é renderizada na tela', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
    const joke2 = {
    id: 'XLRfNuPZDAd',
      joke: `What is a tornado's favorite game to play? Twister!`,
      status: 200,
   }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(joke),
  });

  jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke2),
    });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  const button = screen.getByText('New joke')
  userEvent.click(button)
    
  const renderedJoke2 = await screen.findByText(`What is a tornado's favorite game to play? Twister!`)
  expect(renderedJoke2).toBeInTheDocument()
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument()
  expect
  (global.fetch).toHaveBeenCalledTimes(2)
})
})
