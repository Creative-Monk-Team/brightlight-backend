let mongoose = require("mongoose");
let nonSdsSchema = mongoose.Schema(
  {
    nonSdsHeading: {
      type: String,
      default: "Non-Student Direct Stream (Non-SDS) / General Student Visa",
    },
    nonSdsPara1: {
      type: String,
      default:
        "While the Student Direct Stream (SDS) program offers a streamlined application process for select countries, the Non-SDS Canada Student Visa program extends this opportunity to students from all corners of the globe.",
    },
    nonSdsPara2: {
      type: String,
      default:"The Non-SDS or General Student Visa is an option for international students who do not meet the eligibility requirements for the Student Direct Stream (SDS) program. The SDS program offers a streamlined visa application process with faster processing times for certain eligible students from India and Brazil. Non-SDS applicants, on the other hand, must undergo a more comprehensive application process, which may take longer to process."
    },
    nonSdsPara3: {
        type: String,
        default:"While Non-SDS or General Student Visa offers greater flexibility in terms of nationality and program selection, it also entails a lengthier application process and more stringent documentation requirements. Let's look into the pros and cons of this visa to help you make an informed decision."
      },

    //

    
    ProsConsHeading: {
        type: String,
        default: "Pros and Cons",
      },

    ProsHeading: {
        type: String,
        default: "Pros:",
      },
      ProsLi1: {
        type: String,
        default: "No specific nationality requirements",
      },
      ProsLi2: {
        type: String,
        default: "Allows students from all countries to apply",
      },
      ProsLi3: {
        type: String,
        default: "More flexibility in choosing a DLI",
      },
      ProsLi4: {
        type: String,
        default: "No language score requirements for certain programs",
      },
//
    ConsHeading: {
        type: String,
        default: "Cons:",
      },
      ConsLi1: {
        type: String,
        default: "Longer application process",
      },
      ConsLi2: {
        type: String,
        default: "Processing times can be unpredictable.",
      },
      ConsLi3: {
        type: String,
        default: "Higher funds are required.",
      },
      ConsLi4: {
        type: String,
        default: "More strict documentation requirements",
      },

    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility for Non-SDS Program",
    },

    e1: {
      type: String,
      default: "You need to have a valid offer of admission from a designated learning institution (DLI) in Canada.",
    },
    e2: {
      type: String,
      default:
        "Hold a provincial attestation letter (PAL) from the province or territory where you plan to study.",
    },
    e3: {
        type: String,
        default:
          "Demonstrate adequate English language proficiency, typically with an IELTS score of 6.0 for undergraduate studies and 6.5 for postgraduate studies. See Chart Below for Other Accepted Language tests and its requirements.",
      },
      e4: {
        type: String,
        default:
          "Show sufficient funds to support yourself during your studies in Canada. This may include personal savings, parental support, or external scholarships.",
      },
      e5: {
        type: String,
        default: "Also, you should meet all other Canadian immigration requirements, such as criminal background checks and medical exams.",
      },


  //
  eligibTabHeading: {
    type: String,
    default: "Minimum language test scores required:",
  },
  eligibTabEnglanTestHead1: {
    type: String,
    default: "English Language Test",
  },

  eligibTab1Value1: {
    type: String,
    default: "IELTS Academic (Grade 12)",
  },
  eligibTab1Value2: {
    type: String,
    default: "IELTS Academic (Graduation)",
  },
  eligibTab1Value3: {
    type: String,
    default: "CELPIP General",
  },
  eligibTab1Value4: {
    type: String,
    default: "PTE Academic",
  },
  eligibTab1Value5: {
    type: String,
    default: "TOEFL iBT",
  },
  eligibTab1Value6: {
    type: String,
    default: "CAEL",
  },
  eligibTab1Value7: {
    type: String,
    default: "NIVEAUX DE compétence linguistique canadiens",
  },

///

  eligibTabMinScReqSDSHead2: {
    type: String,
    default: "Minimum Score Required for SDS",
  },
  eligibTab2Value1: {
    type: String,
    default: "Overall 6.0 - 5.5 acceptable in one of the modules",
  },
  eligibTab2Value2: {
    type: String,
    default: "Overall 6.5 - no less than 6 in any of the modules",
  },
  eligibTab2Value3: {
    type: String,
    default: "7 in each module",
  },
  eligibTab2Value4: {
    type: String,
    default: "60",
  },
  eligibTab2Value5: {
    type: String,
    default: "83",
  },
  eligibTab2Value6: {
    type: String,
    default: "60",
  },
  eligibTab2Value7: {
    type: String,
    default: "Score of at least 7 for French*",
  },
  //
  CheckCLBHeading: {
    type: String,
    default: "Check what CLB score you need to achieve to meet CLB criteria.",
  },

    AppProcesHeading: {
      type: String,
      default: "Application Process (how to apply)",
    },
    AppProcesSubHeading: {
        type: String,
        default: "The application process for a Non-SDS Canada or General Student Visa involves you submitting your complete application package to the Canadian government. This package should typically include:",
      },

    ap1: {
      type: String,
      default:
        "Your completed application forms.",
    },
    ap2: {
      type: String,
      default:
        "Your passport or travel document.",
    },
    ap3: {
      type: String,
      default:
        "Proof of identity.",
    },
    ap4: {
        type: String,
        default:
          "Hold a Provincial attestation letter (PAL) from the province or territory where you plan to study.",
      },
      ap5: {
        type: String,
        default:
          "Proof of funds. (See Chart Below)",
      },
      ap6: {
        type: String,
        default:
          "Your letter of acceptance from a DLI.",
      },
      ap7: {
        type: String,
        default:
          "English language proficiency test results.",
      },
      ap8: {
        type: String,
        default:
          "Medical exam results.",
      },
      ap9: {
        type: String,
        default:
          "Police certificates from your home country and any other country you have lived in for more than six months.",
      },

//

   ProofFundHeading: {
      type: String,
      default: "Proof of Funds Chart updated as per new guidelines Jan 2024",
    },

    ProofFundTable1Head1: {
        type: String,
        default: "Single Applicant",
      },

      ProofFund1Table11: {
        type: String,
        default: "Tuition Fees",
      },
      ProofFund1Table12: {
        type: String,
        default: "Living Expense",
      },
      ProofFund1Table13: {
        type: String,
        default: "Transportation",
      },
      ProofFund1Table14: {
        type: String,
        default: "Minimum Funds Required",
      },

      ProofFundTable1Head2: {
        type: String,
        default: "Cost",
      },

      ProofFund1Table21: {
        type: String,
        default: "$20,000.00",
      },
      ProofFund1Table22: {
        type: String,
        default: "$20,636.00",
      },
      ProofFund1Table23: {
        type: String,
        default: "$2,000.00",
      },
      ProofFund1Table24: {
        type: String,
        default: "$42,636.00",
      },

//
      ProofFundTable2Head1: {
        type: String,
        default: "Family of 2",
      },

      ProofFund2Table11: {
        type: String,
        default: "Tuition Fees",
      },
      ProofFund2Table12: {
        type: String,
        default: "Living Expense",
      },
      ProofFund2Table13: {
        type: String,
        default: "Transportation",
      },
      ProofFund2Table14: {
        type: String,
        default: "Minimum Funds Required",
      },


      ProofFundTable2Head2: {
        type: String,
        default: "Cost",
      },

      ProofFund2Table21: {
        type: String,
        default: "$20,000.00",
      },
      ProofFund2Table22: {
        type: String,
        default: "$25,691.00",
      },
      ProofFund2Table23: {
        type: String,
        default: "$4,000.00",
      },
      ProofFund2Table24: {
        type: String,
        default: "$49,691.00",
      },
//
/////

//
ProofFundTable3Head1: {
    type: String,
    default: "Family of 4",
  },

  ProofFund3Table11: {
    type: String,
    default: "Tuition Fees",
  },
  ProofFund3Table12: {
    type: String,
    default: "Living Expense",
  },
  ProofFund3Table13: {
    type: String,
    default: "Transportation",
  },
  ProofFund3Table14: {
    type: String,
    default: "Minimum Funds Required",
  },


  ProofFundTable3Head2: {
    type: String,
    default: "Cost",
  },

  ProofFund3Table21: {
    type: String,
    default: "$20,000.00",
  },
  ProofFund3Table22: {
    type: String,
    default: "$38,346.00",
  },
  ProofFund3Table23: {
    type: String,
    default: "$8,000.00",
  },
  ProofFund3Table24: {
    type: String,
    default: "$66,346.00",
  },
//
ProofFundTableOpenPermitHeading: {
    type: String,
    default: "I am an international student. Is my spouse, common law partner, eligible for an Open Work Permit?",
  },
  ProofFundTableOpenPermitPara: {
    type: String,
    default: "As of March 19, 2024, to be eligible to apply for a Spousal Open Work Permit as an international student, you must be enrolled in one of the following programs:",
  },
//////////
GradProgHeading:{
    type: String,
    default: "Graduate Programs:",
  },
  GradProgPara:{
    type: String,
    default: "Graduate programs encompass master’s and doctorate degrees granted by universities or polytechnic institutions.",
  },

///
//////////
ProfDegProgHeading:{
    type: String,
    default: "Professional Degree Programs:",
  },
  ProfDegProgSubHead:{
    type: String,
    default: "Professional degree programs include the following:",
  },
  ProfDegProgList1:{
    type: String,
    default: "Doctor of Dental Surgery (DDS, DMD)",
  },
  ProfDegProgList2:{
    type: String,
    default: "Bachelor of Law or Juris Doctor (LLB, JD, BCL)",
  },
  ProfDegProgList3:{
    type: String,
    default: "Doctor of Medicine (MD)",
  },
  ProfDegProgList4:{
    type: String,
    default: "Doctor of Optometry (OD)",
  },
  ProfDegProgList5:{
    type: String,
    default: "Pharmacy (PharmD, BS, BSc, BPharm)",
  },
  ProfDegProgList6:{
    type: String,
    default: "Doctor of Veterinary Medicine (DVM)",
  },
  ProfDegProgList7:{
    type: String,
    default: "Bachelor of Science in Nursing (BScN, BSN, BNSc)",
  },
  ProfDegProgList8:{
    type: String,
    default: "Bachelor of Education (BEd)",
  },
  ProfDegProgList9:{
    type: String,
    default: "Bachelor of Engineering (BEng, BE, BASc) (only)",

  },
///
    RefusalHeading: {
      type: String,
      default: "Don’t forget to avoid these common Non-SDS or General Student Visa refusal reasons and increase your chances of approval.",
    },
    r1: {
      type: String,
      default:
        "Your application is incomplete, and you did not share all the required documentation.",
    },
    r2: {
      type: String,
      default:
        "You do not have enough money to support yourself during your stay in the country.",
    },
    r3: {
      type: String,
      default:
        "Your health condition poses a risk to public health.",
    },
    r4: {
        type: String,
        default:
          "You submitted fraudulent documents in your application.",
      },
  
      r5: {
        type: String,
        default:
          "You may have violated the terms of your previous visa, such as overstaying or working illegally.",
      },

    //
  
    InCaseHeading: {
      type: String,
      default: "In Case,",
    },
    inCase1: {
      type: String,
      default:
        "If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age.",
    },
    inCase2: {
      type: String,
      default:
        "We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents in the cases we handle. This is why we have a high success rate, with over 90% approval in such cases. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },

    submitHeading: {
      type: String,
      default:
        "If you submit your study permit application on or after November 1, 2024 ",
    },
    submitSubHead: {
      type: String,
      default:
        "NOTE: Changes were Announced to the Post Graduate Work Permit (PGWP) Eligibility - September 18, 2024",
    },
    submitSubPara: {
      type: String,
      default:
        "If you submit your study permit application on or after November 1, 2024, you must also meet the new requirements that apply to your situation to be eligible to apply for a PGWP.",
    },
    submit1List1: {
      type: String,
      default:
        "If you Graduated from a University Bachelor’s degree, Master’s Degree or Doctoral Degree Program:",
    },
    sub1Li1SubLi1: {
      type: String,
      default:
        "<strong>Language requirement: </strong> You must prove your English or French language skills with a minimum level of Canadian Language Benchmarks (CLB) 7 in English or Niveaux de competence linguistique canadiens (NCLC) 7 in French in all 4 language areas.",
    },
    sub1Li1SubLi2: {
      type: String,
      default:
        "<strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement.",
    },


    //
    submit2List1: {
      type: String,
      default:
        "If you Graduated from Any Other University Program:",
    },
    sub2Li1SubLi1: {
      type: String,
      default:
        "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 7 in English or NCLC 7 in French in all 4 language areas.",
    },
    sub2Li1SubLi2: {
      type: String,
      default:
        "<strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement.",
    },

    //

    submit3List1: {
      type: String,
      default:
        "If you graduated from a College Program or Any Other Program Not listed Above:",
    },
    sub3Li1SubLi1: {
      type: String,
      default:
        "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 5 in English or NCLC 5 in French in all 4 language areas.",
    },
    sub3Li1SubLi2: {
      type: String,
      default:
        "<strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement.",
    },
    //

    FieldStudyRequHeading: {
      type: String,
      default:
        "Field of Study Requirement",
    },
    FieldStudyRequSubHead: {
      type: String,
      default:
        "    If your study program has a field of study requirement, you must graduate from a program linked to certain occupations in long-term shortage. The fields of study are divided into 5 broad categories:",
    },
    fsrLi1: {
      type: String,
      default:
        "Agriculture and Agri-food",
    },
    fsrLi2: {
      type: String,
      default:
        "Healthcare",
    },

    fsrLi3: {
      type: String,
      default:
        "Science, Technology, Engineering and Mathematics (STEM)",
    },
    fsrLi4: {
      type: String,
      default:
        "Trade",
    },
    fsrLi5: {
      type: String,
      default:
        "Transport",
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
        "Can I apply for my Non-SDS or General Student Visa online?  ",
    },
    qa1: {
      type: String,
      default:
        " No, you cannot apply for your Non-SDS or General Student Visa online. You must submit your application in person at a Canadian visa application center. Or, we can help you by submitting your application for you for a favorable response.",
    },
    q2: {
      type: String,
      default:
        " How long does it take to process a Non-SDS or General Student Visa application?  ",
    },
    qa2: {
      type: String,
      default:
        "The processing time for a Non-SDS Canada Student Visa can vary depending on the complexity of your application and the current workload of the Canadian government processing center. However, it is generally expected to take longer than the processing time for SDS applications, which is typically around 20 calendar days.  ",
    },

    q3: {
      type: String,
      default:
        "  Are there any exemptions from the Non-SDS or General Student Visa requirements?",
    },
    qa3: {
      type: String,
      default:
        " Yes, there are a few exemptions from the Non-SDS or General Student Visa requirements. For example, you may be exempt from the language proficiency requirement if you are studying a program in French or English. You may also be exempt from the financial requirement if you are receiving financial assistance from a Canadian government program.",
    },
    q4: {
      type: String,
      default:
        "Where can I get proof of funds for my Non-SDS or General Student Visa application?  ",
    },
    qa4: {
      type: String,
      default:
        "   You can get proof of funds from a variety of sources, such as personal savings, bank statements, or financial aid documents. You may also be able to use a letter of financial support from your parents or guardians.",
    },

    q5: {
      type: String,
      default:
        " What is the language proficiency requirement for the Non-SDS or General Student Visa?",
    },
    qa5: {
      type: String,
      default:
        " The language proficiency requirement for the Non-SDS or General Student Visa is typically an IELTS score of 6.0 for undergraduate studies and 6.5 for postgraduate studies. However, there are some exceptions to this rule. For example, you may be exempt from the language proficiency requirement if you are studying a program in French or English.",
     },
    q6: {
      type: String,
      default:
        " How can I appeal a decision on my Non-SDS or General Student Visa application?",
    },
    qa6: {
      type: String,
      default:
        " If your Non-SDS Visa application is denied, you will have 30 days from the date of the denial to appeal the decision. You can appeal the decision by submitting a letter to the Canadian government explaining why you believe the decision should be overturned. Or we can help you by submitting your reconsideration.",
    },

    q7: {
      type: String,
      default:
        " Which is better: SDS or non-SDS?  ",
    },
    qa7: {
      type: String,
      default:
        " SDS applicants typically have a higher approval rate (70%) compared to non-SDS applicants (40%). Additionally, SDS applications are processed much faster.  ",
    },

    q8: {
      type: String,
      default:
        " How many hours can I work while studying in Canada?",
    },
    qa8: {
      type: String,
      default:
        " Generally, international students can work up to 20 hours per week while studying. However, a temporary waiver allows students to work more than 20 hours per  ",
    },
    
    q9: {
      type: String,
      default:
        "Can I change my college once I enter Canada? ",
    },
    qa9: {
      type: String,
      default:
        " Yes, you can change your college once you have arrived in Canada. However, it is crucial to update Immigration, Refugees, and Citizenship Canada (IRCC) with your new DLI (Designated Learning Institution). ",
    },
    q10: {
      type: String,
      default:
        "I am failing my courses. What should I do? ",
    },
    qa10: {
      type: String,
      default:
        " Life happens, and there are various reasons why international students may struggle with their studies. However, maintaining your student status requires meeting the conditions of your study permit. We understand that choosing the wrong course can be a factor in academic struggles. We can help you find alternative courses at different colleges that might be a better fit for your academic strengths and interests. We are connected with over 125 colleges and universities, so we can assist you in finding a suitable program to help you succeed. Please contact us at 604-503-3734 if you are facing academic challenges.",
    },
    q11: {
      type: String,
      default:
        "I have been charged with plagiarism. What should I do? ",
    },
    qa11: {
      type: String,
      default:
        " Plagiarism is a serious offense, and it may result in suspension from your college. If you have been accused of plagiarism, please contact us immediately. We can help you understand the situation and explore options for resolving it. We can also assist you in finding alternative academic pathways that align with your career aspirations.",
    },
    q12: {
      type: String,
      default:
        " I have a low GPA and have been suspended from my college. What should I do?",
    },
    qa12: {
      type: String,
      default:
        " As an international student, academic struggles can impact your visa status. If you have been suspended due to a low GPA, we can assist you in exploring alternative educational options that fit your academic profile and career goals. We can help you find suitable courses at different colleges that align with your strengths and interests. Please contact us at 604-503-3734 for assistance.",
    },
    q13: {
      type: String,
      default:
        " I am an international student. Is my spouse, common law partner eligible for an Open Work Permit?",
    },
    qa13: {
      type: String,
      default:
        " As of March 19, 2024, to be eligible to apply for a Spousal Open Work Permit as an international student, you must be enrolled in one of the following programs:",
    },
    q14: {
      type: String,
      default:
        " Graduate Programs:",
    },
    qa14: {
      type: String,
      default:
        " Graduate programs encompass master’s and doctorate degrees granted by universities or polytechnic institutions.",
    },
    q15: {
      type: String,
      default:
        " Professional Degree Programs:",
    },
    qa15: {
      type: String,
      default:
        " Professional degree programs include the following: <ul> <li>Doctor of Dental Surgery (DDS, DMD)</li>  <li>Bachelor of Law or Juris Doctor (LLB, JD, BCL)</li>  <li>Doctor of Medicine (MD)</li>  <li>Doctor of Optometry (OD)</li>  <li>Pharmacy (PharmD, BS, BSc, BPharm)</li>  <li>Doctor of Veterinary Medicine (DVM)</li>  <li>Bachelor of Science in Nursing (BScN, BSN, BNSc)</li>  <li>Bachelor of Education (BEd)</li>  <li>Bachelor of Engineering (BEng, BE, BASc) (only)</li> </ul>",
    },
    q16: {
      type: String,
      default:
        " ",
    },
    qa16: {
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

let nonSdsSection = mongoose.model(
  "Non-Student Direct Stream (Non-SDS)  Program",
  nonSdsSchema
);
module.exports = nonSdsSection;
