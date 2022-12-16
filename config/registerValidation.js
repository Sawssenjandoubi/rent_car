const Joi = require("joi");

const RegisterValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email({
                minDomainSegments: 2,
            })
            .messages({
                "string.empty": "l'email ne peut pas être un champ vide",
                "string.email": "l'email doit être un email valide",
                "string.required": "l'email est un champ obligatoire",
            }),
            motPass: Joi.string()
            .min(8)
            .required()
            .pattern(
                new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                )
            )
            .messages({
                "string.min": "La longueur du mot de passe doit être d'au moins 8 caractères",
                "string.pattern.base":
                    "Le mot de passe doit contenir au moins une minuscule, une majuscule, un caractère numérique, un caractère spécial",
            })
           
        
    });
    return schema.validate(data);
    
};

module.exports.RegisterValidation = RegisterValidation;