const Joi = require('joi');

const addNewLogin = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
});

module.exports = {
    addNewLogin,
};