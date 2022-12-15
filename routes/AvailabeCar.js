const Car = require("../models/cars");
module.exports = async (req, res) => {
    try {
        let cars = await Car.find({  disponibilite: "true" });
        res.status(200).json({ status: true, data: cars });
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};