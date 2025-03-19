let mongoose = require("mongoose");
let cbySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "Open Work Permit for Spouse or Common-law Partner of an International Student",
    },
    description1: {
      type: String,
      default:
        "Canada allows spouses and common-law partners to come to Canada and accompany their partners who are international students. Over the years, IRCC has made drastic changes to this program, allowing only certain international students to invite their partners. It is crucial to understand the program eligibility before initiating your immigration process to avoid any long period of separation between you and your partner.",
    },
    description2: {
        type: String,
        default:
          "Both the applicant and their spouse must fulfill their respective sets of requirements to reunite and work in Canada.",
      },
      BenifitHeading: {
        type: String,
        default:
          "Benefits of Open Work Permit for Spouse or Common-law Partner of an International Student",
      },
      b1: {
        type: String,
        default:
          "It enables your spouse or common-law partner to accompany you to Canada and reside with you.",
      },
      b2: {
        type: String,
        default:
          "It permits your spouse or common-law partner to work, alleviating financial strain on you while you are in school full-time.",
      },
      b3: {
        type: String,
        default:
          "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience and enhance their skills.",
      },
      b4: {
        type: String,
        default:
          "Through the Canadian work experience gained, they may become eligible for permanent residency programs.",
      },
      b5: {
        type: String,
        default:
          "They have the flexibility to work for any employer and in any position.",
      },
      b6: {
        type: String,
        default:
          "They can also establish their own business if desired.",
      },
      b7: {
        type: String,
        default:
          "Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.",
      },
      b8: {
        type: String,
        default:
          "It also offers a chance to immerse oneself in Canadian society.",
      },
  

   
    eligCritHeading: {
      type: String,
      default: "Eligibility Criteria for Open Work Permit for Spouse or Common-law Partner of an International Student",
    },
    eligCritSubHead: {
        type: String,
        default: "The requirements for the principal applicant (international student) differ for both the categories (Before March 19, 2024, applicants and After March 19, 2024 applicants). However, the requirements are the same for the accompanying spouse or common-law partner.",
      },
      eligReqHeading: {
        type: String,
        default: "Eligibility Requirements of the International Student:",
      },
      eligApplSubmHead1: {
        type: String,
        default: "Applications Submitted Before March 19, 2024",
      },
      eligApplSubmPara: {
        type: String,
        default: "For the international student to be eligible to apply for their partner under administrative code C42, they must meet all of the following requirements:",
      },
    as1: {
      type: String,
      default: "Proof that the international student is attending a designated learning institution (DLI)",
    },

    as2: {
      type: String,
      default: "The international student must be actively studying full-time in a post-graduation work permit-eligible program at one of the following:",
    },

    as2Sub1: {
      type: String,
      default: "A Canadian public post-secondary institution (college, trade/technical school, university, or CEGEP in Quebec).",
    },
    as2Sub2: {
        type: String,
        default: "A private post-secondary institution in Quebec operating under the same rules as public institutions.",
      },
      as2Sub3: {
        type: String,
        default: "A private or public secondary or post-secondary institution in Quebec offering qualifying programs of 900 hours or longer leading to a Diploma of Vocational Studies (DVS) or an Attestation of Vocational Specialization (AVS).",
      },
      as2Sub4: {
        type: String,
        default: "A Canadian private institution authorized by provincial statute to confer degrees (e.g., bachelor’s, master’s, or doctorate) if enrolled in a degree program authorized by the province.",
      },

      InternStuNotEligHeading: {
        type: String,
        default: "The international student is not eligible to apply if:",
      }, 
      isne1: {
        type: String,
        default: "Not enrolled while residing in Canada.",
      }, 
      isne2: {
        type: String,
        default: "Enrolled in part-time studies.",
      }, 
      isne3: {
        type: String,
        default: "Enrollment in a private post-secondary program or institution not meeting specified eligibility criteria.",
      }, 

      eligApplSubmHeading2: {
        type: String,
        default: "How to apply for Outland Sponsorship in Canada?",
      }, 
      eligApplSubmPara2: {
        type: String,
        default: "For the international graduate to be eligible to apply for their partner under administrative code C42, they must meet all of the following requirements:",
      }, 

      as31: {
        type: String,
        default: "hold a valid study permit AND must be physically residing in Canada while studying",
      }, 
      as3Oor: {
        type: String,
        default: "or",
      }, 
      as32: {
        type: String,
        default: "be approved for a study permit, if applying as a family group outside of Canada AND provide proof that they plan to physically reside in Canada while studying",
      },
      as4: {
        type: String,
        default: "be studying on a full-time basis in a graduate program (master’s and doctorate) in a university or polytechnic institution, or a professional degree-granting program in a university (e.g., medicine, dentistry, law, etc.)",
      },  
      GradProgHeading: {
        type: String,
        default: "<strong>Graduate programs</strong> are defined as follows:",
      }, 
      GradProgPara: {
        type: String,
        default: "master’s and doctorate degrees granted by universities or polytechnic institutions",
      }, 

      ProffdegrProgHeading: {
        type: String,
        default: "<strong>Professional degree programs</strong> are identified under the following:",
      }, 
      pdp1: {
        type: String,
        default: "Doctor of Dental Surgery (DDS, DMD)",
      },
      pdp2: {
        type: String,
        default: "Bachelor of Law or Juris Doctor (LLB, JD, BCL)",
      },
      pdp3: {
        type: String,
        default: "Doctor of Medicine (MD)",
      },
      pdp4: {
        type: String,
        default: "Doctor of Optometry (OD)",
      },
      
      pdp5: {
        type: String,
        default: "Pharmacy (PharmD, BS, BSc, BPharm)",
      },
      pdp6: {
        type: String,
        default: "Doctor of Veterinary Medicine (DVM)",
      },
      pdp7: {
        type: String,
        default: "Bachelor of Science in Nursing (BScN, BSN, BNSc)",
      },
      pdp8: {
        type: String,
        default: "Bachelor of Education (BEd)",
      },
      pdp9: {
        type: String,
        default: "Bachelor of Engineering (BEng, BE, BASc) only",
      },
      //
      WhenToApplyHeading: {
      type: String,
      default: "When to apply for Open Work Permit for Spouse or Common-law Partner of an International Student?",
    },
    wa1: {
        type: String,
        default: "You can choose to apply together for a Study Permit and Spousal Open Work Permit before traveling to Canada. If the applications are approved, study and work permits will be issued upon arrival in Canada, allowing the spouse to begin working immediately.",
      },
      wa2: {
        type: String,
        default: "Foreign nationals exempt from the Temporary Resident Visa (TRV) requirement can apply for the Spousal Open Work Permit (SOWP) upon arrival in Canada, with immediate issuance upon approval by CBSA officer.",
      },
      wa3: {
        type: String,
        default: "Some spouses/common-law partners may enter Canada as visitors and apply for the work permit later. In such cases, the application can be submitted at any time, ensuring the visitor status remains valid during the application process.",
      },

    HowToApply: {
        type: String,
        default: "How to Apply for Open Work Permit for Spouse or Common-law Partner of an International Student",
      },

      ha1: {
        type: String,
        default: "Gather documents to prove the above-mentioned eligibility criteria for the international student.",
      },
      ha2: {
        type: String,
        default: "Gather documents to prove that your relationship is genuine.",
      },
      ha3: {
        type: String,
        default: "You might be required to get a medical exam and police clearance certificates if applying from outside Canada.",
      },
      ha4: {
        type: String,
        default: "Submit a complete application to IRCC.",
      },
      ha5: {
        type: String,
        default: "After receiving the Biometric Collection Instruction letter, make an appointment for biometrics within 30 days of receiving the letter.",
      },
      ha6: {
        type: String,
        default: "Wait for IRCC to process your application.",
      },

      RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusal",
    },
    
    r1: {
        type: String,
        default: "Lack of documentation verifying the enrollment status of the international student.",
      },
      r2: {
        type: String,
        default: "Inadequate evidence demonstrating the genuineness of the marriage.",
      },
      r3: {
        type: String,
        default: "The principal applicant's study permit is nearing expiration, and there has been no application filed to extend their stay.",
      },

   NeedAssisHeading: {
        type: String,
        default: "Need Assistance?",
      },
      NeedAssisPara: {
        type: String,
        default: "If you need help with your application or have questions, feel free to contact us. Our team at Brightlight Immigration is here to assist you every step of the way.",
      },    

      InterStuNotEligHeading: {
        type: String,
        default: "  The international student is not eligible to apply if:",
      },
      isneLi1: {
        type: String,
        default: "Not enrolled while residing in Canada.",
      },
      isneLi2: {
        type: String,
        default: "Enrolled in part-time studies.",
      },
      isneLi3: {
        type: String,
        default: "Not enrolled in a private post-secondary program/institution other than those listed",
      },


      EligReqAcHeading: {
        type: String,
        default: "  Eligibility Requirements for Accompanying Spouse or Common-law Partner",
      },

      EligReqAcPara: {
        type: String,
        default: "  Your family member must meet following requirements:",
      },

      EligReqAcli1: {
        type: String,
        default: "<strong> General Eligibility:</strong> The applicant must meet general work permit criteria, including police and medical clearances, and not be inadmissible to Canada. ",
      },
      EligReqAcli2: {
        type: String,
        default: "<strong> Relationship:</strong> A genuine relationship between the applicant and the study permit holder is required.",
        
      },
      EligReqAcli3: {
        type: String,
        default: "<strong> Proof of Spousal Relationship:</strong> Evidence must demonstrate the applicant's genuine status as the spouse or common-law partner of a valid study permit holder. ",
      },
      EligReqAcli4: {
        type: String,
        default: "<strong> Additional Documentation:</strong> Supplementary proof is necessary to satisfy IRCC that the relationship was not primarily for status acquisition or is not genuine.",
      },
      EligReqAcli5: {
        type: String,
        default: " <strong> Applicants in Canada:</strong> They must possess valid temporary resident status, have applied for an extension before its expiry (maintained status), or be eligible for restoration of status as a visitor, worker, or student. They must also be eligible to apply for a work permit from within Canada. ",
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
    timestamps: true,
  }
);

let cbySection = mongoose.model(
  "cby-open-work-permit-spouse Page",
  cbySchema
);
module.exports =cbySection;
