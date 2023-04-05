import React from 'react';
import Proptypes from 'prop-types'

class ImputTextArea extends React.Component {
    render() {
        const { story, handlerChange } = this.props
        return (
            <label>
            Diga por que esse é seu jogo favorito:
            <br/>
            <textarea name='story' 
            value={ story }
            onChange={handlerChange}></textarea>
          </label>
        )
    }

}

ImputTextArea.propTypes = {
  story: Proptypes.string.isRequired,
  handlerChange: Proptypes.func.isRequired,
}

export default ImputTextArea;