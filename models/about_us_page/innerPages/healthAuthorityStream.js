let mongoose = require("mongoose");
let hasSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default: "British Columbia Health Authority Stream",
    },
    Description: {
      type: String,
      default:
        "The British Columbia Health Authority Stream is one of the specialized immigration streams within the British Columbia Provincial Nominee Program (BCPNP), operated by the province of British Columbia. This stream aims to attract skilled immigrants who can contribute significantly to the healthcare infrastructure in BC.",
    },

    topSectionNote: {
      type: String,
      default:
        "Note: This stream is different from healthcare priority occupations applying under BCPNP Skilled Worker or International Graduate streams.",
    },

    //
    BenifitsHeading: {
      type: String,
      default: "Benefits of British Columbia Health Authority Stream",
    },

    BenifitsList1: {
      type: String,
      default:
        "<strong>Job Offer:</strong> The job offer can fall under any NOC tier, ranging from 0 to 5. It does not have to be a high-skilled occupation or related to healthcare.",
    },
    BenifitsList2: {
      type: String,
      default:
        "<strong>No Draws:</strong> The BC Health Authority stream operates without draws. All you need to do is meet the eligibility criteria for this program.",
    },
    BenifitsList3: {
      type: String,
      default:
        "<strong>Nomination Priority:</strong> Successful candidates nominated through the BC Health Authority Program receive an invitation to apply for Canadian permanent residence.",
    },
    BenifitsList4: {
      type: String,
      default:
        "<strong>No Express Entry Profile Required:</strong> Unlike other immigration streams, applicants for this program do not need an Express Entry profile to be eligible.",
    },
    BenifitsList5: {
      type: String,
      default:
        "<strong>Accelerated Processing:</strong> While Express Entry is not mandatory, candidates with an active profile may choose to apply through the Express Entry system for faster processing.",
    },
    //

    //
    EligibilityHeading: {
      type: String,
      default: "Eligibility for the British Columbia Health Authority Stream",
    },

    EligibilitySubHead: {
      type: String,
      default:
        "To qualify for this stream, applicants must meet the following requirements:",
    },
    EligibilityList1: {
      type: String,
      default:
        "Hold an indeterminate (no defined end date), full-time job offer in ANY occupation from one of B.C. public health authorities listed below:",
    },
    EligibilityList1NestedList1: {
      type: String,
      default: "Provincial Health Services Authority",
    },
    EligibilityList1NestedList2: {
      type: String,
      default: "First Nations Health Authority",
    },
    EligibilityList1NestedList3: {
      type: String,
      default: "Fraser Health",
    },
    EligibilityList1NestedList4: {
      type: String,
      default: "Interior Health",
    },
    EligibilityList1NestedList5: {
      type: String,
      default: "Island Health",
    },

    EligibilityList1NestedList6: {
      type: String,
      default: "Northern Health",
    },
    EligibilityList1NestedList7: {
      type: String,
      default: "Vancouver Coastal Health",
    },
    EligibilityList1NestedList8: {
      type: String,
      default: "Providence Health Care",
    },

    EligibilityList1Point2: {
      type: String,
      default:
        "Alternatively, possess a letter from a health authority or midwife practice group confirming your role as a physician, nurse practitioner, or midwife in British Columbia.",
    },

    EligibilityList2: {
      type: String,
      default: "Education and Qualifications",
    },
    EligibilityList2NestedList1: {
      type: String,
      default:
        "Satisfy the education, training, experience, and qualification criteria specified by the public health authority.",
    },

    EligibilityList3: {
      type: String,
      default: "Health Authority Support",
    },
    EligibilityList3NestedList1: {
      type: String,
      default:
        "The health authority must provide recommendation and support your application.",
    },

    EligibilityList4: {
      type: String,
      default: "Language",
    },
    EligibilityList4NestedList1: {
      type: String,
      default:
        "If the Job Offer's NOC code is of TEER Category 0 or 1, you do not need language results to be eligible (BCPNP can still ask you to pass a language test at their own discretion).",
    },
    EligibilityList4NestedList2: {
      type: String,
      default:
        "If the Job Offer's NOC code is of TEER Category 2, 3, 4 or 5, you will need to have a Canadian Language Benchmark (CLB) score of at least 4 to be eligible.",
    },

    EligibilityList5: {
      type: String,
      default: "Financial Capability",
    },
    EligibilityList5NestedList1: {
      type: String,
      default:
        "Demonstrate that you can support yourself and your dependents during your stay in British Columbia.",
    },

    ExpEntryOptionHeading: {
      type: String,
      default: "Express Entry BC (EEBC) Option:",
    },

    ExpEntryOptionPara1: {
      type: String,
      default:
        "Applicants who meet the eligibility criteria can also explore the Express Entry BC (EEBC) option for accelerated processing.",
    },
    ExpEntryOptionPara2: {
      type: String,
      default:
        "Please note*** that if your job offer falls within a priority technology occupation, it does not need to be indeterminate.",
    },
    ApplyHeading: {
      type: String,
      default: "How to Apply for BC Health Authority Stream?",
    },
    ApplyList1: {
      type: String,
      default:
        "The BC Health Authority stream accepts new applications at any time.",
    },
    ApplyList2: {
      type: String,
      default:
        "Specify whether you are applying through the Express Entry system or non-Express Entry system.",
    },
    ApplyList3: {
      type: String,
      default:
        "Provide resume, job description, recommendation letter, and BC PNP Employer Declaration Form from one of the health authorities.",
    },
    ApplyList4: {
      type: String,
      default:
        "Upon approval, candidates receive a provincial nomination for permanent residence from BC.",
    },
    ApplyList5: {
      type: String,
      default:
        "Candidates can also request a work permit support letter if their work permit is expiring or if they do not have a work permit at all. This allows them to work in Canada while their permanent residence application is processed.",
    },
    ApplyList6: {
      type: String,
      default:
        "If applying through Express Entry, candidates receive a nomination notification on their IRCC online account. Accepting the nomination boosts their Comprehensive Ranking System (CRS) score by 600 points, and hence guarantees an Invitation to Apply (ITA) for permanent residence.",
    },
    ApplyList7: {
      type: String,
      default:
        "If applying through the non-Express Entry system, candidates must prepare a paper-based application and submit it online.",
    },
    //

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling BCPNP Health Authority Program. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
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
        " Do I need high-skilled job offer from one of B.C.’s public health authorities to qualify for Health Authority Stream?",
    },
    qa1: {
      type: String,
      default:
        " No, the best thing about this program is that your job offer can be in any occupation and at any NOC TEER category.",
    },
    q2: {
      type: String,
      default:
        " I work in a hospital but paid through a private company, am I eligible for BC Health Authority Stream?",
    },
    qa2: {
      type: String,
      default:
        " No, the job offer and payroll should be directly from one of B.C.’s public health authorities to qualify for the Health Authority Stream.",
    },

    q3: {
      type: String,
      default:
        "Do I need healthcare related job offer from one of B.C.’s public health authorities to qualify for Health Authority Stream?",
    },
    qa3: {
      type: String,
      default:
        "No, the good thing about this program is that your job offer can be in any occupation, that is related or not related to healthcare, and at any NOC TEER category.",
    },
    q4: {
      type: String,
      default:
        " Do I need full-time job offer from one of B.C.’s public health authorities to qualify for Health Authority Stream?",
    },
    qa4: {
      type: String,
      default:
        "  Your hours of work listed on your job offer has to be more than 30 hour per week.",
    },

    q5: {
      type: String,
      default:
        "How soon can I submit my application under BC Health Authority Stream?",
    },
    qa5: {
      type: String,
      default:
        " You can submit as soon as your meet the requirements of the program and have been offered 30 hours of work per week by one of B.C.’s public health authorities.    ",
     },
    q6: {
      type: String,
      default:
        "Do I need to meet any cut-off or point system to qualify for BC Health Authority Stream?",
    },
    qa6: {
      type: String,
      default:
        "  There are no criteria for cut-off or points system to qualify for BC Health Authority Stream. BC Health Authority Stream doesn’t require any registration on BCPNP website. You are required to directly submit the application.",
    },

    q7: {
      type: String,
      default:
        " I am planning to apply under BC Health Authority Stream. The facility I’m working with is under one of the health authorities in BC, it’s a semi-private institution, been employed for a year. Am I eligible?",
    },
    qa7: {
      type: String,
      default:
        "   Your employer is the one who pays you. Check your paystubs and verify the name of the employer. If it is from one of B.C.’s public health authorities, then you qualify for BC Health Authority Stream. If it is a private employer, then you do not qualify. ",
    },

    q8: {
      type: String,
      default:
        "Can I apply for BC Health Authority stream with Express Entry profile? ",
    },
    qa8: {
      type: String,
      default:
        " Yes, you can if you qualify for BC Health Authority stream. Express Entry profile is not mandatory.",
    },
    
    q9: {
      type: String,
      default:
        "What does it mean to be a direct employee of a provincial health authority in the context of the BC PNP? ",
    },
    qa9: {
      type: String,
      default:
        " Being a direct employee of a provincial health authority means working under the employment of a government-operated health organization within the province of British Columbia. These professionals are typically employed in various roles within the healthcare system, such as nurses, physicians, therapists, administrators, and support staff. ",
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

let healthAuthorityStreamSection = mongoose.model(
  "Health Authority Stream Page",
  hasSchema
);
module.exports = healthAuthorityStreamSection;
