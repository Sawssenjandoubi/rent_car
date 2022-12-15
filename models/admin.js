const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminSchema = new schema(
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
    motPass: {
      type: String,
      required: true,
    },
    isProvider : {
        type : Boolean,
        default: false
    },
    isUser : {
        type : Boolean,
        default: false
    },
    isAdmin : {
        type : Boolean,
        default: true
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("admins", adminSchema);
