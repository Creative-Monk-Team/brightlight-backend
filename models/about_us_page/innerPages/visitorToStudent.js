let mongoose = require("mongoose");
let visitorToStudentSchema = mongoose.Schema(
  {
    visitorToStudentHeading: {
      type: String,
      default: "Visitor to Student Program (Updated July, 2025) ",
    },  
    visitorToStudentPara: {
      type: String,
      default:
        "Transitioning from visitor status to student status (also known as a change of status) can be an option for you if you have been staying in Canada as a visitor and wish to pursue full-time studies in a recognized academic institution. This program, known as the Visitor to Student Program (VTS), allows you to extend your stay and pursue studies at a designated learning institution (DLI). This process involves you applying for a student visa or changing your current visa to a student visa.",
    },
    //

    BenifitsHeading: {
      type: String,
      default: "Benefits of Changing Your Status from Visitor to Student",
    },
    BenifitsSubHead: {
      type: String,
      default: "The Visitor to Student Permit Program offers several benefits for international students, including:",
    },
    b1: {
      type: String,
      default: "A Guaranteed Investment Certificate (GIC) is not required to apply for a Study Permit when you apply from inside Canada. ",
    },
    b2: {
      type: String,
      default: "You do not need to pay a 1-year fee to college or university, upfront. ",
    },
    b3: {
      type: String,
      default: "While you study, you are allowed to work up to 24 hours per week, starting September, 2024. ",
    },
    b4: {
      type: String,
      default: "Every 2 semesters, you are allowed to take a scheduled break for one semester. During this time, there are no restrictions on your work hours. ",
    },
    b5: {
      type: String,
      default: "If you decide to stay in Canada after completing your studies, you may be eligible for a post-graduate work permit, which can give you valuable work experience and enhance your chances of obtaining permanent residency. ",
    },
    b6: {
      type: String,
      default: "You can continue your studies without having to return to your home country. ",
    },
    b7: {
      type: String,
      default: "You can avoid the hassle and expense of traveling back and forth between Canada and your home country. ",
    },
    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for the Student Permit Program",
    },

    e1: {
      type: String,
      default: "You are already in Canada legally with a valid status, such as a valid study permit, work permit, or visitor record.",
    },
    e2: {
      type: String,
      default: "You have a valid Provincial Attestation Letter (PAL) Mandatory",
    },
    e3: {
        type: String,
        default: "You are enrolled in a full-time program at a designated learning institution (DLI).",
      },
      e4: {
        type: String,
        default: "You have sufficient funds to support yourself while you study in Canada, including tuition, living expenses, and return transportation..",
      },
      e5: {
        type: String,
        default: "You have no criminal record.",
      },
      e6: {
        type: String,
        default: "You have a valid Provincial Attestation Letter or PAL.",
      },
      EligibilityListHead: {
        type: String,
        default: "In addition, you should meet at least one of the following conditions:",
      },
      UkrainHeading: {
        type: String,
        default: "you’re a Ukrainian national or family member of a Ukrainian national",
      },
      u1: {
        type: String,
        default: " you have a valid study or work permit",
      },
      u2: {
        type: String,
        default: " your spouse, common-law partner or parent has a valid study or work permit",
      },
      u3: {
        type: String,
        default: "  you’re a minor child in primary or secondary school",
      },
      u4: {
        type: String,
        default: "you’re an exchange student or visiting student",
      },
      u5: {
        type: String,
        default: "  you completed a short-term course or study program required to be accepted at a DLI",
      },
      u6: {
        type: String,
        default: " you or your spouse, common-law partner or dependent child has a temporary resident permit (TRP) valid for 6 months or more",
      },
      u7: {
        type: String,
        default: " you’re being sponsored to immigrate and you already applied for permanent residence (if you’re eligible)",
      },
      u8: {
        type: String,
        default: " you or your spouse, common-law partner or dependent child are subject to an unenforceable removal order",
      },
      SpouseDepenChildHeading: {
        type: String,
        default: "you’re the spouse, common-law partner or dependent child of:",
      },
      sdc1: {
        type: String,
        default: " an athlete on a team based in Canada ",
      },
      sdc2: {
        type: String,
        default: "a member of the media  ",
      },
      sdc3: {
        type: String,
        default: "a member of the clergy  ",
      },
      sdc4: {
        type: String,
        default: " military personnel on duty in Canada or ",
      },
      sdc5: {
        type: String,
        default: "  an accredited foreign representative",
      },
      sdc5SubLi1: {
        type: String,
        default: " you’re a refugee claimant in Canada or a family member of a refugee claimant in Canada ",
      },

      HowtoApplyHeading: {
        type: String,
        default: "How to Apply for a Study Permit When Applying as a Visitor",
      },
      HowtoApplySubHead: {
        type: String,
        default: "You will need to provide the same documents as you would if you were applying from outside Canada. This includes your passport, letter of acceptance from your DLI, proof of financial support, and police certificates. Here are 5 easy steps we help you follow to process your application:",
      },   
      ha1: {
        type: String,
        default: "Contact Bright Light Immigration.",
      },
      ha2: {
        type: String,
        default: "Apply to a prerequisite course (Mandatory).",
      },
      ha3: {
        type: String,
        default: "Apply for a Provincial Attestation Letter (PAL) Mandatory"
      },
      ha4: {
        type: String,
        default: "Apply to a Public/Private College..",
      },
      ha5: {
        type: String,
        default: "Get your documents and submit your application.",
      },
      ha6: {
        type: String,
        default: "Obtain your Study Permit.",
      },


  //


    RefusalHeading: {
      type: String,
      default: "Reasons for Refusals of Study Permit When Applying as a Visitor",
    },
    RefusalSubHead: {
        type: String,
        default: "You should have a Letter of Acceptance (LOA) from a DLI. If you do not have a LOA, your application will be refused.",
      },
    r1: {
      type: String,
      default:
        "You do not have a Letter of Acceptance (LOA) from a DLI.",
    },
    r2: {
      type: String,
      default:
        "If you do not have strong ties to your home country, such as a job offer or property ownership.",
    },
    r3: {
      type: String,
      default:
        "You do not have enough money to cover tuition, living expenses, and return transportation.",
    },
    r4: {
        type: String,
        default:
          "You provided false or misleading information on your application.",
      },
      r5: {
        type: String,
        default:
          "You have a history of immigration violations, such as overstaying a visa or working without authorization.",
      },
      r6: {
        type: String,
        default:
          "You have a criminal record, depending on the nature of the crime.",
      },
      r7: {
        type: String,
        default:
          "You submitted incomplete or incorrect documentation with your application.",
      },
      r8: {
        type: String,
        default:
          "You did not provide sufficient evidence to show your genuine intent to study.",
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

    IfYouSubmitHeading: {
      type: String,
      default: "  If you submit your study permit application on or after November 1, 2024 ",
    },
    IfYouSubmitSubHead: {
      type: String,
      default: "NOTE: Changes were Announced to the Post Graduate Work Permit (PGWP) Eligibility - September 18, 2024",
    },
    IfYouSubmitPara: {
      type: String,
      default: " If you submit your study permit application on or after November 1, 2024, you must also meet the new requirements that apply to your situation to be eligible to apply for a PGWP.",
    },

    IfYouGraduatedHeading: {
      type: String,
      default: " If you Graduated from a University Bachelor’s degree, Master’s Degree or Doctoral Degree Program:",
    },
    IfYouGraduatedLi1: {
      type: String,
      default: " <strong>Language requirement: </strong> You must prove your English or French language skills with a minimum level of Canadian Language Benchmarks (CLB) 7 in English or Niveaux de competence linguistique canadiens (NCLC) 7 in French in all 4 language areas.",
    },
    IfYouGraduatedLi2: {
      type: String,
      default: " <strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement.",
    },
    //
    
    IfYouGraduatedAnotherHeading: {
      type: String,
      default: "If you Graduated from Any Other University Program:",
    },
    IfYouGradAnothLi1: {
      type: String,
      default: "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 7 in English or NCLC 7 in French in all 4 language areas.",
    },
    IfYouGradAnothLi2: {
      type: String,
      default: " <strong>Field of study requirement:</strong>You must graduate in an eligible field of study.",
    },
    //
    IfYouGraduatedCollegeHeading: {
      type: String,
      default: "If you graduated from a College Program or Any Other Program Not listed Above:",
    },
    IfYouGradCollLi1: {
      type: String,
      default: "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 5 in English or NCLC 5 in French in all 4 language areas.",
    },
    IfYouGradCollLi2: {
      type: String,
      default: " <strong>Field of study requirement:</strong>You must graduate in an eligible field of study.",
    },
    FieldStudyRequHeading: {
      type: String,
      default: "Field of Study Requirement",
    },
    FieldStudyRequPara: {
      type: String,
      default: " If your study program has a field of study requirement, you must graduate from a program linked to certain occupations in long-term shortage. The fields of study are divided into 5 broad categories:",
    },
    fsrLi1: {
      type: String,
      default: "Agriculture and Agri-food ",
    },
    fsrLi2: {
      type: String,
      default: "Healthcare ",
    },
    fsrLi3: {
      type: String,
      default: " Science, Technology, Engineering and Mathematics (STEM)",
    },
    fsrLi4: {
      type: String,
      default: "Trade ",
    },
    fsrLi5: {
      type: String,
      default: "Transport ",
    },

    ImportantPointNoteHeading: {
      type: String,
      default: "Important Points to Remember:",
    },
    ipn1: {
      type: String,
      default: " To apply for a study permit as a visitor in Canada, you must submit your completion letter for the prerequisite program along with your letter of acceptance. ",
    },
    ipn2: {
      type: String,
      default: " Ensure that your acceptance letter clearly states that the program is a prerequisite for admission.",
    },
    ipn3: {
      type: String,
      default: "If the post-secondary school you wish to attend is not on the DLI List, you cannot apply for a study permit. ",
    },
    ipn4: {
      type: String,
      default: "September 18, 2024. Make sure you are choosing a course that is eligible.  ",
    },
    ipn5: {
      type: String,
      default: " During the prerequisite program, you're not eligible to work off-campus. However, once you've completed the prerequisite and commenced your main program, you can work off-campus.",
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
    q11: {
      type: String,
      default:
        "  ",
    },
    qa11: {
      type: String,
      default:
        "  ",
    },
    q12: {
      type: String,
      default:
        "  ",
    },
    qa12: {
      type: String,
      default:
        "  ",
    },
    q13: {
      type: String,
      default:
        "  ",
    },
    qa13: {
      type: String,
      default:
        "  ",
    },
    q14: {
      type: String,
      default:
        "  ",
    },
    qa14: {
      type: String,
      default:
        "  ",
    },
    q15: {
      type: String,
      default:
        "  ",
    },
    qa15: {
      type: String,
      default:
        "  ",
    },

    q16: {
      type: String,
      default:
        "  ",
    },
    qa16: {
      type: String,
      default:
        "  ",
    },
    q17: {
      type: String,
      default:
        "  ",
    },
    qa17: {
      type: String,
      default:
        "  ",
    },
    q18: {
      type: String,
      default:
        "  ",
    },

    qa18: {
      type: String,
      default:
        "  ",
    },

    q19: {
      type: String,
      default:
        "  ",
    },
    qa19: {
      type: String,
      default:
        "  ",
    },
    q20: {
      type: String,
      default:
        "  ",
    },
    qa20: {
      type: String,
      default:
        "  ",
    },
    q21: {
      type: String,
      default:
        "  ",
    },
    qa21: {
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

let visitorToStudentSection = mongoose.model(
  "Visitor to Student progam",
  visitorToStudentSchema
);
module.exports = visitorToStudentSection;
