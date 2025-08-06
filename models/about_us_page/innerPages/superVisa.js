let mongoose = require("mongoose");
let superVisaSchema = mongoose.Schema(
  {
    superVisaHeading: {
      type: String,
      default: "Canada Super Visa - 2025 Income Requirements Updated",
    },
    superVisaPara: {
      type: String,
      default:
        "As of July 29, 2025, IRCC has officially revised the income requirements for the Canada Super Visa. If you're planning to invite your parents or grandparents to stay in Canada for an extended period, it's crucial to ensure you now meet the new minimum income thresholds.",
    },

    question: {
      type: String,
      default: "What is a Super Visa?",
    },
    answer: {
      type: String,
      default:
        "The Super Visa allows Canadian citizens and permanent residents to invite their parents or grandparents for long-term stays of up to 5 years per visit, with a 10-year multiple-entry validity. It's an ideal alternative to the Parents and Grandparents PR Program (PGP), especially since PGP has limited annual intake.",
    },

    SuperVisaTabHeading: {
      type: String,
      default: "New Super Visa Income Requirements – 2025e",
    },
    SuperVisaTabSubHead: {
      type: String,
      default:
        "To be eligible, hosts must meet updated Low-Income Cut-Off (LICO) levels, which have increased by 3.9% based on the latest federal data.",
    },
    SuperVisaTabSubHead2: {
      type: String,
      default: "Minimum Income Requirements by Family Size:",
    },

    SupVTabHead1: {
      type: String,
      default: "Family Size",
    },
    SupVTabHead1P1: {
      type: String,
      default: "1 person",
    },
    SupVTabHead1P2: {
      type: String,
      default: "2 persons",
    },
    SupVTabHead1P3: {
      type: String,
      default: "3 persons",
    },
    SupVTabHead1P4: {
      type: String,
      default: "4 persons",
    },
    SupVTabHead1P5: {
      type: String,
      default: "5 persons",
    },
    SupVTabHead1P6: {
      type: String,
      default: "6 persons",
    },
    SupVTabHead1P7: {
      type: String,
      default: "7 or more",
    },
    SupVTabHead1P8: {
      type: String,
      default: "More than 7 persons, for each additional person, add",
    },
    //

    SupVTabHead2: {
      type: String,
      default: "2025 Minimum Necessary Gross Income",
    },
    SupVTabHead2P1: {
      type: String,
      default: "$30,526",
    },
    SupVTabHead2P2: {
      type: String,
      default: "$38,002",
    },
    SupVTabHead2P3: {
      type: String,
      default: "$46,720",
    },
    SupVTabHead2P4: {
      type: String,
      default: "$56,724",
    },
    SupVTabHead2P5: {
      type: String,
      default: "$64,336",
    },
    SupVTabHead2P6: {
      type: String,
      default: "$72,560",
    },
    SupVTabHead2P7: {
      type: String,
      default: "$80,784",
    },
    SupVTabHead2P8: {
      type: String,
      default: "$8,224",
    },
    SuperVisaTabFooter: {
      type: String,
      default:
        "You can combine income with your spouse or common-law partner by co-signing the undertaking.",
    },
    //

    WhoisCountedHeading: {
      type: String,
      default: "How to Apply",
    },
    WhoisCountedSubHead: {
      type: String,
      default:
        "To start the application process, there are several forms and steps that you, as the applicant, will need to complete. The steps are as follows:",
    },

    wc1: {
      type: String,
      default: "You (the sponsor)",
    },
    wc2: {
      type: String,
      default: "Your spouse or partner",
    },
    wc3: {
      type: String,
      default: "Dependent children",
    },
    wc4: {
      type: String,
      default: "The Super Visa applicants (parents/grandparents)",
    },
    wc5: {
      type: String,
      default:
        "Anyone you’re still financially responsible for from past sponsorships",
    },
    wc6: {
      type: String,
      default: "Children under shared custody",
    },
    WhoisCountedFooter: {
      type: String,
      default:
        "Even if someone is no longer living with you, they may still count if you're bound by a past sponsorship agreement.",
    },

    BenifitsHeading: {
      type: String,
      default: "Key Super Visa Benefits",
    },

    b1: {
      type: String,
      default: "Stay in Canada for up to 5 years at a time",
    },

    b2: {
      type: String,
      default: "Apply any time of the year (no lottery system)",
    },

    b3: {
      type: String,
      default: "Multiple entries for up to 10 years",
    },

    b4: {
      type: String,
      default: "Extendable from within Canada",
    },

    b5: {
      type: String,
      default: "Perfect for reuniting families long-term",
    },

    b6: {
      type: String,
      default: "Fast processing when all criteria are met",
    },
    //

    SuperVisaPgpHeading: {
      type: String,
      default: "Super Visa vs. PGP",
    },

    SuperVisaPgpHead1: {
      type: String,
      default: "Feature",
    },

    SuperVisaPgpHead2: {
      type: String,
      default: "Super Visa",
    },

    SuperVisaPgpHead3: {
      type: String,
      default: "PGP (Permanent Residency)",
    },

    SuperVisaPgpHead1d1: {
      type: String,
      default: "Status",
    },

    SuperVisaPgpHead1d2: {
      type: String,
      default: "Stay duration",
    },

    SuperVisaPgpHead1d3: {
      type: String,
      default: "Work/benefits allowed",
    },

    SuperVisaPgpHead1d4: {
      type: String,
      default: "Processing window",
    },

    SuperVisaPgpHead2d1: {
      type: String,
      default: "Visitor",
    },

    SuperVisaPgpHead2d2: {
      type: String,
      default: "Up to 5 years/visit",
    },

    SuperVisaPgpHead2d3: {
      type: String,
      default: "No",
    },

    SuperVisaPgpHead2d4: {
      type: String,
      default: "Year-round",
    },

    SuperVisaPgpHead3d1: {
      type: String,
      default: "Permanent Resident",
    },

    SuperVisaPgpHead3d2: {
      type: String,
      default: "Unlimited",
    },

    SuperVisaPgpHead3d3: {
      type: String,
      default: "Yes",
    },

    SuperVisaPgpHead3d4: {
      type: String,
      default: "Limited annual intake via lottery",
    },

    DocstoProveHeading: {
      type: String,
      default: "Documents to Prove Income",
    },

    DocstoProvePara: {
      type: String,
      default:
        "To meet the financial criteria, you may submit:",
    },

    dtp1: {
      type: String,
      default: "CRA Notice of Assessment (NOA)"
    },

    dtp2: {
      type: String,
      default: "T4 and T1 slips"
    },

    dtp3:{
      type: String,
      default: "Pay stubs (last 12 months)"
    },

    dtp4:{
      type: String,
      default: "Employer confirmation letter"
    },

    dtp5: {
      type: String,
      default: "Bank statements"
    }, 

    dtp6: {
      type: String,
      default: "Proof of business or self-employment income"
    },

    dtp7: {
      type: String,
      default: "Pension or investment statements"
    },
    DocstoProveFooter:{
      type: String,
      default: "Brightlight will help you determine the best documentation for your profile."
    },

    NotSureHeading01: {
      type: String,
      default: "Why Choose Us?",
    },
    NotSurePara: {
      type: String,
      default: "Brightlight Immigration will assess your eligibility, guide you through the paperwork, and ensure your Super Visa application is accurate, complete, and IRCC-compliant."
    }, 
    ns1: {
      type: String,
      default:
        "100% transparency ",
    },
    ns2: {
      type: String,
      default:
        "Tailored consultation",
    },
    ns3: {
      type: String,
      default:
        "Application prepared by regulated professionals",
    },

    TalktoSvHeading: {
      type: String,
      default: "Talk to a Super Visa Expert Today"
    },

    TalktoSvPara1: {
      type: String,
      default: "Whether you're just exploring your options or ready to apply, our team can walk you through every detail."
    },
    
    faq_heading: {
      type: String,
      default: "FAQ's Made Simple",
    },
    q1: {
      type: String,
      default:
        " What is the difference between a visitor visa and a super visa? ",
    },
    qa1: {
      type: String,
      default:
        " Anyone can apply for a Visitor visa. However, only parents and grandparents of Canadians/PR can apply for a Super Visa, which allows them to stay for up to 5 years at a time as compared to a visitor visa, which allows only 6 months of stay in Canada.",
    },
    q2: {
      type: String,
      default: "  I have a visitor visa. Can I convert it to a super visa? ",
    },
    qa2: {
      type: String,
      default:
        "  No, you cannot apply for a super visa inside Canada as the passport has to be submitted to an outside Canada IRCC office for visa stamping on the passport.",
    },

    q3: {
      type: String,
      default:
        "  What proof can I provide to prove income requirements as a sponsor?",
    },
    qa3: {
      type: String,
      default:
        " You can provide your most recent Notice of Assessment, T4 slip, employment letters, paystubs, and bank statements.",
    },
    q4: {
      type: String,
      default: " Can I include my dependents on a Super Visa application? ",
    },
    qa4: {
      type: String,
      default:
        "   No, the Super Visa is specifically designed for parents and grandparents of Canadian citizens or permanent residents. Dependent family members, such as spouses or children, should apply for a regular visitor visa if they wish to accompany their parents or grandparents to Canada.",
    },

    q5: {
      type: String,
      default: " Can you work on a Super visa in Canada?",
    },
    qa5: {
      type: String,
      default:
        "No, the Super Visa does not allow for work authorization in Canada. It is solely intended for parents and grandparents of Canadian citizens or permanent residents to visit their family members in Canada, focusing on family reunification rather than employment opportunities. ",
    },
    q6: {
      type: String,
      default: "Can I apply for a Super Visa while in Canada? ",
    },
    qa6: {
      type: String,
      default:
        " No, The applicant must be outside Canada when submitting a passport for super visa stamping.",
    },

    q7: {
      type: String,
      default:
        "  Do I need to submit a letter of invitation for a Super Visa application? ",
    },
    qa7: {
      type: String,
      default:
        "   Yes, for the Super Visa application, a signed letter of invitation from your child or grandchild in Canada is required. We will provide you the format and can notarize as well.",
    },

    q8: {
      type: String,
      default: "Can I visit other countries while holding a Super Visa? ",
    },
    qa8: {
      type: String,
      default:
        " Yes, holding a Super Visa does not restrict you from visiting other countries while you are in possession of a valid passport and any required visas for those countries. However, it is important to note that you should comply with the immigration rules and requirements of each country you plan to visit, as they may have their own visa regulations and entry restrictions.  ",
    },

    q9: {
      type: String,
      default: " ",
    },
    qa9: {
      type: String,
      default: "  ",
    },
    q10: {
      type: String,
      default: " ",
    },
    qa10: {
      type: String,
      default: " ",
    },
    show_testimonials: {
      type: String,
      default: "N",
    },
  },
  {
    timeStamps: true,
  }
);

let superVisaSection = mongoose.model("Super Visa program", superVisaSchema);
module.exports = superVisaSection;
