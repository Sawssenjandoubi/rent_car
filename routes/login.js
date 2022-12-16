const Provider = require("../models/provider");
const Admin = require("../models/admin");
const User = require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
module.exports = async (req, res) => {
  try {
    let { email, motPass } = req.body;
    let checkProvider = await Provider.findOne({ email });
    let checkAdmin = await Admin.findOne({ email });
    let checkUser = await User.findOne({ email });
    // CHECK THE VALIDITY OF THE EMAIL
    if (!checkProvider && !checkAdmin && !checkUser) {
      return res.status(401).json({
        status: false,
        message: "Wrong e-mail or password, please try again",
      });
    }
    if (checkProvider) {
      //CHECK THE PASSWORD
      let match = await bcrypt.compare(motPass, checkProvider.motPass);
      if (!match) {
        return res.status(401).json({
          status: false,
          message: "Wrong e-mail or password, please try again",
        });
      }

      //CREATE TOKEN
      let token = await jwt.sign(
        {
          id: checkProvider._id,
          motPass: checkProvider.motPass,
          email: checkProvider.email,
        },
        SECRET_KEY,
        { expiresIn: "10h" }
      );

      res.status(200).json({
        status: true,
        message: "WELCOME BACK",
        token,
        id: checkProvider._id,
        isAdmin: checkProvider.isAdmin,
        isProvider: checkProvider.isProvider,
        isUser: checkProvider.isUser,
      });
    }

    if (checkAdmin) {
      //CHECK THE PASSWORD
      let match = await bcrypt.compare(motPass, checkAdmin.motPass);
      if (!match) {
        return res.status(401).json({
          status: false,
          message: "Wrong e-mail or password, please try again",
        });
      }

      //CREATE TOKEN
      let token = await jwt.sign(
        {
          id: checkAdmin._id,
          motPass: checkAdmin.motPass,
          email: checkAdmin.email,
        },
        SECRET_KEY,
        { expiresIn: "10h" }
      );

      res.status(200).json({
        status: true,
        message: "WELCOME BACK",
        token,
        id: checkAdmin._id,
        isAdmin: checkAdmin.isAdmin,
        isProvider: checkAdmin.isProvider,
        isUser: checkAdmin.isUser,
      });
    }
    if (checkUser) {
      //CHECK THE PASSWORD
      let match = await bcrypt.compare(motPass, checkUser.motPass);
      if (!match) {
        return res.status(401).json({
          status: false,
          message: "Wrong e-mail or password, please try again",
        });
      }

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
        isAdmin: checkUser.isAdmin,
        isProvider: checkUser.isProvider,
        isUser: checkUser.isUser,
      });
    }
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
