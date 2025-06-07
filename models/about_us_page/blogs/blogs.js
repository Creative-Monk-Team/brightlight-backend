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
    image: {
      type: String, // Assuming Base64 string or image URL
      required: false,
      default: "", // or set a default placeholder image URL if needed
    },
    tag_1: {
      type: String,
      required: false,
      default: "Express Entry",
    },
    tag_2: {
      type: String,
      required: false,
      default: "Immigration",
    },
    tag_3: {
      type: String,
      required: false,
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
    timestamps: true, // fixed typo from timeStamps
  }
);

let blogsSection = mongoose.model("Blogs", blogsSchema);
module.exports = blogsSection;
