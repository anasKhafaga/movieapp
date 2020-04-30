const Joi = require('@hapi/joi');

const schema = Joi.object({
  username: Joi.string().alphanum().required().min(3).max(10),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(
    new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
  ).required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required()
});

module.exports = schema;