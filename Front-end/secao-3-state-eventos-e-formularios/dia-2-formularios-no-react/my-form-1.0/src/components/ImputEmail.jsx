import React from 'react';
import Proptypes from 'prop-types'

class ImputEmail extends React.Component {
    render() {
        const { email, handlerChange } = this.props
        return (
            <input 
            name='email'
            type='email'
            placeholder='insira um e-mail'
            value={email}
            onChange={handlerChange}>
            </input>
        )
    }

}

ImputEmail.propTypes = {
  email: Proptypes.string.isRequired,
  handlerChange: Proptypes.func.isRequired,
}

export default ImputEmail;