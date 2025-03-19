let mongoose = require("mongoose");
let openWorkPermitSchema = mongoose.Schema(
  {
    openWorkPermitHeading: {
      type: String,
      default: "Open Work Permit",
    },

    WhatIsPara : {
        type: String,
        default:"A Canadian Open Work Permit is a temporary document that allows foreign nationals to work in Canada without being tied to a specific employer. This type of permit offers flexibility and opens up a wide range of job opportunities for eligible individuals.",
      },

      CategoriesHeading : {
      type: String,
      default:"Categories Under Open Work Permit",
    },


    HowWeHelpHeading: {
      type: String,
      default:"Here’s How We Can Help You",
    },
    HowWeHelpSubHeading: {
        type: String,
        default:"Our process is designed to assist you from start to finish, ensuring you have the support you need to obtain your Open Work Permit. We follow a structured approach that includes:",
      },
    hh1: {
      type: String,
      default:"Initial Consultation: Understanding your needs and eligibility.",
    },
    hh2: {
        type: String,
        default:"Document Preparation: Assisting with gathering and preparing necessary documents.",
      },
      hh3: {
        type: String,
        default:"Application Submission: Filing your application accurately and on time.",
      },
      hh4: {
        type: String,
        default:"Follow-Up: Monitoring the progress of your application and addressing any issues.",
      },
      hh5: {
        type: String,
        default:"Support Throughout: Providing guidance and support throughout the entire process.",
      },
      WhyChooseUsHeading01: {
        type: String,
        default:
          "Why Choose Us?",
      },
      wcu1: {
        type: String,
        default:
          "<strong>Experienced Team:</strong> Over a decade of experience in handling Immigration applications with a high success rate. ",
      },
      wcu2: {
        type: String,
        default:
          "<strong>Tailored Approach:</strong> Personalized services and strategies based on your specific case.",
      },
      wcu3: {
        type: String,
        default:
          "<strong>High Success Rate:</strong> Proven track record using case law and precedents for positive results.",
      },
      wcu4: {
        type: String,
        default:
          "<strong>Comprehensive Support:</strong> Assistance from the start of the application process to obtaining your PR.",
      },
      faq_heading: {
        type: String,
        default:
          "FAQ's Made Simple",
      },
      q1: {
        type: String,
        default:
          " ",
      },
      qa1: {
        type: String,
        default:
          " ",
      },
      q2: {
        type: String,
        default:
          "  ",
      },
      qa2: {
        type: String,
        default:
          " ",
      },
  
      q3: {
        type: String,
        default:
          "  ",
      },
      qa3: {
        type: String,
        default:
          "  ",
      },
      q4: {
        type: String,
        default:
          "  ",
      },
      qa4: {
        type: String,
        default:
          "  ",
      },
      q5: {
        type: String,
        default:
          " ",
      },
      qa5: {
        type: String,
        default:
          " ",
      },
      q6: {
        type: String,
        default:
          "  ",
      },
      qa6: {
        type: String,
        default:
          "  ",
      },
  
      q7: {
        type: String,
        default:
          " ",
      },
      qa7: {
        type: String,
        default:
          " .",
      },
  
      q8: {
        type: String,
        default:
          "  ",
      },
      qa8: {
        type: String,
        default:
          " ",
      },
      
      q9: {
        type: String,
        default:
          " ",
      },
      qa9: {
        type: String,
        default:
          "  ",
      },
      q10: {
        type: String,
        default:
          "  ",
      },
      qa10: {
        type: String,
        default:
          "  ",
      },
      show_testimonials: {
        type: String,
        default: "N"
      }
  },
  {
    timeStamps: true,
  }
);

let openWorkPermitSection = mongoose.model(
  "Open Work Permit Section ",
  openWorkPermitSchema
);
module.exports = openWorkPermitSection;
