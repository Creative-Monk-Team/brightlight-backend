let mongoose = require("mongoose");
let bcpnpMetaSchema = mongoose.Schema(
  {
    metaTitle: {
      type: String,
    },
    metaDesc: {
      type: String,
    },
    metaOgTitle: {
      type: String,
    },
    metaOgDesc: {
      type: String,
    },
    metaKeywords: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

let bcpnpMetaSection = mongoose.model("BCPNP Meta", bcpnpMetaSchema);
module.exports = bcpnpMetaSection;
