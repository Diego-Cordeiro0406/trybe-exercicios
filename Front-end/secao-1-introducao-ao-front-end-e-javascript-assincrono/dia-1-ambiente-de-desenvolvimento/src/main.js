import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const buttton = document.querySelector('button');
const display = document.querySelector('h2');

buttton.addEventListener('click', () => {
    const senhaAleatoria = nanoid();
    display.innerHTML = senhaAleatoria;
});

display.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha Copiada');
});