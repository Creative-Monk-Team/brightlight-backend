let mongoose = require("mongoose");
let lowHighWageSchema = mongoose.Schema(
  {
    LowWageHeading: {
      type: String,
      default: "Low-wage/High-wage LMIA",
    },
    LowWagePara: {
      type: String,
      default:
        "Low-wage/High-wage LMIAs are used by the employer to fill the immediate labor shortage in their business. Whether to apply for low-wage or high-wage LMIA, you must understand the following three key aspects related to wages in Canada.",
    },

    LowWageSubHeadList1: {
      type: String,
      default: "National Occupation Classification Code",
    },
    LowWageSubHeadList2: {
      type: String,
      default: "Prevailing median wage",
    },
    LowWageSubHeadList3: {
      type: String,
      default: "Provincial median wage",
    },

    //

    NationalHeading: {
      type: String,
      default: "1. National Occupation Classification NOC Code:",
    },
    NationalPara: {
      type: String,
      default:
        "The National Occupational Classification is a database developed by the Government of Canada categorizing all types of possible occupations in the Canadian labor market according to their skill level.",
    },

    PrevailingHeading: {
      type: String,
      default: "2. Prevailing Median Wage",
    },
    PrevailingPara: {
      type: String,
      default:
        "Government of Canada’s official Job Bank website lists the prevailing median wage, for each NOC TEER Code, which is specific to the NOC code and location of work being offered by the Canadian employer. One of the most important LMIA requirements is to match this wage with what the employer will offer to their foreign worker.",
    },

    ProvincialHeading: {
      type: String,
      default: "3. Provincial Median Wage",
    },
    ProvincialPara1: {
      type: String,
      default:
        "Employment and Social Development Canada (ESDC) department updates the Median hourly wages for each province and territory every year in April. This median hourly wage is called the Provincial/territorial Median Hourly Wage.",
    },

    ProvTeriTableHeading: {
      type: String,
      default: "Province/territory",
    },
    ProvTeriTable1: {
      type: String,
      default: "Alberta",
    },

    ProvTeriTable2: {
      type: String,
      default: "British Columbia",
    },

    ProvTeriTable3: {
      type: String,
      default: "Manitoba",
    },

    ProvTeriTable4: {
      type: String,
      default: "New Brunswick",
    },

    ProvTeriTable5: {
      type: String,
      default: "Newfoundland and Labrador	",
    },

    ProvTeriTable6: {
      type: String,
      default: "Northwest Territories",
    },

    ProvTeriTable7: {
      type: String,
      default: "Nova Scotia",
    },

    ProvTeriTable8: {
      type: String,
      default: "Nunavut",
    },

    ProvTeriTable9: {
      type: String,
      default: "Ontario",
    },

    ProvTeriTable10: {
      type: String,
      default: "Prince Edward Island",
    },

    ProvTeriTable11: {
      type: String,
      default: "Quebec",
    },

    ProvTeriTable12: {
      type: String,
      default: "Saskatchewan",
    },

    ProvTeriTable13: {
      type: String,
      default: "Yukon",
    },

    MediHouTableHeading: {
      type: String,
      default: "For LMIAs received before November 8, 2024",
    },

    MediHouTable1: {
      type: String,
      default: "$29.50",
    },
    MediHouTable2: {
      type: String,
      default: "$28.85",
    },
    MediHouTable3: {
      type: String,
      default: "$25.00",
    },
    MediHouTable4: {
      type: String,
      default: "$24.04",
    },
    MediHouTable5: {
      type: String,
      default: "$26.00",
    },
    MediHouTable6: {
      type: String,
      default: "$39.24",
    },
    MediHouTable7: {
      type: String,
      default: "$24.00",
    },
    MediHouTable8: {
      type: String,
      default: "$35.00",
    },
    MediHouTable9: {
      type: String,
      default: "$28.39",
    },
    MediHouTable10: {
      type: String,
      default: "$24.00",
    },
    MediHouTable11: {
      type: String,
      default: "$27.47",
    },
    MediHouTable12: {
      type: String,
      default: "$27.00",
    },
    MediHouTable13: {
      type: String,
      default: "$36.00",
    },

    MediHouTableHeading2: {
      type: String,
      default: "For LMIAs received as of November 8, 2024",
    },

    MediHouTable1Col2: {
      type: String,
      default: "$35.40",
    },
    MediHouTable2Col2: {
      type: String,
      default: "$34.62",
    },
    MediHouTable3Col2: {
      type: String,
      default: "$30.00",
    },
    MediHouTable4Col2: {
      type: String,
      default: "$28.85",
    },
    MediHouTable5Col2: {
      type: String,
      default: "$31.20",
    },
    MediHouTable6Col2: {
      type: String,
      default: "$47.09",
    },
    MediHouTable7Col2: {
      type: String,
      default: "$28.80",
    },
    MediHouTable8Col2: {
      type: String,
      default: "$42.00",
    },
    MediHouTable9Col2: {
      type: String,
      default: "$34.07",
    },
    MediHouTable10Col2: {
      type: String,
      default: "$28.80",
    },
    MediHouTable11Col2: {
      type: String,
      default: "$32.96",
    },
    MediHouTable12Col2: {
      type: String,
      default: "$32.40",
    },
    MediHouTable13Col2: {
      type: String,
      default: "$43.20",
    },

    ProvincialPara2: {
      type: String,
      default: "See the latest median hourly wages at :",
    },

    HighWageHeading: {
      type: String,
      default: "High-wage LMIA",
    },
    HighWagePara: {
      type: String,
      default:
        "This LMIA is for occupations that pay an hourly wage equal to or exceeding the Provincial/territorial Median Hourly Wage. It can be of any NOC TEER Code. There is no cap on how many foreign workers an employer can hire on high-wage LMIA. However, a transition plan must be submitted to satisfy that the employer will continue to hire Canadians/PR.",
    },

    LowWageHeading2: {
      type: String,
      default: "Low-wage LMIA",
    },

    LowWagePara2: {
      type: String,
      default:
        "This LMIA is for occupations that pay an hourly wage that is below the Provincial/territorial Median Hourly Wage. It can be of any NOC TEER Code. There is a cap on how many foreign workers an employer can hire on low-wage LMIAs.",
    },

    BenefitsHeading: {
      type: String,
      default: "Benefits of Low-wage/High-wage LMIA:",
    },
    BenList1: {
      type: String,
      default:
        "The employer can apply for low-wage/high-wage LMIA to immediately meet the labor shortage.",
    },
    BenList2: {
      type: String,
      default:
        "Even the employers whose incorporation is fairly new (less than one year in operation), can apply for one of these types of LMIA, provided they can justify that the business is actively providing goods or services and they can meet the financial obligation related to hiring and paying the foreign worker.",
    },

    BenList3: {
      type: String,
      default:
        "The employer can hire anyone qualified for the job from anywhere in the world or within Canada.",
    },

    BenList4: {
      type: String,
      default:
        "The employer can apply for an unnamed LMIA and then add the name of the finalized workers to the LMIA later on after the LMIA is approved.",
    },

    HowtoApplyHeading: {
      type: String,
      default: "How to Apply for Low-wage/High-wage LMIA:",
    },

    HowAppList1: {
      type: String,
      default:
        "Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed.",
    },
    HowAppList2: {
      type: String,
      default:
        "We will provide you with a checklist of documents and information required to start the initial process.",
    },

    HowAppList3: {
      type: String,
      default:
        "Perform recruitment efforts as per ESDC program requirements for each LMIA type. Job advertisement postings (All advertisements must be active for 4 weeks before submission). Your LMIA job posting must include the following information:",
    },
    HowAppList3Sub1: {
      type: String,
      default: "Company name and business address",
    },
    HowAppList3Sub2: {
      type: String,
      default: "Job title",
    },
    HowAppList3Sub3: {
      type: String,
      default:
        "Job duties (if advertising for multiple vacancies, specify duties for each). Do not just copy/paste duties from the NOC occupation classification.",
    },
    HowAppList3Sub4: {
      type: String,
      default: "Employment terms (e.g., permanent, project-based)",
    },
    HowAppList3Sub5: {
      type: String,
      default: "Language requirements",
    },
    HowAppList3Sub6: {
      type: String,
      default:
        "Wage details (including any raises, performance pay, or bonuses): A wage range can be provided, but the minimum wage must meet prevailing standards",
    },
    HowAppList3Sub7: {
      type: String,
      default: "Benefits offered (if applicable)",
    },
    HowAppList3Sub8: {
      type: String,
      default: "Work location(s) (local area, city, or town)",
    },
    HowAppList3Sub9: {
      type: String,
      default: "Number of positions",
    },
    HowAppList3Sub10: {
      type: String,
      default:
        "Contact details of the employer: email address, fax number, or mailing address",
    },
    HowAppList3Sub11: {
      type: String,
      default: "Skill requirements (including education and work experience)",
    },

    HowAppList4: {
      type: String,
      default: "Screen and interview local candidates.",
    },

    HowAppList5: {
      type: String,
      default:
        "Prepare and submit an LMIA application to the Service Canada ESDS department. Pay the fees when requested, within 2 business days.",
    },

    HowAppList6: {
      type: String,
      default:
        "Wait for LMIA processing time, which can range from 30 to 90 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.",
    },

    HowAppList7: {
      type: String,
      default:
        "Once LMIA is received, the employer can add or remove the name of the foreign worker.",
    },

    DifferencesHeading: {
      type: String,
      default: "Differences Between High-Wage and Low-Wage Positions",
    },
    DiffTableInnerHead1: {
      type: String,
      default: "Position Type",
    },
    DiffTable1Inner1: {
      type: String,
      default: "Wage Offered",
    },
    DiffTable1Inner2: {
      type: String,
      default: "LMIA Stream",
    },
    DiffTable1Inner3: {
      type: String,
      default: "Median Hourly Wage",
    },
    DiffTable1Inner4: {
      type: String,
      default: "Application Requirements",
    },
    DiffTable1Inner5: {
      type: String,
      default: "Intended Use",
    },
    DiffTable1Inner6: {
      type: String,
      default: "Program Requirements",
    },
    DiffTable1Inner7: {
      type: String,
      default: "Duration of Employment Allowed",
    },
    DiffTable1Inner8: {
      type: String,
      default: "Impact on the Canadian Labour Market",
    },
    DiffTable1Inner9: {
      type: String,
      default: "Transition Period",
    },

    DiffTableInnerHead2: {
      type: String,
      default: "High-Wage Position",
    },
    DiffTable2Inner1: {
      type: String,
      default: "At or above the provincial/territorial median hourly wage",
    },
    DiffTable2Inner2: {
      type: String,
      default: "High-wage stream LMIA application",
    },
    DiffTable2Inner3: {
      type: String,
      default: "Ontario: $28.39 per hour (or above)British Columbia: $28.85",
    },
    DiffTable2Inner4: {
      type: String,
      default:
        "Maybe more stringent in terms of recruitment efforts. May have different or additional requirements for transportation, housing, and healthcare of workers.Generally aimed at skilled positions.",
    },
    DiffTable2Inner5: {
      type: String,
      default:
        " For filling short-term skills and labor shortages when no Canadians or permanent residents are available for skilled positions.",
    },
    DiffTable2Inner6: {
      type: String,
      default:
        "Must comply with high-wage position requirements from Employment and Social Development Canada, which may involve minimum recruitment efforts, providing certain benefits, etc.",
    },
    DiffTable2Inner7: {
      type: String,
      default:
        "Up to 3 years as of April 4, 2022, and potentially longer in exceptional circumstances with adequate rationale.",
    },
    DiffTable2Inner8: {
      type: String,
      default:
        "An LMIA will determine if hiring a TFW will have a positive or negative impact on the Canadian labor market.",
    },
    DiffTable2Inner9: {
      type: String,
      default:
        "Employers may experience a change in classification due to updated median wages and need to adjust their applications accordingly.",
    },

    DiffTableInnerHead3: {
      type: String,
      default: "Low-Wage Position",
    },

    DiffTable3Inner1: {
      type: String,
      default: "Below the provincial/territorial median hourly wage",
    },
    DiffTable3Inner2: {
      type: String,
      default: "Low-wage stream LMIA application",
    },
    DiffTable3Inner3: {
      type: String,
      default: "Below $27.50 as of May 31, 2023",
    },
    DiffTable3Inner4: {
      type: String,
      default:
        "Typically less stringent recruitment requirements.May involve caps on the number of TFWs or restrictions based on the sector or region. Generally aimed at lower-skilled, lower-paid positions.",
    },
    DiffTable3Inner5: {
      type: String,
      default:
        "For jobs that do not require high levels of skills and training and where there is a shortage of available Canadian workers.",
    },
    DiffTable3Inner6: {
      type: String,
      default:
        "Must comply with low-wage position requirements from Employment and Social Development Canada, which may include different standards for recruitment, housing, and other factors.",
    },
    DiffTable3Inner7: {
      type: String,
      default:
        "Typically shorter durations, align with the lower skill level and pay rate of the position.",
    },
    DiffTable3Inner8: {
      type: String,
      default:
        "An LMIA will determine if hiring a TFW will have a positive or negative impact on the Canadian labor market.",
    },
    DiffTable3Inner9: {
      type: String,
      default:
        "Employers may experience a change in classification due to updated median wages and need to adjust their applications accordingly.",
    },

    RefusalHeading: {
      type: String,
      default:
        "Common Reasons for Refusal of High-Wage and Low-Wage Positions:",
    },
    RefusalSubHeading1: {
      type: String,
      default:
        "Over the years, Service Canada officers have become very strict about the employers meeting the requirements of the program.",
    },
    RefusalSubHeading2: {
      type: String,
      default: "Please see below the common reasons for refusals:",
    },
    r1: {
      type: String,
      default:
        "Failure to perform or document minimum recruitment requirements.",
    },
    r2: {
      type: String,
      default:
        "Failure to use the Job Match service, i.e., invite applicant profiles in the job bank according to their rating.",
    },
    r3: {
      type: String,
      default: "Not able to provide housing inspection report.",
    },
    r4: {
      type: String,
      default: "Using the wrong methods of recruitment",
    },
    r5: {
      type: String,
      default:
        "Failure to keep at least 1 of the 3 recruitment activities to seek qualified Canadians and permanent residents ongoing until the date a positive or negative LMIA has been issued.",
    },
    r6: {
      type: String,
      default:
        "Listing wage rate less than median wage rate mentioned on Job Bank for that specific NOC.",
    },
    r7: {
      type: String,
      default:
        "The job requirements mentioned in the job postings and LMIA application are way too high than the Employment Requirements mentioned on the NOC website.",
    },
    r8: {
      type: String,
      default:
        "Provided false, misleading, or inaccurate information in the LMIA application.",
    },

    r9: {
      type: String,
      default:
        "Have been found non-compliant as a result of an employer compliance review.",
    },
    r10: {
      type: String,
      default:
        "Have been banned from the Temporary Foreign Worker Program because non-compliance was discovered during an inspection.",
    },
    r11: {
      type: String,
      default:
        "Are in default of payment of an administrative monetary penalty.",
    },
    r12: {
      type: String,
      default:
        "Regularly offer services in the sex industry (striptease, erotic dance, escort services, or erotic massage)",
    },
    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
    },

    tableDataMayHave: {
      type: String,
      default:
        "May have different or additional requirements for transportation, housing, and healthcare of workers.",
    },

    tableData1: {
      type: String,
      default: "  Generally aimed at skilled positions.",
    },
    tableData2: {
      type: String,
      default: "  Typically less stringent recruitment requirements.",
    },
    tableData2Li1: {
      type: String,
      default:
        " May involve caps on the number of TFWs or restrictions based on the sector or region.",
    },

    tableData2Li2: {
      type: String,
      default: " Generally aimed at lower-skilled, lower-paid positions.",
    },

    WhyChooseUsHeading01: {
      type: String,
      default: "Why Choose Us?",
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
      default: "FAQ's Made Simple",
    },
    q1: {
      type: String,
      default: "How long is LMIA valid for?  ",
    },
    qa1: {
      type: String,
      default:
        "An LMIA is valid for 6 months or 36 months if applying under the Recognised Employer Program. The selected foreign worker has to apply within this validity period. ",
    },
    q2: {
      type: String,
      default: "  How much is the LMIA application fee? ",
    },
    qa2: {
      type: String,
      default:
        " The employer is required to pay $1000.00 for each position mentioned in the LMIA application. ",
    },

    q3: {
      type: String,
      default: "  How old should a company be to apply for LMIA?",
    },
    qa3: {
      type: String,
      default:
        "Service Canada has not set any specific requirement for low-wage/high-wage applications regarding how long the company must be registered and operational to be eligible to apply for LMIA. Once the business operations have started and a labor shortage exists, the employer can apply for LMIA. ",
    },
    q4: {
      type: String,
      default: " Is there a difference between low-wage and high-wage LMIA? ",
    },
    qa4: {
      type: String,
      default:
        "  Yes, there is a difference. Low-wage positions are those that fall below the provincial or territorial median hourly wage, while high-wage positions are those that are at or above the median hourly wage. ",
    },

    q5: {
      type: String,
      default:
        "How many employees must they have before they can apply for an LMIA? ",
    },
    qa5: {
      type: String,
      default:
        " There is no minimum requirement for a specific number of employees on payroll before an employer can apply for LMIA. It depends on business to business. However, this number of employees will be used for cap calculations for low-wage position LMIA.",
    },
    q6: {
      type: String,
      default:
        "Can an employer recruit an unlimited number of foreign workers with an LMIA, or are there any restrictions on the number? ",
    },
    qa6: {
      type: String,
      default:
        " High-wage LMIA applications do not have a cap or limit. However, there is a limit on the number of foreign workers an employer can hire for low-wage LMIA applications. This limit is based on the industry, NOC code, and the number of Canadians and foreigners already on the payroll.",
    },

    q7: {
      type: String,
      default:
        "  Are there compliance and regulations that apply to the employer after hiring a foreign worker through an LMIA? ",
    },
    qa7: {
      type: String,
      default:
        " Yes, the employer will be required to meet the following conditions: <ul> <li>The terms and conditions outlined in the employment contract must be adhered to.</li> <li>It is important to retain all LMIA documentation for 6 years, as there may be a random audit conducted within this timeframe, even if the foreign worker does not show up for work.</li> <li>If the foreign worker is present on-site, they may be interviewed and various documents such as payroll records will be reviewed to ensure compliancaboutto wages, working hours, overtime, and working conditions.</li> <li>It is required that the foreign worker receives higher wages or has improved working conditions compared to the initial offer, but not less.</li> <li>Employers are obligated to report to Service Canada if the foreign worker fails to show up for work, whether from the beginning or at any point during the employment period.</li> </ul>  ",
    },

    q8: {
      type: String,
      default: " ",
    },
    qa8: {
      type: String,
      default: "   ",
    },

    q9: {
      type: String,
      default: " ",
    },
    qa9: {
      type: String,
      default: "  ",
    },
    q10: {
      type: String,
      default: " ",
    },
    qa10: {
      type: String,
      default: " ",
    },
    show_testimonials: {
      type: String,
      default: "N",
    },
  },
  {
    timeStamps: true,
  }
);

let lowHighWageSection = mongoose.model(
  "Low/High-wage LMIA Section",
  lowHighWageSchema
);
module.exports = lowHighWageSection;
