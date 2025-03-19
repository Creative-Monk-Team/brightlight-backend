let mongoose = require("mongoose");
let loginCredSchema = mongoose.Schema(
  {
    user: {
      type: String,
      default: "brightlightImmigrationBCV3S2A1",
    },
    pass: {
      type: String,
      default: "7mz2a,H_4B)J",
    },
  },
  {
    timestamps: true,
  }
);

let loginCredSection = mongoose.model("Login Credentials", loginCredSchema);
module.exports = loginCredSection;
