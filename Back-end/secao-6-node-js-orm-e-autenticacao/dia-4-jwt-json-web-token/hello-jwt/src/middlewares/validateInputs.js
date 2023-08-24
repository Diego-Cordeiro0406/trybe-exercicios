const { addNewLogin } = require('./schemas');

const validateinputs = (login) => {
    const { error } = addNewLogin.validate(login);
    if (error) return error.message;
};

module.exports = {
  validateinputs,
};