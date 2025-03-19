let mongoose = require("mongoose");
let servicesSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our achievements are continually growing",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Achievement Description here",
    },
    service1svg: {
      type: String,
    },
    service1alt: {
      type: String
    },
    service1desc: {
      type: String,
    },
    service1name: {
      type: String,
    },
    service2svg: {
      type: String,
    },
    service2alt: {
      type: String
    },
    service2desc: {
      type: String,
    },
    service2name: {
      type: String,
    },
    service3svg: {
      type: String,
    },
    service3alt: {
      type: String
    },
    service3name: {
      type: String,
    },
    service3desc: {
      type: String,
    },
    service4svg: {
      type: String,
    },
    service4alt: {
      type: String
    },
    service4name: {
      type: String,
    },
    service4desc: {
      type: String,
    },
    service5svg: {
      type: String,
    },
    service5alt: {
      type: String
    },
    service5name: {
      type: String,
    },
    service5desc: {
      type: String,
    },
    service6svg: {
      type: String,
    },
    service6alt: {
      type: String
    },
    service6name: {
      type: String,
    },
    service6desc: {
      type: String,
    },
    service7svg: {
      type: String,
    },
    service7alt: {
      type: String
    },
    service7name: {
      type: String,
    },
    service7desc: {
      type: String,
    },
    service8svg: {
      type: String,
    },
    service8alt: {
      type: String
    },
    service8name: {
      type: String,
    },
    service8desc: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let servicesSection = mongoose.model("Services Section", servicesSchema);
module.exports = servicesSection;
