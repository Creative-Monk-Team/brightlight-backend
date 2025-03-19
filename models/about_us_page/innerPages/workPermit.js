let mongoose = require("mongoose");
let  workPermitSchema = mongoose.Schema(
  {
    WorkPerHeading: {
      type: String,
      default: "Work Permit",
    },

    ConsideringHeading : {
      type: String,
      default:"Are you considering a rewarding career and professional growth in Canada?",
    },
    ConsideringSubHeading : {
        type: String,
        default:" Canada is a top choice for people worldwide looking to advance their careers. To work in Canada, international workers need a temporary document called a work permit. This permit allows them to legally take on employment in the country, and it's available for a broad range of occupations, skill levels, and immigration statuses."
    },
    PathwaysHeading: {
        type: String,
        default:"Pathways to Get a Work Permit",
      },
      PathwaysSubHeading1: {
        type: String,
        default:"An open work permit allows you to work for any employer in Canada. Learn more about the eligibility criteria and application process.",
      },
      PathwaysSubHeading2: {
        type: String,
        default:"This permit is employer-specific and requires a positive LMIA. Discover the steps involved in obtaining this permit.",
      },


   
    HowWeHelpHeading: {
      type: String,
      default:"Here’s How We Can Help You",
    },
    HowWeHelpSubHeading: {
      type: String,
      default:"Our experienced team can assist you throughout the work permit application process, ensuring that all requirements are met and your application stands the best chance of approval.",
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

let workPermitSection = mongoose.model(
  "Work Permit Section",
  workPermitSchema
);
module.exports = workPermitSection;
