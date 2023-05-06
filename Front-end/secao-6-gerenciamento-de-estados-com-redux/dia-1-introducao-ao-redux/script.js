import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
    case 'TOGGLE_STATUS':
      return { ...state, status: state.status === 'offline' ? 'online' : 'offline' }
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())

const themeButton = document.getElementById('toggle-theme')
const statusButton = document.getElementById('toggle-status')

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_BUTTON' })
})

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_STATUS' })
})

store.subscribe(() => {
  const state = store.getState()
  const body = document.querySelector('body')
  if (state.theme === 'light') {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    themeButton.innerHTML = 'Dark mode'
  } else {
    body.style.backgroundColor = '#333'
    body.style.color = 'white'
    themeButton.innerHTML = 'Light mode'
  }
  const status = document.getElementById('status')
  if (state.status === 'offline') {
    status.innerHTML = 'online'
    statusButton.innerText = 'Ficar Offline'
  } else {
    status.innerHTML = 'offline'
    statusButton.innerText = 'Ficar Online'
  }
})
