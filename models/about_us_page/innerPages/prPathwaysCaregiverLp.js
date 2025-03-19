let mongoose = require("mongoose");
let prPathwaysCaregiverSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Permanent Residence Pathways available for Caregivers",
    },
    description: {
      type: String,
      default:
        "The caregivers play a crucial role in contributing to the Canadian economy by providing invaluable support to families and individuals in need. The caregiver program by Immigration, Refugees and Citizenship Canada offers a pathway to permanent residency in Canada for individuals who provide the essential care.",
    },
    availableHeading: {
      type: String,
      default:
        "Here are the permanent residence pathways available for caregivers:",
    },
    a1: {
      type: String,
      default:
        "(Category A – Gaining experience) for Home Child-Care Provider Pilot and Home Support Worker Pilot - Scroll to section Below",
    },
    a2: {
      type: String,
      default:
        "(Category B – Direct to permanent residence) for Home Child-Care Provider Pilot and Home Support Worker Pilot Scroll to section Below",
    },
    benfitsHeading: {
      type: String,
      default:
        "Benefits of Permanent Residence Pathways available for Caregivers:",
    },
    b1: {
      type: String,
      default:
        "Caregiver pathways provide you with an opportunity to apply for permanent residence, after gaining 12 months of experience in Canada.",
    },
    b2: {
      type: String,
      default:
        "The permanent residence applications do not have any points system like Express Entry or provincial nomination programs. It is based on a first-come, first-served basis.",
    },
    b3: {
      type: String,
      default:
        "The language requirements for both work permit and permanent residency application are very low.",
    },
    b4: {
      type: String,
      default:
        "The spouse and dependent children can accompany you throughout the process.",
    },
    eligibleHeading: {
      type: String,
      default:
        "Eligibility criteria for Permanent Residence Pathways available for Caregivers:",
    },
    e1: {
      type: String,
      default: "1. Qualifying Occupations:",
    },
    e1d1: {
      type: String,
      default:
        "In the caregiver program, only two occupations are allowed for the purpose of defining the occupation mentioned in the job offer as well as the in-Canada qualify work experience to apply for permanent residency:",
    },
    e1d2: {
      type: String,
      default: "The two National Occupational Classification (NOC) codes are:",
    },
    e1l1: {
      type: String,
      default: "NOC 44100: Home childcare providers -",
    },
    e1l1d: {
      type: String,
      default:
        "If you care for the well-being and physical and social development of children, then you qualify for this NOC code. Nanny, babysitter, and parent’s helper are included in this NOC. Foster parents, babysitters at a fitness center or a shopping center are not included in this NOC.",
    },

    e1l1: {
      type: String,
      default: "NOC 44101: Home support workers -",
    },
    e1l1d: {
      type: String,
      default:
        "If you provide personal care and companionship for seniors, persons with disabilities, and convalescent clients in the employer’s home, then you qualify for this NOC code. If you are employed at a nursing home or other such institution, you do not qualify for this NOC.",
    },

    e2: {
      type: String,
      default: "2. Application Categories:",
    },
    e2d1: {
      type: String,
      default: "There are 2 categories you can apply under:",
    },
    e2l1: {
      type: String,
      default:
        "a. Applicants without 12 months of Qualifying Canadian work experience (Category A – Gaining experience)",
    },
    e2l2: {
      type: String,
      default:
        "b. Applicants with 12 months of Qualifying Canadian work experience (Category B – Direct to permanent residence)",
    },

    e2: {
      type: String,
      default: "3. Education:",
    },
    e2d1: {
      type: String,
      default: "You are required have either of the following:",
    },
    e3l1: {
      type: String,
      default:
        "Canadian 1-year post-secondary (or higher) educational credential.",
    },
    e3l2: {
      type: String,
      default:
        "1-year post-secondary outside Canada education program, equivalent to Canadian 1-year post-secondary (or higher) educational credential, with Educational Credential Assessment (ECA) report issued for immigration purposes by an organization designated by IRCC, within the last 5 years.",
    },
    e4: {
      type: String,
      default: "4. Language requirements:",
    },
    e4l1: {
      type: String,
      default: "CLB 5 in reading, writing, speaking, and listening.",
    },
    e4l2: {
      type: String,
      default: "IELTS: reading-4, writing-5, speaking-5, and listening-5",
    },
    e4l3: {
      type: String,
      default: "CELPIP-G: 5 in reading, writing, speaking, and listening..",
    },
    e4l4: {
      type: String,
      default:
        "PTE: reading-(42-50), writing-(51-59), speaking-(51-58), and listening-(39-49).",
    },
    e5: {
      type: String,
      default:
        "5. Qualifying Canadian work experience and permanent residency application categories:",
    },
    e5h1: {
      type: String,
      default: "Applicants under Category A – Gaining experience:",
    },
    e5d1: {
      type: String,
      default:
        "If you are a permanent residency applicant without 12 months of Qualifying Canadian work experience (Category A – Gaining experience), then you will be issued an occupation-restricted open work permit (OROWP). Within 36 months of the OROWP being issued, you are required to submit proof of at least 12 months of authorized full-time work experience. You will also be required to provide the following with the application:",
    },
    e5h1l1: {
      type: String,
      default:
        "An employment offer from a qualifying Canadian employer in either NOC 44101: Home support workers or NOC 44100: Home childcare providers.",
    },
    e5h1l2: {
      type: String,
      default:
        "Documents from the home country to prove that you can perform the job duties mentioned in the employment offer such as employer reference letters, employment records, work contracts, pay stubs, copies of relevant education credentials or training, which can include diplomas or certificates training.",
    },
    e5h2: {
      type: String,
      default: "Applicants under Category B – Direct to Permanent residence:",
    },
    e5d1: {
      type: String,
      default:
        "If you are a permanent residency applicant with 12 months of Qualifying Canadian work experience (Category B – Direct to permanent residence), then you submit the documents to prove your work experience upfront.",
    },
    applyHeading: {
      type: String,
      default:
        "How to apply for Permanent Residence Pathways available for Caregivers?",
    },
    ap1: {
      type: String,
      default:
        "Select the right program as per your qualifications - HCCP or HSWP",
    },
    ap2: {
      type: String,
      default:
        "Choose the right category - Category A (gaining experience) or Category B (Direct to PR), depending upon your situation",
    },
    ap3: {
      type: String,
      default:
        "Apply for education credential evaluation of your education program if studied outside Canada.",
    },
    ap4: {
      type: String,
      default: "Appear for an acceptable English test.",
    },
    experience: {
      type: String,
      default:
        "Now if you are applying to Gaining Experience category of Caregiver pilot:",
    },
    ex1: {
      type: String,
      default:
        "If you do not have qualifying Canadian experience, look for a genuine job offer.",
    },
    ex2: {
      type: String,
      default:
        "Complete your work permit and PR application after ensuring IRCC is still accepting applications for either HCCP or HSWP.",
    },
    ex3: {
      type: String,
      default: "Provide medical exam sheet and police clearance to IRCC.",
    },
    ex4: {
      type: String,
      default: "Pay IRCC fees and submit the application.",
    },
    ex5: {
      type: String,
      default:
        "You will receive an occupation-restricted open work permit (OROWP) and letter of introduction for a work permit for port of entry.",
    },
    ex6: {
      type: String,
      default:
        "Get 12 months of qualifying work experience in Canada within 36 months of receiving OROWP.",
    },
    ex7: {
      type: String,
      default: "Provide proof of work experience to IRCC.",
    },
    directHeading: {
      type: String,
      default:
        "Now if you are applying to Direct to PR category of Caregiver pilot:",
    },
    d1: {
      type: String,
      default:
        "If you have qualifying Canadian experience of 12 months, prepare PR application after ensuring IRCC is still accepting applications for either HCCP or HSWP.",
    },
    d2: {
      type: String,
      default: "Provide medical exam sheet and police clearance to IRCC.",
    },
    d3: {
      type: String,
      default: "Pay IRCC fees and submit the application.",
    },
    d4: {
      type: String,
      default:
        "Apply for Bridging Open Work Permit if your current work permit is expiring.",
    },

    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a Request for an additional document, do not worry. We can help you with your application. With over a decade of experience, we have guided many when it comes to providing additional documents..",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Just reach out to us, and we'll handle the rest. You keep your focus on your Canadian ambition, and we'll focus on making it happen smoothly.",
    },
    faq_heading: {
      type: String,
      default:
        "FAQ's Made Simple",
    },
    q1: {
      type: String,
      default:
        " ",
    },
    qa1: {
      type: String,
      default:
        " ",
    },
    q2: {
      type: String,
      default:
        "  ",
    },
    qa2: {
      type: String,
      default:
        " ",
    },

    q3: {
      type: String,
      default:
        "  ",
    },
    qa3: {
      type: String,
      default:
        "  ",
    },
    q4: {
      type: String,
      default:
        "  ",
    },
    qa4: {
      type: String,
      default:
        "  ",
    },
    q5: {
      type: String,
      default:
        " ",
    },
    qa5: {
      type: String,
      default:
        " ",
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

let prPathwaysCaregiver = mongoose.model(
  "PR Pathways Caregiver",
  prPathwaysCaregiverSchema
);
module.exports = prPathwaysCaregiver;
