let mongoose = require("mongoose");
let sdsSchema = mongoose.Schema(
  {
    SdsHeading: {
      type: String,
      default: "Student Direct Stream (SDS)",
    },
    SdsPara: {
      type: String,
      default:
        "The Student Direct Stream (SDS) offers eligible international students from 14 countries an expedited pathway to obtain their Canadian study permit.",
    },

    noteHeading: {
      type: String,
      default: "Note:"
    },
    notContent: {
      type: String,
      default: "SDS Program has been closed. You will need to submit your application through the NON-SDS Program."
    },
    showNonSDSButton: {
      type: String,
      default: "Y"
    },

    //

    
    WhatisStudyPerHeading: {
        type: String,
        default: "What is a Study Permit?",
      },

      WhatisStudyPerSubHead: {
        type: String,
        default: "A study permit grants you the authorization to stay in Canada for educational purposes. It contains essential information about you, including:",
      },
      wspLi1: {
        type: String,
        default: "The reason for your presence in Canada",
      },
      wspLi2: {
        type: String,
        default: "The level of your study program",
      },
      wspLi3: {
        type: String,
        default: "The duration of your study program",
      },
      wspLi4: {
        type: String,
        default: "Whether you can work on- or off-campus during your studies, along with any associated restrictions.",
      },
      WhatisStudyPerLastPara: {
        type: String,
        default: "Most study permit applications submitted through the SDS are processed within 20 calendar days, although some may take longer.",
      },
//
    BenifitHeading: {
        type: String,
        default: "How to Benefit from Faster Processing:",
      },
      BenifitSubHead: {
        type: String,
        default: "To take advantage of quicker processing times, students must:",
      },
      BenLi1: {
        type: String,
        default: "Provide Biometrics: If required, submit your biometrics promptly.",
      },
      BenLi2: {
        type: String,
        default: "Meet Eligibility Requirements: Ensure you meet all eligibility criteria.",
      },
      BenNote: {
        type: String,
        default: "Note: A study permit is not a visa and cannot be used for travel to or entry into Canada. Depending on your situation, you may also need to obtain a visitor visa or an electronic travel authorization (eTA).",
      },
      
    //

      EligCritTableHeading: {
      type: String,
      default: "Eligibility Criteria for the Student Direct Stream (SDS)",
    },
    EligCritTableSubHead: {
        type: String,
        default: "Legal residents of the following 14 countries may qualify for faster study permit processing through the SDS:",
      },
    emh1: {
      type: String,
      default: "Eligible Countries",
    },
    e2: {
      type: String,
      default:
        "Antigua and Barbuda",
    },
    e3: {
        type: String,
        default:
          "Brazil",
      },
      e4: {
        type: String,
        default:
          "China",
      },
      e5: {
        type: String,
        default: "Colombia",
      },
      e6: {
        type: String,
        default: "Costa Rica",
      },
      e7: {
        type: String,
        default: "India",
      },
      e8: {
        type: String,
        default: "Morocco",
      },
      e9: {
        type: String,
        default: "Pakistan",
      },
      e10: {
        type: String,
        default: "Peru",
      },
      e11: {
        type: String,
        default: "St. Vincent and the Grenadines",
      },
      e12: {
        type: String,
        default: "Senegal",
      },
      e13: {
        type: String,
        default: "The Philippines",
      },
      e14: {
        type: String,
        default: "Trinidad and Tobago",
      },
      e15: {
        type: String,
        default: "Vietnam",
      },
  //
  toBeEligibUnderTabHeading1: {
    type: String,
    default: "To be eligible, you must:",
  },
  toBeEligibUnderTablist1: {
    type: String,
    default: "Hold a provincial attestation letter (PAL) from the province or territory where you plan to study.",
  },
  toBeEligibUnderTablist2: {
    type: String,
    default: "Possess an acceptance letter from a post-secondary designated learning institution (DLI).",
  },
  toBeEligibUnderTablist3: {
    type: String,
    default: "Reside outside of Canada when applying.",
  },
  toBeEligibUnderTablist4: {
    type: String,
    default: "Provide proof of payment for first-year tuition.",
  },
  toBeEligibUnderTablist5: {
    type: String,
    default: "Hold a Guaranteed Investment Certificate (GIC) of C$20,635.",
  },
  toBeEligibUnderTablist6: {
    type: String,
    default: "Submit your most recent secondary or post-secondary transcripts.",
  },
  toBeEligibUnderTablist7: {
    type: String,
    default: "Demonstrate sufficient language proficiency through a recognized language test result (see Language Test Results below).",
  },

  //
  toBeEligibUnderTabHeading2: {
    type: String,
    default: "Depending on your study location and personal circumstances, you may need to:",
  },

  toBeEligibUnderTablist8: {
    type: String,
    default: "Obtain a Certificat d’acceptation du Québec (CAQ) if planning to study in Quebec.",
  },
  toBeEligibUnderTablist9: {
    type: String,
    default: "Complete a medical exam (if applicable) before applying.",
  },
  toBeEligibUnderTablist10: {
    type: String,
    default: "Obtain a police certificate (if applicable).",
  },
  toBeEligibUnderLastPara: {
    type: String,
    default: "Additional documentation may be necessary, potentially extending processing times. For specific instructions, refer to your country’s visa office guidelines by selecting your country of residence from the provided menu.",
  },
  ////



  HowtoApplyHeading: {
    type: String,
    default: "How to Apply for Student Direct Stream (SDS)",
  },
  HowtoApplyAppProcHead: {
    type: String,
    default: "Application Process:",
  },
  HowtoApplyAppProcPara: {
    type: String,
    default: "If you’re considering applying for a study permit through the Student Direct Stream (SDS), here’s what you’ll need:",
  },
  HowtoApplyAppProcStep1: {
    type: String,
    default: "Provincial Attestation Letters (PAL)",
  },
  HowtoApplyAppProcStep1Li1: {
    type: String,
    default: "As of January 22, 2024, most students planning to study in Canada must provide a Provincial Attestation Letter (PAL) specific to their chosen study location.",
  },
  HowtoApplyAppProcStep1Li2: {
    type: String,
    default: "A PAL serves as an electronic certification, confirming a student’s eligibility to apply for a study permit within a province’s quota.",
  },
  HowtoApplyAppProcStep1Note: {
    type: String,
    default: "Note: Master’s degree, doctoral degree, and K-12 students are exempt from the PAL requirement.",
  },
//
HowtoApplyAppProcStep2: {
    type: String,
    default: "Proof of First-Year Tuition Payment",
  },
  HowtoApplyAppProcSubHStep2: {
    type: String,
    default: "Students can demonstrate full payment of their first year’s tuition by including one of the following documents with their application:",
  },
  HowtoApplyAppProcStep2Li1: {
    type: String,
    default: "A receipt from the Designated Learning Institution (DLI)",
  },
  HowtoApplyAppProcStep2Li2: {
    type: String,
    default: "An official letter from the DLI confirming payment",
  },
  HowtoApplyAppProcStep2Li3: {
    type: String,
    default: "A bank receipt indicating funds transferred to the DLI",
  },
  HowtoApplyAppProcStep2Li4: {
    type: String,
    default: "Proof of funds in a repository account at the DLI for future tuition payments",
  },
  //
  HowtoApplyAppProcStep3Tab: {
    type: String,
    default: "Proof of Funds Chart",
  },
  HowtoApplyAppProcStep3TabSubH: {
    type: String,
    default: "Scenarios with estimated one year tuition fees of 20,000 & minimum travel cost per person of $2000 CAD based on the new cost of living",
  },

///


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

///

HowtoApplyAppProcStep4: {
    type: String,
    default: "Medical Exam",
  },
  HowtoApplyAppProcSubHStep4: {
    type: String,
    default: "You may need to undergo a medical exam conducted by an Immigration, Refugees and Citizenship Canada (IRCC)-approved doctor if:",
  },
  HowtoApplyAppProcStep4Li1: {
    type: String,
    default: "You have lived or traveled in certain countries or territories for six months or longer in the year before coming to Canada.",
  },
  HowtoApplyAppProcStep4Li2: {
    type: String,
    default: "You plan to study or work in fields related to health, primary or secondary education, child care, or elder care.",
  },


  ///

  HowtoApplyAppProcStep5: {
    type: String,
    default: "Police Certificate",
  },
  HowtoApplyAppProcSubHStep5: {
    type: String,
    default: "To determine whether you need to submit a police certificate, select your country of residence from the menu and refer to the specific visa office instructions.",
  },

///

HowtoApplyAppProcStep6: {
    type: String,
    default: "Language Test Results",
  },
  HowtoApplyAppProcSubHStep6: {
    type: String,
    default: "Include your language test results demonstrating proficiency in English or French. As of August 10, 2023, SDS applicants can submit English proficiency test results from four new providers:",
  },
  HowtoApplyAppProcStep6Li1: {
    type: String,
    default: "Canadian Academic English Language (CAEL)",
  },
  HowtoApplyAppProcStep6Li2: {
    type: String,
    default: "Canadian English Language Proficiency Index Program (CELPIP General)",
  },

  HowtoApplyAppProcStep6Li3: {
    type: String,
    default: "Pearson Test of English – Academic (PTE Academic)",
  },
  HowtoApplyAppProcStep6Li4: {
    type: String,
    default: "Test of English as a Foreign Language (TOEFL iBT)",
  },

  ///

  HowtoApplyAppProc2TabHead: {
    type: String,
    default: "Minimum language test scores required:",
  },

  HowtoApplyAppProc2TabHead1: {
    type: String,
    default: "English Language Test",
  },
  HowtoApplyAppProc2TabHead1Point1: {
    type: String,
    default: "IELTS Academic (Grade 12)",
  },
  HowtoApplyAppProc2TabHead1Point2: {
    type: String,
    default: "IELTS Academic (Graduation)",
  },
  HowtoApplyAppProc2TabHead1Point3: {
    type: String,
    default: "CELPIP General",
  },
  HowtoApplyAppProc2TabHead1Point4: {
    type: String,
    default: "PTE Academic",
  },  HowtoApplyAppProc2TabHead1Point5: {
    type: String,
    default: "TOEFL iBT",
  },
  HowtoApplyAppProc2TabHead1Point6: {
    type: String,
    default: "CAEL",
  },
  HowtoApplyAppProc2TabHead1Point7: {
    type: String,
    default: "NIVEAUX DE compétence linguistique canadiens",
  },
  //
  HowtoApplyAppProc2TabHead2: {
    type: String,
    default: "Minimum Score Required for SDS",
  },

  HowtoApplyAppProc2TabHead2Point1: {
    type: String,
    default: "Overall 6.0 - 5.5 acceptable in one of the modules",
  },
  HowtoApplyAppProc2TabHead2Point2: {
    type: String,
    default: "Overall 6.5 - no less than 6 in any of the modules",
  },
  HowtoApplyAppProc2TabHead2Point3: {
    type: String,
    default: "7 in each module",
  },
  HowtoApplyAppProc2TabHead2Point4: {
    type: String,
    default: "60",
  },
  HowtoApplyAppProc2TabHead2Point5: {
    type: String,
    default: "83",
  },
  HowtoApplyAppProc2TabHead2Point6: {
    type: String,
    default: "60",
  },
  HowtoApplyAppProc2TabHead2Point7: {
    type: String,
    default: "score of at least 7 for French*",
    
  },


  ///
  BringingSpouHeading: {
    type: String,
    default: "Bringing Spouses, Common-Law Partners, and Dependent Children",
  },
  BringingSpouSubHead1: {
    type: String,
    default: "If your spouse, common-law partner, or dependent children plan to accompany you to Canada, they may also qualify for faster processing of the following:",
  },

  BringingSpouLi1: {
    type: String,
    default: "Visitor Visa",
  },
  BringingSpouLi2: {
    type: String,
    default: "Work Permit",
  },
  BringingSpouLi3: {
    type: String,
    default: "Study Permit",
  },

  BringingSpouPara1: {
    type: String,
    default: "To benefit from expedited processing, their completed applications must be submitted alongside yours. When applying, select the option indicating that you have family members accompanying you to Canada.",
  },
//
  intenationalHeading: {
    type: String,
    default: "I am an international student. Is my spouse, common law partner, eligible for an Open Work Permit?",
  },
  intenationalPara: {
    type: String,
    default: "As of March 19, 2024, to be eligible to apply for a Spousal Open Work Permit as an international student, you must be enrolled in one of the following programs:",
  },




  graduateProgHeading:{
    type: String,
    default: "Graduate Programs:",
  },
  graduateProgPara:{
    type: String,
    default: "Graduate programs encompass master’s and doctorate degrees granted by universities or polytechnic institutions.",
  },


  ProfessionalDegHeading:{
    type: String,
    default: "Professional Degree Programs:",
  },
  ProfessionalDegSubHead:{
    type: String,
    default: "Professional degree programs include the following:",
  },

  ProfessionalDegLi1:{
    type: String,
    default: "Doctor of Dental Surgery (DDS, DMD)",
  },
  ProfessionalDegLi2:{
    type: String,
    default: "Bachelor of Law or Juris Doctor (LLB, JD, BCL)",
  },
  ProfessionalDegLi3:{
    type: String,
    default: "Doctor of Medicine (MD)",
  },
  ProfessionalDegLi4:{
    type: String,
    default: "Doctor of Optometry (OD)",
  },
  ProfessionalDegLi5:{
    type: String,
    default: "Pharmacy (PharmD, BS, BSc, BPharm)",
  },
  ProfessionalDegLi6:{
    type: String,
    default: "Doctor of Veterinary Medicine (DVM)",
  },
  ProfessionalDegLi7:{
    type: String,
    default: "Bachelor of Science in Nursing (BScN, BSN, BNSc)",
  },
  ProfessionalDegLi8:{
    type: String,
    default: "Bachelor of Education (BEd)",
  },
  ProfessionalDegLi9:{
    type: String,
    default: "Bachelor of Engineering (BEng, BE, BASc) (only)",
  },

  ///

  WhoIsNotHeading:{
    type: String,
    default: "Who Isn’t Eligible for the Student Direct Stream (SDS)?",
  },

  WhoIsNotSubHead:{
    type: String,
    default: "According to the Government of Canada:",
  },
  WhoIsNotSubLi1:{
    type: String,
    default: "If you reside anywhere other than the 14 countries listed above (even if you’re a citizen of those countries), you must apply through the regular study permit process.",
  },
  WhoIsNotSubLi2:{
    type: String,
    default: "If you live in a different country (even if you’re a citizen of the 14 eligible countries) or don’t meet the eligibility criteria for faster processing, you may still be eligible for a study permit through the standard application process.",
  },
  ///
  SubmAppHeading:{
    type: String,
    default: "Submitting Your Application",
  },

  SubmAppSubHead:{
    type: String,
    default: "Students applying through the Student Direct Stream can only apply online; there’s no paper application process. To complete your application, follow these steps:",
  },

  SubmAppLiHead:{
    type: String,
    default: "To complete your application, follow these steps:",
  },
  SubmAppLi1:{
    type: String,
    default: "Review the instruction guide to fill out the forms.",
  },
  SubmAppLi2:{
    type: String,
    default: "Create electronic copies of your documents.",
  },
  SubmAppLi3:{
    type: String,
    default: "Pay the application fee using a credit or debit card.",
  },

  ///
  PayBioHeading:{
    type: String,
    default: "Paying for Your Biometrics",
  },

  PayBioLi1:{
    type: String,
    default: "Most students need to provide biometrics and should pay the fee along with their online application.",
  },
  PayBioLi2:{
    type: String,
    default: "If you require assistance with biometrics or passport submission, visit a visa application centre (VAC).",
  },
  ///


 AfteApplyHeading:{
    type: String,
    default: "After You Apply",
  },

  AfteApplyLi1:{
    type: String,
    default: "Book an appointment to provide your biometrics after submitting your study permit application through the Student Direct Stream.",
  },
  AfteApplyLi2:{
    type: String,
    default: "You’ll receive an instruction letter detailing where and how to provide your biometrics within 30 days. Bring this letter and your valid passport to your appointment",
  },

  AfteApplyLi3:{
    type: String,
    default: "If you didn’t pay the biometrics fee during application, you’ll receive a reminder letter. The visa office won’t process your application until you’ve provided biometrics.",
  },

  ////


  ProcessingTimeHeading:{
    type: String,
    default: "Processing Time",
  },

  ProcessingTimeLi1:{
    type: String,
    default: "The visa office typically processes most applications within 20 calendar days after receiving biometrics from eligible applicants.",
  },
  ProcessingTimeLi2:{
    type: String,
    default: "If your application doesn’t meet the eligibility criteria for the Student Direct Stream, it will be reviewed as a regular study permit application, without faster processing.",
  },
///
AppRefHeading:{
    type: String,
    default: "Application Refusal",
  },
  AppRefPara:{
    type: String,
    default: "If your application is refused, you’ll receive a letter explaining the decision. For any questions, reach out directly to the visa office.",
  },
  
  //
    RefusalHeading: {
      type: String,
      default: "Reasons for Refusal",
    },
    RefusalSubHeading: {
        type: String,
        default: "Insufficient Identity or travel history documents",
      },
    r1: {
      type: String,
      default:
        "Not having an intention of coming back to your home country",
    },
    r2: {
      type: String,
      default:
        "You failed to submit a Letter of Acceptance",
    },
    r3: {
      type: String,
      default:
        "Lack of academic performance & low language test scores",
    },
    r4: {
        type: String,
        default:
          "Financially unstable",
      },
  
      r5: {
        type: String,
        default:
          "Unclear purpose of your visit",
      },
      r6: {
        type: String,
        default:
          "Biometric Rejections",
      },

      r7: {
        type: String,
        default:
          "Family Relations in Canada",
      },

      r8: {
        type: String,
        default:
          "Hiring an Unauthorized Immigration Consultant",
      },

      r9: {
        type: String,
        default:
          "Choice of study program that does not match with past qualifications and experience",
      },

    //
  
    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure ?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "Still not sure? If you have faced a refusal for any of the reasons mentioned above, don't worry. With over 10 years of experience, we specialize in handling previously refused cases. We have successfully secured approval for students who have had multiple refusals, long gaps in education, and are of mature age. We achieve this by tailoring our approach to your specific case and addressing each concern raised by the officer in previous refusals. Using case law, we identify similar cases with positive outcomes and apply them as precedents in the cases we handle. This is why we have a high success rate, with over 90% approval in such cases. ",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
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
        " What is SDS Student Direct Stream (SDS)? ",
    },
    qa1: {
      type: String,
      default:
        "SDS, or Student Direct Stream, is a Canadian government program that expedites the processing of study permit applications for certain international students. Most SDS applications are processed within 20 days. ",
    },
    q2: {
      type: String,
      default:
        " Which is better: SDS or non-SDS?  ",
    },
    qa2: {
      type: String,
      default:
        " SDS applicants typically have a higher approval rate (70%) compared to non-SDS applicants (40%). Additionally, SDS applications are processed much faster. ",
    },

    q3: {
      type: String,
      default:
        "How much GIC do I need to qualify for SDS in 2024?  ",
    },
    qa3: {
      type: String,
      default:
        "The required Guaranteed Investment Certificate (GIC) amount for SDS has increased to CAD $20,635 as of January 2024. ",
    },
    q4: {
      type: String,
      default:
        " What is the difference between SDS and non-SDS student visas? ",
    },
    qa4: {
      type: String,
      default:
        " SDS is a streamlined program with eligibility criteria and processing timelines tailored for specific countries. Non-SDS visas may require additional documentation and processing times, but they are available to international students from all countries.  ",
    },

    q5: {
      type: String,
      default:
        " How many hours can I work while studying in Canada?",
    },
    qa5: {
      type: String,
      default:
        " Generally, international students can work up to 20 hours per week while studying. However, a temporary waiver allows students to work more than 20 hours per week until April 30, 2024. For more information on this waiver, please contact our office at 604-503-3734.",
     },
    q6: {
      type: String,
      default:
        " What is the SDS visa application fee for Canada?",
    },
    qa6: {
      type: String,
      default:
        " The application fee for SDS is CAD $150, and the biometrics fee is CAD $85.",
    },

    q7: {
      type: String,
      default:
        " Can I change my college once I enter Canada?  ",
    },
    qa7: {
      type: String,
      default:
        " Yes, you can change your college once you have arrived in Canada. However, it is crucial to update Immigration, Refugees, and Citizenship Canada (IRCC) with your new DLI (Designated Learning Institution).  ",
    },

    q8: {
      type: String,
      default:
        " I am an international student. Is my spouse, common law partner eligible for an Open Work Permit?",
    },
    qa8: {
      type: String,
      default:
        "  As of March 19, 2024, to be eligible to apply for a Spousal Open Work Permit as an international student, you must be enrolled in one of the following programs: ",
    },
    
    q9: {
      type: String,
      default:
        "How long is my Post-Graduate Work Permit (PGWP) valid? ",
    },
    qa9: {
      type: String,
      default:
        " The duration of your PGWP depends on the length of your study program. For one-year programs, you will receive a one-year PGWP. For two-year programs, you will receive a three-year PGWP. ",
    },
    q10: {
      type: String,
      default:
        "Can I apply for a PGWP extension? ",
    },
    qa10: {
      type: String,
      default:
        " A. PGWPs are typically issued for one-time use. However, in rare cases, IRCC may grant an extension under specific circumstances. To determine your eligibility for an extension, please contact our office at 604-503-3734.",
    },
    q11: {
      type: String,
      default:
        " My PGWP is expiring soon. What are my options?",
    },
    qa11: {
      type: String,
      default:
        "There are three options available to you if your PGWP is expiring soon: <ol> <li>1. Request your current employer to sponsor you with an LMIA (Labour Market Impact Assessment).</li> <li>2. Apply for another study permit (please note that you will not qualify for another PGWP as you can   only apply for it once in a lifetime; however, this may provide you with options to explore other opportunities while remaining in Canada).</li> <li>3. Apply for a Temporary Resident Visa (TRV). This may offer you options to explore other opportunities while staying in Canada.</li> </ol> ",
    },
    q12: {
      type: String,
      default:
        "I am failing my courses. What should I do? ",
    },
    qa12: {
      type: String,
      default:
        " Life happens, and there are various reasons why international students may struggle with their studies. However, maintaining your student status requires meeting the conditions of your study permit. We understand that choosing the wrong course can be a factor in academic struggles. We can help you find alternative courses at different colleges that might be a better fit for your academic strengths and interests. We are connected with over 125 colleges and universities, so we can assist you in finding a suitable program to help you succeed. Please contact us at 604-503-3734 if you are facing academic challenges.",
    },
    q13: {
      type: String,
      default:
        "I have been charged with plagiarism. What should I do? ",
    },
    qa13: {
      type: String,
      default:
        "Plagiarism is a serious offense, and it may result in suspension from your college. If you have been accused of plagiarism, please contact us immediately. We can help you understand the situation and explore options for resolving it. We can also assist you in finding alternative academic pathways that align with your career aspirations. ",
    },
    q14: {
      type: String,
      default:
        " I have a low GPA and have been suspended from my college. What should I do?",
    },
    qa14: {
      type: String,
      default:
        " As an international student, academic struggles can impact your visa status. If you have been suspended due to a low GPA, we can assist you in exploring alternative educational options that fit your academic profile and career goals. We can help you find suitable courses at different colleges that align with your strengths and interests. Please contact us at 604-503-3734 for assistance.",
    },
    q15: {
      type: String,
      default:
        " ",
    },
    qa15: {
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

let sdsSection = mongoose.model(
  "Student Direct Stream (SDS) Program",
  sdsSchema
);
module.exports = sdsSection;
