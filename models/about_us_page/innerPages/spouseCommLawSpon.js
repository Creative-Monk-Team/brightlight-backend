let mongoose = require("mongoose");
let spouseCommLawSponSchema = mongoose.Schema(
  {
    spouseCommLawSponHeading: {
      type: String,
      default: "Spouse and Common-Law Partner Sponsorship Program",
    },
    spouseCommLawSponPara1: {
      type: String,
      default:
        "The Canadian government understands the importance of bringing loved ones together, and its Family reunification and sponsorship program plays a vital role in reuniting spouses, and common-law partners with their families in Canada.",
    },
    spouseCommLawSponPara2: {
        type: String,
        default:
          "As a Canadian citizen or permanent resident , you may be eligible to sponsor your spouse or common-law partner to become a permanent resident and build a life together in this vibrant nation. Whether you've met your partner abroad or have been separated by distance, Canada's Family Class sponsorship program offers a pathway to reunite with your loved ones and create a fulfilling future together. If you are eligible to sponsor your spouse or common-law partner, you will be responsible for their financial well-being for quite some time after they become permanent residents. This means that you will need to be able to provide them with basic needs. You will also need to be able to show that you can support yourself and your family financially.",
      },
  
//


 PathwaysHeading: {
    type: String,
    default: "3 main pathways for sponsoring a Spouse or Common-law Partner:",
  },
  
p1: {
  type: String,
  default: "It enables your spouse or common-law partner to accompany you to Canada and reside with you.",
},
p2: {
  type: String,
  default: "It permits your spouse or common-law partner to work, alleviating financial strain on you while you are in school full-time.",
},
p3: {
    type: String,
    default: "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience and enhance their skills.",
  },
  p4: {
    type: String,
    default: "Through the Canadian work experience gained, they may become eligible for permanent residency programs.",
  },
  p5: {
    type: String,
    default: "They have the flexibility to work for any employer and in any position.",
  },
  p6: {
    type: String,
    default: "They can also establish their own business if desired.",
  },
  p7: {
    type: String,
    default: "Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.",
  },
  p8: {
    type: String,
    default: "It also offers a chance to immerse oneself in Canadian society.",
  },
///




EligibilityHeading: {
    type: String,
    default: "Eligibility criteria for sponsoring your Spouse or Common-law Partner for Permanent Residence in Canada:",
  },

e1: {
  type: String,
  default: "You must be a Canadian citizen or permanent resident.",
},
e2: {
  type: String,
  default: "You must show that you have the financial means to support your spouse or partner financially after they arrive in Canada.",
},
e3: {
    type: String,
    default: "You must provide evidence to prove that your relationship with your spouse or partner is genuine and that it meets the definition of a spousal or common-law partnership under Canadian immigration law.",
  },



  
  /////
  HowApplyHeading: {
      type: String,
      default: "How to apply to sponsoring your Spouse or Common-law Partner?",
    },

      ha1:{
        type: String,
        default: "You will need to submit a comprehensive application package to IRCC, including marriage certificates, proof of cohabitation (such as lease agreements, joint bank statements, or utility bills), photographs of you and your spouse or partner together, letters from friends and family testifying to your relationship, etc.",
      },
      ha2:{
        type: String,
        default: "IRCC will review your application to ensure you meet all eligibility requirements and assess the genuineness of your relationship.",
      },
      ha3:{
        type: String,
        default: "You might be required to get a medical exam and police clearance certificates if applying from outside Canada.",
      },
      ha4:{
        type: String,
        default: "If your application is approved, your spouse or partner will receive an invitation to apply for permanent residence. Once they complete the application and meet all requirements, they will be granted permanent residency status.",
      },
     
//
     RefusalHeading: {
       type: String,
       default: "Common reasons for refusals of sponsoring a Spouse or Common-law Partner",
  },

  RefusalSubHead: {
    type: String,
    default: "Missing or incomplete documentation.",
},
r1: {
    type: String,
    default: "IRCC is highly cautious against marriage of convenience arrangements, where a relationship is entered into primarily for immigration purposes. If IRCC suspects that this is the case, your application will be refused.",
},

r2: {
    type: String,
    default: "You fail to show your ability to financially support yourself, your spouse, or your partner.",
},
r3: {
    type: String,
    default: "If either you or your sponsored person has a criminal record, they may be inadmissible to Canada.",
},

//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals.",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
      //
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
          " . What is the difference between a spouse and a common-law partner for sponsorship purposes? ",
      },
      qa1: {
        type: String,
        default:
          "A spouse is a person to whom you are legally married whereas a common-law partner is someone with whom you have lived in a conjugal relationship for at least one year (12 months). ",
      },
      q2: {
        type: String,
        default:
          " What are the financial requirements for sponsoring a spouse or common-law partner?  ",
      },
      qa2: {
        type: String,
        default:
          " You must be able to show that you have an annual household income of at least CAD 12,960. This is the minimum amount required to support yourself, your spouse or partner, and any dependents you may have.  ",
      },
  
      q3: {
        type: String,
        default:
          " How long does it take to sponsor a spouse or common-law partner? ",
      },
      qa3: {
        type: String,
        default:
          "The processing time for sponsorship applications can vary depending on the program and the complexity of the application. However, you should expect the process to take at least several months. As of 2024, it is taking an average of 12 months, 18 if you are in Quebec. ",
      },
      q4: {
        type: String,
        default:
          "  What are the benefits of sponsoring a spouse or common-law partner?",
      },
      qa4: {
        type: String,
        default:
          " Once your spouse or common-law partner is approved for sponsorship, they will be able to work and study in Canada permanently. They will also be eligible for health care, social services, and other benefits.  ",
      },
  
      q5: {
        type: String,
        default:
          " What are the risks of sponsoring a spouse or common-law partner?",
      },
      qa5: {
        type: String,
        default:
          " If your application is refused, your spouse or common-law partner will not be able to come to Canada. Additionally, you may be subject to a financial penalty. ",
       },
      q6: {
        type: String,
        default:
          " As a Sponsor can you leave Canada during inland spousal sponsorship?",
      },
      qa6: {
        type: String,
        default:
          " You can only Sponsor your spouse when you are inside Canada. Once the application is submitted it can take up to 12-18 months to be processed in the majority of the cases. Traveling abroad while an inland sponsorship application is being processed is permitted, however, it is not recommended.",
      },
  
      q7: {
        type: String,
        default:
          "  Who can get a 5-year ban on spousal sponsorship in Canada?  ",
      },
      qa7: {
        type: String,
        default:
          " If you are a person who became a permanent resident or a Canadian citizen after being sponsored as a spouse, common-law partner, or conjugal partner then you are barred/banned from sponsoring a spouse or partner within 5 years of becoming a permanent resident, even if you acquired citizenship during that period.   ",
      },
  
      q8: {
        type: String,
        default:
          "Which is better inland or outland spousal sponsorship? ",
      },
      qa8: {
        type: String,
        default:
          " This depends on your circumstances. Typically when applying for Inland sponsorship, travel outside of the country is not recommended. That's when an Outland sponsorship can give greater freedom of travel. This can be particularly advantageous for spouses with work or personal commitments that require periodic travel in and out of Canada.  ",
      },
      
      q9: {
        type: String,
        default:
          "What is a background check in spousal sponsorship in Canada? ",
      },
      qa9: {
        type: String,
        default:
          " Background checks are conducted for all applicants to ensure that they have not become inadmissible since they arrived in Canada. The Royal Canadian Mounted Police (RCMP) typically conducts screenings for criminal records on behalf of IRCC alongside PCC provided by the spousal applicant.",
      },
      q10: {
        type: String,
        default:
          " Can IRCC check social media for Spousal sponsorship Files?",
      },
      qa10: {
        type: String,
        default:
          " Yes, Citizenship and Immigration Canada (CIC), also known as Immigration, Refugees and Citizenship Canada (IRCC), can check social media while processing applications for permanent residency for spousal sponsorship.",
      },
      q11: {
        type: String,
        default:
          " Is there a minimum income for spousal sponsorship in Canada?",
      },
      qa11: {
        type: String,
        default:
          " In most cases, there isn't an income requirement to sponsor your spouse or partner. However, the sponsor should not be receiving social assistance except for disability. ",
      },
      q12: {
        type: String,
        default:
          " Can I stay in Canada while waiting for spousal sponsorship?",
      },
      qa12: {
        type: String,
        default:
          "You can stay in Canada while waiting for your permanent residence as long as you maintain legal status. In fact you are eligible to apply for an Open Work Permit while you wait for your Permanent Residency. Open Work Permit allows you to work in Canada with any employer. ",
      },
      q13: {
        type: String,
        default:
          " ",
      },
      qa13: {
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

let spouseCommLawSponSection = mongoose.model(
  "Spouse and Common-Law Partner Sponsorship Program",
  spouseCommLawSponSchema
);
module.exports = spouseCommLawSponSection;
