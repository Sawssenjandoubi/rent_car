const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        dateDebutLocation: {
            type: String,
            required: true,
        },
        dateFinLocation: {
            type: String,
            required: true,
        },
        user: {
            nom: {
                type: String,
                required: true,
            },
            prenom: {
                type: String,
                required: true,
            },
            tel: {
                type: String,
                required: true,
            },
        },
        car: {
            type: {},
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
