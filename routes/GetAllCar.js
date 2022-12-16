const Car = require("../models/cars");
module.exports = async (req, res) => {
    try {
        let cars = await Car.find();
        res.status(200).json({ status: true, cars });
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};