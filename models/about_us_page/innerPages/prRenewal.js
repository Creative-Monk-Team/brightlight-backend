let mongoose = require("mongoose");
let prRenewalSchema = mongoose.Schema(
  {

    PrRenewalHeading: {
      type: String,
      default: " Permanent Residency Renewal ",
    },
    PrRenewalPara1: {
      type: String,
      default: " Your PR card is proof that you have the right to live and study, just like a Canadian citizen. but, like taking care of something valuable, your PR card needs attention to keep working well. Renewing it ensures you can keep being a permanent resident and enjoy all the wonderful things Canada has to offer. ",
    },
    PrRenewalPara2: {
      type: String,
      default: "Your PR card is your proof of status and allows you to re-enter Canada after traveling abroad. Most new PR cards are valid for 5 years and they are supposed to be renewed before they expire or within 90 days of their expiry date. However, you don't have to keep renewing it forever. After 5 years of being a Canadian PR, you can apply for Canadian citizenship. This means you will get a Canadian passport, and you will be able to vote in all Canadian elections. Check our, page to look for your eligibility",
    },
    EligibleHeading: {
      type: String,
      default: "Eligibility for Permanent Residency Renewal",
    },
    e1: {
      type: String,
      default: "You should be a permanent resident of Canada.",
    },
    e2: {
      type: String,
      default:
        "You have lived in Canada for at least 2 years out of the last 5 years.",
    },
    e3: {
      type: String,
      default:
        "You can apply for renewal up to 90 days before your current PR card expires.",
    },
    e4: {
      type: String,
      default:
        "You shouldn’t be under an active removal order by a Canadian immigration judge.",
    },
    e5: {
      type: String,
      default:
        "If you have already become a Canadian citizen, you do not need to renew your PR car",
    },
    HowApplyHeading: {
      type: String,
      default: "How to Apply for Permanent Residency Renewal",
    },
    HowApplyPara: {
      type: String,
      default:
        "Renewing your PR card is a straightforward process that can be done online through the Government of Canada's website or by mail. You will need to fill out the necessary forms, provide supporting documents, and pay the applicable fees. However, this is a golden ticket for you and you shouldn’t risk it if you are not sure about it. Let us take care of this for you and get your renewal at the earliest.",
    },
    RefusalHeading: {
      type: String,
      default: "Reasons for Refusal of Permanent Residency Renewal",
    },
    RefusalSubHead: {
      type: String,
      default: "Don’t forget to avoid these common PR Renewal refusal reasons and increase your chances of approval.",
    },
    r1: {
      type: String,
      default: "You did not complete two years out of the last five years.",
    },
    r2: {
      type: String,
      default:
        "You are not physically present in Canada when you apply for renewal.",
    },
    r3: {
      type: String,
      default:
        "You got convicted of an offense related to the misuse of a PR card.",
    },
    r4: {
      type: String,
      default:
        "You gave false or misleading information on your PR card renewal application.",
    },
    StillNotSureHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default: "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. This is why we have a high success rate.",
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
        " When should I renew my PR card?",
    },
    qa1: {
      type: String,
      default:
        " You should renew your PR card at least 90 days before it expires. This will give you plenty of time to gather the necessary documents and avoid any delays.",
    },
    q2: {
      type: String,
      default:
        "What documents do I need to renew my PR card?",
    },
    qa2: {
      type: String,
      default:
        "The documents you need to renew your PR card will vary, but some common documents include: <ul> <li>A copy of your current PR card</li>  <li>A copy of your passport or other travel document </li>  <li>Proof of residence in Canada (utility bills, lease agreement)</li>  <li>Proof of identity (birth certificate, marriage certificate)</li> </ul>  ",
    },

    q3: {
      type: String,
      default:
        "How much does it cost to renew my PR card?",
    },
    qa3: {
      type: String,
      default:
        "The application fee for renewing your PR card is $50 for adults and $25 for children under 18.",
    },
    q4: {
      type: String,
      default:
        "How long does it take to renew my PR card?",
    },
    qa4: {
      type: String,
      default:
        " The processing time for PR card renewal applications is typically between 6 and 8 weeks. However, urgent applications may be processed within 2 weeks.  ",
    },

    q5: {
      type: String,
      default:
        " What if I need to travel outside of Canada before my PR card is renewed?",
    },
    qa5: {
      type: String,
      default:
        " You can travel outside of Canada with your valid PR card until 60 days after the date we issue your new card. If you leave Canada with your existing card before your new card is issued, you will need to apply for a Permanent Resident Travel Document (PRTD) to return to Canada.",
     },
    q6: {
      type: String,
      default:
        " What if my PR card is lost or stolen?",
    },
    qa6: {
      type: String,
      default:
        " You will need to apply for a replacement PR card. The replacement process is similar to the renewal process and requires the same documents. However, there is an additional fee of $35 for replacement cards.",
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

let prRenewalSection = mongoose.model("Pr Renewal Section", prRenewalSchema);
module.exports = prRenewalSection;
