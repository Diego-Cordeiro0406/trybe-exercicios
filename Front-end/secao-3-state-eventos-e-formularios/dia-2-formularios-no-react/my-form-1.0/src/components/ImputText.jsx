import React from 'react';
import Proptypes from 'prop-types'

class ImputText extends React.Component {
    render() {
        const { name, handlerChange } = this.props
        return (
            <input 
            name='name'
            type='text'
            placeholder='insira seu nome completo'
            value={name}
            onChange={handlerChange}>
            </input>
        )
    }

}

ImputText.propTypes = {
  name: Proptypes.string.isRequired,
  handlerChange: Proptypes.func.isRequired,
}

export default ImputText;