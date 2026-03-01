/* ===== GOVERNMENT EXAM & NEW SECTOR DOMAINS ===== */
/* This file adds new domains to the existing DOMAINS array */

const EXTRA_DOMAINS = [
    {
        id: "upsc-ias", name: "UPSC Civil Services (IAS/IPS/IFS)", cat: "GovtExam", color: "#dc2626",
        steps: [
            {
                title: "NCERT Foundation (6th-12th)", desc: "Build strong base with NCERT textbooks across History, Geography, Polity, Economy, Science.", dur: "8-12 weeks",
                courses: [
                    { name: "UPSC NCERT Summary Course", platform: "Unacademy", url: "https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/KSCGY" },
                    { name: "Complete NCERT for UPSC", platform: "BYJU'S", url: "https://byjus.com/free-ias-prep/" },
                    { name: "NCERT Foundation – IAS", platform: "StudyIQ", url: "https://www.studyiq.com/" },
                    { name: "Indian Polity by Laxmikanth", platform: "Udemy", url: "https://www.youtube.com/results?search_query=Indian%20Polity%20by%20Laxmikanth%20tutorial" },
                    { name: "UPSC Prelims Complete", platform: "Testbook", url: "https://testbook.com/ias-preparation" },
                    { name: "Ancient India NCERT", platform: "Khan Academy", url: "https://www.khanacademy.org/humanities/world-history" },
                    { name: "Geography NCERT Summary", platform: "Drishti IAS", url: "https://www.drishtiias.com/free-downloads/ncert-notes" },
                    { name: "Economy NCERT Basics", platform: "Vision IAS", url: "https://visionias.in/" }
                ],
                videos: [
                    { name: "Complete NCERT History", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=Yocja_N5s1I" },
                    { name: "NCERT Geography Full Course", platform: "YouTube – Drishti IAS", url: "https://www.youtube.com/watch?v=q8F3sSKmJQA" },
                    { name: "Indian Polity Complete", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=MeDL0y8wQ2Q" },
                    { name: "NCERT Economics Crash Course", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "NCERT Science for UPSC", platform: "YouTube – Khan Sir", url: "https://www.youtube.com/watch?v=YJyRFE_bZZo" },
                    { name: "Modern History Full Revision", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Art & Culture NCERT", platform: "YouTube – Sleepy Classes", url: "https://www.youtube.com/watch?v=RkDl0z90WyI" },
                    { name: "Environment NCERT Complete", platform: "YouTube – Mrunal Patel", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" }
                ],
                books: [
                    { name: "Indian Polity Notes – Drishti IAS", url: "https://www.drishtiias.com/to-the-points/paper2/indian-polity" },
                    { name: "India's Struggle for Independence – Bipan Chandra", url: "https://www.amazon.in/Indias-Struggle-Independence-Bipan-Chandra/dp/0140107819" },
                    { name: "Medieval India – Satish Chandra", url: "https://www.amazon.in/History-Medieval-India-Satish-Chandra/dp/8125032266" },
                ],
                websites: [
                    { name: "Drishti IAS – Current Affairs & Notes", url: "https://www.drishtiias.com/" },
                    { name: "UPSC Official – Syllabus & Notifications", url: "https://upsc.gov.in/" },
                    { name: "Insights on India – Daily Quizzes", url: "https://www.insightsonindia.com/" },
                    { name: "IASbaba – Prelims & Mains", url: "https://iasbaba.com/" },
                    { name: "ClearIAS – Free Study Materials", url: "https://www.clearias.com/" },
                    { name: "Civilsdaily – Editorial Analysis", url: "https://www.civilsdaily.com/" },
                    { name: "ForumIAS – Study Plans", url: "https://forumias.com/" }
                ]
            },
            {
                title: "Prelims Preparation (GS Paper I & CSAT)", desc: "Focus on MCQ practice, current affairs, and CSAT aptitude.", dur: "12-16 weeks",
                courses: [
                    { name: "UPSC Prelims GS Complete", platform: "Unacademy", url: "https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/KSCGY" },
                    { name: "CSAT Paper II Full Course", platform: "BYJU'S", url: "https://byjus.com/free-ias-prep/csat/" },
                    { name: "Prelims 365 Test Series", platform: "Vision IAS", url: "https://visionias.in/" },
                    { name: "Current Affairs Monthly", platform: "Drishti IAS", url: "https://www.drishtiias.com/current-affairs-news-analysis-editorials" },
                    { name: "UPSC Prelims Mock Tests", platform: "Testbook", url: "https://testbook.com/ias-preparation" },
                    { name: "Daily MCQ Practice", platform: "ClearIAS", url: "https://www.clearias.com/upsc-prelims-test-series/" },
                    { name: "Science & Tech for Prelims", platform: "StudyIQ", url: "https://www.studyiq.com/" },
                    { name: "Map-based Questions Practice", platform: "InsightsOnIndia", url: "https://www.insightsonindia.com/" }
                ],
                videos: [
                    { name: "Prelims Strategy 2025", platform: "YouTube – Drishti IAS", url: "https://www.youtube.com/watch?v=t2k_dASbx_I" },
                    { name: "CSAT Complete in 30 Days", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Environment PYQs Analysis", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "Current Affairs Revision", platform: "YouTube – BYJU'S IAS", url: "https://www.youtube.com/watch?v=HxFl7pVW3Rs" },
                    { name: "Polity PYQs 2015-2024", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Geography Map Practice", platform: "YouTube – Khan Sir", url: "https://www.youtube.com/watch?v=YJyRFE_bZZo" },
                    { name: "CSAT Maths Tricks", platform: "YouTube – Adda247", url: "https://www.youtube.com/watch?v=VxGi8TcP7YI" },
                    { name: "Science & Tech Rapid Revision", platform: "YouTube – Mrunal", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" }
                ],
                books: [
                    { name: "UPSC Previous Years Papers – Solved", url: "https://www.amazon.in/UPSC-Civil-Services-Previous-Papers/dp/9390531543" },
                    { name: "CSAT Manual – TMH", url: "https://www.amazon.in/CSAT-Paper-Manual-Tata-McGraw/dp/1259004082" },
                    { name: "Environment – Shankar IAS", url: "https://www.amazon.in/Environment-Shankar-IAS-Academy/dp/9352607481" },
                    { name: "Science & Technology for UPSC", url: "https://www.amazon.in/Science-Technology-Ravi-Agrahari/dp/9389574455" },
                    { name: "Current Affairs Yearly – Drishti", url: "https://www.drishtiias.com/free-downloads" },
                    { name: "Quantitative Aptitude – RS Aggarwal", url: "https://www.amazon.in/Quantitative-Aptitude-Competitive-Examinations-Aggarwal/dp/9352534026" },
                    { name: "General Studies Manual – TMH", url: "https://www.amazon.in/TMH-General-Studies-Manual/dp/1259004082" },
                    { name: "Atlas – Oxford School Atlas", url: "https://www.amazon.in/Oxford-School-Atlas-36th-Edition/dp/0199491771" }
                ],
                websites: [
                    { name: "UPSC Previous Year Papers (Official)", url: "https://upsc.gov.in/examinations/previous-question-papers" },
                    { name: "ClearIAS Prelims Test Series", url: "https://www.clearias.com/upsc-prelims-test-series/" },
                    { name: "Insights on India – Prelims 2025", url: "https://www.insightsonindia.com/upsc-prelims/" },
                    { name: "PIB – Press Information Bureau", url: "https://pib.gov.in/" },
                    { name: "The Hindu – Editorial Analysis", url: "https://www.thehindu.com/" },
                    { name: "Indian Express – Explained", url: "https://indianexpress.com/section/explained/" },
                    { name: "PRS Legislative Research", url: "https://prsindia.org/" },
                    { name: "Rajya Sabha TV Discussions", url: "https://sansadtv.nic.in/" }
                ]
            },
            {
                title: "Mains Answer Writing (GS I-IV + Essay)", desc: "Master structured answer writing, essay composition, and all four GS papers.", dur: "12-20 weeks",
                courses: [
                    { name: "Mains Answer Writing Program", platform: "Vision IAS", url: "https://visionias.in/" },
                    { name: "GS Mains Complete Course", platform: "Unacademy", url: "https://unacademy.com/" },
                    { name: "Essay Writing Masterclass", platform: "Drishti IAS", url: "https://www.drishtiias.com/" },
                    { name: "Ethics Case Studies", platform: "ForumIAS", url: "https://forumias.com/" },
                    { name: "GS Paper IV Ethics & Integrity", platform: "StudyIQ", url: "https://www.studyiq.com/" },
                    { name: "International Relations for Mains", platform: "BYJU'S", url: "https://byjus.com/free-ias-prep/" },
                    { name: "Governance & Social Justice", platform: "ClearIAS", url: "https://www.clearias.com/" },
                    { name: "Disaster Management for GS III", platform: "Testbook", url: "https://testbook.com/" }
                ],
                videos: [
                    { name: "Answer Writing Tips by Topper", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=aSvwP-27o-w" },
                    { name: "Essay Writing Strategy", platform: "YouTube – Drishti IAS", url: "https://www.youtube.com/watch?v=t2k_dASbx_I" },
                    { name: "Ethics Paper Full Revision", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=TXkGhP0bsQk" },
                    { name: "GS Paper II – Governance", platform: "YouTube – Vision IAS", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "GS Paper III – Economy", platform: "YouTube – Mrunal", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" },
                    { name: "Internal Security Notes", platform: "YouTube – BYJU'S", url: "https://www.youtube.com/watch?v=HxFl7pVW3Rs" },
                    { name: "Social Issues for Mains", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Toppers' Copy Analysis", platform: "YouTube – IAS Baba", url: "https://www.youtube.com/watch?v=RkDl0z90WyI" }
                ],
                books: [
                    { name: "Internal Security – Ashok Kumar", url: "https://www.amazon.in/Internal-Security-Ashok-Kumar/dp/9389574455" },
                    { name: "Social Problems in India – Ram Ahuja", url: "https://www.amazon.in/Social-Problems-India-Ram-Ahuja/dp/8131600750" },
                    { name: "Indian Economy – Sriram", url: "https://www.amazon.in/Indian-Economy-Sanjiv-Verma/dp/9389574455" },
                    { name: "GS Mains PYQs Solved", url: "https://www.drishtiias.com/mains-practice-question" }
                ],
                websites: [
                    { name: "Drishti IAS – Mains Practice", url: "https://www.drishtiias.com/mains-practice-question" },
                    { name: "Insights on India – Secure Initiative", url: "https://www.insightsonindia.com/upsc-mains/" },
                    { name: "ForumIAS – MGP Answer Writing", url: "https://forumias.com/" },
                    { name: "IASbaba – TLP Program", url: "https://iasbaba.com/" },
                    { name: "ClearIAS Mains Test Series", url: "https://www.clearias.com/upsc-mains-test-series/" },
                    { name: "Economic Survey – GOI", url: "https://www.indiabudget.gov.in/economicsurvey/" },
                    { name: "NITI Aayog Reports", url: "https://www.niti.gov.in/" }
                ]
            }
        ]
    },
    {
        id: "ssc-cgl", name: "SSC CGL / CHSL / MTS", cat: "GovtExam", color: "#ea580c",
        steps: [
            {
                title: "Quantitative Aptitude", desc: "Master Arithmetic, Algebra, Geometry, Trigonometry, and Data Interpretation for SSC.", dur: "6-8 weeks",
                courses: [
                    { name: "SSC Maths Complete", platform: "Testbook", url: "https://testbook.com/ssc-cgl" },
                    { name: "Quant for SSC CGL", platform: "Adda247", url: "https://www.adda247.com/product-onlineliveclasses/ssc-cgl" },
                    { name: "SSC Maths by Rakesh Yadav", platform: "Unacademy", url: "https://unacademy.com/goal/ssc-exams/VLEMN" },
                    { name: "Arithmetic Shortcuts", platform: "BYJU'S Exam Prep", url: "https://www.byjus.com/ssc/ssc-cgl/ssc-cgl/" },
                    { name: "Advanced Maths for Tier II", platform: "StudyIQ", url: "https://www.studyiq.com/" },
                    { name: "DI & Data Sufficiency", platform: "Oliveboard", url: "https://www.oliveboard.in/ssc-cgl/" },
                    { name: "Geometry Complete Course", platform: "Careerwill", url: "https://www.careerwill.com/" },
                    { name: "Trigonometry Made Easy", platform: "Khan Academy", url: "https://www.khanacademy.org/math/trigonometry" }
                ],
                videos: [
                    { name: "SSC Maths Full Course", platform: "YouTube – Rakesh Yadav", url: "https://www.youtube.com/watch?v=SuI77WqNsig" },
                    { name: "Quant 7000+ Questions", platform: "YouTube – Adda247", url: "https://www.youtube.com/watch?v=VxGi8TcP7YI" },
                    { name: "Geometry for SSC", platform: "YouTube – Khan Sir", url: "https://www.youtube.com/watch?v=YJyRFE_bZZo" },
                    { name: "Speed Maths Tricks", platform: "YouTube – Careerwill", url: "https://www.youtube.com/watch?v=v2DzA-cUzKo" },
                    { name: "Algebra Complete Revision", platform: "YouTube – Testbook", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "DI Charts & Graphs", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=eE3-xbNlQ1I" },
                    { name: "Percentage & Profit-Loss", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Time & Work Problems", platform: "YouTube – Exampur", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" }
                ],
                books: [
                    { name: "Quantitative Aptitude – RS Aggarwal", url: "https://www.amazon.in/Quantitative-Aptitude-Competitive-Examinations-Aggarwal/dp/9352534026" },
                    { name: "Advanced Maths – Kiran", url: "https://www.amazon.in/Kiran-Advanced-Maths/dp/9389982847" },
                    { name: "Geometry & Mensuration – Kiran", url: "https://www.amazon.in/Kiran-Geometry-Mensuration/dp/9389982847" },
                    { name: "SSC Tier I & II PYQs", url: "https://ssc.gov.in/" }
                ],
                websites: [
                    { name: "SSC Official – Papers & Notifications", url: "https://ssc.gov.in/" },
                    { name: "Testbook SSC Prep", url: "https://testbook.com/ssc-cgl" },
                    { name: "Adda247 SSC Section", url: "https://www.adda247.com/ssc-jobs/" },
                    { name: "Oliveboard SSC CGL", url: "https://www.oliveboard.in/ssc-cgl/" },
                    { name: "GradeUp (BYJU'S Exam Prep)", url: "https://www.byjus.com/ssc/ssc-cgl/ssc-cgl/" },
                    { name: "IndiaBIX – Aptitude Practice", url: "https://www.indiabix.com/" },
                    { name: "SSC CGL Syllabus Official", url: "https://ssc.gov.in/" },
                    { name: "Maths Practice – Embibe", url: "https://www.embibe.com/exams/ssc-cgl/" }
                ]
            },
            {
                title: "English & General Awareness", desc: "Grammar, Vocabulary, Comprehension, and Static GK + Current Affairs.", dur: "6-8 weeks",
                courses: [
                    { name: "SSC English Complete", platform: "Testbook", url: "https://testbook.com/ssc-cgl" },
                    { name: "English Grammar for SSC", platform: "Adda247", url: "https://www.adda247.com/" },
                    { name: "General Awareness SSC CGL", platform: "Unacademy", url: "https://unacademy.com/goal/ssc-exams/VLEMN" },
                    { name: "Static GK Complete", platform: "BYJU'S Exam Prep", url: "https://www.byjus.com/ssc/ssc-cgl/" },
                    { name: "Vocabulary Building Course", platform: "StudyIQ", url: "https://www.studyiq.com/" },
                    { name: "Current Affairs Monthly", platform: "Oliveboard", url: "https://www.oliveboard.in/" },
                    { name: "Error Detection Mastery", platform: "Careerwill", url: "https://www.careerwill.com/" },
                    { name: "Reading Comprehension Tips", platform: "Khan Academy", url: "https://www.khanacademy.org/ela" }
                ],
                videos: [
                    { name: "English for SSC by Neetu Ma'am", platform: "YouTube – Adda247", url: "https://www.youtube.com/watch?v=VxGi8TcP7YI" },
                    { name: "SSC GK Complete", platform: "YouTube – StudyIQ", url: "https://www.youtube.com/watch?v=TXkGhP0bsQk" },
                    { name: "Vocab 2000 Words", platform: "YouTube – Unacademy", url: "https://www.youtube.com/watch?v=MeDL0y8wQ2Q" },
                    { name: "Idioms & Phrases SSC", platform: "YouTube – Testbook", url: "https://www.youtube.com/watch?v=UEE97nPn0bA" },
                    { name: "Static GK Tricks", platform: "YouTube – Khan Sir", url: "https://www.youtube.com/watch?v=YJyRFE_bZZo" },
                    { name: "One Word Substitution", platform: "YouTube – PW", url: "https://www.youtube.com/watch?v=4HCQfTF2oRA" },
                    { name: "Fill in the Blanks Practice", platform: "YouTube – Careerwill", url: "https://www.youtube.com/watch?v=v2DzA-cUzKo" },
                    { name: "Current Affairs Rapid Fire", platform: "YouTube – Exampur", url: "https://www.youtube.com/watch?v=Z4c6H8khfPY" }
                ],
                books: [
                    { name: "Word Power Made Easy – Norman Lewis", url: "https://www.amazon.in/Word-Power-Made-Easy-Norman/dp/8183071007" },
                    { name: "Objective General English – SP Bakshi", url: "https://www.amazon.in/Objective-General-English-S-P-Bakshi/dp/9352039734" },
                    { name: "Plinth to Paramount English", platform: "Neetu Singh", url: "https://www.amazon.in/Plinth-Paramount-English-Neetu-Singh/dp/9386146282" },
                    { name: "Current Affairs Yearly 2025", url: "https://www.amazon.in/Yearly-Current-Affairs-2024/dp/9389661579" },
                    { name: "SSC CGL English PYQs", url: "https://ssc.gov.in/" }
                ],
                websites: [
                    { name: "SSC Official Notifications", url: "https://ssc.gov.in/" },
                    { name: "GK Today – Daily Current Affairs", url: "https://www.gktoday.in/" },
                    { name: "Adda247 English Quiz", url: "https://www.adda247.com/" },
                    { name: "IndiaBIX English Practice", url: "https://www.indiabix.com/verbal-ability/questions-and-answers/" },
                    { name: "Testbook GK Section", url: "https://testbook.com/" },
                    { name: "Jagranjosh Current Affairs", url: "https://www.jagranjosh.com/current-affairs" },
                    { name: "Grammarly Blog – Grammar Tips", url: "https://www.grammarly.com/blog/" },
                    { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/" }
                ]
            }
        ]
    }
];

// Merge into DOMAINS
if (typeof DOMAINS !== 'undefined' && Array.isArray(DOMAINS)) {
    EXTRA_DOMAINS.forEach(function (d) { DOMAINS.push(d); });
}
