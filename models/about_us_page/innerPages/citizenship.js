let mongoose = require("mongoose");
let citizenshipSchema = mongoose.Schema(
  {
    CitizenshipHeading: {
      type: String,
      default: "Citizenship - The highest form of legal status in Canada",
    },
    CongratulationsPara: {
      type: String,
      default:
        "After completing your 3 years (or staying physically in Canada for at least 1,095 days) of PR journey in Canada, you are now officially going to become a Canadian Citizen. Congratulations. All you are left to do is complete the Canadian Citizenship application through IRCC and enjoy the highest form of legal status in Canada. This is the last step for you to become a Canadian.",
    },
    CongratulationsPara2: {
      type: String,
      default:"Because of Canadian citizenship, you’ll have several rights and responsibilities. It is the highest form of legal status in Canada, and it allows you to enjoy the full benefits of Canadian society, including the right to vote, hold public office, and live and work anywhere in the country."
    },
    BenifitHeading: {
      type: String,
      default: "Benefits of becoming a Canadian Citizen:",
    },
    b1: {
      type: String,
      default: "You now have the right to vote and hold office",
    },
    b2: {
      type: String,
      default:
        "You now have the right to travel internationally with a Canadian passport",
    },
    b3: {
      type: String,
      default: "You can access Canadian social programs and benefits",
    },
    b4: {
      type: String,
      default: "You can now work and live in Canada indefinitely",
    },
    b5: {
      type: String,
      default:
        "You also have the right to apply for Canadian citizenship for your children",
    },
    EligibilityHeading: {
      type: String,
      default: "Eligibility criteria for Canadian Citizenship",
    },
    EligibilitySubHeading: {
      type: String,
      default:
        "Are you eligible to file your Canadian Citizenship? Let's find out.",
    },
    e1: {
      type: String,
      default:
        "You need to be a permanent resident of Canada and have lived in Canada for 3 years out of the past 5 years. You must be present physically in Canada for at least 1,095 days out of the past 5 years.",
    },
    e2: {
      type: String,
      default:
        "You have filed your taxes in Canada for at least three years during the five years before applying.",
    },
    e3: {
      type: String,
      default:
        "You have to pass a citizenship test. This test is made to assess your knowledge of Canadian history, geography, values, and government.",
    },
    e4: {
      type: String,
      default: "Show your skills and proficiency in English or French",
    },
    EligibilityNote: {
      type: String,
      default:
        "Note that there are some exceptions to these requirements, such as for spouses of Canadian citizens and for individuals who have served in the Canadian Armed Forces.",
    },
    HowApplyHeading: {
      type: String,
      default: "How to apply for Canadian Citizenship?",
    },
    ha1: {
      type: String,
      default:
        "Before you apply, make sure you meet the eligibility requirements. These include being a permanent resident of Canada, having lived in Canada for at least 3 out of the past 5 years, filing your taxes in Canada for at least three years during the five years before applying, passing a citizenship test, and showing your ability to speak either English or French.",
    },
    ha2: {
      type: String,
      default:
        "To apply, you'll need to complete the necessary forms, provide supporting documents, and pay the applicable fees.",
    },
    ha3: {
      type: String,
      default:
        "If you're approved, you'll attend a citizenship ceremony to take the Oath of Citizenship, where you will officially become a Canadian citizen. You will also receive your Canadian citizenship certificate.",
    },
    ha4: {
      type: String,
      default:
        "We know what it means to you to become a Canadian citizen. We would be honored to help you through the application process and to get you ready for your citizenship ceremony.Click here",
    },
    RefusalHeading: {
      type: String,
      default: "Reasons for refusal of Canadian Citizenship:",
    },
    r1: {
      type: String,
      default:
        "Non-compliance with residency requirements: To be eligible for Canadian citizenship, you must have lived in Canada for at least 1,095 days (3 years) during the five years before applying. You must also have maintained your permanent resident status throughout this time. If you have not met these residency requirements, your application may be refused.",
    },
    r2: {
      type: String,
      default:
        "Failure to pass the citizenship test: The citizenship test assesses your knowledge of Canadian history, geography, values, and government. You must achieve a score of 75% or higher to pass the test. If you do not pass the test, you will be required to retake it.",
    },
    r3: {
      type: String,
      default:
        "Your Inability to Show Language Proficiency: To be eligible for Canadian citizenship, you must showcase your proficiency in either English or French. You can do this by passing a language test. If you do not pass the language test, you may be required to take additional language classes.",
    },
    r4: {
      type: String,
      default:
        "Misrepresentation or fraud: If you have misrepresented or falsified any information on your citizenship application, or if you have provided false or misleading information to a Canadian immigration officer, your application may be refused.",
    },
    r5: {
      type: String,
      default:
        "Criminal record: If you have a criminal record, it may affect your eligibility for Canadian citizenship. In some cases, a criminal record may be a bar to citizenship",
    },
    r6: {
      type: String,
      default:
        "Security concerns: If there are any security concerns about your application, your application may be refused. This could include concerns about your involvement in organized crime, terrorism, or other criminal activities.",
    },
    r7: {
      type: String,
      default:
        "Failure to attend a citizenship ceremony: If you are invited to a citizenship ceremony, you must attend to take the Oath of Citizenship. If you do not attend the ceremony, your application may be refused.",
    },
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
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
        "How much does it cost to apply for Canadian citizenship?  ",
    },
    qa1: {
      type: String,
      default:
        " The application fee for adults is $630, and the fee for minors is $100. ",
    },
    q2: {
      type: String,
      default:
        " How long does it take to process a Canadian citizenship application?   ",
    },
    qa2: {
      type: String,
      default:
        "  The processing time for Canadian citizenship applications can vary depending on the complexity of the application and the backlog of applications at the Immigration, Refugees, and Citizenship Canada (IRCC) office. However, it typically takes between 12 and 18 months to process an application. ",
    },

    q3: {
      type: String,
      default:
        "  Who has to take the Canadian citizenship test? ",
    },
    qa3: {
      type: String,
      default:
        "  If you're between 18 and 54 years old on the day you sign your application, you have to take the citizenship test.",
    },
    q4: {
      type: String,
      default:
        "  Who is exempt from the citizenship test in Canada? ",
    },
    qa4: {
      type: String,
      default:
        " You might be exempt from the citizenship test based on your age: <ul> <li>Citizenship test and language requirements: You don't need to meet these requirements if you sign your application when you're. under 18 (a minor) or. at least 55 years old.</li> </ul> <p>Oath of citizenship: Minors under 14 also don't need to take the oath of citizenship.</p>",
    },

    q5: {
      type: String,
      default:
        "  What happens if I fail the citizenship test?",
    },
    qa5: {
      type: String,
      default:
        " If you fail the citizenship test, you will be able to retake it at a later date. There is no limit to the number of times you can retake the test. ",
     },
    q6: {
      type: String,
      default:
        " What happens if I am not proficient in English or French? ",
    },
    qa6: {
      type: String,
      default:
        " If you are not proficient in English or French, you will be required to take a language test. If you do not pass the language test, you may be required to take additional language classes.",
    },

    q7: {
      type: String,
      default:
        "Which English test is accepted for Canadian citizenship?",
    },
    qa7: {
      type: String,
      default:
        "  As of 2024 approved English Tests for Canada Immigration are IELTS, CELPIP & PTE",
    },

    q8: {
      type: String,
      default:
        "Can I use expired IELTS for Canadian citizenship?",
    },
    qa8: {
      type: String,
      default:
        "If you went through and used a language test in the process of applying for PR, then you can use those results as evidence of proficiency, even if they have since expired.",
    },
    
    q9: {
      type: String,
      default:
        " What happens if I have a criminal record?",
    },
    qa9: {
      type: String,
      default:
        "  A criminal record may affect your eligibility for Canadian citizenship. In some cases, a criminal record may be a bar to citizenship.",
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

let citizenshipSection = mongoose.model(
  "Citizenship Section",
  citizenshipSchema
);
module.exports = citizenshipSection;
