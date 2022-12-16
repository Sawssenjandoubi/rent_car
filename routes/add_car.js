const carSchema = require("../models/cars");
const providerSchema = require("../models/provider");
const cloudinary = require("../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { type, kilometrage, prix, disponibilite } = req.body;
    let { id } = req.params;
    console.log(id);
    // let provider = await providerSchema.findById(id);
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    if (req.files.length !== 0) {
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        console.log(newPath);
        urls.push(newPath.url);
        fs.unlinkSync(path);
      }
      const car = new carSchema({
        type,
        image: urls,
        kilometrage,
        userId: id,
        prix,
        disponibilite,
      });
      const newCar = await car.save();
      return res.status(200).json({
        status: true,
        message: "voiture ajouteé avec succès",
        data: newCar,
      });
    } else {
      res.status(405).json({
        status: false,
        message: "error",
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
