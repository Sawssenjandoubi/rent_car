const Car = require("../models/cars");
const User = require("../models/user");
const Reservation = require("../models/reservation");
module.exports = async (req, res) => {
  try {
    let { id, userId } = req.query;
    let { dateDebutLocation, dateFinLocation } = req.body;
    let user = await User.findOne({ _id: userId });
    console.log("user", user);
    let checkReservation = await Reservation.find({ carId: id });
    if (checkReservation.length > 1) {
      return res
        .status(200)
        .json({ status: true, message: "voiture non disponible" });
    }
    await Car.findByIdAndUpdate(
      id,
      {
        $set: { disponibilite: false },
      },
      { new: true }
    );
    let { nom, prenom, tel } = user;
    const newReservation = await new Reservation({
      userId,
      dateDebutLocation,
      dateFinLocation,
      user: {
        nom,
        prenom,
        tel,
      },
      carId: id,
    });
    const result = await newReservation.save();
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
