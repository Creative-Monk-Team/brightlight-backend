let mongoose = require("mongoose");
let bridgingOpenSchema = mongoose.Schema(
  {
    BridgingHeading: {
      type: String,
      default: "Bridging Open Work Permit",
    },
    BridgingPara: {
      type: String,
      default:
        "You can continue work in Canada while waiting for your permanent residency application (APR) to be approved. For this, you will have to apply for a bridging open work permit depending on the type of permanent residency application you have submitted. This type of work permit will “bridge” the gap between the expiry of your current work permit and the final decision on your permanent residency application.",
    },
   

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of Bridging Open Work Permit",
      },
 
      BenifitsList1: {
        type: String,
        default: "No interruption in your employment while you wait for the results of your permanent residence application.",
      }, 
      BenifitsList2: {
        type: String,
        default: "The condition that you can apply for bridging open work permit only if your work permit is set to expire within four months has been removed.",
      }, 
      BenifitsList3: {
        type: String,
        default: "Your work permit will remain valid even if your permanent residency application has been rejected or refused.",
      }, 
      BenifitsList4: {
        type: String,
        default: "You can apply even if you are on maintained status or eligible for restoration.",
      }, 
    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility criteria for Bridging Open Work Permit:",
          },

          EligibilitySubHead: {
            type: String,
            default: "To be eligible for a bridging open work permit (BOWP), you must:",
          },

          EligibilityList1: {
            type: String,
            default: "Currently be in Canada after being authorized to enter as a worker.",
          }, 
          EligibilityList2: {
            type: String,
            default: "Meet one of the following criteria at the time of submission:",
          }, 
          Eligibility2SubList1: {
            type: String,
            default: "Have valid temporary resident status and authorization to work as the holder of a valid work permit.",
          }, 
          Eligibility2SubList2: {
            type: String,
            default: "Have maintained status and authorization to work as a result of submitting an application to renew your work permit.",
          }, 
          Eligibility2SubList3: {
            type: String,
            default: "Be eligible to restore your temporary resident status.",
          }, 


          EligibilitySubHead2: {
            type: String,
            default: "Have submitted an APR as the principal applicant under one of the following classes or pilots:",
          },

          EligibilityList4: {
            type: String,
            default: "Federal skilled worker class (FSWC)",
          }, 
          EligibilityList5: {
            type: String,
            default: "Canadian experience class (CEC)",
          }, 
          EligibilityList6: {
            type: String,
            default: "Federal skilled trades class (FSTC)",
          }, 
          EligibilityList7: {
            type: String,
            default: "Caring for children class or caring for people with high medical needs class (before June 18, 2019)",
          }, 
          EligibilityList8: {
            type: String,
            default: "Provincial Nominee Program (PNP) for applicants for whom there are no employer restrictions on nominations",
          }, 
          EligibilityList9: {
            type: String,
            default: "Agri-Food Pilot (AFP)",
          }, 
          EligibilityList10: {
            type: String,
            default: "Quebec skilled worker class (QSWC) with valid Certificat de sélection du Québec (CSQ) at the time of PR application submission.",
          }, 
          EligibilityList11: {
            type: String,
            default: "Home Childcare Provider Pilot (HCCPP) or Home Support Worker Pilot (HSWP), who have received a positive eligibility decision (approval in principle) on their application for permanent residence after completing their qualifying work experience.",
          }, 
          EligibilitySubHead3: {
            type: String,
            default: "Have completed one of the following APR stages depending on their class:",
          },  
          EligibilityList12: {
            type: String,
            default: "Electronic application for permanent residence (e-APR) submitted under Express Entry has passed the Completeness Check. This applies to the following classes:",
          }, 
          Eligibility12SubList1: {
            type: String,
            default: "Federal skilled worker class (FSWC)",
          }, 
          Eligibility12SubList2: {
            type: String,
            default: "Canadian experience class (CEC)",
          }, 
          Eligibility12SubList3: {
            type: String,
            default: "Federal skilled trades class (FSTC)",
          }, 
          Eligibility12SubList4: {
            type: String,
            default: "Provincial Nominee Program (PNP), where the applicant is accepted through the provincial or territorial Express Entry stream.",
          }, 
          EligibilityList13: {
            type: String,
            default: "Application for permanent residence APR under the Quebec skilled worker class (QSWC) has passed the Completeness Check.",
          }, 
          EligibilityList14: {
            type: String,
            default: "Receipt of a positive eligibility assessment on their non-Express Entry application for permanent residence submitted by mail or online under one of the following classes or pilots:",
          }, 
          Eligibility14SubList1: {
            type: String,
            default: "Caring for children",
          }, 
          Eligibility14SubList2: {
            type: String,
            default: "Caring for people with high medical needs",
          }, 
          Eligibility14SubList3: {
            type: String,
            default: "Agri-Food Pilot (AFP)",
          }, 
          Eligibility14SubList4: {
            type: String,
            default: "PNP (where the applicant does not qualify for Express Entry)",
          }, 
          Eligibility14SubList5: {
            type: String,
            default: "Home Childcare Provider Pilot (HCCPP) or Home Support Worker Pilot (HSWP) after completing their qualifying work experience.",
          }, 
          EligibilityList: {
            type: String,
            default: "",
          }, 


        //
  

    HowApplyHeading: {
      type: String,
      default: "How to apply for Bridging Open Work Permit:",
    },

    ha1: {
      type: String,
      default:
        "After your permanent residency application has been completed and submitted, gather documents to prove above-mentioned eligibility criteria for bridging open work permit, suitable for your class of permanent residency application.",
    },
    ha2: {
      type: String,
      default:
        "Pay IRCC fees for open work permit holders. You will be required to pay separate restoration fee if applying in the restoration period.",
    },
    ha3: {
      type: String,
      default:
        "Submit complete application to IRCC.",
    },
    ha4: {
      type: String,
      default:
        "Wait for IRCC to process your application.",
    },

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
        type: String,
        default: "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
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
          "Can I work in any province on a bridging open work permit?  ",
      },
      qa1: {
        type: String,
        default:
          " Yes, you can. However, if you are a PNP applicant, then you are restricted to work in the nomination province only.",
      },
      q2: {
        type: String,
        default:
          "How long is a bridging open work permit valid for?   ",
      },
      qa2: {
        type: String,
        default:
          " The duration for bridging open work permit for Quebec skilled worker class (QSWC) and Provincial Nominee Program (PNP) is usually 24 months. The duration of the bridging open work permit for other permanent residency categories remains 12 months. It cannot be issued beyond the validity of your passport. ",
      },
  
      q3: {
        type: String,
        default:
          "Is it possible to change my closed work permit to bridging open work permit?  ",
      },
      qa3: {
        type: String,
        default:
          "Yes, if you have submitted your permanent residency application, you can change your closed work permit to bridging open work permit. ",
      },
      q4: {
        type: String,
        default:
          "When is the best time to apply for a bridging open work permit?  ",
      },
      qa4: {
        type: String,
        default:
          "  You can apply for a bridging open work permit as soon as you submit your Express Entry application and receive the Acknowledgement of Receipt letter in the message section of the IRCC MyPortal account. ",
      },
  
      q5: {
        type: String,
        default:
          "Can my spouse and dependent children apply for a bridging open work permit as well? ",
      },
      qa5: {
        type: String,
        default:
          "They can apply for an open work permit, provided you qualify as a foreign national who has applied for permanent residence through an economic immigration program. ",
       },
      q6: {
        type: String,
        default:
          " My permanent residency application got refused, will IRCC cancel my bridging open work permit?",
      },
      qa6: {
        type: String,
        default:
          " No, IRCC does not cancel your bridging open work permit if your permanent residency application was refused or rejected. You can continue to work on this bridging open work permit and submit a new permanent residency application.",
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

let bridgingOpenSection = mongoose.model(
  "Bridging Open Work Permit Section",
  bridgingOpenSchema
);
module.exports = bridgingOpenSection;
