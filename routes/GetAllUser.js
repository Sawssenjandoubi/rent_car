const User = require("../models/user");
module.exports = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ status: true, data: users });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};