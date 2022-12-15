const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    cin: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
    ville: {
      type: String,
      required: true,
    },
    dateNaissance: {
      type: String,
      required: true,
    },

    typePermis: {
      type: String,
      required: true,
    },
    DateObtentionPermis: {
      type: String,
      required: true,
    },
    // DateDebutLocation: {
    //   type: string,
    //   required: true,
    // },
    // DateFinLocation: {
    //     type: string,
    //     required: true,
    //   },
    motPass: {
      type: String,
      required: true,
    },
    isProvider: {
      type: Boolean,
      default: false,
    },
    isUser: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
   
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
