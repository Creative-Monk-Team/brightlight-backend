let mongoose = require("mongoose");
let reconsiderationSchema = mongoose.Schema(
  {
    ReconsiderationHeading: {
      type: String,
      default: "Reconsideration for Refusal Decision",
    },
    DonotWorryPara1 : {
        type: String,
        default:"Are you a Canadian immigrant who has recently received a rejection for your visa application? If so, you're not alone. Many people experience this setback on their journey to becoming a Canadian resident.",
      },
      DonotWorryPara2 : {
        type: String,
        default:"Firstly, don’t worry. There's still hope!",
      },
      DonotWorryPara3 : {
        type: String,
        default:"IRCC offers a Reconsideration of Refusal Decision program, which gives you the chance to appeal the decision and potentially secure the visa you deserve. A reconsideration of a refusal decision, also known as a request for reconsideration, is a formal process that allows you to ask IRCC to review your case again. The Reconsideration of Refusal program allows you to challenge the refusal decision of your application based on new information or arguments that were not previously considered. This is a great opportunity to present additional evidence or address any misunderstandings that may have led to the initial rejection.",
      },
      RequestReconsiderationHeading : {
      type: String,
      default:" Requests for reconsideration can be made for any type of Canadian immigration decision, including decisions on applications for:",
    },
    rr1 :{
        type:String,
        default:"Permanent residence",
    },
    rr2 :{
        type:String,
        default:"Temporary residence",
    },
    rr3 :{
        type:String,
        default:"Citizenship",
    },
    rr4 :{
        type:String,
        default:"Humanitarian and compassionate considerations",
    },
    rrPara :{
        type:String,
        default:"You can request reconsideration within 30 days of the date of the refusal letter. However, there are some exceptions to this rule. For example, if you have new information that you did not submit with your original application, you may be able to request reconsideration more than 90 days after the refusal letter.",
    },
    EligibilityHeading: {
        type: String,
        default:"Eligibility for Reconsideration for Refusal Decision",
    },
    EligibilitySubHeading: {
        type: String,
        default:"Are you considering reconsideration requests? See if you meet the eligibility.",
    },
    er1 :{
        type:String,
        default:"You must have received a letter saying your application was rejected or refused by IRCC. This letter will tell you why.",
    },
    er2 :{
        type:String,
        default:"Your initial application must have been turned down because of a mistake. This means the officer who looked at your case made an error in understanding your circumstances.",
    },
    er3 :{
        type:String,
        default:"You must have new info or reasons that weren't considered before. This new info should relate to why your application was rejected and be enough to change the decision.",
    },
   HowToApplyHeading: {
      type: String,
      default: "How to Apply for Reconsideration",
    },
    HowToApplySubHeading: {
      type: String,
      default: "Meet the eligibility criteria? Let's see how you can request a reconsideration.",
    },
    HowApplyL1: {
      type: String,
      default: "You must submit the request within 30 days of receiving the refusal letter. The request should be well-written and clearly explain why you believe the decision should be overturned.",
    },
    HowApplyL2: {
      type: String,
      default: "Wait for IRCC to review your request and provide any additional information or documentation that the IRCC officer may request.",
    },
    HowApplyL3: {
      type: String,
      default: "IRCC will decide on your request within 90 days of receiving it. If the decision is in your favor, you will be granted the visa you requested. If the decision is not in your favor, you will have the option to appeal the decision.",
    },

    RefusalHeading: {
      type: String,
      default:"Reasons for Refusal After Reconsideration",
    },
    RefusalReasonSubHeading: {
        type: String,
        default:"Don’t forget to avoid these common reconsideration request refusal reasons and increase your chances of approval.",
      },
    r1: {
      type: String,
      default:"Failing to provide enough new evidence to counter the initial refusal reasons.",
    },
    r2: {
      type: String,
      default:"Submitting new evidence that is irrelevant or unconvincing.",
    },
    r3: {
      type: String,
      default:"Not addressing the legal basis for the initial refusal adequately.",
    },
    r4: {
      type: String,
      default:"Making procedural errors in the reconsideration request itself.",
    },
    r5: {
        type: String,
        default:"Providing contradictory or inconsistent information compared to the original application.",
      },
      r6: {
        type: String,
        default:"Failing to articulate a persuasive case for reconsidering the decision.",
      },
      r7: {
        type: String,
        default:"Not proving why you should be granted the visa despite the initial refusal.",
      },
      
    StillNotHeading: {
      type: String,
      default:"Still not sure?",
    },
    s1: {
      type: String,
      default:"If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
        type: String,
        default:"At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
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
          "  What are the grounds for reconsideration? ",
      },
      qa1: {
        type: String,
        default:
          "<ul> <li>New evidence that was unavailable at the time of the initial application, such as updated financial documents, proof of strong ties to your home country, or additional qualifications that strengthen your case.</li> <li>If you believe there was a mistake or misinterpretation of your application or supporting documents, you can explain the error and provide necessary clarifications.</li> <li>f your circumstances have changed significantly since the initial application (e.g., job offer, marriage, medical condition), you can explain how these changes affect your eligibility and show your continued interest in immigrating to Canada.</li> </ul> ",
      },
      q2: {
        type: String,
        default:
          " How long does the reconsideration process take?  ",
      },
      qa2: {
        type: String,
        default:
          " IRCC plans to make a decision on reconsideration requests within 90 days of receiving them. However, the processing time can be longer depending on the complexity of the case and the workload of IRCC.",
      },
  
      q3: {
        type: String,
        default:
          " Can I submit a reconsideration request for any type of visa refusal?",
      },
      qa3: {
        type: String,
        default:
          " Yes, the program applies to most Canadian visa types, including: <ul> <li>Visitor visas</li> <li>Study permits</li> <li>Work permits</li> <li> Permanent residency applications (Express Entry, Family Class Sponsorship, etc.)</li> </ul>",
      },
      q4: {
        type: String,
        default:
          "Are there specific deadlines for submitting a reconsideration request  ",
      },
      qa4: {
        type: String,
        default:
          "Yes, you must submit your request within 30 days of receiving your refusal letter. Missing this deadline will significantly reduce your chances of success.   ",
      },
  
      q5: {
        type: String,
        default:
          " How much does it cost to file a reconsideration request?",
      },
      qa5: {
        type: String,
        default:
          " There is no fee to file a reconsideration request with IRCC. ",
       },
      q6: {
        type: String,
        default:
          " Are there any success stories of individuals who have had their refusals overturned through reconsideration? ",
      },
      qa6: {
        type: String,
        default:
          "  Yes, there are many success stories of individuals who have had their refusals overturned through reconsideration. Watch some of our client’s testimonials that prove it is possible to overcome a visa refusal if you are prepared and committed to your case.",
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

let reconsiderationSection = mongoose.model(
  "Reconsideration Section",
  reconsiderationSchema
);
module.exports = reconsiderationSection;
