const mongoose = require("mongoose");

const flagpolingSchema = mongoose.Schema(
  {
    programStatus: {
      type: String,
      default: "Program is no longer Open - ended on December 23, 2024",
    },

    heading: {
      type: String,
      default: "Flagpoling",
    },

    aboutHeading: {
      type: String,
      default: "About the Program",
    },
    aboutPara: {
      type: String,
      default:
        "Flagpoling is a legal way to exit and re-enter Canada without crossing into the USA to change or extend a valid status. It's often used to renew temporary residence status, like study or work permits, or to finalize permanent residency. While temporary resident visa holders can apply online or via paper, these applications can take weeks or months. To save time, some choose to go to a port of entry for quicker processing.",
    },

    benefitsHeading: {
      type: String,
      default: "Benefits of Flagpoling",
    },
    benefitsList: {
      type: [String],
      default: [
        "Flagpoling is a time-saving alternative to applying for a work or study permit through online or paper applications, which can take weeks or even months to process, often longer than the times mentioned on the IRCC website.",
        "With flagpoling, you do not need to gather extensive documentation or complete complex and lengthy forms. Instead, candidates can present their passport and supporting documents directly to a Canada Border Services Agency (CBSA) officer. You attend an interview and can often obtain the new permit on the spot.",
        "In many cases, CBSA officers adopt a more humane approach than IRCC officers and may consider humanitarian and compassionate grounds when approving applications.",
      ],
    },

    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Flagpoling",
    },
    eligibilityList: {
      type: [String],
      default: [
        "You must currently hold a valid visitor, study, or work permit.",
        "If your status has expired, you must have applied for an extension online and provide proof of your application submission and receipt.",
        "Do not attempt flagpoling if you are out of status or have applied for restoration of your status.",
        "You must meet the requirements for the new permit that you are requesting, in accordance with IRCC guidelines.",
        "It is recommended that you carry original documents with you during your interview with the Canada Border Services Agency officer.",
      ],
    },

    importantTipHeading: {
      type: String,
      default: "Important Tip",
    },
    importantTipPara: {
      type: String,
      default:
        "Flagpoling can be useful if approached with careful preparation and proper documentation. It's important to be aware of its risks, such as the potential denial of entry at US and Canadian borders, which could result in being sent back to your home country. This process often involves a detailed interview with a US immigration officer or CBSA border officer.",
    },

    ctaHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    ctaPara: {
      type: String,
      default:
        "To minimize risks and ensure a smooth flagpoling experience, we strongly recommend hiring a representative from a Regulated Canadian Immigration Consultant (RCIC). An RCIC can guide you on the required documents for flagpoling and effectively prepare you for the Port of Entry and interviews with immigration officers. Brightlight Immigration is here to represent you at any Point of Entry in the Lower Mainland, British Columbia. Our experienced consultants will ensure you have the necessary documentation, provide personalized guidance, and assist you in effectively communicating your case to immigration officers.",
    },

    bookAppointment: {
      type: String,
      default: "Book Appointment",
    },

    whyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },
    whyChooseUsList: {
      type: [String],
      default: [
        "Representation at any Point of Entry in the Lower Mainland, British Columbia",
        "Experienced consultants to ensure necessary documentation",
        "Personalized guidance for your flagpoling process",
        "Assistance in effectively communicating your case to immigration officers",
      ],
    },

    showTestimonials: {
      type: String,
      default: "Y", // Toggle: "Y" to show, "N" to hide
    },

    showVideoTestimonials: {
      type: String,
      default: "Y",
    },

    showWrittenTestimonials: {
      type: String,
      default: "Y",
    },

    faqHeading: {
      type: String,
      default: "FAQs Made Simple",
    },
    faqs: {
      type: [
        {
          question: String,
          answer: String,
        },
      ],
      default: [
        {
          question: "Is Flagpoling Legal in Canada?",
          answer:
            "Yes, flagpoling is a legal procedure in Canada that entails leaving the country and then re-entering without crossing into the United States. This process is sanctioned by Immigration, Refugees and Citizenship Canada (IRCC), making it a completely legal option for certain immigration-related matters.",
        },
        {
          question: "What Are the Risks of Flagpoling?",
          answer:
            "While flagpoling is a legal activity, it does come with inherent risks. Individuals may face the possibility of being denied entry into both the United States and Canada. In some cases, this could lead to being removed from Canada and sent back to your home country. Additionally, flagpoling often requires going through a detailed interview process with a U.S. immigration officer or a border officer from the Canada Border Services Agency (CBSA).",
        },
        {
          question: "Do I Need a U.S. Visa to Flagpole?",
          answer: "No, a visitor visa for the United States is not required to participate in flagpoling.",
        },
        {
          question: "Can I Flagpole if I Am Out of Status?",
          answer:
            "It is strongly discouraged to flagpole without valid or implied status in Canada. It is advisable to have your immigration status resolved before attempting flagpoling.",
        },
        {
          question: "Do I Need to Make an Appointment to Flagpole?",
          answer:
            "Appointment requirements for flagpoling can change frequently. Most border crossings in the Lower Mainland may require you to schedule an appointment for the flagpoling process. For the most current information, it is best to contact our office at 604-503-3734.",
        },
        {
          question: "What Documents Are Required to Flagpole?",
          answer:
            "The documents needed for flagpoling can vary depending on the specific purpose, such as applying for a work permit, a visitor record, or extending a study or work permit. To obtain a personalized checklist of the necessary documents tailored to your situation, please reach out to our office at 604-503-3734.",
        },
      ],
    },

    showBlogs: {
      type: String,
      default: "Y",
    },
    showEligibilityAssessment: {
      type: String,
      default: "Y",
    },
  },
  {
    timestamps: true,
  }
);

const Flagpoling = mongoose.model("Flagpoling Program", flagpolingSchema);
module.exports = Flagpoling;