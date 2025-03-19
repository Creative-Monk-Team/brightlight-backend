let mongoose = require("mongoose");
let blogsSchema = mongoose.Schema(
  {
    blog_heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq",
    },
    blog_content: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq",
    },
    tag_1: {
      type: String,
      required: [false, "Please fill out this field"],
      default: "Express Entry",
    },
    tag_2: {
      type: String,
      required: [false, "Please fill out this field"],
      default: "Immigration",
    },
    tag_3: {
      type: String,
      required: [false, "Please fill out this field"],
      default: "Custom Category",
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let blogsSection = mongoose.model("Blogs", blogsSchema);
module.exports = blogsSection;
