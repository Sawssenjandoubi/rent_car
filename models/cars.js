const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    kilometrage: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
    },
    prix: {
      type: Number,
      required: true,
    },
    disponibilite: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Voiture", carSchema);
