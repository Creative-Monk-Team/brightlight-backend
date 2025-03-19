let mongoose = require("mongoose");
let agricultAndAgriFoodOccuSchema = mongoose.Schema(
  {
    agricultAndAgriFoodOccuHeading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws: Agriculture and agri-food occupations",
    },
    agricultAndAgriFoodOccuPara: {
      type: String,
      default:
        "Exploring the Agriculture and Agri-Food Occupations Category offers access to abundant opportunities within Canada's thriving agricultural sector. Whether your skills lie in crop production, livestock farming, agricultural research, or any other agri-food occupation, this program paves the way for a rewarding career path in Canada.",
    },

//


 FirstEligibleHeading: {
    type: String,
    default: "First you must be eligible with Express Entry",
  },
  FirstEligSubHead: {
    type: String,
    default: "Before you can participate in a STEM-specific draw through Canada's Express Entry system, you need to be eligible. Here's how you can get started:",
  },
e1: {
  type: String,
  default: " Join the Express Entry Pool: The first step towards becoming a candidate for a STEM-specific draw is to get into the Express Entry pool.",
},
e2: {
  type: String,
  default: "2. Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:",
},
e2SubLi1: {
    type: String,
    default: "Federal Skilled Worker Program (FSW): This program is ideal for tech workers who have the necessary work experience, education, and language ability.",
  },
  e2SubLi2: {
    type: String,
    default: "Canadian Experience Class (CEC): Similar to the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.",
  },
  e2SubLi3: {
    type: String,
    default: "Federal Skilled Agriculture and agri-food occupations s Program (FSTP): If you're a Agriculture and agri-food occupations s worker, this program is designed for you. It requires proof of relevant work experience, education, and language proficiency.",
  },
  FirstEligPara: {
    type: String,
    default: "Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.",
  },
///


EligCriHeading: {
    type: String,
    default: "Eligibility Criteria for Agriculture and Agri-Food Occupations Category",
  },
  EligCriSubHead: {
    type: String,
    default: "Once you have met eligibility for one of the Express Entry programs, now you need to meet eligibility for Agriculture and agri-food occupations criteria:",
  },

ec1: {
  type: String,
  default: "At least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in an agriculture or agri-food occupation.",
},
ec2: {
  type: String,
  default: "A valid Express Entry profile.",
},

//
EligEntryHeading: {
    type: String,
    default: "Express Entry Agriculture and agri-food occupations draws history",
  },
  EligCriSubHead: {
    type: String,
    default: "The first ever Express Entry draw for Agriculture and agri-food occupations workers was held on September, 2023. Express Entry draw 267 saw a CRS score of 354 and invited 600 candidates eligible for category-based selection in Agriculture and agri-food occupations.",
  },


  /////
  HereEligTabHeading: {
      type: String,
      default: "Here is the list of eligible NOCs for Agriculture and agri-food occupations category:",
    },
    HereEligTableHead1: {
        type: String,
        default: "Occupations",
      },
      HeT1Po1: {
        type: String,
        default: "Contractors and supervisors, landscaping, grounds maintenance and horticulture services	",
      },
      HeT1Po2: {
        type: String,
        default: "Agricultural service contractors and farm supervisors",
      },
      HeT1Po3: {
        type: String,
        default: "Butchers- retail and wholesale",
      },

      //
      HereEligTableHead2: {
        type: String,
        default: "2021 NOC Code",
      },

      HeT2Po1: {
        type: String,
        default: "82031",
      },
      HeT2Po2: {
        type: String,
        default: "82030",
      },
      HeT2Po3: {
        type: String,
        default: "63201",
      },

//

       HereEligTableHead3: {
         type: String,
         default: "2021 TEER Category",
        },

      HeT3Po1: {
        type: String,
        default: "2",
      },
      HeT3Po2: {
        type: String,
        default: "2",
      },
      HeT3Po3: {
        type: String,
        default: "3",
      },
      //
  
//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs are near to 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
      //


      EligCriHeading: {
        type: String,
        default: "Once you have met eligibility for one of the Express Entryprograms, now you need to meet eligibility for Agriculture andagri-food occupations criteria:",
      },
      EligEntryPara: {
        type: String,
        default: " The first ever Express Entry draw for Agriculture and agri-foodoccupations workers was held on September, 2023. Express Entrydraw 267 saw a CRS score of 354 and invited 600 candidateseligible for category-based selection in Agriculture and agri-food occupations.",
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
          "If I have a targeted Agriculture and agri-food Occupation, does my CRS score still matter?",
      },
      qa1: {
        type: String,
        default:
          "Your CRS score remains crucial even with targeted Agriculture and agri-food occupations. However, in Agriculture and agri-food occupations draws, the CRS score needed to secure an ITA tends to be lower compared to comprehensive program draws. For example, in the inaugural Agriculture and agri-food occupations draw, the CRS cutoff stood at 354, notably lower than the 524 required in concurrent all- program draws.",
      },
      q2: {
        type: String,
        default:
          "How often IRCC will hold Agriculture and agri-food occupations draws?",
      },
      qa2: {
        type: String,
        default:
          " There is no set schedule of Agriculture and agri-food occupations -specific draws by IRCC. However, IRCC has indicated a commitment to prioritize Agriculture and agri-food occupations -specific draws in the future, although no specific timeline has been announced.",
      },
  
      q3: {
        type: String,
        default:
          "Do I need to provide extra documents if I am selected in a Agriculture and agri-food occupations draw?",
      },
      qa3: {
        type: String,
        default:
          "Additional documents are not required; however, it&#39;s essential to ensure that the provided work experience documents distinctly display a minimum of 6 months of Agriculture and agri-food occupation experience within the past 3 years. This experience can be gained either in Canada or abroad.",
      },
      q4: {
        type: String,
        default:
          "My spouse qualifies for an Agriculture and agri-food occupations draw; can my profile receive the ITA?",
      },
      qa4: {
        type: String,
        default:
          " In an Agriculture and agri-food occupations -specific draw, the principal applicant must possess the required experience to receive an ITA. If your spouse meets the criteria, they should create their own Express Entry profile where they are listed as the principal applicant.",
      },

      q5: {
        type: String,
        default:
          "What are the Eligible Agriculture and agri-food occupations?",
      },
      qa5: {
        type: String,
        default:
          "<table> <thead> <tr> <th> Occupation</th><th> 2021 NOC Code</th><th> 2021 TEER Category</th></tr> </thead> <tbody> <tr> <td>Contractors and supervisors, landscaping, grounds maintenance and horticulture services</td> <td>Agricultural service contractors and farm supervisors</td> <td>Butchers- retail and wholesale</td></tr><tr><td>82031</td><td>82030</td><td>63201</td></tr><tr><td>2</td><td>2</td><td>2</td></tr></tbody></table>",
       },
      q6: {
        type: String,
        default:
          "   ",
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

let agricultAndAgriFoodOccuSection = mongoose.model(
  "Agriculture and agri-food occupations Program",
  agricultAndAgriFoodOccuSchema
);
module.exports = agricultAndAgriFoodOccuSection;
