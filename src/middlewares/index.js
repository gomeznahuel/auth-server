const validateFields = require('../middlewares/validate-fields');
const validateJWT = require('../middlewares/validate-jwt');
const validateRoles = require('../middlewares/validate-role');
const isValidJWTToken = require('../middlewares/isValidJWTToken');

module.exports = { ...validateFields, ...validateJWT, ...validateRoles, ...isValidJWTToken };