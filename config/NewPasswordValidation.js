const Joi = require("joi");

const NewPasswordValidation = (data) => {
    const schema = Joi.object({
        newPassword: Joi.string()
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
                "string.required": "Le mot de passe est obligatoire",
                "string.empty": "Le mot de passe ne doit pas être vide",
                "any.required": "Le mot de passe ne doit pas être vide",
            }),
        confirmNewPassword: Joi.any()
            .equal(Joi.ref("newPassword"))
            .required()
            .label("Confirm password")
            .options({
                messages: {
                    "any.only": "Confirmer le mot de passe ne correspond pas",
                    "any.required": "Veuillez confirmer votre mot de passe",
                },
            }),
            
    });
    return schema.validate(data);
};

module.exports.NewPasswordValidation = NewPasswordValidation;