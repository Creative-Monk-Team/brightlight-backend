let mongoose = require("mongoose");
let blogsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let blogsSection = mongoose.model("Blogs Section", blogsSchema);
module.exports = blogsSection;
