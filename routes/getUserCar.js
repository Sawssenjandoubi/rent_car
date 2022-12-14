const Car = require("../models/cars");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    let cars = await Car.find({ userId: id });
    res.status(200).json({ status: true, cars });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
