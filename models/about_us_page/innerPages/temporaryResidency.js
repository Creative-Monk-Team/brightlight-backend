let mongoose = require("mongoose");
let temporaryResidencySchema = mongoose.Schema(
  {
    temporaryResidencyHeading: {
      type: String,
      default: "Temporary Residency",
    },
    temporaryResidencyPara1: {
      type: String,
      default:
        "Temporary residency in Canada is a status granted by Canadian immigration officers to foreign nationals, permitting them to reside there for a limited period. Individuals who enter Canada on a temporary residency basis legally and for various purposes, including visiting relatives, joining a family member who holds permanent residency, working, or starting a business.",
    },
    temporaryResidencyPara2: {
        type: String,
        default:
          "When granted temporary residency status, foreign nationals become temporary residents of Canada. This status differs from permanent residency, Pr Renewal which allows individuals to stay in Canada indefinitely.",
      },
      temporaryResidencyPara3: {
        type: String,
        default:
          "Canada warmly welcomes visitors, workers, and entrepreneurs from across the globe. This option might be perfect for you if you're considering a temporary stay in Canada.",
      },
////

VisaCategHeading: {
    type: String,
    default: "Visa Categories under Temporary Residency",
  },


  ////
  /////

      WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us?",
      },
      WhyChooseUsPara: {
        type: String,
        default:
          "At Brightlight Immigration, we are committed to providing you with expert assistance throughout your immigration journey. Our experienced team is dedicated to achieving the best possible outcomes for our clients.",
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

let temporaryResidencySection = mongoose.model(
  "Temporary Residency program",
  temporaryResidencySchema
);
module.exports = temporaryResidencySection;
