import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.botaoClicado1 = this.botaoClicado1.bind(this);
    this.botaoClicado2 = this.botaoClicado2.bind(this);
    this.botaoClicado3 = this.botaoClicado3.bind(this);
    this.state = {
      buttonClicado1:0,
      buttonClicado2:0,
      buttonClicado3:0,
    }
  }
    

  botaoClicado1 () {
    this.setState((estadoAnterior) => ({
      buttonClicado1: estadoAnterior.buttonClicado1 + 1
    }))
  }
  botaoClicado2 () {
    this.setState((estadoAnterior) => ({
      buttonClicado2: estadoAnterior.buttonClicado2 + 1
    }))
  }
  botaoClicado3 () {
    this.setState((estadoAnterior) => ({
      buttonClicado3: estadoAnterior.buttonClicado3 + 1
    }))
  }
  pegarCor(num) {
    return num % 2 === 0 ? 'green' : 'white'
  }

  render() {
    const { buttonClicado1, buttonClicado2, buttonClicado3 } = this.state
    return (
      <div>
        <button 
        type='button'
        onClick={this.botaoClicado1}
        style={{backgroundColor: this.pegarCor(buttonClicado1)} }>{buttonClicado1}</button>
        <button 
        type='button'
        onClick={this.botaoClicado2}
        style={{backgroundColor: this.pegarCor(buttonClicado2)} }>{buttonClicado2}</button>
        <button 
        type='button' 
        onClick={this.botaoClicado3}
        style={{backgroundColor: this.pegarCor(buttonClicado3)} }>{buttonClicado3}</button>
      </div>
      )
  }
  
}

export default App;
