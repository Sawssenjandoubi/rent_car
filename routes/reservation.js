const Cars = require("../models/cars");
const User = require("../models/user");
const mongoose = require("mongoose");
const Reservation = require("../models/reservation");
module.exports = async (req, res) => {
    try {
        let { carId, userId } = req.params;
        const carObj = mongoose.Types.ObjectId(carId);
        console.log(carObj);
        let { dateDebutLocation, dateFinLocation } = req.body;
        let user = await User.findOne({ _id: userId });
        let { nom, prenom, tel } = user;
        console.log("user", user);
        let checkReservation = await Reservation.findOne({ carId: carObj });
        console.log("checkReservation", checkReservation);
        if (checkReservation) {
            return res
                .status(200)
                .json({ status: true, message: "voiture non disponible" });
        }
        const reservedCar = await Cars.findById(carId);
        console.log("reservedCar", reservedCar);
        await Cars.findByIdAndUpdate(
            carId,
            {
                $set: { disponibilite: false },
            },
            { new: true }
        );
        const newReservation = await new Reservation({
            userId,
            dateDebutLocation,
            dateFinLocation,
            user: {
                nom,
                prenom,
                tel,
            },
            car: reservedCar,
        });
        const result = await newReservation.save();
        console.log("result", result);
        res.status(200).json({
            status: true,
            message: "ok",
            data: result,
        });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
