let mongoose = require("mongoose");
let stemTargetedDrawSchema = mongoose.Schema(
  {
    stemTargetedDrawHeading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws: STEM (Science, Technology, Engineering, Math) Occupations",
    },
    stemTargetedDrawPara1: {
      type: String,
      default:
        "Canada's Express Entry system is not just a general immigration tool, but also a strategic resource for targeting specific sectors of the economy. Occasionally, Canada conducts Science, Technology, Engineering, and Math (STEM)-specific draws through the Express Entry system. These draws specifically target candidates who have work experience in eligible STEM occupations.",
    },
    stemTargetedDrawPara2: {
        type: String,
        default:
          "If you're part of the STEM workforce and are considering immigrating to Canada, these specialized draws could be a significant opportunity for you. Stay tuned for more updates on these STEM-specific Express Entry draws and make your move to Canada a successful one.",
      },

    //

      EligibilityFirstHeading: {
      type: String,
      default: "First You Must Be Eligible with Express Entry",
    },

    EligFirstSubHead: {
        type: String,
        default: "Before you can participate in a STEM-specific draw through Canada's Express Entry system, you need to be eligible. Here's how you can get started:",
      },
      EligPara1: {
        type: String,
        default: "Join the Express Entry Pool: The first step towards becoming a candidate for a STEM-specific draw is to get into the Express Entry pool.",
      },
      EligPara2: {
        type: String,
        default: "Choose Your Program: There are three programs you can be eligible for to join the Express Entry pool:",
      },
      
      EligPara2Li1: {
        type: String,
        default: "This program is ideal for tech workers who have the necessary work experience, education, and language ability.",
      },
      EligPara2Li2: {
        type: String,
        default: "Similar to the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.",
      },
      EligPara2Li3: {
        type: String,
        default: "If you're a trades worker, this program is designed for you. It requires proof of relevant work experience, education, and language proficiency.",
      },

      EligPara3: {
        type: String,
        default: "Remember, each program has its own set of eligibility requirements. So, make sure to review these carefully and ensure you meet all the necessary criteria before applying.",
      },

      ///


      ImportantThingsHeading: {
        type: String,
        default: "Important things to keep in mind:",
      },
      ImportantThingsPara: {
        type: String,
        default: "When it comes to the Federal Skilled Worker Program (FSW) BACKLINK and the Canadian Experience Class (CEC) BACKLINK - the two programs most relevant to tech workers - you'll need at least one year of continuous work experience in a skilled occupation. These occupations are classified under 0, 1, 2, and 3 of Canada’s Training Education Experience Responsibilities (TEER) categories.",
      },
      itH: {
        type: String,
        default:
          "Here are a couple of important points to remember:",
      },
    it1: {
      type: String,
      default: "You can accumulate this work experience over two years in part-time roles, as long as it adds up to 1,560 hours, which is equivalent to one year of full-time work.",
    },
    it2: {
      type: String,
      default:
        "The CEC program requires at least one year of skilled work experience in Canada. On the other hand, the FSW program doesn't require any Canadian work experience.",
    },
    ImportantThingsPara2: {
        type: String,
        default: "The reason we're stressing that you need to be eligible for Express Entry is to make it clear that having six months of work experience in a STEM occupation isn't enough to qualify for Express Entry. You need to meet the work experience requirements for at least one of the programs first. If you have one year of work experience in an eligible STEM occupation and meet the other requirements of the CEC or the FSW, then you may be invited in a STEM-specific draw.",
      },

    //
    EligCritHeading: {
        type: String,
        default:
          "Eligibility Criteria for STEM (Science, Technology, Engineering, Math) Occupations",
      },
      EligCritSubHeading: {
        type: String,
        default:
          "To be Eligible in Science, Technology, Engineering, and Math (STEM) occupations category you must meet the following eligibility criteria:",
      },

      ec1: {
        type: String,
        default:
          "A valid university degree in a STEM field.",
      },
      ec2: {
        type: String,
        default:
          "Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible STEM occupation.",
      },
      ec3: {
        type: String,
        default:
          "A valid Express Entry profile.",
      },

         //
         ExpressEntryHeading: {
            type: String,
            default:
              "Express Entry STEM draws history",
          },

          ExpressEntryPara: {
            type: String,
            default:
              "The first ever Express Entry draw for STEM workers was just held. Express Entry draw 254 saw a CRS score of 486 and invited 500 candidates eligible for category-based selection in science, technology, mathematics, and engineering (STEM) occupations.",
          },

         ///



      StemEligTableHeading: {
        type: String,
        default:
          "STEM Eligible NOC Codes",
      },

      stT1h1: {
        type: String,
        default:
          "Occupation",
      },
      stT1Li1: {
        type: String,
        default:
          "Architects",
      },
      stT1Li2: {
        type: String,
        default:
          "Architecture and science managers",
      },
      stT1Li3: {
        type: String,
        default:
          "Business systems specialists",
      },
      stT1Li4: {
        type: String,
        default:
          "Civil Engineers",
      },
      stT1Li5: {
        type: String,
        default:
          "Computer and information systems managers",
      },
      stT1Li6: {
        type: String,
        default:
          "Computer engineers (except software engineers and designers)",
      },
      stT1Li7: {
        type: String,
        default:
          "Computer systems developers and programmers",
      },
      stT1Li8: {
        type: String,
        default:
          "Cybersecurity specialists",
      },
      stT1Li9: {
        type: String,
        default:
          "Data scientists",
      },
      stT1Li10: {
        type: String,
        default:
          "Database analysts and data administrators",
      },
      stT1Li11: {
        type: String,
        default:
          "Electrical and electronics engineers",
      },
      stT1Li12: {
        type: String,
        default:
          "Engineering managers",
      },
      stT1Li13: {
        type: String,
        default:
          "Industrial and manufacturing engineers",
      },
      stT1Li14: {
        type: String,
        default:
          "Information systems specialists",
      },
      stT1Li15: {
        type: String,
        default:
          "Land surveyors",
      },
      stT1Li16: {
        type: String,
        default:
          "Landscape Architects",
      },
      stT1Li17: {
        type: String,
        default:
          "Mathematicians, statisticians and actuaries",
      },
      stT1Li18: {
        type: String,
        default:
          "Metallurgical and materials engineers",
      },
      stT1Li19: {
        type: String,
        default:
          "Natural and applied science policy researchers, consultants and program officers",
      },
      stT1Li20: {
        type: String,
        default:
          "Software developers and programmers",
      },
      stT1Li21: {
        type: String,
        default:
          "Software engineers and designers",
      },
      stT1Li22: {
        type: String,
        default:
          "Urban and land use planners",
      },
      stT1Li23: {
        type: String,
        default:
          "Web designers",
      },
      stT1Li24: {
        type: String,
        default:
          "Web developers and programmers",
      },

      //
      stT2h2: {
        type: String,
        default:
          "2021 NOC Code",
      },
      stT2Li1: {
        type: String,
        default:
          "21200",
      },
      stT2Li2: {
        type: String,
        default:
          "20011",
      },
      stT2Li3: {
        type: String,
        default:
          "21221",
      },
      stT2Li4: {
        type: String,
        default:
          "21300",
      },
      stT2Li5: {
        type: String,
        default:
          "20012",
      },
      stT2Li6: {
        type: String,
        default:
          "21311",
      },
      stT2Li7: {
        type: String,
        default:
          "21230",
      },
      stT2Li8: {
        type: String,
        default:
          "21220",
      },
      stT2Li9: {
        type: String,
        default:
          "21211",
      },
      stT2Li10: {
        type: String,
        default:
          "21223",
      },
      stT2Li11: {
        type: String,
        default:
          "21310",
      },
      stT2Li12: {
        type: String,
        default:
          "20010",
      },
      stT2Li13: {
        type: String,
        default:
          "21321",
      },
      stT2Li14: {
        type: String,
        default:
          "21222",
      },
      stT2Li15: {
        type: String,
        default:
          "21203",
      },
      stT2Li16: {
        type: String,
        default:
          "21201",
      },
      stT2Li17: {
        type: String,
        default:
          "21210",
      },
      stT2Li18: {
        type: String,
        default:
          "21322",
      },
      stT2Li19: {
        type: String,
        default:
          "41400",
      },
      stT2Li20: {
        type: String,
        default:
          "21232",
      },
      stT2Li21: {
        type: String,
        default:
          "21231",
      },
      stT2Li22: {
        type: String,
        default:
          "21202",
      },
      stT2Li23: {
        type: String,
        default:
          "21233",
      },
      stT2Li24: {
        type: String,
        default:
          "21234",
      },
      //
      stT3h3: {
        type: String,
        default:
          "TEER Category",
      },
      stT3Li1: {
        type: String,
        default:
          "1",
      },
      stT3Li2: {
        type: String,
        default:
          "0",
      },
      stT3Li3: {
        type: String,
        default:
          "1",
      },
      stT3Li4: {
        type: String,
        default:
          "1",
      },
      stT3Li5: {
        type: String,
        default:
          "0",
      },
      stT3Li6: {
        type: String,
        default:
          "1",
      },
      stT3Li7: {
        type: String,
        default:
          "1",
      },
      stT3Li8: {
        type: String,
        default:
          "1",
      },
      stT3Li9: {
        type: String,
        default:
          "1",
      },
      stT3Li10: {
        type: String,
        default:
          "1",
      },
      stT3Li11: {
        type: String,
        default:
          "1",
      },
      stT3Li12: {
        type: String,
        default:
          "0",
      },
      stT3Li13: {
        type: String,
        default:
          "1",
      },
      stT3Li14: {
        type: String,
        default:
          "1",
      },
      stT3Li15: {
        type: String,
        default:
          "1",
      },
      stT3Li16: {
        type: String,
        default:
          "1",
      },
      stT3Li17: {
        type: String,
        default:
          "1",
      },
      stT3Li18: {
        type: String,
        default:
          "1",
      },
      stT3Li19: {
        type: String,
        default:
          "1",
      },
      stT3Li20: {
        type: String,
        default:
          "1",
      },
      stT3Li21: {
        type: String,
        default:
          "1",
      },
      stT3Li22: {
        type: String,
        default:
          "1",
      },
      stT3Li23: {
        type: String,
        default:
          "1",
      },
      stT3Li24: {
        type: String,
        default:
          "1",
      },
      //

  //
///

      //
   
    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },

    WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us",
      },
      wc: {
        type: String,
        default:
          "Brightlight Immigration offers personalized services to maximize your chances of success. Our experienced team provides dedicated support throughout the immigration process, ensuring a smooth and efficient experience.",
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
          "What is the immigration target for Canada in 2024? ",
      },
      qa1: {
        type: String,
        default:
          "For its 2024-2026 targets, the government of Canada has announced that, following the trajectory of its 2023-2025 plan, it will aim to welcome 485,000 new permanent residents in 2024, 500,000 in 2025 and plateau at 500,000 in 2026 ",
      },
      q2: {
        type: String,
        default:
          " If I have a STEM Occupation, does my CRS score still matter? ",
      },
      qa2: {
        type: String,
        default:
          " Your CRS score remains crucial even with a STEM occupation. However, in STEM-specific draws, the CRS score needed to secure an ITA tends to be lower compared to comprehensive program draws. For example, in the inaugural STEM draw, the CRS cutoff stood at 486, notably lower than the 511 required in concurrent all-program draws.",
      },
  
      q3: {
        type: String,
        default:
          "How often will IRCC hold STEM draws? ",
      },
      qa3: {
        type: String,
        default:
          "There is no set schedule of STEM-specific draws by IRCC. However, IRCC has indicated a commitment to prioritize STEM draws in the future, although no specific timeline has been announced. ",
      },
      q4: {
        type: String,
        default:
          "Do I need to provide extra documents if I am selected in a STEM- Specific draw? ",
      },
      qa4: {
        type: String,
        default:
          "Additional documents are not required; however, it&#39;s essential to ensure that the provided work experience documents distinctly display a minimum of 6 months of STEM experience within the past 3 years. ",
      },
      q5: {
        type: String,
        default:
          "My spouse qualifies for a STEM-specific draw, can my profile receive the ITA?",
      },
      qa5: {
        type: String,
        default:
          " In a STEM-specific draw, the principal applicant must possess the required experience to receive an ITA. If your spouse meets the criteria, they should create their own Express Entry profile where they are listed as the principal applicant.",
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
    timeStamps: true,
  }
);

let stemTargetedDrawSection = mongoose.model(
  "STEM  Occupations Program",
  stemTargetedDrawSchema
);
module.exports = stemTargetedDrawSection;
