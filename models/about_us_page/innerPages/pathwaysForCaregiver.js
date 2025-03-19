let mongoose = require("mongoose");
let pathwaySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Pathways for Caregivers",
    },
    description: {
      type: String,
      default:
        "The Canadian government is actively welcoming foreign residents with the right skills and experience to fill the country's critical need for caregivers. IRCC defines caregivers as the workers who provide care for children, seniors, or people with disabilities or illness.",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of Pathways for Caregivers:",
    },
    b1: {
      type: String,
      default:
        "Canadian families can hire a full-time dedicated caregiver for the person in need, thereby creating a less stressful environment when caring for individuals with high needs.",
    },
    b2: {
      type: String,
      default:
        "Caregiver pathways provide you with an opportunity to apply for permanent residence, after gaining 12 months of experience in Canada.",
    },
    b3: {
      type: String,
      default:
        "The permanent residence applications do not have any points system like Express Entry or provincial nomination programs. It is based on a first-come, first-served basis.",
    },
    b4: {
      type: String,
      default:
        "The language requirements for both work permit and permanent residency application are very low.",
    },
    b5: {
      type: String,
      default:
        "The spouse and dependent children can accompany you throughout the process.",
    },
    temporaryHeading: {
      type: String,
      default:
        "Here are the temporary residence pathways available for caregivers:",
    },
    temporaryl1: {
      type: String,
      default:
        "Work permit applications received with Labour Market Impact Assessment (LMIA).",
    },
    permanentHeading: {
      type: String,
      default:
        "Here are the permanent residence pathways available for caregivers:",
    },
    permanentl1: {
      type: String,
      default:
        "For Home Child-Care Provider and Home Support Worker without Canadian Experience",
    },
    permanentl2: {
      type: String,
      default:
        "For Home Child-Care Provider and Home Support Worker with Canadian Experience",
    },
    applyHeading: {
      type: String,
      default: "How to apply for Pathways for Caregivers?",
    },
    a1: {
      type: String,
      default:
        "Select the right NOC occupation as per your qualifications - HCCP or HSWP",
    },
    a2: {
      type: String,
      default:
        "Choose the right pathway for yourself – temporary pathway is only available to individuals who are already on a work permit or study permit. Permanent pathways are available to all.",
    },
    a3: {
      type: String,
      default:
        "Check each pathway page for eligibility criteria and application process.",
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
        "  Can I get job offer from my relative?",
    },
    qa1: {
      type: String,
      default:
        "Yes, a family member or a relative can offer you the caregiver job. Being related to your employer does not make you ineligible to apply. IRCC will review all circumstances of the application to ensure eligibility, genuineness of the job offer and employer/employee relationship. ",
    },
    q2: {
      type: String,
      default:
        " I am a visitor in Canada, can I obtain caregiver work permit after asking for Labour Market Impact Assessment from my employer?  ",
    },
    qa2: {
      type: String,
      default:
        " No, this program has been closed and IRCC refuses to process the applications made by visitor for work permit under the Temporary Foreign Worker Program (TFWP). ",
    },

    q3: {
      type: String,
      default:
        "  ",
    },
    qa3: {
      type: String,
      default:
        " ",
    },
    q4: {
      type: String,
      default:
        "  ",
    },
    qa4: {
      type: String,
      default:
        "   ",
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
      default: "N"
    }
  },
  {
    timeStamps: true,
  }
);

let pathwaysForCaregiverSection = mongoose.model(
  "Pathways For Caregiver",
  pathwaySchema
);
module.exports = pathwaysForCaregiverSection;
