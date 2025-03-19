let mongoose = require("mongoose");
let prioritiesProgSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "British Columbia Provincial Nominee Program Targeted Draws for Program Priorities Occupations",
    },
    description: {
      type: String,
      default:
        "British Columbia has a significant demand in essential sectors of the care economy, including healthcare, childcare, and veterinary care, as well as in the construction and technology sectors",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of Priority Occupations List",
    },
    b1: {
      type: String,
      default:
        "The draws held in these Priority Occupations are generally targeted occupations, and the cut-off is much lower than the non-priority occupation.",
    },
    b2: {
      type: String,
      default:
        "Priority Program candidates receive additional rounds of invitations to apply on a weekly basis.",
    },
    b3: {
      type: String,
      default:
        "PNP applications are processed at an expedited rate for Priority Program applicants.",
    },
    b4: {
      type: String,
      default:
        "Some employers can access Priority Program “concierge services” to facilitate the hiring of foreign nationals.",
    },
    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for BCPNP Targeted Draws",
    },
    elibilityP1: {
      type: String,
      default:
        "You must fulfill the eligibility requirements for one of the following BCPNP streams:",
    },
    elibilityP2: {
      type: String,
      default:
        "Additionally, you must satisfy the eligibility criteria specific to your BCPNP Program Priorities Occupations.",
    },
    s1Heading: {
      type: String,
      default: "Step 1: Labour Market Impact Assessment (LMIA) Process",
    },
    s1Desc: {
      type: String,
      default:
        "For the employer considering hiring a foreign worker on a caregiver LMIA, here is the eligibility check:",
    },
    pOL: {
      type: String,
      default: "Priority Occupations List",
    },
    construction: {
      type: String,
      default: "Construction",
    },
    constuctionDesc: {
      type: String,
      default:
        "Individuals working in the construction sector can take advantage of targeted invitations to apply by meeting the following requirements:",
    },
    cd1: {
      type: String,
      default:
        "The job offer must be for an indeterminate, full-time position within one of the priority construction occupations.",
    },
    cd2: {
      type: String,
      default:
        "You must hold a valid trade certificate issued by, or have an apprenticeship registered with SkilledTradesBC.",
    },
    cd3: {
      type: String,
      default:
        "Your trade certificate must align with the specific job you’ve been offered.",
    },
    cd4: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    hpHeading: {
      type: String,
      default: "Healthcare Professionals",
    },
    hpl1: {
      type: String,
      default:
        "Individuals who are direct employees of a provincial health authority or are physicians, nurse practitioners, or midwives with the endorsement of a provincial health authority can directly submit an application through the Health Authority stream.",
    },
    hpl2: {
      type: String,
      default:
        "For those not employed by a health authority (and therefore need to register through an alternative stream), targeted invitations to apply may be available if they have a job offer in one of the following occupations.",
    },
    hpl3: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    tsoHeading: {
      type: String,
      default: "Technology Sector Opportunities",
    },
    tsoDesc1: {
      type: String,
      default:
        "The British Columbia Provincial Nominee Program (BC PNP) provides a pathway to permanent residence for skilled workers in specific, high-demand technology occupations. To cater to the unique requirements of B.C.'s thriving technology sector, priority technology occupations do not necessitate a permanent job offer.",
    },
    tsoDesc2: {
      type: String,
      default:
        "For individuals working in the technology sector, the following criteria must be met to qualify for targeted invitations to apply:",
    },
    tsol1: {
      type: String,
      default:
        "The job offer should fall within one of the priority technology occupations..",
    },
    tsol2: {
      type: String,
      default:
        "The job offer must have a minimum duration of one year (365 days).",
    },
    tsol3: {
      type: String,
      default:
        "At the time of application, there should be at least 120 calendar days remaining on the job offer.",
    },
    tsol4: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    vcHeading: {
      type: String,
      default: "Veterinary Care",
    },
    vcDesc1: {
      type: String,
      default:
        "Veterinary Care Workers with job offers in one of the following occupations may benefit from targeted invitations to apply.",
    },
    vcDesc2: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },
    vsDesc3: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },
    applicationHeading: {
      type: String,
      default: "Application Procedure for British Columbia Priorities Program:",
    },
    a1: {
      type: String,
      default:
        "Register online on the BCPNP website and submit your BCPNP profile:",
    },
    a1l1: {
      type: String,
      default:
        "Begin by choosing the appropriate program, which typically aligns with BC's Skills Immigration programs, such as the BC Skilled Worker or BC International Graduate programs.",
    },
    a1l2: {
      type: String,
      default:
        "Ensure eligibility by verifying that you meet the National Occupation Classification (NOC) code requirements for one of the in-demand occupations, categorized into streams like Childcare, Healthcare, Construction, Technology, and Veterinary-care.",
    },
    a1l3: {
      type: String,
      default:
        "Once confirmed eligible, initiate the application process by registering a profile with BCPNP Online.",
    },
    a2: {
      type: String,
      default: "Check your score:",
    },
    a2l1: {
      type: String,
      default:
        "Upon registration, applicants should assess their score based on the provided criteria.",
    },
    a3: {
      type: String,
      default: "Improve your score if necessary:",
    },
    a3l1: {
      type: String,
      default:
        "If your score falls below the cutoff set by the last draw conducted by BCPNP for your occupation, take steps to enhance your score to increase your chances of receiving an invitation to apply (ITA).",
    },
    a4: {
      type: String,
      default: "Receive an Invitation to Apply (ITA):",
    },
    a4l1: {
      type: String,
      default:
        "If you meet or exceed the cutoff score from the last draw conducted by BCPNP for your occupation, you will receive an ITA to proceed with your application.",
    },
    a5: {
      type: String,
      default: "Prepare and submit your BCPNP application within 30 days:",
    },
    a5l1: {
      type: String,
      default:
        "Upon receiving an ITA, applicants must diligently prepare and submit their BCPNP application within the specified timeframe of 30 days.",
    },

    childcareHeading: {
      type: String,
      default: "Childcare Professionals",
    },
    childcarePara1: {
      type: String,
      default: "Individuals with a job offer in the occupation of 42202 Early Childhood Educators and Assistants may be eligible for targeted invitations to apply.",
    },
    childcarePara2: {
      type: String,
      default: "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },

    t1h1: {
      type: String,
      default: "Occupation",
    },
    t1h2: {
      type: String,
      default: "NOC Code",
    },

    t1r1c1: {
      type: String,
      default: "Early Childhood Educators and Assistants",
    },
    t1r1c2: {
      type: String,
      default: "42202",
    },

    table2Heading: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },

    t2h1: {
      type: String,
      default: "Occupation",
    },
    t2h2: {
      type: String,
      default: "NOC Code",
    },

    t2r1c1: {
      type: String,
      default: "Landscape and Horticulture Technicians and Specialists",
    },
    t2r1c2: {
      type: String,
      default: "22114",
    },

    t2r2c1: {
      type: String,
      default: "Sheet Metal Workers",
    },
    t2r2c2: {
      type: String,
      default: "72102",
    },

    t2r3c1: {
      type: String,
      default: "Boilermakers",
    },
    t2r3c2: {
      type: String,
      default: "72103",
    },

    t2r4c1: {
      type: String,
      default: "Structural Metal and Platework Fabricators and Fitters",
    },
    t2r4c2: {
      type: String,
      default: "72104",
    },

    t2r5c1: {
      type: String,
      default: "Ironworkers",
    },
    t2r5c2: {
      type: String,
      default: "72105",
    },

    t2r6c1: {
      type: String,
      default: "Welders and Related Machine Operators",
    },
    t2r6c2: {
      type: String,
      default: "72106",
    },

    t2r7c1: {
      type: String,
      default: "Electricians (Except Industrial and Power System)",
    },
    t2r7c2: {
      type: String,
      default: "72200",
    },

    t2r8c1: {
      type: String,
      default: "Industrial Electricians",
    },
    t2r8c2: {
      type: String,
      default: "72201",
    },

    t2r9c1: {
      type: String,
      default: "Plumbers",
    },
    t2r9c2: {
      type: String,
      default: "72300",
    },

    t2r10c1: {
      type: String,
      default: "Steamfitters, Pipefitters and Sprinkler System Installers",
    },
    t2r10c2: {
      type: String,
      default: "72301",
    },

    t2r11c1: {
      type: String,
      default: "Gas Fitters",
    },
    t2r11c2: {
      type: String,
      default: "72302",
    },

    t2r12c1: {
      type: String,
      default: "Carpenters",
    },
    t2r12c2: {
      type: String,
      default: "72310",
    },

    t2r13c1: {
      type: String,
      default: "Cabinetmakers",
    },
    t2r13c2: {
      type: String,
      default: "72311",
    },

    t2r14c1: {
      type: String,
      default: "Bricklayers",
    },
    t2r14c2: {
      type: String,
      default: "72320",
    },

    t2r15c1: {
      type: String,
      default: "Construction Millwrights and Industrial Mechanics",
    },
    t2r15c2: {
      type: String,
      default: "72400",
    },

    t2r16c1: {
      type: String,
      default: "Heavy-Duty Equipment Mechanics",
    },
    t2r16c2: {
      type: String,
      default: "72401",
    },

    t2r17c1: {
      type: String,
      default: "Heating, Refrigeration and Air Conditioning Mechanics",
    },
    t2r17c2: {
      type: String,
      default: "72402",
    },

    t2r18c1: {
      type: String,
      default: "Crane Operators",
    },
    t2r18c2: {
      type: String,
      default: "72500",
    },

    t2r19c1: {
      type: String,
      default: "Concrete Finishers",
    },
    t2r19c2: {
      type: String,
      default: "73100",
    },

    t2r20c1: {
      type: String,
      default: "Tilesetters",
    },
    t2r20c2: {
      type: String,
      default: "73101",
    },

    t2r21c1: {
      type: String,
      default: "Plasterers, Drywall Installers and Finishers and Lathers",
    },
    t2r21c2: {
      type: String,
      default: "73102",
    },

    t2r22c1: {
      type: String,
      default: "Roofers and Shinglers",
    },
    t2r22c2: {
      type: String,
      default: "73110",
    },

    t2r23c1: {
      type: String,
      default: "Glaziers",
    },
    t2r23c2: {
      type: String,
      default: "73111",
    },

    t2r24c1: {
      type: String,
      default: "Painters and Decorators (Except Interior Decorators)",
    },
    t2r24c2: {
      type: String,
      default: "73112",
    },

    t2r25c1: {
      type: String,
      default: "Floor Covering Installers",
    },
    t2r25c2: {
      type: String,
      default: "73113",
    },

    table3Heading: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },

    t3h1: {
      type: String,
      default: "Occupation",
    },
    t3h2: {
      type: String,
      default: "NOC Code",
    },

    t3r1c1: {
      type: String,
      default: "Managers in Health Care",
    },
    t3r1c2: {
      type: String,
      default: "30010",
    },

    t3r2c1: {
      type: String,
      default: "Specialists in Clinical and Laboratory Medicine",
    },
    t3r2c2: {
      type: String,
      default: "31100",
    },

    t3r3c1: {
      type: String,
      default: "Specialists in Surgery",
    },
    t3r3c2: {
      type: String,
      default: "31101",
    },

    t3r4c1: {
      type: String,
      default: "General Practitioners and Family Physicians",
    },
    t3r4c2: {
      type: String,
      default: "31102",
    },

    t3r5c1: {
      type: String,
      default: "Dentists",
    },
    t3r5c2: {
      type: String,
      default: "31110",
    },

    t3r6c1: {
      type: String,
      default: "Audiologists and Speech-Language Pathologists",
    },
    t3r6c2: {
      type: String,
      default: "31112",
    },

    t3r7c1: {
      type: String,
      default: "Pharmacists",
    },
    t3r7c2: {
      type: String,
      default: "31120",
    },

    t3r8c1: {
      type: String,
      default: "Dietitians and Nutritionists",
    },
    t3r8c2: {
      type: String,
      default: "31121",
    },

    t3r9c1: {
      type: String,
      default: "Psychologists",
    },
    t3r9c2: {
      type: String,
      default: "31200",
    },

    t3r10c1: {
      type: String,
      default: "Chiropractors",
    },
    t3r10c2: {
      type: String,
      default: "31201",
    },

    t3r11c1: {
      type: String,
      default: "Physiotherapists",
    },
    t3r11c2: {
      type: String,
      default: "31202",
    },

    t3r12c1: {
      type: String,
      default: "Occupational Therapists",
    },
    t3r12c2: {
      type: String,
      default: "31203",
    },

    t3r13c1: {
      type: String,
      default:
        "Kinesiologists and Other Professional Occupations in Therapy and Assessment",
    },
    t3r13c2: {
      type: String,
      default: "31204",
    },

    t3r14c1: {
      type: String,
      default:
        "Other Professional Occupations in Health Diagnosing and Treating",
    },
    t3r14c2: {
      type: String,
      default: "31209",
    },

    t3r15c1: {
      type: String,
      default: "Nursing Coordinators and Supervisors",
    },
    t3r15c2: {
      type: String,
      default: "31300",
    },

    t3r16c1: {
      type: String,
      default: "Registered Nurses and Registered Psychiatric Nurses",
    },
    t3r16c2: {
      type: String,
      default: "31301",
    },

    t3r17c1: {
      type: String,
      default: "Nurse Practitioners",
    },
    t3r17c2: {
      type: String,
      default: "31302",
    },

    t3r18c1: {
      type: String,
      default: "Physician Assistants, Midwives and Allied Health Professionals",
    },
    t3r18c2: {
      type: String,
      default: "31303",
    },

    t3r19c1: {
      type: String,
      default: "Licensed Practical Nurses",
    },
    t3r19c2: {
      type: String,
      default: "32101",
    },

    t3r20c1: {
      type: String,
      default: "Paramedical Occupations",
    },
    t3r20c2: {
      type: String,
      default: "32102",
    },

    t3r21c1: {
      type: String,
      default:
        "Respiratory Therapists, Clinical Perfusionists and Cardiopulmonary Technologists",
    },
    t3r21c2: {
      type: String,
      default: "32103",
    },

    t3r22c1: {
      type: String,
      default: "Medical Radiation Technologists",
    },
    t3r22c2: {
      type: String,
      default: "32104",
    },

    t3r23c1: {
      type: String,
      default: "Medical Laboratory Technologists",
    },
    t3r23c2: {
      type: String,
      default: "32105",
    },

    t3r24c1: {
      type: String,
      default: "Medical Laboratory Technicians",
    },
    t3r24c2: {
      type: String,
      default: "32106",
    },

    t3r25c1: {
      type: String,
      default: "Opticians",
    },
    t3r25c2: {
      type: String,
      default: "32110",
    },

    t3r26c1: {
      type: String,
      default: "Dental Hygienists and Dental Therapists",
    },
    t3r26c2: {
      type: String,
      default: "32111",
    },

    t3r27c1: {
      type: String,
      default: "Dental Assistants",
    },
    t3r27c2: {
      type: String,
      default: "32112",
    },

    t3r28c1: {
      type: String,
      default: "Other Technical Occupations in Health Care",
    },
    t3r28c2: {
      type: String,
      default: "32119",
    },

    t3r29c1: {
      type: String,
      default: "Veterinarians",
    },
    t3r29c2: {
      type: String,
      default: "31103",
    },

    t3r30c1: {
      type: String,
      default: "Veterinary Technologists and Technicians",
    },
    t3r30c2: {
      type: String,
      default: "32120",
    },

    table4Heading: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },

    t4h1: {
      type: String,
      default: "Occupation",
    },
    t4h2: {
      type: String,
      default: "NOC Code",
    },

    t4r1c1: {
      type: String,
      default: "Telecommunication Carriers Managers",
    },
    t4r1c2: {
      type: String,
      default: "10030",
    },

    t4r2c1: {
      type: String,
      default: "Information Systems Managers",
    },
    t4r2c2: {
      type: String,
      default: "10031",
    },

    t4r3c1: {
      type: String,
      default: "Computer and Information Systems Managers",
    },
    t4r3c2: {
      type: String,
      default: "10032",
    },

    t4r4c1: {
      type: String,
      default: "Software Engineers and Designers",
    },
    t4r4c2: {
      type: String,
      default: "21701",
    },

    t4r5c1: {
      type: String,
      default: "Computer Programmers and Interactive Media Developers",
    },
    t4r5c2: {
      type: String,
      default: "21702",
    },

    t4r6c1: {
      type: String,
      default: "Web Designers and Developers",
    },
    t4r6c2: {
      type: String,
      default: "21703",
    },

    t4r7c1: {
      type: String,
      default: "Database Analysts and Data Administrators",
    },
    t4r7c2: {
      type: String,
      default: "21704",
    },

    t4r8c1: {
      type: String,
      default: "Network Specialists",
    },
    t4r8c2: {
      type: String,
      default: "21705",
    },

    t4r9c1: {
      type: String,
      default: "Computer Network Technicians",
    },
    t4r9c2: {
      type: String,
      default: "22801",
    },

    t4r10c1: {
      type: String,
      default: "Network Operators",
    },
    t4r10c2: {
      type: String,
      default: "22802",
    },

    t4r11c1: {
      type: String,
      default: "Computer Support Workers",
    },
    t4r11c2: {
      type: String,
      default: "22803",
    },

    t4r12c1: {
      type: String,
      default: "Security Analysts",
    },
    t4r12c2: {
      type: String,
      default: "22804",
    },

    t4r13c1: {
      type: String,
      default: "Systems Analysts",
    },
    t4r13c2: {
      type: String,
      default: "22805",
    },

    t4r14c1: {
      type: String,
      default: "Other Information Technology Occupations",
    },
    t4r14c2: {
      type: String,
      default: "22809",
    },

    table5Heading: {
      type: String,
      default:
        "For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
    },

    t5h1: {
      type: String,
      default: "Occupation",
    },
    t5h2: {
      type: String,
      default: "NOC Code",
    },

    t5r1c1: {
      type: String,
      default: "Veterinarians",
    },
    t5r1c2: {
      type: String,
      default: "31103",
    },

    t5r2c1: {
      type: String,
      default: "Veterinary Technologists and Technicians",
    },
    t5r2c2: {
      type: String,
      default: "32120",
    },

    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "Still not sure? Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream.",
    },
    comprList: {
      type: String,
      default: " For a comprehensive list of eligible National Occupational Classification (NOC) codes, please refer to the NOC list below:",
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
        "What are the specific requirements for construction sector workers to benefit from targeted invitations to apply in the BC PNP?",
    },
    qa1: {
      type: String,
      default:
        " Construction sector workers must fulfill specific requirements to qualify for targeted invitations under the BC PNP: <ul> <li>Job Offer: The job offer must be for an indeterminate, full-time position in one of the priority construction occupations designated by the BC PNP.</li> <li>Trade Certificate or Apprenticeship: Workers must hold a valid trade certificate issued by, or have an apprenticeship registered with SkilledTradesBC. Additionally, the trade certificate must correspond with the job offered.</li> </ul>",
    },
    q2: {
      type: String,
      default:
        " Which healthcare professionals can submit an application directly to the Health Authority stream in the BC PNP?",
    },
    qa2: {
      type: String,
      default:
        " Healthcare professionals who are direct employees of a provincial health authority or who are physicians, nurse practitioners, or midwives with the support of a provincial health authority can submit an application directly to the Health Authority stream.",
    },

    q3: {
      type: String,
      default:
        "Can workers in priority technology occupations apply for permanent residence without a permanent job offer in the BC PNP?",
    },
    qa3: {
      type: String,
      default:
        "Yes, the workers in priority technology occupations do not necessarily need a permanent job offer to apply for permanent residence through the BC PNP. The BC PNP offers skilled workers in select, in- demand technology occupations a pathway to permanent residence even without a permanent job offer.",
    },
    q4: {
      type: String,
      default:
        " How can healthcare workers who are not employed by a health authority benefit from targeted invitations to apply through the BC PNP? ",
    },
    qa4: {
      type: String,
      default:
        "Healthcare workers who are not directly employed by a provincial health authority can still qualify for targeted invitations to apply through the BC PNP if they meet certain criteria. ",
    },

    q5: {
      type: String,
      default:
        " ",
    },
    qa5: {
      type: String,
      default:
        "  ",
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

let prioritiesProgramSection = mongoose.model(
  "Program Priorities Latest Page",
  prioritiesProgSchema
);
module.exports = prioritiesProgramSection;
