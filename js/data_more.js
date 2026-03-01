/* ===== MORE NEW DOMAINS: Bank, GATE, NEET, JEE, CAT, Defence, Arts, Commerce ===== */

const MORE_DOMAINS = [
    {
        id: "bank-po", name: "Bank PO & Clerk (IBPS/SBI/RBI)", cat: "GovtExam", color: "#2563eb",
        steps: [
            {
                title: "Quantitative Aptitude & DI", desc: "Number System, Simplification, Profit-Loss, SI/CI, Data Interpretation.", dur: "6-8 weeks",
                courses: [
                    { name: "Bank Maths Complete", platform: "Testbook", url: "https://testbook.com/ibps-po" },
                    { name: "IBPS PO Quant Course", platform: "Adda247", url: "https://www.adda247.com/product-onlineliveclasses/ibps-po" },
                    { name: "Bank Exam Maths", platform: "Unacademy", url: "https://unacademy.com/goal/bank-exams/TMUVD" },
                    { name: "DI for Bank Exams", platform: "Oliveboard", url: "https://www.oliveboard.in/ibps-po/" },
                    { name: "Arithmetic Shortcuts", platform: "BYJU'S Exam Prep", url: "https://www.byjus.com/bank-exam/ibps-po/" },
                    { name: "Number Series Tricks", platform: "Careerwill", url: "https://www.careerwill.com/" },
                    { name: "Quadratic Equations", platform: "Khan Academy", url: "https://www.khanacademy.org/math/algebra" },
                    { name: "Data Sufficiency Practice", platform: "StudyIQ", url: "https://www.studyiq.com/" }
                ],
                videos: [
                    { name: "Bank Maths Full Course", platform: "YouTube – Adda247", url: "https://www.youtube.com/watch?v=VxGi8TcP7YI" },
                    { name: "DI Tricks for Bank Exams", platform: "YouTube – Testbook", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "Simplification Speed Tricks", platform: "YouTube – Careerwill", url: "https://www.youtube.com/watch?v=v2DzA-cUzKo" },
                    { name: "Number Series Shortcuts", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Percentage & Ratio", platform: "YouTube – Khan Sir", url: "https://www.youtube.com/watch?v=YJyRFE_bZZo" },
                    { name: "Time & Distance Problems", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Profit Loss Complete", platform: "YouTube – Exampur", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" },
                    { name: "SI/CI All Tricks", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=TXkGhP0bsQk" }
                ],
                books: [
                    { name: "Quantitative Aptitude – RS Aggarwal", url: "https://www.amazon.in/Quantitative-Aptitude-Competitive-Examinations-Aggarwal/dp/9352534026" },
                    { name: "Fast Track Objective Arithmetic – Rajesh Verma", url: "https://www.amazon.in/Fast-Track-Objective-Arithmetic-Rajesh/dp/9352039572" },
                    { name: "Banking Awareness – Arihant", url: "https://www.amazon.in/Banking-Awareness-Arihant/dp/9311124435" },
                ],
                websites: [
                    { name: "SBI Recruitment Portal", url: "https://sbi.bank.in/web/careers" },
                    { name: "RBI Career Page", url: "https://www.rbi.org.in/Scripts/Bs_viewcontent.aspx?Id=2006" },
                    { name: "Testbook Bank Section", url: "https://testbook.com/ibps-po" },
                    { name: "Adda247 Banking", url: "https://www.adda247.com/" },
                    { name: "Oliveboard IBPS PO", url: "https://www.oliveboard.in/ibps-po/" },
                    { name: "BankersAdda", url: "https://www.bankersadda.com/" },
                    { name: "IndiaBIX Aptitude", url: "https://www.indiabix.com/" }
                ]
            },
            {
                title: "Reasoning & English Language", desc: "Logical Reasoning, Puzzles, Seating Arrangements, Coding-Decoding, Grammar, RC.", dur: "6-8 weeks",
                courses: [
                    { name: "Reasoning for Bank Exams", platform: "Testbook", url: "https://testbook.com/ibps-po" },
                    { name: "English for Banking", platform: "Adda247", url: "https://www.adda247.com/" },
                    { name: "Puzzles & Seating", platform: "Unacademy", url: "https://unacademy.com/goal/bank-exams/TMUVD" },
                    { name: "Syllogism Complete", platform: "Oliveboard", url: "https://www.oliveboard.in/" },
                    { name: "Cloze Test Mastery", platform: "BYJU'S Exam Prep", url: "https://www.byjus.com/bank-exam/" },
                    { name: "Coding-Decoding & Inequalities", platform: "Careerwill", url: "https://www.careerwill.com/" },
                    { name: "RC Advanced Strategies", platform: "StudyIQ", url: "https://www.studyiq.com/" },
                    { name: "Critical Reasoning", platform: "Khan Academy", url: "https://www.khanacademy.org/" }
                ],
                videos: [
                    { name: "Reasoning for Bank 2025", platform: "YouTube – Adda247", url: "https://www.youtube.com/watch?v=VxGi8TcP7YI" },
                    { name: "English Grammar Bank Exams", platform: "YouTube – Testbook", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "Puzzles Level 1-5", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Syllogism New Pattern", platform: "YouTube – Careerwill", url: "https://www.youtube.com/watch?v=v2DzA-cUzKo" },
                    { name: "Blood Relations Tricks", platform: "YouTube – Khan Sir", url: "https://www.youtube.com/watch?v=YJyRFE_bZZo" },
                    { name: "Direction Sense Complete", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Error Spotting Practice", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=TXkGhP0bsQk" },
                    { name: "Sentence Rearrangement", platform: "YouTube – Exampur", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" }
                ],
                books: [
                    { name: "A Modern Approach to Verbal & Non-Verbal Reasoning – RS Aggarwal", url: "https://www.amazon.in/Modern-Approach-Verbal-Non-Verbal-Reasoning/dp/9352534581" },
                    { name: "Analytical Reasoning – MK Pandey", url: "https://www.amazon.in/Analytical-Reasoning-M-K-Pandey/dp/8183554466" },
                    { name: "Objective General English – SP Bakshi", url: "https://www.amazon.in/Objective-General-English-S-P-Bakshi/dp/9352039734" },
                    { name: "Word Power Made Easy – Norman Lewis", url: "https://www.amazon.in/Word-Power-Made-Easy-Norman/dp/8183071007" },
                ],
                websites: [
                    { name: "Testbook Reasoning Practice", url: "https://testbook.com/" },
                    { name: "Adda247 Daily Quiz", url: "https://www.adda247.com/" },
                    { name: "Oliveboard Mock Tests", url: "https://www.oliveboard.in/" },
                    { name: "IndiaBIX Reasoning", url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/" },
                    { name: "BankExamsToday", url: "https://www.bankexamstoday.com/" },
                    { name: "Gradeup Banking Section", url: "https://www.byjus.com/bank-exam/" },
                    { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/" }
                ]
            }
        ]
    },
    {
        id: "gate-exam", name: "GATE Engineering Exam", cat: "GovtExam", color: "#7c3aed",
        steps: [
            {
                title: "Core Engineering Subjects", desc: "Engineering Mathematics, Aptitude, and core discipline-specific subjects.", dur: "12-16 weeks",
                courses: [
                    { name: "GATE CS Complete Course", platform: "Unacademy", url: "https://unacademy.com/goal/gate-cs-it/NVLIA" },
                    { name: "GATE ECE Preparation", platform: "BYJU'S Exam Prep", url: "https://www.byjus.com/gate/" },
                    { name: "GATE Mechanical Course", platform: "Testbook", url: "https://testbook.com/gate" },
                    { name: "Engineering Maths for GATE", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "GATE 2025 Complete Prep", platform: "Adda247", url: "https://www.adda247.com/engineering-jobs/" },
                    { name: "Digital Logic Design", platform: "Khan Academy", url: "https://www.khanacademy.org/computing" },
                    { name: "Data Structures & Algorithms", platform: "Coursera", url: "https://www.coursera.org/learn/algorithms-part1" },
                    { name: "Operating Systems Concepts", platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" }
                ],
                videos: [
                    { name: "GATE CS Full Course 2025", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/watch?v=Uy3JK7BKRP0" },
                    { name: "Engineering Maths Complete", platform: "YouTube – NPTEL", url: "https://www.youtube.com/watch?v=ZC4LMnJQfWI" },
                    { name: "DBMS Full Course", platform: "YouTube – Knowledge Gate", url: "https://www.youtube.com/watch?v=kBdlM6hNDAE" },
                    { name: "Computer Networks Complete", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/watch?v=JFF2vJaN0Cw" },
                    { name: "Theory of Computation", platform: "YouTube – Neso Academy", url: "https://www.youtube.com/watch?v=58N2N7zJGrQ" },
                    { name: "Operating System Concepts", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/watch?v=bkSWJJZNgf8" },
                    { name: "Compiler Design Full", platform: "YouTube – Knowledge Gate", url: "https://www.youtube.com/watch?v=Qkwj65l_96I" },
                    { name: "Discrete Mathematics", platform: "YouTube – TrevTutor", url: "https://www.youtube.com/watch?v=tyDKR4FG3Yw" }
                ],
                books: [
                    { name: "Introduction to Algorithms – CLRS", url: "https://www.amazon.in/Introduction-Algorithms-Thomas-H-Cormen/dp/8120340078" },
                    { name: "Operating System Concepts – Galvin", url: "https://www.amazon.in/Operating-System-Concepts-Abraham-Silberschatz/dp/8126554274" },
                    { name: "Database System Concepts – Sudarshan", url: "https://www.amazon.in/Database-System-Concepts-Abraham-Silberschatz/dp/9352607007" },
                    { name: "Computer Networks – Tanenbaum", url: "https://www.amazon.in/Computer-Networks-Andrew-S-Tanenbaum/dp/9332518742" },
                    { name: "Engineering Maths – BS Grewal", url: "https://www.amazon.in/Higher-Engineering-Mathematics-B-Grewal/dp/8174091955" },
                    { name: "Digital Logic – Morris Mano", url: "https://www.amazon.in/Digital-Logic-Computer-Design-Morris/dp/8131714500" },
                ],
                websites: [
                    { name: "GATE Official – IIT", url: "https://www.iitr.ac.in/" },
                    { name: "GeeksforGeeks GATE Prep", url: "https://www.geeksforgeeks.org/gate-cs-notes-gq/" },
                    { name: "NPTEL Online Courses", url: "https://nptel.ac.in/" },
                    { name: "Gate Overflow – Q&A Forum", url: "https://gateoverflow.in/" },
                    { name: "Made Easy – Study Material", url: "https://www.madeeasy.in/" },
                    { name: "ACE Engineering Academy", url: "https://www.aceenggacademy.com/" },
                    { name: "Testbook GATE Mocks", url: "https://testbook.com/gate" },
                    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" }
                ]
            }
        ]
    },
    {
        id: "neet-medical", name: "NEET UG / PG Medical", cat: "GovtExam", color: "#059669",
        steps: [
            {
                title: "Physics for NEET", desc: "Mechanics, Optics, Thermodynamics, Electricity, Modern Physics.", dur: "10-14 weeks",
                courses: [
                    { name: "NEET Physics Complete", platform: "Unacademy", url: "https://unacademy.com/goal/neet-ug/YOTUH" },
                    { name: "Physics for NEET", platform: "BYJU'S", url: "https://byjus.com/neet/" },
                    { name: "NEET Physics Crash Course", platform: "PW (Physics Wallah)", url: "https://www.pw.live/" },
                    { name: "Mechanics Complete", platform: "Khan Academy", url: "https://www.khanacademy.org/science/physics" },
                    { name: "Optics & Waves", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "Modern Physics for NEET", platform: "Vedantu", url: "https://www.vedantu.com/neet" },
                    { name: "Electrostatics & Current", platform: "Testbook", url: "https://testbook.com/" },
                    { name: "Thermodynamics Mastery", platform: "MIT OCW", url: "https://ocw.mit.edu/courses/physics/" }
                ],
                videos: [
                    { name: "NEET Physics Full Course", platform: "YouTube – Physics Wallah", url: "https://www.youtube.com/watch?v=i5FPBfWkEQg" },
                    { name: "Mechanics One-Shot", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Optics Complete Revision", platform: "YouTube – Vedantu", url: "https://www.youtube.com/watch?v=RkDl0z90WyI" },
                    { name: "Electrostatics Full", platform: "YouTube – BYJU'S", url: "https://www.youtube.com/watch?v=HxFl7pVW3Rs" },
                    { name: "Modern Physics Revision", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Thermodynamics One-Shot", platform: "YouTube – Etoos", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" },
                    { name: "Current Electricity", platform: "YouTube – Khan Academy", url: "https://www.youtube.com/watch?v=x2EuYqjzHbU" },
                    { name: "Wave Motion Complete", platform: "YouTube – Neso Academy", url: "https://www.youtube.com/watch?v=58N2N7zJGrQ" }
                ],
                books: [
                    { name: "Concepts of Physics – HC Verma", url: "https://www.amazon.in/Concepts-Physics-Vol-1-Verma/dp/8177091875" },
                    { name: "DC Pandey – Understanding Physics", url: "https://www.amazon.in/Understanding-Physics-Mechanics-Part-1/dp/9313193248" },
                    { name: "Irodov Problems in General Physics", url: "https://www.amazon.in/Problems-General-Physics-I-E-Irodov/dp/8183552153" },
                ],
                websites: [
                    { name: "NTA NEET Official", url: "https://neet.nta.nic.in/" },
                    { name: "Allen Online", url: "https://www.allen.ac.in/" },
                    { name: "Aakash Digital", url: "https://www.aakash.ac.in/" },
                    { name: "Physics Wallah Official", url: "https://www.pw.live/" },
                    { name: "Vedantu NEET Prep", url: "https://www.vedantu.com/neet" },
                    { name: "Embibe NEET Practice", url: "https://www.embibe.com/exams/neet/" },
                    { name: "Motion Education", url: "https://www.motion.ac.in/" }
                ]
            },
            {
                title: "Chemistry & Biology for NEET", desc: "Organic, Inorganic, Physical Chemistry + Botany, Zoology.", dur: "12-16 weeks",
                courses: [
                    { name: "NEET Chemistry Full Course", platform: "Physics Wallah", url: "https://www.pw.live/" },
                    { name: "NEET Biology Complete", platform: "Unacademy", url: "https://unacademy.com/goal/neet-ug/YOTUH" },
                    { name: "Organic Chemistry Master", platform: "BYJU'S", url: "https://byjus.com/neet/organic-chemistry/" },
                    { name: "Human Physiology NEET", platform: "Vedantu", url: "https://www.vedantu.com/neet" },
                    { name: "Inorganic Chemistry", platform: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry" },
                    { name: "Genetics & Evolution", platform: "Coursera", url: "https://www.coursera.org/learn/genetics-evolution" },
                    { name: "Ecology & Environment", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "Cell Biology Complete", platform: "MIT OCW", url: "https://ocw.mit.edu/courses/biology/" }
                ],
                videos: [
                    { name: "NEET Biology Full Course 2025", platform: "YouTube – Physics Wallah", url: "https://www.youtube.com/watch?v=i5FPBfWkEQg" },
                    { name: "Organic Chemistry One-Shot", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=MeDL0y8wQ2Q" },
                    { name: "Human Body Systems", platform: "YouTube – Amoeba Sisters", url: "https://www.youtube.com/watch?v=H0nttMFPWkQ" },
                    { name: "Inorganic Chemistry Rapid", platform: "YouTube – Vedantu", url: "https://www.youtube.com/watch?v=RkDl0z90WyI" },
                    { name: "Plant Biology Complete", platform: "YouTube – BYJU'S", url: "https://www.youtube.com/watch?v=HxFl7pVW3Rs" },
                    { name: "Genetics Full Revision", platform: "YouTube – Biology by Campbell", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" },
                    { name: "Physical Chemistry Tricks", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Ecology One-Shot NEET", platform: "YouTube – Etoos", url: "https://www.youtube.com/watch?v=58N2N7zJGrQ" }
                ],
                books: [
                    { name: "Organic Chemistry – Morrison Boyd", url: "https://www.amazon.in/Organic-Chemistry-Morrison-Boyd/dp/9332519072" },
                    { name: "Campbell Biology", url: "https://www.amazon.in/Campbell-Biology-Lisa-A-Urry/dp/0134093410" }
                ],
                websites: [
                    { name: "NTA NEET Official", url: "https://neet.nta.nic.in/" },
                    { name: "Allen NEET Prep", url: "https://www.allen.ac.in/" },
                    { name: "Vedantu Biology", url: "https://www.vedantu.com/" },
                    { name: "Physics Wallah NEET", url: "https://www.pw.live/" },
                    { name: "Embibe NEET Chemistry", url: "https://www.embibe.com/exams/neet/" },
                    { name: "Biology Online", url: "https://www.biologyonline.com/" },
                    { name: "ChemLibreTexts", url: "https://chem.libretexts.org/" }
                ]
            }
        ]
    },
    {
        id: "ca-accounting", name: "CA / Accounting & Finance", cat: "Commerce", color: "#b45309",
        steps: [
            {
                title: "Accounting Fundamentals", desc: "Double Entry, Trial Balance, Financial Statements, Tally, GST.", dur: "6-10 weeks",
                courses: [
                    { name: "Accounting Fundamentals", platform: "Coursera", url: "https://www.coursera.org/learn/uva-darden-financial-accounting" },
                    { name: "Tally ERP 9 Complete", platform: "Udemy", url: "https://www.youtube.com/results?search_query=Tally%20ERP%209%20Complete%20tutorial" },
                    { name: "CA Foundation Course", platform: "Unacademy", url: "https://www.unacademy.com/search?query=ca%20foundation" },
                    { name: "GST Practitioner Course", platform: "ICAI", url: "https://www.icai.org/" },
                    { name: "Financial Accounting Basics", platform: "Khan Academy", url: "https://www.khanacademy.org/economics-finance-domain/core-finance" },
                    { name: "CA Inter Accounts", platform: "BYJU'S", url: "https://byjus.com/" },
                    { name: "Cost Accounting Complete", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "Bookkeeping Mastery", platform: "edX", url: "https://www.edx.org/learn/accounting" }
                ],
                videos: [
                    { name: "Accounting Full Course", platform: "YouTube – Accounting Stuff", url: "https://www.youtube.com/watch?v=yYX4bvQSqbo" },
                    { name: "Tally Complete Tutorial", platform: "YouTube – Learn Tally", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                    { name: "Financial Statements Explained", platform: "YouTube – The Organic Chemistry Tutor", url: "https://www.youtube.com/watch?v=xGVGZBnxHPE" },
                    { name: "GST Complete in Hindi", platform: "YouTube – CA Raj K Agrawal", url: "https://www.youtube.com/watch?v=TXkGhP0bsQk" },
                    { name: "Cost Accounting Basics", platform: "YouTube – Edupedia", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "Double Entry System", platform: "YouTube – Khan Academy", url: "https://www.youtube.com/watch?v=x2EuYqjzHbU" },
                    { name: "CA Foundation Prep", platform: "YouTube – Unacademy CA", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Balance Sheet Explained", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" }
                ],
                books: [
                    { name: "ICAI Study Material", url: "https://www.icai.org/" },
                    { name: "GST Law and Practice", url: "https://www.amazon.in/GST-Law-Practice-VS-Datey/dp/9389574455" },
                    { name: "Advanced Accountancy – Jain & Narang", url: "https://www.amazon.in/Advanced-Accountancy-Vol-S-P-Jain/dp/8131734420" },
                    { name: "Management Accounting – Khan & Jain", url: "https://www.amazon.in/Management-Accounting-M-Y-Khan/dp/9352607481" }
                ],
                websites: [
                    { name: "ICAI Official – CA Exams", url: "https://www.icai.org/" },
                    { name: "Khan Academy Finance", url: "https://www.khanacademy.org/economics-finance-domain" },
                    { name: "AccountingCoach (Free)", url: "https://www.accountingcoach.com/" },
                    { name: "Investopedia – Accounting", url: "https://www.investopedia.com/accounting-4689795" },
                    { name: "ICSI Official", url: "https://www.icsi.edu/" },
                    { name: "GST Portal", url: "https://www.gst.gov.in/" },
                    { name: "ACCA Global", url: "https://www.accaglobal.com/" },
                    { name: "Tally Solutions Official", url: "https://tallysolutions.com/" }
                ]
            }
        ]
    },
    {
        id: "fine-arts", name: "Fine Arts & Visual Arts", cat: "Arts", color: "#db2777",
        steps: [
            {
                title: "Drawing & Sketching Fundamentals", desc: "Pencil drawing, perspective, shading, anatomy, composition basics.", dur: "6-8 weeks",
                courses: [
                    { name: "Drawing for Absolute Beginners", platform: "Udemy", url: "https://www.youtube.com/results?search_query=Drawing%20for%20Absolute%20Beginners%20tutorial" },
                    { name: "Fundamentals of Drawing", platform: "Skillshare", url: "https://www.geeksforgeeks.org/?s=Fundamentals%20of%20Drawing" },
                    { name: "Art Fundamentals", platform: "Coursera (CalArts)", url: "https://www.coursera.org/search?query=Art%20Fundamentals" },
                    { name: "Perspective Drawing", platform: "Domestika", url: "https://www.domestika.org/en/courses" },
                    { name: "Figure Drawing Course", platform: "Proko", url: "https://www.proko.com/figure-drawing-fundamentals/" },
                    { name: "Anatomy for Artists", platform: "New Masters Academy", url: "https://www.nma.art/" },
                    { name: "Sketching Techniques", platform: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
                    { name: "Digital Sketching Basics", platform: "Khan Academy", url: "https://www.khanacademy.org/computing/pixar" }
                ],
                videos: [
                    { name: "Learn to Draw – Complete Beginner", platform: "YouTube – DrawlikeaSir", url: "https://www.youtube.com/watch?v=ewMksAbgZBo" },
                    { name: "Shading Techniques", platform: "YouTube – Rapid Fire Art", url: "https://www.youtube.com/watch?v=V3WmB_z9fqU" },
                    { name: "Perspective Drawing Full", platform: "YouTube – Proko", url: "https://www.youtube.com/watch?v=8LrV6gdECCQ" },
                    { name: "Anatomy for Artists", platform: "YouTube – Proko", url: "https://www.youtube.com/watch?v=2T7cDY7YDsg" },
                    { name: "Pencil Drawing Tutorial", platform: "YouTube – Art of Wei", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Portrait Drawing Basics", platform: "YouTube – Circle Line Art", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" },
                    { name: "Composition & Design", platform: "YouTube – Marco Bucci", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Still Life Drawing", platform: "YouTube – DrawingTutorialsOnline", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" }
                ],
                books: [
                    { name: "Drawing on the Right Side of the Brain – Betty Edwards", url: "https://www.amazon.in/Drawing-Right-Side-Brain/dp/1585429201" },
                    { name: "Figure Drawing for All It's Worth – Andrew Loomis", url: "https://www.amazon.in/Figure-Drawing-All-Its-Worth/dp/0857680986" },
                    { name: "Keys to Drawing – Bert Dodson", url: "https://www.amazon.in/Keys-Drawing-Bert-Dodson/dp/0891343377" },
                    { name: "Anatomy for the Artist – Sarah Simblet", url: "https://www.amazon.in/Anatomy-Artist-Sarah-Simblet/dp/0756628261" },
                    { name: "Color and Light – James Gurney", url: "https://www.amazon.in/Color-Light-Realist-Painter-Gurney/dp/0740797719" },
                    { name: "Sketching User Experiences", url: "https://www.amazon.in/Sketching-User-Experiences-Interactive-Technologies/dp/0123740371" },
                    { name: "The Art Spirit – Robert Henri", url: "https://www.amazon.in/Art-Spirit-Robert-Henri/dp/0465002633" }
                ],
                websites: [
                    { name: "Proko – Free Art Lessons", url: "https://www.proko.com/" },
                    { name: "Drawabox – Free Drawing Course", url: "https://drawabox.com/" },
                    { name: "Line of Action – Gesture Practice", url: "https://line-of-action.com/" },
                    { name: "Ctrl+Paint – Digital Painting", url: "https://www.ctrlpaint.com/" },
                    { name: "DeviantArt – Community", url: "https://www.deviantart.com/" },
                    { name: "Artstation – Portfolio Platform", url: "https://www.geeksforgeeks.org/?s=Artstation%20%E2%80%93%20Portfolio%20Platform" },
                    { name: "QuickPoses – Timed Practice", url: "https://quickposes.com/" },
                    { name: "Concept Art Empire", url: "https://conceptartempire.com/" }
                ]
            }
        ]
    },
    {
        id: "jee-main-advanced", name: "JEE Main & Advanced", cat: "GovtExam", color: "#0284c7",
        steps: [
            {
                title: "Physics, Chemistry & Maths Foundation", desc: "Build conceptual clarity in PCM with daily problem solving.", dur: "16-20 weeks",
                courses: [
                    { name: "JEE Foundation by NTA Resources", platform: "NTA", url: "https://www.nta.ac.in/" },
                    { name: "Engineering Courses", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "JEE Learning Path", platform: "SWAYAM", url: "https://swayam.gov.in/" },
                    { name: "JEE Main Prep", platform: "Testbook", url: "https://testbook.com/jee-main" },
                    { name: "JEE Mentorship", platform: "Mathongo", url: "https://www.mathongo.com/" },
                    { name: "JEE Coaching", platform: "Unacademy", url: "https://www.unacademy.com/" },
                    { name: "JEE Classes", platform: "Vedantu", url: "https://www.vedantu.com/" },
                    { name: "JEE Batches", platform: "Physics Wallah", url: "https://www.pw.live/" }
                ],
                videos: [
                    { name: "JEE Physics Full Course (Hindi)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+physics+full+course+hindi" },
                    { name: "JEE Chemistry Full Course (Hindi)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+chemistry+full+course+hindi" },
                    { name: "JEE Maths Full Course (Hindi)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+maths+full+course+hindi" },
                    { name: "JEE Physics One Shot", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+physics+one+shot" },
                    { name: "JEE Chemistry One Shot", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+chemistry+one+shot" },
                    { name: "JEE Maths One Shot", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+maths+one+shot" },
                    { name: "JEE Strategy for Beginners", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+strategy+for+beginners" },
                    { name: "JEE Time Table & Revision", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+revision+time+table" }
                ],
                books: [
                    { name: "JEE Physics Books", url: "https://www.amazon.com/s?k=IIT+JEE+Physics+book" },
                    { name: "JEE Chemistry Books", url: "https://www.amazon.com/s?k=IIT+JEE+Chemistry+book" },
                    { name: "JEE Maths Books", url: "https://www.amazon.com/s?k=IIT+JEE+Mathematics+book" },
                    { name: "JEE Previous Years Questions", url: "https://www.amazon.com/s?k=JEE+Main+previous+year+questions" }
                ],
                websites: [
                    { name: "NTA Official", url: "https://www.nta.ac.in/" },
                    { name: "JEE Advanced Official", url: "https://jeeadv.ac.in/" },
                    { name: "JoSAA Counselling", url: "https://josaa.nic.in/" },
                    { name: "Testbook JEE Main", url: "https://testbook.com/jee-main" },
                    { name: "Mathongo", url: "https://www.mathongo.com/" },
                    { name: "Vedantu", url: "https://www.vedantu.com/" },
                    { name: "PW Live", url: "https://www.pw.live/" },
                    { name: "NPTEL", url: "https://nptel.ac.in/" }
                ]
            },
            {
                title: "Mock Tests, PYQs & Exam Strategy", desc: "Practice chapter tests, full mocks, and PYQ analysis for high rank.", dur: "10-14 weeks",
                courses: [
                    { name: "JEE Mock Test Series", platform: "Testbook", url: "https://testbook.com/jee-main" },
                    { name: "JEE Practice Series", platform: "Adda247", url: "https://www.adda247.com/school/jee-main/" },
                    { name: "JEE Test Practice", platform: "Unacademy", url: "https://www.unacademy.com/" },
                    { name: "Problem Solving Sessions", platform: "Mathongo", url: "https://www.mathongo.com/" },
                    { name: "NTA Exam Updates", platform: "NTA", url: "https://www.nta.ac.in/" },
                    { name: "JEE Prep", platform: "PW", url: "https://www.pw.live/" }
                ],
                videos: [
                    { name: "JEE PYQ Discussion", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+pyq+discussion" },
                    { name: "JEE Mock Test Analysis", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+mock+test+analysis" },
                    { name: "JEE Rank Booster Strategy", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+rank+booster+strategy" },
                    { name: "JEE Revision Marathon", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+revision+marathon" },
                    { name: "JEE Previous Year Questions", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+previous+year+questions+solution" },
                    { name: "JEE Mistake Analysis", platform: "YouTube", url: "https://www.youtube.com/results?search_query=jee+common+mistakes" }
                ],
                books: [
                    { name: "JEE Mock Tests and Papers", url: "https://www.amazon.in/s?k=jee+main+mock+test+book" },
                    { name: "JEE Advanced Problems", url: "https://www.amazon.com/s?k=jee+advanced+problem+book" }
                ],
                websites: [
                    { name: "NTA", url: "https://www.nta.ac.in/" },
                    { name: "JEE Advanced", url: "https://jeeadv.ac.in/" },
                    { name: "JoSAA", url: "https://josaa.nic.in/" },
                    { name: "Testbook", url: "https://testbook.com/jee-main" },
                    { name: "Adda247 JEE", url: "https://www.adda247.com/school/jee-main/" },
                    { name: "PW", url: "https://www.pw.live/" }
                ]
            }
        ]
    },
    {
        id: "railway-rrb", name: "Railway Exams (RRB NTPC/Group D/ALP)", cat: "GovtExam", color: "#0f766e",
        steps: [
            {
                title: "Railway Exam Foundation", desc: "Quant, reasoning, GK, and exam-specific strategy for RRB exams.", dur: "8-12 weeks",
                courses: [
                    { name: "Railway Exams Prep", platform: "Testbook", url: "https://testbook.com/railway-jobs" },
                    { name: "Railway Preparation", platform: "Adda247", url: "https://www.adda247.com/" },
                    { name: "Railway Strategy", platform: "Unacademy", url: "https://www.unacademy.com/" },
                    { name: "Aptitude Foundation", platform: "Khan Academy", url: "https://www.khanacademy.org/" },
                    { name: "General Studies", platform: "SWAYAM", url: "https://swayam.gov.in/" },
                    { name: "Maths Foundation", platform: "NPTEL", url: "https://nptel.ac.in/" }
                ],
                videos: [
                    { name: "RRB NTPC Full Preparation (Hindi)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+ntpc+full+preparation+hindi" },
                    { name: "RRB Group D Maths", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+group+d+maths+tricks" },
                    { name: "RRB Reasoning Complete", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+reasoning+full+course" },
                    { name: "Railway GK Marathon", platform: "YouTube", url: "https://www.youtube.com/results?search_query=railway+gk+marathon" },
                    { name: "RRB Exam Pattern & Syllabus", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+exam+pattern+syllabus" },
                    { name: "RRB Previous Year Questions", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+previous+year+questions" }
                ],
                books: [
                    { name: "RRB NTPC Guide", url: "https://www.amazon.com/s?k=RRB+NTPC+guide" },
                    { name: "Railway Group D Book", url: "https://www.amazon.com/s?k=Railway+group+d+book" },
                    { name: "Railway Aptitude Book", url: "https://www.amazon.com/s?k=railway+aptitude+book" }
                ],
                websites: [
                    { name: "Indian Railways Official", url: "https://indianrailways.gov.in/" },
                    { name: "RRB Apply Portal", url: "https://www.rrbapply.gov.in/#/auth/home" },
                    { name: "Testbook Railway", url: "https://testbook.com/railway-jobs" },
                    { name: "Adda247", url: "https://www.adda247.com/" },
                    { name: "Jagran Josh", url: "https://www.jagranjosh.com/" },
                    { name: "NTA", url: "https://www.nta.ac.in/" }
                ]
            },
            {
                title: "Mock Tests & Speed Improvement", desc: "Daily mocks, sectional practice, and revision for CBT rounds.", dur: "6-8 weeks",
                courses: [
                    { name: "Railway Mock Test Pack", platform: "Testbook", url: "https://testbook.com/railway-jobs" },
                    { name: "Railway Mock Discussion", platform: "Adda247", url: "https://www.adda247.com/" },
                    { name: "Railway Daily Quiz", platform: "Unacademy", url: "https://www.unacademy.com/" },
                    { name: "Logical Practice", platform: "Khan Academy", url: "https://www.khanacademy.org/" }
                ],
                videos: [
                    { name: "Railway Mock Test Analysis", platform: "YouTube", url: "https://www.youtube.com/results?search_query=railway+mock+test+analysis" },
                    { name: "RRB NTPC PYQ Practice", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+ntpc+pyq+practice" },
                    { name: "Railway Speed Maths", platform: "YouTube", url: "https://www.youtube.com/results?search_query=railway+speed+maths+hindi" },
                    { name: "Railway Reasoning Practice", platform: "YouTube", url: "https://www.youtube.com/results?search_query=railway+reasoning+practice" },
                    { name: "RRB Last Month Strategy", platform: "YouTube", url: "https://www.youtube.com/results?search_query=rrb+last+month+strategy" }
                ],
                books: [
                    { name: "Railway Practice Set", url: "https://www.amazon.com/s?k=railway+practice+set+book" }
                ],
                websites: [
                    { name: "RRB Apply", url: "https://www.rrbapply.gov.in/#/auth/home" },
                    { name: "Indian Railways", url: "https://indianrailways.gov.in/" },
                    { name: "Testbook", url: "https://testbook.com/railway-jobs" },
                    { name: "Adda247", url: "https://www.adda247.com/" }
                ]
            }
        ]
    },
    {
        id: "ugc-net-jrf", name: "UGC NET / JRF", cat: "GovtExam", color: "#7c3aed",
        steps: [
            {
                title: "Paper 1: Teaching & Research Aptitude", desc: "Reasoning, comprehension, ICT, higher education, and research methodology.", dur: "8-10 weeks",
                courses: [
                    { name: "UGC NET Complete Course", platform: "Testbook", url: "https://testbook.com/ugc-net" },
                    { name: "UGC NET Paper 1", platform: "Adda247", url: "https://www.adda247.com/teaching-jobs-exam/ugc-net/" },
                    { name: "Teaching Aptitude", platform: "SWAYAM", url: "https://swayam.gov.in/" },
                    { name: "Research Basics", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "UGC NET Coaching", platform: "Unacademy", url: "https://www.unacademy.com/" },
                    { name: "Logical Reasoning Foundation", platform: "Khan Academy", url: "https://www.khanacademy.org/" }
                ],
                videos: [
                    { name: "UGC NET Paper 1 Full Course", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+paper+1+full+course" },
                    { name: "UGC NET Teaching Aptitude", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+teaching+aptitude" },
                    { name: "UGC NET Research Aptitude", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+research+aptitude" },
                    { name: "UGC NET ICT & Data Interpretation", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+ict+data+interpretation" },
                    { name: "UGC NET PYQ Paper 1", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+paper+1+pyq" },
                    { name: "UGC NET Strategy", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+strategy+hindi" }
                ],
                books: [
                    { name: "UGC NET Paper 1 Books", url: "https://www.amazon.com/s?k=UGC+NET+paper+1+book" },
                    { name: "Teaching Aptitude Book", url: "https://www.amazon.com/s?k=teaching+aptitude+book" }
                ],
                websites: [
                    { name: "UGC NET Official", url: "https://ugcnet.nta.ac.in/" },
                    { name: "UGC Official", url: "https://www.ugc.gov.in/" },
                    { name: "NTA", url: "https://www.nta.ac.in/" },
                    { name: "Testbook UGC NET", url: "https://testbook.com/ugc-net" },
                    { name: "Adda247 UGC NET", url: "https://www.adda247.com/teaching-jobs-exam/ugc-net/" }
                ]
            },
            {
                title: "Paper 2: Subject-Wise Preparation", desc: "Prepare subject content with PYQs, topic tests, and revision.", dur: "10-14 weeks",
                courses: [
                    { name: "UGC NET Subject Courses", platform: "Testbook", url: "https://testbook.com/ugc-net" },
                    { name: "UGC NET Subject Classes", platform: "Adda247", url: "https://www.adda247.com/teaching-jobs-exam/ugc-net/" },
                    { name: "Subject Lectures", platform: "SWAYAM", url: "https://swayam.gov.in/" },
                    { name: "University-Level Courses", platform: "NPTEL", url: "https://nptel.ac.in/" },
                    { name: "UGC NET Prep", platform: "Unacademy", url: "https://www.unacademy.com/" }
                ],
                videos: [
                    { name: "UGC NET Paper 2 Full Course", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+paper+2+full+course" },
                    { name: "UGC NET Subject PYQs", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+subject+pyq+discussion" },
                    { name: "UGC NET Unit-wise Revision", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+unit+wise+revision" },
                    { name: "UGC NET Mock Analysis", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+mock+test+analysis" },
                    { name: "UGC NET Last 30 Days Strategy", platform: "YouTube", url: "https://www.youtube.com/results?search_query=ugc+net+last+30+days+strategy" }
                ],
                books: [
                    { name: "UGC NET Subject Books", url: "https://www.amazon.in/s?k=UGC+NET+subject+book" },
                    { name: "UGC NET English Literature Books", url: "https://www.amazon.in/s?k=UGC+NET+English+literature+book" }
                ],
                websites: [
                    { name: "UGC NET", url: "https://ugcnet.nta.ac.in/" },
                    { name: "UGC", url: "https://www.ugc.gov.in/" },
                    { name: "Testbook", url: "https://testbook.com/ugc-net" },
                    { name: "Adda247", url: "https://www.adda247.com/teaching-jobs-exam/ugc-net/" },
                    { name: "NTA", url: "https://www.nta.ac.in/" }
                ]
            }
        ]
    }
];

// Merge into DOMAINS
if (typeof DOMAINS !== 'undefined' && Array.isArray(DOMAINS)) {
    MORE_DOMAINS.forEach(function (d) { DOMAINS.push(d); });
}

/* ===== Resource Cleanup + Indian Enrichment ===== */
(function () {
    if (typeof DOMAINS === 'undefined' || !Array.isArray(DOMAINS)) return;
    if (typeof window !== 'undefined' && window.__courseMapResourcesEnhanced) return;
    if (typeof window !== 'undefined') window.__courseMapResourcesEnhanced = true;

    const DEAD_URLS = new Set([
        "https://www.amazon.in/s?k=Modern%20CSS%20Mastery",
        "https://helpx.adobe.com/illustrator/tutorials.html",
        "https://helpx.adobe.com/photoshop/tutorials.html",
        "https://helpx.adobe.com/after-effects/tutorials.html",
        "https://helpx.adobe.com/premiere-pro/tutorials.html",
        "https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf",
        "https://www.cambridgeincolour.com/",
        "https://helpx.adobe.com/lightroom/tutorials.html",
        "https://www.britishcouncil.in/",
        "https://learnenglish.britishcouncil.org/",
        "https://www.amazon.in/s?k=Indian%20Economy%20%E2%80%93%20Ramesh%20Singh",
        "https://www.amazon.in/s?k=Certificate%20Physical%20%26%20Human%20Geography%20%E2%80%93%20GC%20Leong",
        "https://www.amazon.in/s?k=Ancient%20India%20%E2%80%93%20RS%20Sharma",
        "https://www.amazon.in/s?k=Indian%20Art%20%26%20Culture%20%E2%80%93%20Nitin%20Singhania",
        "https://ncert.nic.in/textbook.php",
        "https://ncert.nic.in/",
        "https://www.amazon.in/s?k=Essay%20Writing%20Made%20Easy",
        "https://www.amazon.in/s?k=Ethics%2C%20Integrity%20%26%20Aptitude%20%E2%80%93%20Lexicon",
        "https://www.amazon.in/s?k=International%20Relations%20%E2%80%93%20Pavneet%20Singh",
        "https://www.amazon.in/s?k=Governance%20in%20India%20%E2%80%93%20Laxmikanth",
        "https://yojana.gov.in/",
        "https://www.amazon.in/s?k=Arithmetic%20for%20Competitive%20Exams",
        "https://www.amazon.in/s?k=Data%20Interpretation%20%E2%80%93%20Arun%20Sharma",
        "https://www.amazon.in/s?k=SSC%20Mathematics%20%E2%80%93%20Rakesh%20Yadav",
        "https://www.amazon.in/s?k=Quicker%20Maths%20%E2%80%93%20M%20Tyra",
        "https://www.amazon.in/s?k=Lucent's%20General%20Knowledge",
        "https://www.amazon.in/s?k=General%20Awareness%20%E2%80%93%20Arihant",
        "https://www.amazon.in/s?k=SSC%20English%20by%20MB%20Publication",
        "https://www.amazon.in/s?k=SBI%20PO%20Practice%20Sets%20%E2%80%93%20Arihant",
        "https://www.ibps.in/",
        "https://www.amazon.in/s?k=Puzzle%20%26%20Seating%20Arrangement%20%E2%80%93%20Adda247",
        "https://www.amazon.in/s?k=High%20Level%20Reasoning%20%E2%80%93%20Adda247",
        "https://www.amazon.in/s?k=English%20for%20Banking%20Exams%20%E2%80%93%20Kiran",
        "https://www.amazon.in/s?k=GATE%20Computer%20Science%20%E2%80%93%20Kanodia",
        "https://www.amazon.in/s?k=GATE%20PYQs%20Solved%20%E2%80%93%20Made%20Easy",
        "https://www.amazon.in/s?k=Errorless%20Physics",
        "https://www.amazon.in/s?k=MTG%20NEET%20Physics%20PYQs",
        "https://www.amazon.in/s?k=Objective%20Physics%20%E2%80%93%20Pradeep",
        "https://www.amazon.in/s?k=Fundamentals%20of%20Physics%20%E2%80%93%20Resnick%20Halliday",
        "https://www.amazon.in/s?k=Trueman's%20Biology%20Vol%201%20%26%202",
        "https://www.amazon.in/s?k=MTG%20NEET%20Biology%20PYQs",
        "https://www.amazon.in/s?k=GRB%20Objective%20Chemistry",
        "https://www.amazon.in/s?k=Dinesh%20Objective%20Biology",
        "https://www.amazon.in/s?k=Cost%20Accounting%20%E2%80%93%20Horngren",
        "https://www.amazon.in/s?k=Accounting%20Principles%20%E2%80%93%20Weygandt",
        "https://www.amazon.in/s?k=Financial%20Accounting%20%E2%80%93%20TS%20Grewal",
        "https://www.amazon.in/s?k=Tally%20ERP%209%20Guide",
        "https://www.amazon.in/s?k=Perspective%20Made%20Easy%20%E2%80%93%20Ernest%20Norling"
    ]);

    function ensureArray(obj, key) {
        if (!Array.isArray(obj[key])) obj[key] = [];
    }

    function addUnique(arr, item) {
        if (!item || !item.url) return;
        if (!arr.some(function (it) { return it && it.url === item.url; })) {
            arr.push(item);
        }
    }

    function ytQuery(domainName, stepTitle, suffix) {
        return "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(domainName + " " + stepTitle + " " + suffix);
    }

    function isHttpUrl(url) {
        try {
            var parsed = new URL(url);
            return parsed.protocol === "http:" || parsed.protocol === "https:";
        } catch (_) {
            return false;
        }
    }

    function normalizeUrl(url, type, domainName, stepTitle, resourceName) {
        var clean = String(url || "").trim();
        if (!clean || DEAD_URLS.has(clean) || !isHttpUrl(clean)) return "";

        // Direct YouTube video URLs can become unavailable over time.
        // Convert them to resilient search URLs for the same topic.
        if (type === "videos" && /(youtube\.com\/watch|youtube\.com\/shorts|youtu\.be\/)/i.test(clean)) {
            var query = resourceName || (domainName + " " + stepTitle + " tutorial");
            return "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
        }

        return clean;
    }

    function ensureMinimum(arr, candidates, minCount) {
        if (!Array.isArray(arr)) return;
        candidates.forEach(function (item) { addUnique(arr, item); });

        // If still short, add extra YouTube query links (high-reliability) for breadth.
        var i = 1;
        while (arr.length < minCount && i <= 20) {
            var extra = {
                name: "Extra Learning Resource " + i,
                platform: "YouTube",
                url: "https://www.youtube.com/results?search_query=" + encodeURIComponent("learning tutorial " + i)
            };
            addUnique(arr, extra);
            i++;
        }
    }

    DOMAINS.forEach(function (domain) {
        if (!domain || !Array.isArray(domain.steps)) return;

        domain.steps.forEach(function (step) {
            if (!step || !step.title) return;
            var domainName = domain.name || "Domain";
            var searchQ = encodeURIComponent(domainName + " " + step.title);

            ["courses", "videos", "books", "websites"].forEach(function (type) {
                ensureArray(step, type);
                var seenUrls = new Set();
                step[type] = step[type]
                    .map(function (r) {
                        if (!r || !r.url) return null;
                        var safeUrl = normalizeUrl(r.url, type, domainName, step.title, r.name);
                        if (!safeUrl) return null;
                        return Object.assign({}, r, { url: safeUrl });
                    })
                    .filter(function (r) {
                        if (!r || seenUrls.has(r.url)) return false;
                        seenUrls.add(r.url);
                        return true;
                    });
            });

            var courseCandidates = [
                { name: step.title + " - SWAYAM India", platform: "SWAYAM", url: "https://swayam.gov.in/" },
                { name: step.title + " - NPTEL", platform: "NPTEL", url: "https://nptel.ac.in/" },
                { name: step.title + " - Coursera Search", platform: "Coursera", url: "https://www.coursera.org/search?query=" + searchQ },
                { name: step.title + " - edX Search", platform: "edX", url: "https://www.edx.org/search?q=" + searchQ },
                { name: step.title + " - GeeksforGeeks Search", platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/?s=" + searchQ },
                { name: step.title + " - Testbook Search", platform: "Testbook", url: "https://testbook.com/search?query=" + searchQ },
                { name: step.title + " - Khan Academy", platform: "Khan Academy", url: "https://www.khanacademy.org/" },
                { name: step.title + " - Unacademy", platform: "Unacademy", url: "https://www.unacademy.com/" }
            ];

            var videoCandidates = [
                { name: step.title + " Full Course (Hindi)", platform: "YouTube", url: ytQuery(domainName, step.title, "full course hindi") },
                { name: step.title + " Full Course (English)", platform: "YouTube", url: ytQuery(domainName, step.title, "full course english") },
                { name: step.title + " Crash Course", platform: "YouTube", url: ytQuery(domainName, step.title, "crash course") },
                { name: step.title + " Beginner to Advanced", platform: "YouTube", url: ytQuery(domainName, step.title, "beginner to advanced") },
                { name: step.title + " Interview Questions", platform: "YouTube", url: ytQuery(domainName, step.title, "interview questions") },
                { name: step.title + " Practical Project", platform: "YouTube", url: ytQuery(domainName, step.title, "project tutorial") },
                { name: step.title + " Revision Session", platform: "YouTube", url: ytQuery(domainName, step.title, "revision") },
                { name: step.title + " PYQ / Practice", platform: "YouTube", url: ytQuery(domainName, step.title, "pyq practice") },
                { name: domainName + " Practical Roadmap (Hindi)", platform: "YouTube", url: ytQuery(domainName, step.title, "project roadmap hindi") }
            ];

            var websiteCandidates = [
                { name: "NPTEL India", url: "https://nptel.ac.in/" },
                { name: "SWAYAM India", url: "https://swayam.gov.in/" },
                { name: "National Digital Library of India", url: "https://ndl.iitkgp.ac.in/" },
                { name: "GeeksforGeeks India", url: "https://www.geeksforgeeks.org/" },
                { name: "Khan Academy", url: "https://www.khanacademy.org/" },
                { name: "YouTube Learning", url: "https://www.youtube.com/" },
                { name: "Testbook", url: "https://testbook.com/" },
                { name: "Jagran Josh", url: "https://www.jagranjosh.com/" }
            ];

            var bookCandidates = [
                { name: step.title + " - Amazon India Books", url: "https://www.amazon.in/s?k=" + searchQ + "+book" },
                { name: step.title + " - Google Books", url: "https://books.google.com/books?q=" + searchQ },
                { name: step.title + " - Open Library Search", url: "https://openlibrary.org/search?q=" + searchQ },
                { name: step.title + " - Internet Archive Books", url: "https://archive.org/search?query=" + searchQ + "%20book" },
                { name: "National Digital Library of India", url: "https://ndl.iitkgp.ac.in/" }
            ];

            // Category-focused Indian additions
            if (domain.cat === "GovtExam") {
                websiteCandidates.push({ name: "Adda247 India", url: "https://www.adda247.com/" });
                websiteCandidates.push({ name: "NTA Official", url: "https://www.nta.ac.in/" });
                videoCandidates.push({
                    name: (domain.name || "Govt Exam") + " Strategy (Hindi)",
                    platform: "YouTube",
                    url: ytQuery(domain.name || "Govt Exam", step.title, "strategy hindi")
                });
                videoCandidates.push({
                    name: (domain.name || "Govt Exam") + " Current Affairs",
                    platform: "YouTube",
                    url: ytQuery(domain.name || "Govt Exam", step.title, "current affairs")
                });
            }

            if (domain.cat === "Tech" || domain.cat === "Engineering" || domain.cat === "Science") {
                websiteCandidates.push({ name: "freeCodeCamp", url: "https://www.freecodecamp.org/" });
                websiteCandidates.push({ name: "MDN Web Docs", url: "https://developer.mozilla.org/" });
                videoCandidates.push({
                    name: step.title + " Coding Tutorials (Hindi)",
                    platform: "YouTube",
                    url: ytQuery(domain.name || "Tech", step.title, "apna college codewithharry hindi")
                });
                courseCandidates.push({ name: step.title + " - freeCodeCamp", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/" });
            }

            if (domain.cat === "Commerce" || domain.cat === "Business") {
                websiteCandidates.push({ name: "ClearTax India", url: "https://www.cleartax.in/" });
                websiteCandidates.push({ name: "RBI Official", url: "https://www.rbi.org.in/" });
                videoCandidates.push({
                    name: step.title + " Commerce Concepts (Hindi)",
                    platform: "YouTube",
                    url: ytQuery(domain.name || "Commerce", step.title, "accounts finance hindi")
                });
                courseCandidates.push({ name: step.title + " - RBI Learning", platform: "RBI", url: "https://www.rbi.org.in/" });
            }

            if (domain.cat === "Arts" || domain.cat === "Creative" || domain.cat === "Design") {
                websiteCandidates.push({ name: "NID India", url: "https://www.nid.edu/" });
                videoCandidates.push({
                    name: step.title + " Creative Skills (Hindi)",
                    platform: "YouTube",
                    url: ytQuery(domain.name || "Creative", step.title, "design creative hindi")
                });
                videoCandidates.push({
                    name: step.title + " Portfolio Building",
                    platform: "YouTube",
                    url: ytQuery(domain.name || "Creative", step.title, "portfolio tutorial")
                });
            }

            ensureMinimum(step.courses, courseCandidates, 10);
            ensureMinimum(step.videos, videoCandidates, 12);
            ensureMinimum(step.books, bookCandidates, 4);
            ensureMinimum(step.websites, websiteCandidates, 10);
        });
    });
}());
