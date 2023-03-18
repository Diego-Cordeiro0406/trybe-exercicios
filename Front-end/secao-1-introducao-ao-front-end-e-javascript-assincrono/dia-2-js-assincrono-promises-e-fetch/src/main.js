import './style.css'

const img = document.getElementById('img');
const nomep = document.getElementById('nomeP');
const button = document.getElementById('button');
const TOKEN = '2021213018084751'
const BASE_URL = `https://www.superheroapi.com/api.php/${TOKEN}`;
const MAX_HEROES = 731;

const randomID = () => Math.floor(Math.random() * MAX_HEROES)

button.addEventListener('click', (event) => {
    event.preventDefault()
    const id = randomID()
    fetch(`${BASE_URL}/${id}`).then(response => response.json()).then(data => {
img.src = data.image.url
nomep.innerHTML = data.name
    })
})
