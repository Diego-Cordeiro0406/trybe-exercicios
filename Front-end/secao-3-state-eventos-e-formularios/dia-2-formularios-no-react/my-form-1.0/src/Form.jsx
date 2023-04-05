import React from 'react'
import ImputEmail  from './components/ImputEmail';
import ImputText  from './components/ImputText';
import ImputTextArea  from './components/ImputTextArea';



class Form extends React.Component {
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
    const { email, name, story, select } = this.state
    return (
      <div className='form'>
        <h1>Teste Form No react</h1>
        <form>
            <ImputEmail name={email} handlerChange={this.handlerChange}/>
            <ImputText name={name} handlerChange={this.handlerChange}/>
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
          <ImputTextArea name={story} handlerChange={this.handlerChange}/>
        </form>
      </div>
    )
  }
}

export default Form;