const Car = require("../models/cars");
const cloudinary = require("../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
    try {
        let { id } = req.params;
    console.log(id);
            const uploader = async (path) => await cloudinary.uploads(path, "uploads");
            if (req.files.length !== 0){
            const urls = [];
            const files = req.files;
            for (const file of files) {
                const { path } = file;
                const newPath = await uploader(path);
                urls.push(newPath.url);
                fs.unlinkSync(path);
            }
           
            await Car.findByIdAndUpdate(
                id,
                {
                    $set: { ...req.body, image: urls },
                },
                { new: true }
            );
            res.status(200).json({
                status: true,
                message: "Product was updated successfully",
            });
        } else {
            await Car.findByIdAndUpdate(
                id,
                {
                    $set: { ...req.body },
                },
                { new: true }
            );
            res.status(200).json({
                status: true,
                message: "Product was updated successfully",
            });
        }
    } catch (error) {
        if (error) throw error;
        console.log(error);
    }
};