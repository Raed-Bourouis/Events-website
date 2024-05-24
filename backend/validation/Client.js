const joi=require("joi");
const clientValidation=joi.object({
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
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .onlyLatinCharacters()
    .required(),

   repeat_password: Joi.ref('password'),
   phone: Joi.string().regex(/^\d{2}-\d{3}-\d{3}$/)
   .required()

})
module.exports = clientValidation