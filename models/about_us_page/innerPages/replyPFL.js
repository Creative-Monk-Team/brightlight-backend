let mongoose = require("mongoose");
let replyPFlSchema = mongoose.Schema(
  {
    PFLHeading: {
      type: String,
      default: "Procedural Fairness Letter (PFL)",
    },
    RedFlagHeading : {
      type: String,
      default:"Did You Get a Red Flag from Canadian Immigration - PFL?",
    },
    RedFlagPara1 : {
      type: String,
      default:"Don't panic! We'll help you through the PFL process and turn that flag into a welcome mat.",
    },
    RedFlagPara2 : {
        type: String,
        default:"Responding to a Procedural Fairness Letter (PFL) is a crucial step in addressing concerns raised by IRCC about your immigration application. It's your chance to clear things up, provide more proof, and possibly prevent a negative decision/refusal.",
      },
      RedFlagPara3 : {
        type: String,
        default:"These letters often come up when an officer from IRCC is unsure about the information given in your application. For example, they might suspect something's not quite right, like providing false or misleading details, which could lead to issues with the Immigration Refugees and Protection Act (IRPA).",
      },
      RedFlagPara4 : {
        type: String,
        default:"Typically, you'll get a letter outlining the concerns, and you usually have around 30 days to respond. This is a serious matter, as not addressing it properly might keep you from entering Canada for at least 5 years. So, it's crucial to respond with detailed answers, covering all the officer's concerns, even the ones you might not know about.",
      },

    ReasonReceivedHeading: {
        type: String,
        default:"Here Are a Few Reasons You Might Have Received a PFL",
    },
    r1: {
      type: String,
      default:"IRCC or PNP officer might have found discrepancies in your application or supporting documents.",
    },
    rr2: {
        type: String,
        default:"You might have missed providing the necessary information or documentation.",
      },
    rr3: {
       type: String,
       default:"There may be concerns about your criminal history, health, or financial status that could affect your admissibility to Canada.",
      },
    rr4: {
      type: String,
     default:"If you are sponsoring family members, IRCC may have questions about the genuineness of the relationship.",
      },

   
    StillNotHeading: {
      type: String,
      default:"Still not Sure?",
    },
    s1: {
      type: String,
      default:"If you have received a PFL, don't panic. We can help you with your application. With over a decade of experience, we have successfully cleared many applications that faced PFL.",
    },
    s2: {
        type: String,
        default:"At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Just reach out to us, and we'll handle the rest. You focus on your Canadian ambition, and we'll focus on making it happen smoothly",
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
          " My PFL mentions discrepancies in my travel history. I believe it's a misunderstanding due to outdated visa stamps. How should I address this? ",
      },
      qa1: {
        type: String,
        default:
          "You should explain the situation clearly, provide copies of your passport with current and outdated stamps, and offer any supporting documentation like travel tickets or itineraries that clarify the timeline. Attach a cover letter highlighting the specific reasons for the discrepancy and how your explanation clarifies any concerns. ",
      },
      q2: {
        type: String,
        default:
          "   I received a PFL regarding my financial status, but my income has significantly increased since applying. Can I submit updated documents? ",
      },
      qa2: {
        type: String,
        default:
          "Absolutely! Include updated proof of income (pay stubs, tax returns) along with a detailed explanation of your increased income and how it aligns with your revised financial plan for supporting your immigration goals. Demonstrate your ability to meet the financial requirements now  ",
      },
  
      q3: {
        type: String,
        default:
          " The PFL questions the genuineness of my relationship with the family member I'm sponsoring. What kind of evidence can strengthen my case? ",
      },
      qa3: {
        type: String,
        default:
          "  Gather comprehensive evidence like photos, joint bank accounts, communication records (emails, messages), proof of shared celebrations or events, and affidavits from friends or family confirming the long-standing nature of your relationship. Highlight commonalities in cultural background, traditions, and values to showcase the genuine connection.",
      },
      q4: {
        type: String,
        default:
          "  I haven't received legal representation before, but my PFL concerns are complex. Should I consider hiring an immigration lawyer? ",
      },
      qa4: {
        type: String,
        default:
          " Seeking legal counsel can be highly beneficial, especially if the PFL involves complicated legal aspects or admissibility concerns. We can help you draft a robust response and represent you effectively during any potential appeals. Let us handle your case for you.  ",
      },
  
      q5: {
        type: String,
        default:
          " I missed the deadline to respond to my PFL due to unforeseen circumstances. Can I still submit a response? ",
      },
      qa5: {
        type: String,
        default:
          " Immediately contact IRCC and explain the reason for the missed deadline. Provide supporting documentation if possible. While they might allow a late response based on extenuating circumstances, it's crucial to act swiftly and demonstrate genuine intention to address the concerns.",
       },
      q6: {
        type: String,
        default:
          " ",
      },
      qa6: {
        type: String,
        default:
          " ",
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

let replyPFlSection = mongoose.model(
  "Reply to PFl Section",
  replyPFlSchema
);
module.exports = replyPFlSection;
