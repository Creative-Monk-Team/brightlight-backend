let mongoose = require("mongoose");
let federalSkilledSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Federal Skilled Worker Program Calculator",
    },
    description: {
      type: String,
      default:
        "In order to be eligible under the Federal Skilled Worker (FSW) Program under the Express Entry Program, you need to meet the general eligibility requirements (link to FSWP Page), and score a minimum of 67 out of 100 points in the FSW selection factors. The points are awarded for different factors, also known as six selection factors. Calculate whether you have enough FSW selection factor points below.In order to be eligible under the Federal Skilled Worker (FSW) Program under the Express Entry Program, you need to meet the general eligibility requirements (link to FSWP Page), and score a minimum of 67 out of 100 points in the FSW selection factors. The points are awarded for different factors, also known as six selection factors. Calculate whether you have enough FSW selection factor points below.",
    },
    description2: {
      type: String,
      default: "",
    },
    firstSectionHeading: {
      type: String,
      default: "First Official Language (Max. 24 Points)",
    },
    fsq1: {
      type: String,
      default: "Speaking (CLB Level)",
    },
    fsq1o1: {
      type: String,
      default: "CLB 9 and Higher",
    },
    fsq1o1p: {
      type: String,
      default: "6",
    },
    fsq1o2: {
      type: String,
      default: "CLB 8",
    },
    fsq1o2p: {
      type: String,
      default: "5",
    },
    fsq1o3: {
      type: String,
      default: "CLB 7",
    },
    fsq1o3p: {
      type: String,
      default: "4",
    },
    fsq1o4: {
      type: String,
      default: "Below CLB 7",
    },
    fsq1o4p: {
      type: String,
      default: "Not Eligible to Apply",
    },

    fsq2: {
      type: String,
      default: "Listening (CLB Level)",
    },
    fsq2o1: {
      type: String,
      default: "CLB 9 and Higher",
    },
    fsq2o1p: {
      type: String,
      default: "6",
    },
    fsq2o2: {
      type: String,
      default: "CLB 8",
    },
    fsq2o2p: {
      type: String,
      default: "5",
    },
    fsq2o3: {
      type: String,
      default: "CLB 7",
    },
    fsq2o3p: {
      type: String,
      default: "4",
    },
    fsq2o4: {
      type: String,
      default: "Below CLB 7",
    },
    fsq2o4p: {
      type: String,
      default: "Not Eligible to Apply",
    },

    fsq3: {
      type: String,
      default: "Reading (CLB Level)",
    },
    fsq3o1: {
      type: String,
      default: "CLB 9 and Higher",
    },
    fsq3o1p: {
      type: String,
      default: "6",
    },
    fsq3o2: {
      type: String,
      default: "CLB 8",
    },
    fsq3o2p: {
      type: String,
      default: "5",
    },
    fsq3o3: {
      type: String,
      default: "CLB 7",
    },
    fsq3o3p: {
      type: String,
      default: "4",
    },
    fsq3o4: {
      type: String,
      default: "Below CLB 7",
    },
    fsq3o4p: {
      type: String,
      default: "Not Eligible To Apply",
    },
    fsq4: {
      type: String,
      default: "Writing (CLB Level)",
    },
    fsq4o1: {
      type: String,
      default: "CLB 9 and Higher",
    },
    fsq4o1p: {
      type: String,
      default: "6",
    },
    fsq4o2: {
      type: String,
      default: "CLB 8",
    },
    fsq4o2p: {
      type: String,
      default: "5",
    },
    fsq4o3: {
      type: String,
      default: "CLB 7",
    },
    fsq4o3p: {
      type: String,
      default: "4",
    },
    fsq4o4: {
      type: String,
      default: "Below CLB 7",
    },
    fsq4o4p: {
      type: String,
      default: "Not Eligible To Apply",
    },

    secondSectionHeading: {
      type: String,
      default: "Do you have at least CLB 5 in all abilities?",
    },

    ssq1: {
      type: String,
      default: "",
    },
    ssq1o1: {
      type: String,
      default: "Yes",
    },
    ssq1o1p: {
      type: String,
      default: "10",
    },
    ssq1o2: {
      type: String,
      default: "No",
    },
    ssq1o2p: {
      type: String,
      default: "5",
    },

    thirdSectionHeading: {
      type: String,
      default: "",
    },

    tsq1: {
      type: String,
      default: "Highest level of Education (Max. 25 Points)",
    },
    tsq1o1: {
      type: String,
      default: "University Degree at the Doctoral (PhD) level or equal",
    },
    tsq1o1p: {
      type: String,
      default: "10",
    },
    tsq1o2: {
      type: String,
      default:
        "University Degree at the master's level or equal or University level entry-to-practice professional degree (or equal)",
    },
    tsq1o2p: {
      type: String,
      default: "1",
    },

    tsq1o3: {
      type: String,
      default:
        "Two or more Canadian post-secondary degrees or diplomas or equal (at least one must be for a program of at least 3 years)",
    },
    tsq1o3p: {
      type: String,
      default: "5",
    },
    tsq1o4: {
      type: String,
      default:
        "Canadian post-secondary degree or diploma for a program of three years or longer, or equal",
    },
    tsq1o4p: {
      type: String,
      default: "5",
    },

    tsq1o5: {
      type: String,
      default:
        "Canadian post-secondary degree or diploma for a program of two years or longer, or equal",
    },
    tsq1o5p: {
      type: String,
      default: "2",
    },
    tsq1o6: {
      type: String,
      default:
        "Canadian post-secondary degree or diploma for a program of one year or longer, or equal",
    },
    tsq1o6p: {
      type: String,
      default: "5",
    },

    tsq1o7: {
      type: String,
      default: "Canadian High School diploma, or equal",
    },
    tsq1o7p: {
      type: String,
      default: "10",
    },

    fourthSectionHeading: {
      type: String,
      default: "",
    },

    fosq1: {
      type: String,
      default: "Age (maximum 12 points):",
    },
    fosq1o1: {
      type: String,
      default: "Under 18",
    },
    fosq1o1p: {
      type: String,
      default: "0",
    },

    fosq1o2: {
      type: String,
      default: "18-35",
    },
    fosq1o2p: {
      type: String,
      default: "12",
    },

    fosq1o3: {
      type: String,
      default: "36",
    },
    fosq1o3p: {
      type: String,
      default: "11",
    },

    fosq1o4: {
      type: String,
      default: "37",
    },
    fosq1o4p: {
      type: String,
      default: "10",
    },

    fosq1o5: {
      type: String,
      default: "38",
    },
    fosq1o5p: {
      type: String,
      default: "9",
    },

    fosq1o6: {
      type: String,
      default: "39",
    },
    fosq1o6p: {
      type: String,
      default: "8",
    },

    fosq1o7: {
      type: String,
      default: "40",
    },
    fosq1o7p: {
      type: String,
      default: "7",
    },

    fosq1o8: {
      type: String,
      default: "41",
    },
    fosq1o8p: {
      type: String,
      default: "6",
    },

    fosq1o9: {
      type: String,
      default: "42",
    },
    fosq1o9p: {
      type: String,
      default: "5",
    },

    fosq1o10: {
      type: String,
      default: "43",
    },
    fosq1o10p: {
      type: String,
      default: "4",
    },

    fosq1o11: {
      type: String,
      default: "44",
    },
    fosq1o11p: {
      type: String,
      default: "3",
    },

    fosq1o12: {
      type: String,
      default: "45",
    },
    fosq1o12p: {
      type: String,
      default: "2",
    },

    fosq1o13: {
      type: String,
      default: "46",
    },
    fosq1o13p: {
      type: String,
      default: "1",
    },

    fosq1o14: {
      type: String,
      default: "47 and older",
    },
    fosq1o14p: {
      type: String,
      default: "0",
    },

    fifthSectionHeading: {
      type: String,
      default: "",
    },

    ffsq1: {
      type: String,
      default: "Arranged Employment in Canada (Max. 10 Points)",
    },
    ffsq1o1: {
      type: String,
      default: "Do you have a valid arranged employment in Canada? ",
    },
    ffsq1o1p: {
      type: String,
      default: "10",
    },

    ffsq1o2: {
      type: String,
      default: "No valid job offers?",
    },
    ffsq1o2p: {
      type: String,
      default: "0",
    },

    sixthSectionHeading: {
      type: String,
      default: "",
    },

    sxsq1: {
      type: String,
      default: "Work experience (maximum 15 points)",
    },
    sxsq1o1: {
      type: String,
      default: "1 Year",
    },
    sxsq1o1p: {
      type: String,
      default: "9",
    },

    sxsq1o2: {
      type: String,
      default: "2-3 Years",
    },
    sxsq1o2p: {
      type: String,
      default: "11",
    },

    sxsq1o3: {
      type: String,
      default: "4-5 Years",
    },
    sxsq1o3p: {
      type: String,
      default: "13",
    },

    sxsq1o4: {
      type: String,
      default: "6 or More Years",
    },
    sxsq1o4p: {
      type: String,
      default: "15",
    },

    seventhSectionHeading: {
      type: String,
      default: "",
    },

    svsq1: {
      type: String,
      default: "Adaptability (maximum 10 points) ",
    },
    svsq1o1: {
      type: String,
      default:
        "Your spouse or partner’s language level: Spouse or common-law partner has a CLB 4 or higher in all 4 language abilities ",
    },
    svsq1o1p: {
      type: String,
      default: "5",
    },

    svsq1o2: {
      type: String,
      default:
        "Your past studies in Canada You completed at least 2 academic years of full-time study at a secondary or post-secondary school in Canada ",
    },
    svsq1o2p: {
      type: String,
      default: "5",
    },

    svsq1o3: {
      type: String,
      default:
        "Your spouse or partner’s past studies in Canada: Spouse or common-law partner completed at least 2 academic years of full-time study in Canada",
    },
    svsq1o3p: {
      type: String,
      default: "5",
    },

    svsq1o4: {
      type: String,
      default:
        "Your past work in Canada: You completed at least 1 year of full-time work in Canada in a TEER 0, 1, 2, or 3 categories ",
    },
    svsq1o4p: {
      type: String,
      default: "10",
    },

    svsq1o5: {
      type: String,
      default:
        "Your spouse or partner’s past work in Canada:  Spouse or common-law partner completed at least 1 year of full-time work in Canada",
    },
    svsq1o5p: {
      type: String,
      default: "5",
    },

    svsq1o6: {
      type: String,
      default:
        "Arranged employment in Canada: Do you have a qualifying offer of arranged employment?",
    },
    svsq1o6p: {
      type: String,
      default: "5",
    },

    svsq1o7: {
      type: String,
      default:
        "Relatives in Canada: You or your spouse/common-law partner have a relative who is 18 years or older, a Canadian citizen or permanent resident",
    },
    svsq1o7p: {
      type: String,
      default: "5",
    },
  },
  {
    timestamps: true,
  }
);

let federalSkilledSection = mongoose.model(
  "Federal Skilled Worker Program Calculator",
  federalSkilledSchema
);
module.exports = federalSkilledSection;
