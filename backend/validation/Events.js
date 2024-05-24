const joi=require("joi");
const eventsValidation=joi.object({
     eventTitle: joi.string()
     .min(3)
     .max(10)
     .required(),
     description: joi.string()
     .min(20)
     .max(50)
     .required(),
     start : joi.date().required(),
     end : joi.date().required(),
     image: joi.string().required(),
     artist: joi.string().required(),
     // date: joi.date().iso().required(),
     location: joi.string().required(),
     salle: joi.string().required(),
     ticketsNumber: joi.number().required(),
})
module.exports= eventsValidation;