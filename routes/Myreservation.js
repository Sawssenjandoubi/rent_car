const Reservation = require("../models/reservation");
const Voiture = require("../models/cars");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        const userReservation = await Reservation.find({ userId: id });
        // console.log("cars", cars);
        res.status(200).json({ status: true, data: userReservation });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
