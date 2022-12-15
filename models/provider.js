const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const providerSchema = new Schema(
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

    nomAgence: {
      type: String,
      required: true,
    },
    fax: {
      type: Number,
      required: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    motPass: {
      type: String,
      required: true,
    },
    isProvider: {
      type: Boolean,
      default: true,
    },
    isUser: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    cars: {
      type: Schema.Types.ObjectId,
      ref: "Voiture",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("providers", providerSchema);
