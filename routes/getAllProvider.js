const Provider = require("../models/provider");
module.exports = async (req, res) => {
    try {
        const providers = await Provider.find()
        res.status(200).json({ status: true, data: providers });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};