const ping = require('./ping');
const loginController = require('./login.controller');
const userController = require('./user.controller');
const secretController = require('./secret.controller');

module.exports = {
  ping,
  loginController,
  userController,
  secretController,
};
