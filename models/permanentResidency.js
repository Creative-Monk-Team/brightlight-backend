let mongoose = require("mongoose");
let permanentResidencySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Permanent Residency",
    },
    description: {
      type: String,
      default: "Make Canada your home through the Permanent Residency program",
    },
    description2: {
      type: String,
      default:
        "Canada welcomes thousands of skilled individuals from around the world every year. With a thriving economy, high living standards, and better opportunities, it's no wonder so many aspire to call it home.",
    },
    aboutDescription: {
      type: String,
      default:
        "The Canadian Permanent Residency (PR) Program, managed by Immigration, Refugees and Citizenship Canada (IRCC), allows foreign nationals to obtain permanent resident status in Canada. This status gives you the right to live, work, and study in Canada indefinitely, with the same rights and freedoms as Canadian citizens (except voting and running for office). There are different PR programs available, each with its own eligibility requirements and application process. For over a decade, we have successfully processed thousands of PR applications successfully. We will provide you all the information you need to explore your options and help you select the best one for you.",
    },
    aboutDescription2: {
      type: String,
      default:
        " There are different PR programs available, each with its own eligibility requirements and application process. For over a decade, we have successfully processed thousands of PR applications successfully. We will provide you all the information you need to explore your options and help you select the best one for you.",
    },
    pathHeading: {
      type: String,
      default: "Pathway's to becoming a PR",
    },
    p1Heading: {
      type: String,
      default: "Express Entry",
    },
    p2Heading: {
      type: String,
      default: "Pilot Programs",
    },
    p3Heading: {
      type: String,
      default: "PNP",
    },
    p4Heading: {
      type: String,
      default: "RNIP",
    },

    faq_heading: {
      type: String,
      default:
        "",
    },
    q1: {
      type: String,
      default:
        " ",
    },
    qa1: {
      type: String,
      default:
        "",
    },
    q2: {
      type: String,
      default:
        " ",
    },
    qa2: {
      type: String,
      default:
        "",
    },

    q3: {
      type: String,
      default:
        "",
    },
    qa3: {
      type: String,
      default:
        "",
    },
    q4: {
      type: String,
      default:
        "",
    },
    qa4: {
      type: String,
      default:
        "",
    },

    q5: {
      type: String,
      default:
        "",
    },
    qa5: {
      type: String,
      default:
        "",
     },
    q6: {
      type: String,
      default:
        " ",
    },
    qa6: {
      type: String,
      default:
        " ",
    },

    q7: {
      type: String,
      default:
        "   ",
    },
    qa7: {
      type: String,
      default:
        "   ",
    },

    q8: {
      type: String,
      default:
        " ",
    },
    qa8: {
      type: String,
      default:
        "   ",
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
        " ",
    },
    qa10: {
      type: String,
      default:
        " ",
    },
    show_testimonials: {
      type: String,
      default: "Y"
    }
  },
  {
    timestamps: true,
  }
);

let permanentResidencySection = mongoose.model(
  "Permanent Residency Section",
  permanentResidencySchema
);
module.exports = permanentResidencySection;
