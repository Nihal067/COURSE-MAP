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
                    { name: "Arithmetic Shortcuts", platform: "BYJU'S Exam Prep", url: "https://byjusexamprep.com/ibps-po-exam" },
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
                    { name: "Data Interpretation – Arun Sharma", url: "https://www.amazon.in/How-Prepare-Data-Interpretation-Competitive/dp/9352602757" },
                    { name: "Magical Book on Quicker Maths – M Tyra", url: "https://www.amazon.in/Quicker-Maths-M-Tyra/dp/9382145699" },
                    { name: "IBPS PO Previous Year Papers", url: "https://www.ibps.in/" },
                    { name: "SBI PO Practice Sets – Arihant", url: "https://www.amazon.in/SBI-PO-Practice-Sets/dp/9327198135" },
                    { name: "Banking Awareness – Arihant", url: "https://www.amazon.in/Banking-Awareness-Arihant/dp/9311124435" },
                    { name: "Lucent's General Knowledge", url: "https://www.amazon.in/Lucents-General-Knowledge/dp/9380369190" }
                ],
                websites: [
                    { name: "IBPS Official", url: "https://www.ibps.in/" },
                    { name: "SBI Recruitment Portal", url: "https://www.sbi.co.in/web/careers" },
                    { name: "RBI Career Page", url: "https://www.rbi.org.in/Scripts/Bs_viewcontent.aspx?Id=2006" },
                    { name: "Testbook Bank Section", url: "https://testbook.com/ibps-po" },
                    { name: "Adda247 Banking", url: "https://www.adda247.com/banking-jobs/" },
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
                    { name: "Cloze Test Mastery", platform: "BYJU'S Exam Prep", url: "https://byjusexamprep.com/" },
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
                    { name: "High Level Reasoning – Adda247", url: "https://www.amazon.in/Reasoning-Ability-Banking-Mains-Exams/dp/9389645054" },
                    { name: "English for Banking Exams – Kiran", url: "https://www.amazon.in/Kiran-Bank-PO-English/dp/B07PPTLN61" },
                    { name: "Puzzle & Seating Arrangement – Adda247", url: "https://www.amazon.in/Puzzle-Seating-Arrangement-Banking-Exams/dp/9389645054" },
                    { name: "Banking English Previous Papers", url: "https://www.ibps.in/" }
                ],
                websites: [
                    { name: "IBPS Official PYQs", url: "https://www.ibps.in/" },
                    { name: "Testbook Reasoning Practice", url: "https://testbook.com/" },
                    { name: "Adda247 Daily Quiz", url: "https://www.adda247.com/" },
                    { name: "Oliveboard Mock Tests", url: "https://www.oliveboard.in/" },
                    { name: "IndiaBIX Reasoning", url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/" },
                    { name: "BankExamsToday", url: "https://www.bankexamstoday.com/" },
                    { name: "Gradeup Banking Section", url: "https://byjusexamprep.com/" },
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
                    { name: "GATE ECE Preparation", platform: "BYJU'S Exam Prep", url: "https://byjusexamprep.com/gate-exam" },
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
                    { name: "GATE Computer Science – Kanodia", url: "https://www.amazon.in/GATE-Computer-Science-Information-Technology/dp/9352604016" },
                    { name: "Introduction to Algorithms – CLRS", url: "https://www.amazon.in/Introduction-Algorithms-Thomas-H-Cormen/dp/8120340078" },
                    { name: "Operating System Concepts – Galvin", url: "https://www.amazon.in/Operating-System-Concepts-Abraham-Silberschatz/dp/8126554274" },
                    { name: "Database System Concepts – Sudarshan", url: "https://www.amazon.in/Database-System-Concepts-Abraham-Silberschatz/dp/9352607007" },
                    { name: "Computer Networks – Tanenbaum", url: "https://www.amazon.in/Computer-Networks-Andrew-S-Tanenbaum/dp/9332518742" },
                    { name: "Engineering Maths – BS Grewal", url: "https://www.amazon.in/Higher-Engineering-Mathematics-B-Grewal/dp/8174091955" },
                    { name: "Digital Logic – Morris Mano", url: "https://www.amazon.in/Digital-Logic-Computer-Design-Morris/dp/8131714500" },
                    { name: "GATE PYQs Solved – Made Easy", url: "https://www.amazon.in/GATE-Previous-Solved-Papers-Engineering/dp/9389645054" }
                ],
                websites: [
                    { name: "GATE Official – IIT", url: "https://gate2025.iitr.ac.in/" },
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
                    { name: "NEET Physics Crash Course", platform: "PW (Physics Wallah)", url: "https://www.pw.live/study/neet" },
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
                    { name: "NCERT Physics 11th & 12th", url: "https://ncert.nic.in/textbook.php" },
                    { name: "Irodov Problems in General Physics", url: "https://www.amazon.in/Problems-General-Physics-I-E-Irodov/dp/8183552153" },
                    { name: "MTG NEET Physics PYQs", url: "https://www.amazon.in/MTG-NEET-Previous-Years-Papers/dp/9389645054" },
                    { name: "Objective Physics – Pradeep", url: "https://www.amazon.in/Pradeeps-Objective-Physics-Vol-11th/dp/8193647262" },
                    { name: "Errorless Physics", url: "https://www.amazon.in/Universal-Self-Scorer-Errorless-Physics/dp/B07PPTLN61" },
                    { name: "Fundamentals of Physics – Resnick Halliday", url: "https://www.amazon.in/Fundamentals-Physics-Extended-David-Halliday/dp/8126551097" }
                ],
                websites: [
                    { name: "NTA NEET Official", url: "https://neet.nta.nic.in/" },
                    { name: "Allen Online", url: "https://www.allen.ac.in/" },
                    { name: "Aakash Digital", url: "https://www.aakash.ac.in/" },
                    { name: "Physics Wallah Official", url: "https://www.pw.live/" },
                    { name: "Vedantu NEET Prep", url: "https://www.vedantu.com/neet" },
                    { name: "Embibe NEET Practice", url: "https://www.embibe.com/exams/neet/" },
                    { name: "NCERT Textbooks Free", url: "https://ncert.nic.in/" },
                    { name: "Motion Education", url: "https://www.motion.ac.in/" }
                ]
            },
            {
                title: "Chemistry & Biology for NEET", desc: "Organic, Inorganic, Physical Chemistry + Botany, Zoology.", dur: "12-16 weeks",
                courses: [
                    { name: "NEET Chemistry Full Course", platform: "Physics Wallah", url: "https://www.pw.live/study/neet" },
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
                    { name: "NCERT Biology 11th & 12th", url: "https://ncert.nic.in/textbook.php" },
                    { name: "Trueman's Biology Vol 1 & 2", url: "https://www.amazon.in/Truemans-Elementary-Biology-Vol-11th/dp/8187223456" },
                    { name: "Organic Chemistry – Morrison Boyd", url: "https://www.amazon.in/Organic-Chemistry-Morrison-Boyd/dp/9332519072" },
                    { name: "NCERT Chemistry 11th & 12th", url: "https://ncert.nic.in/textbook.php" },
                    { name: "GRB Objective Chemistry", url: "https://www.amazon.in/GRB-Objective-Chemistry-12th/dp/8188565997" },
                    { name: "MTG NEET Biology PYQs", url: "https://www.amazon.in/MTG-NEET-Biology-Chapter-Topicwise/dp/9389645054" },
                    { name: "Dinesh Objective Biology", url: "https://www.amazon.in/Dinesh-Objective-Biology-Class-11/dp/8193647262" },
                    { name: "Campbell Biology", url: "https://www.amazon.in/Campbell-Biology-Lisa-A-Urry/dp/0134093410" }
                ],
                websites: [
                    { name: "NTA NEET Official", url: "https://neet.nta.nic.in/" },
                    { name: "Allen NEET Prep", url: "https://www.allen.ac.in/" },
                    { name: "Vedantu Biology", url: "https://www.vedantu.com/" },
                    { name: "Physics Wallah NEET", url: "https://www.pw.live/" },
                    { name: "NCERT Solutions Free", url: "https://ncert.nic.in/" },
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
                    { name: "Tally ERP 9 Complete", platform: "Udemy", url: "https://www.udemy.com/course/tally-erp-9-complete/" },
                    { name: "CA Foundation Course", platform: "Unacademy", url: "https://unacademy.com/goal/ca-foundation/FURVV" },
                    { name: "GST Practitioner Course", platform: "ICAI", url: "https://www.icai.org/" },
                    { name: "Financial Accounting Basics", platform: "Khan Academy", url: "https://www.khanacademy.org/economics-finance-domain/core-finance" },
                    { name: "CA Inter Accounts", platform: "BYJU'S", url: "https://byjus.com/ca/" },
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
                    { name: "Financial Accounting – TS Grewal", url: "https://www.amazon.in/Financial-Accounting-T-S-Grewal/dp/9385676089" },
                    { name: "Accounting Principles – Weygandt", url: "https://www.amazon.in/Accounting-Principles-Jerry-Weygandt/dp/1119411017" },
                    { name: "ICAI Study Material", url: "https://www.icai.org/" },
                    { name: "Tally ERP 9 Guide", url: "https://www.amazon.in/Tally-ERP-Training-Guide-Asok/dp/B07PPTLN61" },
                    { name: "Cost Accounting – Horngren", url: "https://www.amazon.in/Cost-Accounting-Managerial-Emphasis-Horngren/dp/9352866290" },
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
        id: "fine-arts", name: "Fine Arts & Visual Arts",
        steps: [
            {
                title: "Drawing & Sketching Fundamentals", desc: "Pencil drawing, perspective, shading, anatomy, composition basics.", dur: "6-8 weeks",
                courses: [
                    { name: "Drawing for Absolute Beginners", platform: "Udemy", url: "https://www.udemy.com/course/drawing-for-beginners/" },
                    { name: "Fundamentals of Drawing", platform: "Skillshare", url: "https://www.skillshare.com/classes/Drawing-Basics" },
                    { name: "Art Fundamentals", platform: "Coursera (CalArts)", url: "https://www.coursera.org/learn/fundamentals-of-drawing" },
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
                    { name: "Perspective Made Easy – Ernest Norling", url: "https://www.amazon.in/Perspective-Made-Easy-Ernest-Norling/dp/048640473X" },
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
                    { name: "Artstation – Portfolio Platform", url: "https://www.artstation.com/" },
                    { name: "QuickPoses – Timed Practice", url: "https://quickposes.com/" },
                    { name: "Concept Art Empire", url: "https://conceptartempire.com/" }
                ]
            }
        ]
    }
];

// Merge into DOMAINS
if (typeof DOMAINS !== 'undefined' && Array.isArray(DOMAINS)) {
    MORE_DOMAINS.forEach(function (d) { DOMAINS.push(d); });
}
