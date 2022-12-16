const User = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
module.exports = async (req, res) => {
  try {
    let { email, motPass } = req.body;
    let checkUser = await User.findOne({ email });
    // CHECK THE VALIDITY OF THE EMAIL
    if (!checkUser) {
      return res.status(401).json({
        status: false,
        message: "Wrong e-mail or password, please try again",
      });
    }
    //CHECK THE PASSWORD
    let match = await bcrypt.compare(motPass, checkUser.motPass);
    if (!match) {
      return res.status(401).json({
        status: false,
        message: "Wrong e-mail or password, please try again",
      });
    }
    // if (!checkUser.isVerified) {
    //     return res.status(401).json({
    //         status: false,
    //         message: "Your email is not verified, please check your email.",
    //     });
    // }
    //CREATE TOKEN
    let token = await jwt.sign(
      {
        id: checkUser._id,
        motPass: checkUser.motPass,
        email: checkUser.email,
      },
      SECRET_KEY,
      { expiresIn: "10h" }
    );

    res.status(200).json({
      status: true,
      message: "WELCOME BACK",
      token,
      id: checkUser._id,
      isProvider: checkUser.isProvider,
      isUser: checkUser.isUser,
      isAdmin: checkUser.isAdmin,
    });
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
