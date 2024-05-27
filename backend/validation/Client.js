const joi = require("joi");
const clientValidation = joi.object({
  name: joi.string()
    .min(3)
    .max(30)
    .required(),
  family_name: joi.string()
    .min(3)
    .max(30)
    .required(),
  email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  password: joi.string()
    .min(8)
    .max(20)
    .required(),

  //  repeat_password: Joi.ref('password'),
  phone: joi.string()
    .regex(/^\d{2}-\d{3}-\d{3}$/)
    .required(),

  reservations: joi.array(),
  isAdmin: joi.boolean()


})
module.exports = clientValidation