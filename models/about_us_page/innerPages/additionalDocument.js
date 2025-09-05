let mongoose = require("mongoose");
let additionalDocumentSchema = mongoose.Schema(
  {
    metaTitle: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaDesc: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaOgTitle: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaOgDesc: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaKeywords: {
      type: String,
      default: "Brightlight Immigration",
    },
    AdditionalDocumentHeading: {
      type: String,
      default: "Reply to Additional Document Request",
    },
    DonotWorryHeading: {
      type: String,
      default: "Don't Worry, There's Still Hope!",
    },
    DonotWorryPara1: {
      type: String,
      default:
        "If you’re here, that means IRCC has already requested you to submit additional documents for your Canadian Immigration application. Don’t worry. This can happen at any stage of the application process, and the specific documents requested will vary depending on your case and program.",
    },
    DonotWorryPara2: {
      type: String,
      default:
        "We know these requests can be stressful. Especially if you’ve applied your application yourself. It's easy to forget something or accidentally upload the wrong document. No worries, though! We can help you out.",
    },
    DonotWorryPara3: {
      type: String,
      default:
        "If you already got that Acknowledgement of Receipt (AOR) letter with your application number and the Unique Client Identifier (UCI) – you can just use IRCC's online form to upload the right document.",
    },
    DonotWorryPara4: {
      type: String,
      default:
        "Make sure you know what they need and why. Follow their instructions to the letter, label your documents clearly, and get them uploaded in the right format. The faster you get that missing document submitted, the sooner things can keep moving along.",
    },
    KeyPointsHeading: {
      type: String,
      default: "Key Points to Keep in Mind",
    },
    k1: {
      type: String,
      default:
        "Submit the requested document ASAP. Failure to do so can negatively impact your application.",
    },
    k2: {
      type: String,
      default:
        "Only submit requested documents. Don't include irrelevant information.",
    },
    k3: {
      type: String,
      default:
        "The documents should be clear, legible, and translated if necessary.",
    },
    k4: {
      type: String,
      default:
        "If you're unsure about any aspect of the process, let us handle your case for you.",
    },

    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a Request for an additional document, do not worry. We can help you with your application. With over a decade of experience, we have guided many when it comes to providing additional documents..",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Just reach out to us, and we'll handle the rest. You keep your focus on your Canadian ambition, and we'll focus on making it happen smoothly.",
    },

    WhyChooseUsHeading01: {
      type: String,
      default: "Why Choose Us?",
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
        " What are the most common reasons IRCC requests additional documents?  ",
    },
    qa1: {
      type: String,
      default:
        "<ul> <li>Missing or incomplete documents in your initial application</li> <li>Discrepancies or inconsistencies in your application</li> <li>Needing more proof of financial support, identity, or travel history</li> <li>Verifying specific details related to your program or reason for coming to Canada</li> </ul> ",
    },
    q2: {
      type: String,
      default:
        "   How long do I have to submit the requested documents? ",
    },
    qa2: {
      type: String,
      default:
        "   The deadline will be specified in the notification you receive from IRCC. Generally, it ranges from a few days to a few weeks. Early submission is recommended to avoid delays.",
    },

    q3: {
      type: String,
      default:
        " Can I submit additional documents that weren't requested? ",
    },
    qa3: {
      type: String,
      default:
        "  IRCC only considers documents specifically requested in the RAD notification. Submitting unsolicited and irrelevant documents can delay your application processing.",
    },
    q4: {
      type: String,
      default:
        " What happens if I can't submit the requested documents by the deadline? ",
    },
    qa4: {
      type: String,
      default:
        "  Contact IRCC as soon as possible to explain the situation and request an extension. Failure to submit documents without explanation may result in a delay or even rejection of your application.",
    },

    q5: {
      type: String,
      default:
        "  How can I check the status of my application after submitting additional documents?",
    },
    qa5: {
      type: String,
      default:
        " You can check the status of your application online through your IRCC account. The updated status may take a few days or weeks to reflect after submitting additional documents. ",
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
    timeStamps: true,
  }
);

let additionalDocumentSection = mongoose.model(
  "Additional Document Section",
  additionalDocumentSchema
);
module.exports = additionalDocumentSection;
