const Car = require("../models/cars");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id);
        await Car.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "Car was deleted successfully",
        });
    } catch (error) {
        if (error) throw error;
        res.status(400).json({ status: false, error });
    }
};