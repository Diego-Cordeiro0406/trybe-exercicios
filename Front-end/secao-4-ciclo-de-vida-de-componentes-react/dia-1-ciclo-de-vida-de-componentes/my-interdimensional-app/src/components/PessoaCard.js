import React, { Component }from 'react';
import Proptypes from 'prop-types';

class PessoaCard extends Component {
  render() {
const { person: {name, email, age, image} } = this.props
    return (
   <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{age}</p>
<img src={image} alt={name}/>
   </div>
    );
  }
}

PessoaCard.propTypes = {
    person: Proptypes.shape({
    name: Proptypes.string.isRequired,
    email: Proptypes.string.isRequired,
    age: Proptypes.number.isRequired,
    image: Proptypes.string.isRequired,
    }).isRequired
};

export default PessoaCard;