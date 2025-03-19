let mongoose = require("mongoose");
let transportOccupationSchema = mongoose.Schema(

    {
      transportOccuptionTargDrawHeading: {
        type: String,
        default: " Category-Based Express Entry Selection Draws: Transport Occupations",
      },
      transportOccuptionTargDrawPara: {
        type: String,
        default:
          "The Transport Occupations category encompasses a range of vital roles essential for the smooth functioning of the transport sector. These roles include aircraft assemblers, transport truck drivers, railway traffic controllers, marine traffic regulators, air traffic controllers, pilots, aircraft mechanics, railway carmen/women, and transportation managers.",
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
          default: "  Like the FSW program, the CEC is also suitable for tech workers who have gained Canadian work experience.",
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
  
      //
      EligCritHeading: {
          type: String,
          default:
            "Eligibility Criteria for Transport Occupations Category",
        },
        EligCritSubHead: {
          type: String,
          default:
            " Once you have met eligibility for one of the Express Entry programs, now you need to meet eligibility for Transport specific criteria:",
        },
  
        ec1: {
          type: String,
          default:
            "Within the last 3 years, you have at least 6 months of full-time, continuous work experience (or an equivalent amount of part-time work experience) in a single eligible transport occupation. This experience can be gained either in Canada or abroad.",
        },
        ec2: {
          type: String,
          default:
            "A valid Express Entry profile.",
        },
  
           //
  
  
           ///
  
  
  
        EligTransportOccuTableHeading: {
          type: String,
          default:
            "Eligible Transport Occupations",
        },
  
        etroT1h1: {
          type: String,
          default:
            "Occupations",
        },
        etroT1Li1: {
          type: String,
          default:
            "Aircraft assemblers and aircraft assembly inspectors",
        },
        //
        etroT1Li2: {
          type: String,
          default:
            "Transport truck drivers",
        },
        //
        etroT1Li3: {
          type: String,
          default:
            "Railway traffic controllers and marine traffic regulators",
        },
        etroT1Li4: {
          type: String,
          default:
            "Engineer officers, water transport",
        },
        etroT1Li5: {
          type: String,
          default:
            "Deck officers, water transport",
        },
        etroT1Li6: {
          type: String,
          default:
            "Air traffic controllers and related occupations",
        },
        etroT1Li7: {
          type: String,
          default:
            "Air pilots, flight engineers and flying instructors",
        },
        etroT1Li8: {
          type: String,
          default:
            "Aircraft mechanics and aircraft inspectors",
        },
        etroT1Li9: {
          type: String,
          default:
            "Railway carmen/women",
        },
        etroT1Li10: {
          type: String,
          default:
            "Managers in transportation",
        },
       
        //
        etroT2h2: {
          type: String,
          default:
            "2021 NOC Code",
        },
        etroT2Li1: {
          type: String,
          default:
            "93200",
        },
        etroT2Li2: {
          type: String,
          default:
            "73300",
        },
        etroT2Li3: {
          type: String,
          default:
            "72604",
        },
        etroT2Li4: {
          type: String,
          default:
            "72603",
        },
        etroT2Li5: {
          type: String,
          default:
            "72602",
        },
        etroT2Li6: {
          type: String,
          default:
            "72601",
        },
        etroT2Li7: {
          type: String,
          default:
            "72600",
        },
        etroT2Li8: {
          type: String,
          default:
            "72404",
        },
        etroT2Li9: {
          type: String,
          default:
            "72403",
        },
        etroT2Li10: {
          type: String,
          default:
            "70020",
        },
       
        //
        etroT3h3: {
          type: String,
          default:
            "2021 TEER Category",
        },
        etroT3Li1: {
          type: String,
          default:
            "3",
        },
        etroT3Li2: {
          type: String,
          default:
            "3",
        },
        etroT3Li3: {
          type: String,
          default:
            "2",
        },
        etroT3Li4: {
          type: String,
          default:
            "2",
        },
        etroT3Li5: {
          type: String,
          default:
            "2",
        },
        etroT3Li6: {
          type: String,
          default:
            "2",
        },
        etroT2Li7: {
          type: String,
          default:
            "2",
        },
        etroT3Li8: {
          type: String,
          default:
            "2",
        },
        etroT3Li9: {
          type: String,
          default:
            "2",
        },
        etroT3Li10: {
          type: String,
          default:
            "0",
        },      
  
    //
    ExpressEntryHeading: {
      type: String,
      default:
        "Express Entry Transport Draws History",
    },
  
    ExpressEntryPara: {
      type: String,
      default:
        "The first-ever Express Entry draw for Transport occupation workers was held in September 2023. Express Entry draw #264 saw a CRS score of 435 and invited 1000 candidates eligible for category-based selection in Transport occupations.",
    },
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
  //
      WhyChooseUsHeading: {
          type: String,
          default: "Why Choose Us",
        },
        wc: {
          type: String,
          default:
            "Here is where you can describe why clients should choose your services over others. Highlight your unique selling points, such as personalized service, high success rates, and expert knowledge.",
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
    },
    {
      timeStamps: true,
    }
  );
  
let transportOccupationSection = mongoose.model(
  "Transport Occupation Section",
  transportOccupationSchema
);
module.exports = transportOccupationSection;
