const Reservation = require("../models/reservation");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        const userReservation= await Reservation.find({ userId: id });
        res.status(200).json({ status: true, data: userReservation});
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};