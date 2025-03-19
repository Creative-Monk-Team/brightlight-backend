let mongoose = require("mongoose");
let restorationStatusDraftSchema = mongoose.Schema(
  {
    restorationStatusDraftHeading: {
      type: String,
      default: "Restoration of Status",
    },
    restorationStatusDraftPara1: {
      type: String,
      default:
        "Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing in Canada.",
    },
    restorationStatusDraftPara2: {
        type: String,
        default:
          "The restoration of status is a process that provides temporary residents with a second chance to maintain their legal presence in Canada. If your temporary status (student visa, visitor permit, or work permit) lapses or expires and you did not apply for an extension before the expiry date, you will be considered out of status. At this point, you have a few options. You can either depart Canada immediately or apply to restore your temporary status. You have a maximum of 90 days from the date your status expires to apply for restoration of your status.",
      },
      restorationStatusDraftPara3: {
        type: String,
        default:
          "This is a very serious situation that should be handled with the utmost importance, as any further delay could have a negative impact on any future applications you may submit. If you meet specific eligibility requirements, you can apply to reinstate your status and continue enjoying the advantages of living and working in Canada.",
      },
      restorationStatusDraftPara4: {
        type: String,
        default:
          "Important things to know: If you're a student or worker on temporary status, you're not allowed to work or study while your restoration application is under review.",
      },
//


HowToCheckHeading: {
    type: String,
    default: "How to Check if Your Immigration Status is Valid",
  },
  HowToCheckSubHead: {
    type: String,
    default: "To check if your stay in Canada is still allowed, look for the expiration date printed on your permits. These dates provide an indication of your temporary permission to remain in Canada until that point.",
  },
hc1: {
  type: String,
  default: "If you are visiting Canada as a tourist, your stay is typically valid for 6 months from the date you entered the country.",
},
hc2: {
  type: String,
  default: "It is illegal to stay in Canada beyond the authorized period. If your stay expires and you have not applied for an extension, you must apply for restoration of status within 90 days.",
},

///


WhatAreRequHeading: {
    type: String,
    default: "What Are the Requirements for Restoration of Your Status?",
  },
  WhatAreRequSubHead: {
    type: String,
    default: "To regain your legal status in Canada, you must meet the following requirements:",
  },
  WRLi1: {
    type: String,
    default: "Apply for restoration of status within 90 days (3 months) of your status expiration.",
  },
  WRLi2: {
  type: String,
  default: "Maintain the initial requirements and conditions of your stay, whether it is for study, work, or visiting Canada.",
},
WRLi3: {
  type: String,
  default: "Adhere to all conditions imposed on your stay, including not engaging in unauthorized work.",
},
WrNote: {
    type: String,
    default: "Important Tip: Restoration of status cannot be granted at any Canadian port of entry, so you must apply while you are still in the country.",
  },

  //
  HowToApplyHeading: {
      type: String,
      default: "How to Apply for Restoration of Status",
    },

    HowToApplySubHead: {
      type: String,
      default: "To apply for status restoration, you will need to provide specific documents and information to Immigration, Refugees and Citizenship Canada (IRCC). The specific requirements vary based on the type of restoration you are seeking, whether it's for a visitor, student, or worker. It is crucial to complete the correct forms for your restoration type and submit the necessary documents to increase the chances of your application being approved. Here are a few general guidelines:",
    },

    haLi1: {
      type: String,
      default: "Provide a compelling reason why your previous status expired.",
    },
    haLi2: {
      type: String,
      default: "Submit photocopies of all valid pages of your passport.",
    },
    haLi3: {
      type: String,
      default: "Attach a photocopy of your last valid immigration document, such as a visitor visa, work permit, or study permit.",
    },
    haLi4: {
      type: String,
      default: "If you are applying for restoration as a spouse, provide a copy of your marriage certificate or license (if applicable).",
    },
    haLi5: {
      type: String,
      default: "Showcase sufficient financial means to support yourself during your extended stay in Canada.",
    },
//

RefusalHeading: {
  type: String,
  default: "Common Reasons for Refusal of Restoration of Status Applications",
},

r1: {
  type: String,
  default: "Missed the deadline to submit the restoration application within 90 days of the expiry of status.",
},
r2: {
  type: String,
  default: "Continued working or studying on the restoration status.",
},
r3: {
  type: String,
  default: "Did not answer the questions in the application form correctly, completely, and truthfully.",
},
r4: {
  type: String,
  default: "Applied for the wrong type of intent along with the restoration application.",
},
r5: {
  type: String,
  default: "Paid insufficient fees to IRCC.",
},
//
  
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any reason, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals.",
      },
      s2: {
        type: String,
        default:
          "We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in the cases we work on. This is why we have a high success rate.",
      },
      s3: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
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
          " How long does restoration of status take in Canada?",
      },
      qa1: {
        type: String,
        default:
          " The processing times for status restoration applications in Canada can vary depending on the type of application (visitor, student, or work) and the current processing backlog with IRCC. However, it is generally expected to take 4-5 months. ",
      },
      q2: {
        type: String,
        default:
          " What happens if my restoration of the status file is declined? ",
      },
      qa2: {
        type: String,
        default:
          " If your restoration of status application is declined, you will be advised to leave Canada immediately. However, in most cases, you can also apply for temporary resident permit. ",
      },
  
      q3: {
        type: String,
        default:
          " What happens if I overstay in Canada?",
      },
      qa3: {
        type: String,
        default:
          " Staying beyond your allowed duration not only jeopardises your current visitor, student, or work privileges but also risks the cancellation of your immigration status. This situation can even hinder your chance to obtain permanent residence. Furthermore, it could result in additional consequences such as being labelled as inadmissible.",
      },
      q4: {
        type: String,
        default:
          "  How many days are considered overstay in Canada?",
      },
      qa4: {
        type: String,
        default:
          " Once your status expires, you can either depart Canada immediately or you have 90 days to file a restoration of status application. If you choose not to pursue either of these remedies and continue staying in Canada beyond the 90-day limit, you face the risk of being removed.   ",
      },
  
      q5: {
        type: String,
        default:
          " ",
      },
      qa5: {
        type: String,
        default:
          "  ",
       },
      q6: {
        type: String,
        default:
          " ",
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
          "    ",
      },
  
      q8: {
        type: String,
        default:
          " ",
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

let restorationStatusDraftSection = mongoose.model(
  "Restoration of Status program",
  restorationStatusDraftSchema
);
module.exports = restorationStatusDraftSection;
