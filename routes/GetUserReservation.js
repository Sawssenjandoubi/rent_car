const Reservation = require("../models/reservation");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        let reservations = await Reservation.findOne({
            carId: id,
        });
        res.status(200).json({ status: true, data: reservations });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
