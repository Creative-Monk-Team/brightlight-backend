let mongoose = require("mongoose");
let pilotProgramSchema = mongoose.Schema(
  {
    pilotProgramHeading: {
      type: String,
      default: "Canada’s Pilot Programs",
    },
    pilotProgramPara1: {
      type: String,
      default:
        "The diverse economy of Canada offers various opportunities to advance your career in fields such as agriculture and more.",
    },
    pilotProgramPara2: {
        type: String,
        default:
          "Canada's Pilot Programs are temporary immigration programs designed to address the specific needs of certain Canadian regions or communities. These programs aim to attract skilled, semi-skilled, and unskilled workers to fill labor shortages in various sectors and contribute to the economic growth and development of those areas. Many times, these programs become permanent, providing more PR opportunities.",
      },

    //
    HereHeading: {
        type: String,
        default: "Here is one of the Pilot Programs",
      },
//
    WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us",
      },
      wc: {
        type: String,
        default:
          "At Brightlight Immigration, we provide expert guidance through Canada’s various immigration programs, including Pilot Programs. Our team of experienced consultants is dedicated to helping you navigate the complexities of immigration, ensuring that you have the best chance of success. We tailor our services to meet your unique needs and provide a high level of personalized support throughout the application process.",
      },
      wc: {
        type: String,
        default: "Our success rate speaks for itself, with a near-perfect approval rate for our clients. By choosing us, you benefit from our extensive knowledge, commitment to your case, and proven track record. Let us help you make your Canadian immigration journey a smooth and successful one.",
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

let pilotProgramSection = mongoose.model(
  "Canada’s Pilot Program",
  pilotProgramSchema
);
module.exports = pilotProgramSection;
