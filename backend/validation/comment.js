const joi = require("joi")

const commentValidation = joi.object({
    content: joi.string()
        .min(3)
        .max(100)
        .required(),
}).options({ stripUnknown: true });
module.exports = commentValidation;