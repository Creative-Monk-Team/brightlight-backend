let mongoose = require("mongoose");
let insideCanadaSchema = mongoose.Schema(
  {
    InsideCanHeading: {
      type: String,
      default: "Study Permit: Inside Canada",
    },
    InsideCanPara1: {
      type: String,
      default:
        "While the standard procedure for obtaining a Canadian student visa is to apply from outside Canada, there are exceptions. You may be eligible to apply for a student visa while already residing in Canada or if you wish to change your college or program.",
    },
    InsideCan2: {
      type: String,
      default:"The processing time for a student visa application from inside Canada can vary depending on individual circumstances. If you need to extend your stay, you can apply for an extension from inside Canada. For the most up-to-date processing times and information on your study permit extension, please contact our office at 604-503-3734."
    },


    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Student Visa - Inside Canada",
    },
      EligibilitySubHead1: {
        type: String,
        default: "You can only apply for a student visa from inside Canada if you meet all of the following criteria:",
      },
    e1: {
      type: String,
      default: "You are already in Canada legally with valid status (study permit, work permit, or visitor record).",
    },
    e2: {
      type: String,
      default:
        "You have completed a prerequisite course inside Canada.",
    },
    e3: {
        type: String,
        default:
          "You are enrolled in a full-time program at a designated learning institution (DLI).",
      },
      e4: {
        type: String,
        default: "You have sufficient funds to support yourself while studying in Canada.",
      },
      e5: {
        type: String,
        default: "You have no criminal record.",
      },
      EligibilitySubHead2: {
        type: String,
        default: "Additionally, you must meet at least one of the following conditions:",
      },
      e6: {
        type: String,
        default: "Your work permit or study permit is still valid.",
      },
      e7: {
        type: String,
        default: "You are the parent, spouse, or common-law partner of someone with a valid work or study permit.",
      },
      e8: {
        type: String,
        default: "You are the parent, spouse, or common-law partner of someone with a valid Temporary Resident Permit with a validity of 6 months or more.",
      },
      e9: {
        type: String,
        default: "You are a minor and your parents or guardian are planning to send you to primary or secondary school.",
      },
      e10: {
        type: String,
        default: "You are an exchange student.",
      },
      e11: {
        type: String,
        default: "You are a visiting student.",
      },
      e12: {
        type: String,
        default: "You have sponsorship for immigration and your permanent residency profile is already in the pool.",
      },
      e13: {
        type: String,
        default: "You are completing a short-term course aimed at making you eligible to be accepted at a designated learning institute.",
      },
      EligibilityNote: {
        type: String,
        default: "If none of the above applies, you must submit your study permit application as though you were outside Canada, but you will not need to physically leave the country. You will be required to apply for a Provincial Attestation Letter (PAL) in this situation.",
      },

  //


  //
    HowApplyHeading: {
      type: String,
      default: "How to Apply for a Study Permit from Inside Canada",
    },
    HowApplySubHead: {
        type: String,
        default: "You will need to provide the same documents as you would if you were applying from outside Canada. This includes your passport, letter of acceptance from your DLI, proof of financial support, and police certificates. Here are 5 easy steps we help you follow to process your application.",
      },
    ha1: {
      type: String,
      default:
        "Contact Bright Light Immigration.",
    },
    ha2: {
      type: String,
      default:
        "Apply to a prerequisite course (Mandatory).",
    },
    ha3: {
      type: String,
      default:
        "Apply to a Public/Private College.",
    },
    ha4: {
        type: String,
        default:
          "Gather your documents and submit your application.",
      },
    ha5: {
     type: String,
     default:
        "Receive your Study Permit.",
      },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals",
    },
    r1: {
      type: String,
      default:
        "Lack of proof of funds to afford living and studying in Canada.",
    },
    r2: {
      type: String,
      default:
        "Failure to demonstrate reasons for returning home after studies.",
    },
    r3: {
      type: String,
      default:
        "Unclear study purpose and how it will benefit you.",
    },
    r4: {
        type: String,
        default:
          "Failed to meet required language test scores.",
      },
      r5: {
        type: String,
        default:
          "Not accepted into a recognized educational institution or submitting fraudulent documents.",
      },
  
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.",
    },
    s2: {
      type: String,
      default:
        "We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists ready to assist you from the start of the application process to obtaining your visa. Start your process now.",
    },
    BenefitsHeading: {
      type: String,
      default: "Benefits",
    },

    b1: {
      type: String,
      default: "No GIC Required",
    },
    b2: {
      type: String,
      default: " No IELTS Required",
    },
    b3: {
      type: String,
      default: "No PAL Letter Required ",
    },
    b4: {
      type: String,
      default: " Obtain Study Permit without leaving Canada",
    },
    b5: {
      type: String,
      default: "  Eligible to work 24 hours per week once Study Permit Approved",
    },
    b5Li: {
      type: String,
      default: "*starting September 2024 ",
    },
    b6: {
      type: String,
      default: "Only pay 1 Semester fee to start the process ",
    },
    b7: {
      type: String,
      default: "  3 Year Post Graduate Open Work Permit given once you finish 2-year study",
    },
    b8: {
      type: String,
      default: "GAP between employment and education is acceptable",
    },
    b9: {
      type: String,
      default: "People with previous refusals can apply with a high chance of getting approved ",
    },
    b10: {
      type: String,
      default: " Age no bar: People even in their late 50s have been approved ",
    },
    b11: {
      type: String,
      default: "Spouses and children can extend their stay ",
    },
    b12: {
      type: String,
      default: "Higher chance of approval ",
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
        "  When should I apply for a study permit from inside Canada?",
    },
    qa1: {
      type: String,
      default:
        "You should apply for a study permit as soon as possible after you have been accepted into a Canadian-designated learning institution (DLI). The processing time for study permit applications can vary, so it is best to apply early to avoid any delays. ",
    },
    q2: {
      type: String,
      default:
        " . What documents do I need to apply for a study permit from inside Canada? ",
    },
    qa2: {
      type: String,
      default:
        "  The required documents for a study permit application from inside Canada will vary depending on your circumstances. However, some of the most common documents include your passport, a copy of your DLI acceptance letter, proof of funds, proof of ties to your home country, and proof of English or French language proficiency (if applicable). ",
    },

    q3: {
      type: String,
      default:
        "How much does it cost to apply for a study permit from inside Canada? ",
    },
    qa3: {
      type: String,
      default:
        "  The application fee for a study permit is CAD$150. You will also be required to pay for biometrics (fingerprints and a digital photo) if you are applying from inside Canada. The biometrics fee is CAD$85.",
    },
    q4: {
      type: String,
      default:
        "  How long does it take to get a decision on my study permit application from inside Canada? ",
    },
    qa4: {
      type: String,
      default:
        "  The processing time for study permit applications from inside Canada can vary, but it is typically 2-3 months.  ",
    },

    q5: {
      type: String,
      default:
        "What happens if my study permit application is refused from inside Canada? ",
    },
    qa5: {
      type: String,
      default:
        "  If your study permit application is refused, you will receive a letter from IRCC explaining the reason for the refusal. You may be able to appeal the decision, but you will need to do so within 30 days of receiving the refusal letter. We can help you with your reconsideration application for a positive response. Contact our office at 604-503-3734.",
     },
    q6: {
      type: String,
      default:
        " How can I extend my study permit from inside Canada?",
    },
    qa6: {
      type: String,
      default:
        " . If you are currently in Canada with a study permit and you want to stay longer to complete your studies, you will need to apply to extend your permit before your current permit expires. The application fee for an extension of a study permit is CAD$150.",
    },

    q7: {
      type: String,
      default:
        " What are the benefits of applying for a study permit from inside Canada? ",
    },
    qa7: {
      type: String,
      default:
        " There are a few benefits to applying for a study permit from inside Canada: <ul> <li>You can start your studies as soon as your permit is approved.</li> <li>You can work part-time while you are studying if specified on the study permit. </li> <li>You may be eligible to apply for permanent residence after you graduate.</li> </ul>  ",
    },

    q8: {
      type: String,
      default:
        " Do I need to get a GIC when I am applying from inside Canada Study Permit?",
    },
    qa8: {
      type: String,
      default:
        "GIC is not required to apply for a Study Permit when you apply from inside Canada",
    },
    
    q9: {
      type: String,
      default:
        "  Do I need to pay full-year tuition fees, when I am applying from inside Canada Study Permit?",
    },
    qa9: {
      type: String,
      default:
        " You do not need to pay a 1-year fee to college or university, upfront. In most cases, you will only pay 1 semester fee to get a Letter of Acceptance (LOA). ",
    },
    q10: {
      type: String,
      default:
        "Do I need a Provincial Attestation Letter (PAL) when you apply for a Study Permit from inside Canada? ",
    },
    qa10: {
      type: String,
      default:
        " You do not need to pay a 1-year fee to college or university, upfront. In most cases, you will only pay 1 semester fee to get a Letter of Acceptance (LOA).",
    },
    q11: {
      type: String,
      default:
        "  Do I need a Provincial Attestation Letter (PAL) when you apply for a Study Permit from inside Canada?",
    },
    qa11: {
      type: String,
      default:
        "No, you do not need a Provincial Attestation Letter (PAL) when you apply for a Study Permit from inside Canada. ",
    },
    q12: {
      type: String,
      default:
        " ",
    },
    qa12: {
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

let insideCanadaSection = mongoose.model(
  "Study Permit: Inside Canada",
  insideCanadaSchema
);
module.exports = insideCanadaSection;
