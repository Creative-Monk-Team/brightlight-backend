let mongoose = require("mongoose");
let changeCollegeProgSchema = mongoose.Schema(
  {
    ChangeCollProgHeading: {
      type: String,
      default: "Change Your College or Program in Canada (DLI Change)",
    },
    ChangeCollProgPara1: {
      type: String,
      default:
        "The decision to change colleges or programs is significant and often driven by a desire to explore new opportunities, enhance your skill set, or align with your evolving career goals. Whether you're seeking a more challenging curriculum, a more supportive learning environment, or a better fit with your personal values, understanding your motivations is crucial for making an informed choice.",
    },
    ChangeCollProgCan2: {
      type: String,
      default:"If you are an international student in Canada, you have the flexibility to change your college or program of study while maintaining your valid study permit. However, the process and requirements for changing schools vary depending on your eligibility and the new institution you intend to attend. For the most up-to-date information and handling your case, please contact our office at 604-503-3734."
    },

    noteHeading: {
      type: String,
      default: "Note:"
    },
    notContent: {
      type: String,
      default: "Dli Change Program has been closed! If you change your College/DLI as of 15th November 2024 you are required to apply for a New Study Permit Application. Need Help?"
    },
    showFreeAppointmentButton: {
      type: String,
      default: "Y"
    },


    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Changing Your College or Program in Canada (DLI Change)",
    },

    e1: {
      type: String,
      default: "Your original study permit must still be valid or have an extension application pending.",
    },
    e2: {
      type: String,
      default: "The new institution and program must be acceptable to IRCC.",
    },
  
      HowtoChangeHeading: {
        type: String,
        default: "How to Change Your College or Program in Canada (DLI Change)",
      },
      HowtoChangeSubHead1: {
        type: String,
        default: "If your study permit has not yet been approved:",
      },   
      hc1: {
        type: String,
        default: "Obtain a letter of acceptance from the new Designated Learning Institution (DLI). This letter should confirm your admission to the new program and indicate the start date of your studies.",
      },
      hc2: {
        type: String,
        default: "Submit a new study permit application.",
      },
      HowtoChangeSubHead2: {
        type: String,
        default: "If your study permit has already been approved:",
      },   
     
      e3: {
        type: String,
        default: "Notify IRCC of your change of school or program by logging into your online account on the IRCC website and updating your personal information.",
      },
      e4: {
        type: String,
        default: "Submit a new letter of acceptance from the new DLI. This letter should be sent directly to IRCC by the new school.",
      },
      e5: {
        type: String,
        default: "Review your study permit. Your study permit will remain valid until the expiry date, but you may need to update it if your program is longer than the one you were originally accepted into.",
      },
      e6: {
        type: String,
        default: "In some cases, you may also need to apply for a new work permit if you are eligible to work while studying.",
      },
      

  //


    RefusalHeading: {
      type: String,
      default: "Reasons for Refusals for Changing Your College or Program in Canada (DLI Change)",
    },
    r1: {
      type: String,
      default:
        "If your academic background is not strong enough for the new program, IRCC will refuse your application.",
    },
    r2: {
      type: String,
      default:
        "Failing to have enough funds to support yourself and pay for your tuition and living expenses while in Canada.",
    },
    r3: {
      type: String,
      default:
        "Not having a valid reason for changing schools or programs.",
    },
    r4: {
        type: String,
        default:
          "Not providing all required documentation such as a letter of acceptance from the new school, financial documentation, and other supporting documents.",
      },
      r5: {
        type: String,
        default:
          "Having a criminal record.",
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

let changeCollegeProgSection = mongoose.model(
  "Change Your College or Program in Canada",
  changeCollegeProgSchema
);
module.exports = changeCollegeProgSection;
