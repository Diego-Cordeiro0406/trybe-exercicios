import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
      <h1>
        { 'Diego Cordeiro' }
        </h1>
      <p>
        {'vou fazer porra nenhuma não'}
      </p>
      <h2>{'Minhas habilidades'}</h2>
      <ol>
        <li>{'html'}</li>
        <li>{'css'}</li>
        <li>{'javascript'}</li>
        <li>{'react'}</li>
      </ol>
      </div>
    )
  }
}

export default About;