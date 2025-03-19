let mongoose = require("mongoose");
let LmiaSchema = mongoose.Schema(
  {
    LmiaHeading: {
      type: String,
      default: "Labour Market Impact Assessment (LMIA)",
    },
    WhatIsLmiaHeading : {
      type: String,
      default:"What is an LMIA?",
    },
    WhatIsLmiaPara1 : {
        type: String,
        default:"If you're looking to apply for an LMIA, it's because you are either a foreign worker who wants to apply for a job on a temporary work permit that is available in any Canadian province or an employer who wants to bring in skilled professionals or experienced workers to join their team in Canada.",
      },
      WhatIsLmiaPara2 : {
        type: String,
        default:"Canada relies on the Temporary Foreign Worker Program (TFWP) to bring in workers from other countries when there's a shortage of qualified workers in Canada for a particular job. When a Canadian employer wants to hire a foreign worker, they generally submit an application known as a Labour Market Impact Assessment (LMIA) to the Canadian Government Department - Employment and Social Development Canada (ESDC).",
      },
      WhatIsLmiaPara3 : {
        type: String,
        default:"An ESDC officer after reviewing the application assesses whether hiring the foreign worker would be beneficial for the Canadian job market. They ensure that qualified Canadians/PR hasn't been overlooked for the position and that the foreign worker will receive appropriate pay and benefits according to federal and provincial regulations.",
      },
      WhatIsLmiaPara4 : {
        type: String,
        default:"If the LMIA is positive or neutral, it means there's no Canadian available for the job, and hiring a foreign worker won't hurt the Canadian job market. However, if it's negative, it means that the employer has failed to demonstrate that he does not meet at least one of the requirements mentioned on the ESDC website. At Brightlight Immigration, we do not provide recruitment services. As your official legal consultants, we can represent your case to ESDC and get you the desired favorable response.",
      },
      BenifitsHeading : {
      type: String,
      default:"Benefits of the LMIA Program",
    },
    BenefitsCanadianEmployersSubHeading : {
        type: String,
        default:"Benefits for Canadian Employers",
      },

      b11 :{
        type:String,
        default:"The LMIA program lets Canadian employers hire skilled people from around the world, filling important roles in various industries.",
    },
    b12 :{
        type:String,
        default:"Canadian businesses can grow by hiring workers from other countries, bringing in new ideas, and reaching more customers. This global connection makes them more innovative and competitive.",
    },
    b13 :{
        type:String,
        default:"The LMIA program helps solve shortages of workers in important areas like manufacturing, healthcare, and technology. By filling these gaps, businesses can run smoothly and help Canada's economy grow.",
    },
      BenefitsForeignWorkersSubHeading : {
        type: String,
        default:"Benefits for Foreign Workers",
      },
    b21 :{
        type:String,
        default:"The LMIA program gives foreign workers a chance to work in Canada, gaining valuable experience in a well-known country. This experience can open doors for their future careers.",
    },
    b22 :{
        type:String,
        default:"Working in Canada helps foreign workers learn new skills, adapt to different work settings, and experience various industries and cultures. This professional growth can lead to better jobs and personal development.",
    },
    b23 :{
        type:String,
        default:"Foreign workers who get jobs through the LMIA program can work legally in Canada, giving them financial stability and an opportunity to start a new life in a friendly country.",
    },

    PathwaysHeading: {
        type: String,
        default:"Pathways of LMIA Available",
      },

      ApplyHeading: {
        type: String,
        default:"How to Apply for LMIA",
      },
      ApplyEmployerSubHeading: {
        type: String,
        default:"As an Employer",
      },

      ae1 :{
        type:String,
        default:"You must submit an LMIA application to Employment and Social Development Canada (ESDC).",
    },
    ae2 :{
        type:String,
        default:"ESDC will assess the application to determine whether you meet the requirements.",
    },
    ae3 :{
        type:String,
        default:"If the application is approved, ESDC will provide you with a copy of the positive LMIA.",
    },
    ae4:{
        type:String,
        default:"You can then add the foreign worker’s name to the LMIA so that they can apply for a work permit. This can be done upfront as well.",
    },
      ApplyForeignSubHeading: {
        type: String,
        default:"As a Foreign Worker",
      },

      af1 :{
        type:String,
        default:"Apply for a work permit as per guidelines set by IRCC.",
    },
    af2 :{
        type:String,
        default:"IRCC will assess your application to check if you meet the requirements.",
    },
    af3 :{
        type:String,
        default:"If your application is approved, IRCC will issue you a work visa.",
    },
    af4 :{
        type:String,
        default:"After entering Canada, you will be given a work permit.",
    },
    af5 :{
        type:String,
        default:"With the work permit, you’re supposed to work for the employer who provided you with the LMIA.",
    },

    RefusalHeading: {
        type: String,
        default:"Common Reasons for LMIA Refusal",
      },
      RefusalSubHeading: {
        type: String,
        default:"Don’t forget to avoid these common LMIA refusal reasons and increase your chances of approval.",
      },
      r1: {
        type: String,
        default:"As an employer, you did not try to hire Canadians by advertising, attending job fairs, or using online platforms.",
      },
      r2: {
        type: String,
        default:"As an employer, you had an LMIA revoked in the past two years.",
      },
      r3: {
        type: String,
        default:"As an employer, you have labor disputes or violate employment standards.",
      },
      r4: {
        type: String,
        default:"As an employer, your business isn’t legitimate.",
      },
      r5: {
          type: String,
          default:"As an employer, you did not provide the necessary documentation for the foreign worker's work permit.",
        },
        r6: {
          type: String,
          default:"As a worker, you don't have enough relevant work experience or qualifications for the position.",
        },
        r7: {
          type: String,
          default:"As a worker, you couldn’t meet the language requirements as required.",
        },
        r8: {
            type: String,
            default:"As a worker, you have a criminal history, especially for serious offenses.",
          },
          r9: {
            type: String,
            default:"As a worker, you do not meet the specific requirements outlined in the job description.",
          },
          
    StillNotHeading: {
      type: String,
      default:"Still not Sure?",
    },
    s1: {
      type: String,
      default:"If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
        type: String,
        default:"At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
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
          " What is an LMIA? ",
      },
      qa1: {
        type: String,
        default:
          "A Labour Market Impact Assessment (LMIA) is a document that assesses whether hiring a foreign worker will have a positive or neutral impact on the Canadian labor market. If an LMIA is approved, the foreign worker can then apply for a work permit to work in Canada. ",
      },
      q2: {
        type: String,
        default:
          " What are the different types of LMIAs?  ",
      },
      qa2: {
        type: String,
        default:
          "  There are two main types of LMIAs: <ul> <li>Positive LMIA: A positive LMIA means that the government has found that hiring a foreign worker will have a positive or neutral impact on the Canadian labor market. This is the type of LMIA that is required for most temporary and permanent foreign workers.</li> <li>Negative LMIA: A negative LMIA means that the government has found that hiring a foreign worker will have a negative impact on the Canadian labor market. This type of LMIA is rare and is only issued in very specific circumstances</li> </ul>",
      },
  
      q3: {
        type: String,
        default:
          " How long does it take to get an LMIA? ",
      },
      qa3: {
        type: String,
        default:
          "The processing time for LMIA applications varies depending on the type of LMIA and the employer's circumstances. However, most LMIA applications are processed within 30 business days. ",
      },
      q4: {
        type: String,
        default:
          " . I am a foreign worker who has already been working in Canada under an LMIA. What do I need to do to renew my work permit? ",
      },
      qa4: {
        type: String,
        default:
          "  If you are a foreign worker who has already been working in Canada under an LMIA, you will need to apply for a new work permit at least 30 days before your current work permit expires. The application process for renewing a work permit is similar to the process for applying for a new work permit.  ",
      },
  
      q5: {
        type: String,
        default:
          " What is the GTS LMIA? ",
      },
      qa5: {
        type: String,
        default:
          " The Global Talent Stream LMIA is a fast-tracked LMIA process that is made to expedite the hiring of foreign workers with exceptional skills and experience in in-demand occupations.",
       },
      q6: {
        type: String,
        default:
          " Who is eligible for a GTS LMIA?",
      },
      qa6: {
        type: String,
        default:
          " Employers who are located in Canada and who are recruiting foreign workers to fill temporary or permanent positions in in-demand occupations are eligible for Global Talent Stream LMIA. ",
      },
  
      q7: {
        type: String,
        default:
          " What are the processing times for GTS LMIAs?  ",
      },
      qa7: {
        type: String,
        default:
          " Global Talent Stream LMIAs are typically processed within 10 business days.   ",
      },
  
      q8: {
        type: String,
        default:
          "What is the Caregiver LMIA? ",
      },
      qa8: {
        type: String,
        default:
          "The Caregiver LMIA is an LMIA that is required for employers who want to hire foreign workers to provide care for children, the elderly, or people with disabilities.   ",
      },
      
      q9: {
        type: String,
        default:
          "Who is eligible for a Caregiver LMIA? ",
      },
      qa9: {
        type: String,
        default:
          "  Employers who are located in Canada and need care for a child, elder, or disabled person can apply for an LMIA to recruit foreign workers to fill temporary or permanent positions as caregivers. ",
      },
      q10: {
        type: String,
        default:
          "What are the processing times for Caregiver LMIAs? ",
      },
      qa10: {
        type: String,
        default:
          " Caregiver LMIAs are typically processed within 30  business days. ",
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

let LmiaSection = mongoose.model(
  "Lmia Section",
  LmiaSchema
);
module.exports = LmiaSection;
