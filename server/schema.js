const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.string().required(),
        image: Joi.string().allow("",null),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().min(1).max(5).required(),
        comment : Joi.string().required(),
    }).required()
});

module.exports.reservationSchema = Joi.object({
    reservation : Joi.object({
        checkIn : Joi.date().required(),
        checkOut : Joi.date().min(Joi.ref('checkIn')).required(),
        guests : Joi.number().min(1).required(),
        totalPrice : Joi.number().required()
    }).required()
});
