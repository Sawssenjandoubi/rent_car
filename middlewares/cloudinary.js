const cloudinary = require("cloudinary").v2;

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_Name,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.uploads = (file, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload(file, {
                resource_type: "auto",
                folder: folder,
            })
            .then((result) => {
                resolve({
                    url: result.url,
                    id: result.public_id,
                });
            });
    });
};
