import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
  this.handlerChange = this.handlerChange.bind(this)
this.state = {
  email: '',
  select: '',
  name: '',
  story: '',
}
  }

  handlerChange({target}) {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }
  render() {
    const { email, select, name, story } = this.state
    return (
      <div className='form'>
        <h1>Teste Form No react</h1>
        <form>
          <input 
          name='email' 
          type='email' 
          placeholder='insira um e-mail'
          onChange={this.handlerChange}
          value={email}></input>
          <input
          name='name'
          type='text'
          placeholder='insira seu nome completo'
          value={name}
          onChange={this.handlerChange}></input>
          <label>
            Escolha seu jogo favorito:
             <br />
            <select
            name='select'
            value={select}
            onChange={this.handlerChange}>
            <option value="assassin's creed">assassin's creed</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Gears of War">Gears of War</option>
          </select>
          </label>

          <label>
            Diga por que esse é seu jogo favorito:
            <br/>
            <textarea name='story' 
            value={ story }
            onChange={this.handlerChange}></textarea>
          </label>
        </form>
      </div>
    )
  }
}

export default App;
