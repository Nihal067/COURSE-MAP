const DOMAINS = [
    {
        id: "web-frontend", name: "Web Development (Frontend)", cat: "Tech", color: "#3b82f6",
        steps: [
            {
                title: "HTML & CSS Fundamentals", desc: "Semantic HTML, CSS layouts, box model, Flexbox and Grid.", dur: "3-4 weeks",
                courses: [
                    { name: "HTML & CSS for Beginners", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "HTML, CSS & JavaScript", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses" },
                    { name: "Web Development Basics", platform: "Google (Coursera)", url: "https://learndigital.withgoogle.com/digitalgarage" },
                    { name: "Advanced CSS Layouts", platform: "Udemy", url: "https://www.udemy.com/course/advanced-css-and-sass/" },
                    { name: "Mastering Flexbox", platform: "LinkedIn Learning", url: "https://www.linkedin.com/learning/css-essential-training" },
                    { name: "CSS Grid Essentials", platform: "Pluralsight", url: "https://www.pluralsight.com/courses/css-grid-layout" },
                    { name: "HTML5 APIs", platform: "Coursera", url: "https://www.coursera.org/learn/html5" },
                    { name: "Responsive Web Design Certification", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
                    { name: "Modern Web Layouts", platform: "edX", url: "https://www.edx.org/learn/web-development" },
                    { name: "CSS Animations in Depth", platform: "Frontend Masters", url: "https://frontendmasters.com/courses/css-animations/" },
                    { name: "Web Development in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/tutorial/web-dev/" },
                    { name: "HTML & CSS Bootcamp", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" },
                    { name: "Web Dev Course", platform: "Internshala Trainings", url: "https://trainings.internshala.com/web-development-course/" }
                ],
                videos: [
                    { name: "HTML & CSS Full Course – 11 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=mU6anWqZJcc" },
                    { name: "CSS Full Course for Beginners", platform: "YouTube – Dave Gray", url: "https://www.youtube.com/watch?v=n4R2E7O-Ngo" },
                    { name: "Learn Flexbox in 15 Minutes", platform: "YouTube – Web Dev Simplified", url: "https://www.youtube.com/watch?v=fYq5PXgSsbE" },
                    { name: "CSS Grid Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=jV8B24rSN5o" },
                    { name: "HTML & CSS Crash Course 2024", platform: "YouTube – Kevin Powell", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
                    { name: "CSS Selectors - In Depth Tutorial", platform: "YouTube – Net Ninja", url: "https://www.youtube.com/watch?v=l1mER1bV0N0" },
                    { name: "Understanding the Box Model", platform: "YouTube – SuperSimpleDev", url: "https://www.youtube.com/watch?v=rIO5326FgPE" },
                    { name: "Semantic HTML5 Elements", platform: "YouTube – Programming with Mosh", url: "https://www.youtube.com/watch?v=kUMe1FH4CGY" },
                    { name: "CSS Positioning Tutorial", platform: "YouTube – Kevin Powell", url: "https://www.youtube.com/watch?v=jx5jmI0UlXU" },
                    { name: "Building a Responsive Layout", platform: "YouTube – Web Dev Simplified", url: "https://www.youtube.com/watch?v=srvUrASNj0s" },
                    { name: "HTML & CSS Full Course in Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=BsDoLVMnmZs" },
                    { name: "Web Dev Playlist", platform: "YouTube – Apna College", url: "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
                    { name: "CSS Flexbox & Grid Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=Y6mbMKHHTu8" }
                ],
                books: [
                    { name: "HTML & CSS: Design and Build Web Sites – Jon Duckett", url: "https://www.htmlandcssbook.com/" },
                    { name: "Learning Web Design – Jennifer Robbins (O'Reilly)", url: "https://www.oreilly.com/library/view/learning-web-design/9781491960196/" },
                    { name: "CSS Secrets – Lea Verou", url: "https://csssecrets.io/" },
                    { name: "HTML5: The Missing Manual", url: "https://www.oreilly.com/library/view/html5-the-missing/9781449332616/" },
                    { name: "CSS in Depth – Keith J. Grant", url: "https://www.manning.com/books/css-in-depth" },
                    { name: "Responsive Web Design – Ethan Marcotte", url: "https://abookapart.com/products/responsive-web-design" },
                    { name: "Smashing Book #5", url: "https://www.smashingmagazine.com/books/" },
                    { name: "HTML and CSS Visual QuickStart Guide", url: "https://www.peachpit.com/" },
                    { name: "Sass for Web Designers", url: "https://abookapart.com/products/sass-for-web-designers" },
                    { name: "Modern CSS Mastery", url: "https://www.amazon.in/Modern-CSS-Every-Practical-Guide/dp/B0BLN3PCZG" },
                    { name: "HTML & CSS (Hindi Edition) – S. Chand", url: "https://www.schandpublishing.com/" },
                    { name: "Web Technology – Black Book (Dreamtech)", url: "https://www.dreamtechpress.com/" }
                ],
                websites: [
                    { name: "MDN Web Docs – HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                    { name: "freeCodeCamp – Responsive Web Design", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
                    { name: "CSS-Tricks", url: "https://css-tricks.com/" },
                    { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/" },
                    { name: "HTML.com Tutorials", url: "https://html.com/" },
                    { name: "W3Schools HTML & CSS", url: "https://www.w3schools.com/" },
                    { name: "CSS Reference", url: "https://cssreference.io/" },
                    { name: "HTML Reference", url: "https://htmlreference.io/" },
                    { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
                    { name: "CodePen", url: "https://codepen.io/" },
                    { name: "CodeWithHarry – Web Dev Notes", url: "https://www.codewithharry.com/tutorial/web-dev/" },
                    { name: "GeeksforGeeks – HTML/CSS", url: "https://www.geeksforgeeks.org/html/" },
                    { name: "NPTEL – Web Technologies", url: "https://nptel.ac.in/courses/106105084" }
                ]
            },
            {
                title: "JavaScript Essentials", desc: "Variables, DOM manipulation, events, async/await, and ES6+.", dur: "4-6 weeks",
                courses: [
                    { name: "JavaScript for Beginners", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "JavaScript Fundamentals", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/javascript-fundamentals" },
                    { name: "The Complete JavaScript Course", platform: "Udemy", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
                    { name: "JavaScript in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/tutorial/javascript/" },
                    { name: "JavaScript Full Course", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" }
                ],
                videos: [
                    { name: "JavaScript Full Course – 12 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=jS4aFq5-91M" },
                    { name: "JavaScript Tutorial for Beginners", platform: "YouTube – Programming with Mosh", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
                    { name: "JavaScript Full Course Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=ER9SspLe4Hg" },
                    { name: "JavaScript Tutorial in Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=VlPiVmYuoqw" }
                ],
                books: [
                    { name: "Eloquent JavaScript (Free Online)", url: "https://eloquentjavascript.net/" },
                    { name: "You Don't Know JS – Kyle Simpson (Free on GitHub)", url: "https://github.com/getify/You-Dont-Know-JS" },
                    { name: "JavaScript – The Definitive Guide (India Ed.)", url: "https://www.amazon.in/JavaScript-Definitive-Guide-Master-Worlds/dp/1491952024" }
                ],
                websites: [
                    { name: "JavaScript.info – Modern JS Tutorial", url: "https://javascript.info/" },
                    { name: "MDN – JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
                    { name: "GeeksforGeeks – JavaScript", url: "https://www.geeksforgeeks.org/javascript/" },
                    { name: "NPTEL – Programming in JavaScript", url: "https://nptel.ac.in/courses/106102064" }
                ]
            },
            {
                title: "React Framework", desc: "Component model, hooks, state management, and React Router.", dur: "5-7 weeks",
                courses: [
                    { name: "React JS Certification Course", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "React for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/react-js-tutorial" },
                    { name: "React – The Complete Guide", platform: "Udemy", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
                    { name: "React JS Hindi Tutorial", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "React JS Course", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" }
                ],
                videos: [
                    { name: "React Full Course 2024", platform: "YouTube – Dave Gray", url: "https://www.youtube.com/watch?v=RVFAyFWO4go" },
                    { name: "React Tutorial for Beginners", platform: "YouTube – Programming with Mosh", url: "https://www.youtube.com/watch?v=SqcY0GlETPk" },
                    { name: "React JS Full Course in Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=jJwFRVbevi4" },
                    { name: "React in 2024 – Hindi", platform: "YouTube – Chai aur Code", url: "https://www.youtube.com/@chaiaurcode" }
                ],
                books: [
                    { name: "Road to React – Robin Wieruch (Free PDF)", url: "https://www.roadtoreact.com/" },
                    { name: "Learning React – Alex Banks & Eve Porcello (O'Reilly)", url: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/" }
                ],
                websites: [
                    { name: "React Official Docs", url: "https://react.dev/" },
                    { name: "Scrimba – Learn React for Free", url: "https://scrimba.com/learn/learnreact" }
                ]
            },
            {
                title: "Advanced: TypeScript & Testing", desc: "TypeScript types, generics, Jest, and end-to-end testing with Playwright.", dur: "3-4 weeks",
                courses: [
                    { name: "TypeScript Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "TypeScript Tutorial", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/typescript-tutorial" }
                ],
                videos: [
                    { name: "TypeScript Full Course for Beginners", platform: "YouTube – Dave Gray", url: "https://www.youtube.com/watch?v=30LWjhZzg50" },
                    { name: "Jest Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=7r4xVDI2vho" }
                ],
                books: [
                    { name: "Programming TypeScript – Boris Cherny (O'Reilly)", url: "https://www.oreilly.com/library/view/programming-typescript/9781492037644/" }
                ],
                websites: [
                    { name: "TypeScript Official Docs", url: "https://www.typescriptlang.org/docs/" },
                    { name: "Testing Library Docs", url: "https://testing-library.com/" }
                ]
            }
        ]
    },
    {
        id: "web-backend", name: "Web Development (Backend)", cat: "Tech", color: "#22c55e",
        steps: [
            {
                title: "Node.js & Server Basics", desc: "Server-side JS, modules, HTTP, and the event loop.", dur: "3-4 weeks",
                courses: [
                    { name: "Node.js Certification Training", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Node.js for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/node-js-tutorial" },
                    { name: "Node.js – The Complete Guide", platform: "Udemy", url: "https://www.udemy.com/course/nodejs-the-complete-guide/" },
                    { name: "Node.js Hindi Course", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Backend with Node.js", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" }
                ],
                videos: [
                    { name: "Node.js and Express Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
                    { name: "Node.js Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
                    { name: "Node.js Full Course Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=BLl32FvcdVM" },
                    { name: "Backend Development in Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=qwfE7fSVaZM" }
                ],
                books: [
                    { name: "Node.js Design Patterns – Mario Casciaro (Packt)", url: "https://www.nodejsdesignpatterns.com/" },
                    { name: "Node.js in Action (Manning)", url: "https://www.manning.com/books/node-js-in-action" }
                ],
                websites: [
                    { name: "Node.js Official Docs", url: "https://nodejs.org/en/docs/" },
                    { name: "freeCodeCamp – Back End Dev & APIs", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" }
                ]
            },
            {
                title: "Databases – SQL & NoSQL", desc: "PostgreSQL, MySQL, MongoDB data modeling and querying.", dur: "4-5 weeks",
                courses: [
                    { name: "SQL for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/sql-for-data-science" },
                    { name: "MySQL Developer Certification", platform: "Oracle", url: "https://education.oracle.com/mysql-developer" },
                    { name: "MongoDB University (Free)", platform: "MongoDB", url: "https://university.mongodb.com/" },
                    { name: "SQL in Hindi Full Course", platform: "CodeWithHarry", url: "https://www.codewithharry.com/tutorial/sql/" },
                    { name: "Database Systems", platform: "NPTEL", url: "https://nptel.ac.in/courses/106105175" },
                    { name: "MySQL Full Course", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" }
                ],
                videos: [
                    { name: "SQL Full Course – 4 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
                    { name: "MongoDB Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=-56x56UppqQ" },
                    { name: "SQL Tutorial in Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=9i3KPs_2RNE" },
                    { name: "MySQL Full Course Hindi", platform: "YouTube – Apna College", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" }
                ],
                books: [
                    { name: "Learning SQL – Alan Beaulieu (O'Reilly, Free)", url: "https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/" },
                    { name: "MongoDB: The Definitive Guide (O'Reilly)", url: "https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954454/" }
                ],
                websites: [
                    { name: "SQLZoo – Interactive SQL Practice", url: "https://sqlzoo.net/" },
                    { name: "W3Schools SQL Reference", url: "https://www.w3schools.com/sql/" }
                ]
            },
            {
                title: "REST APIs & Authentication", desc: "Express.js REST APIs, JWT auth, OAuth2, and security best practices.", dur: "3-4 weeks",
                courses: [
                    { name: "RESTful APIs with Node & Express", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "API Development", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/api-integration" }
                ],
                videos: [
                    { name: "REST API Tutorial – Node, Express, MongoDB", platform: "YouTube – Web Dev Simplified", url: "https://www.youtube.com/watch?v=fgTGADljAeg" },
                    { name: "JWT Authentication Tutorial", platform: "YouTube – Web Dev Simplified", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" }
                ],
                books: [
                    { name: "REST API Design Rulebook – Masse (O'Reilly)", url: "https://www.oreilly.com/library/view/rest-api-design/9781449317904/" }
                ],
                websites: [
                    { name: "Postman Learning Center", url: "https://learning.postman.com/" },
                    { name: "Auth0 Developer Docs", url: "https://auth0.com/docs/" }
                ]
            },
            {
                title: "Deployment & Cloud Basics", desc: "Docker, CI/CD with GitHub Actions, and deploying on cloud.", dur: "3-4 weeks",
                courses: [
                    { name: "Docker & Kubernetes", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "AWS Certified Cloud Practitioner", platform: "AWS (Simplilearn)", url: "https://www.simplilearn.com/" },
                    { name: "DevOps & Cloud in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "DevOps Bootcamp", platform: "PW Skills", url: "https://pwskills.com/" }
                ],
                videos: [
                    { name: "Docker Tutorial for Beginners", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
                    { name: "GitHub Actions Full Course", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
                    { name: "Docker & Kubernetes in Hindi", platform: "YouTube – Kunal Kushwaha", url: "https://www.youtube.com/@KunalKushwaha" },
                    { name: "DevOps Full Course Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=jNJEbZI2uOc" }
                ],
                books: [
                    { name: "Docker Deep Dive – Nigel Poulton (Free Preview)", url: "https://www.oreilly.com/library/view/docker-deep-dive/9781801074612/" }
                ],
                websites: [
                    { name: "Docker Official Docs", url: "https://docs.docker.com/" },
                    { name: "Vercel Deployment Docs", url: "https://vercel.com/docs" }
                ]
            }
        ]
    },
    {
        id: "data-science", name: "Data Science", cat: "Tech", color: "#a855f7",
        steps: [
            {
                title: "Python Programming", desc: "Core Python: data types, functions, OOP, and file handling.", dur: "4-5 weeks",
                courses: [
                    { name: "Python for Data Science", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Python Programming", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-fundamentals-for-beginners" },
                    { name: "Python for Everybody", platform: "Coursera (Google)", url: "https://www.coursera.org/specializations/python" },
                    { name: "Data Science in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Data Science Bootcamp", platform: "Internshala Trainings (Free)", url: "https://trainings.internshala.com/data-science-course/" },
                    { name: "Data Science & ML", platform: "NPTEL", url: "https://nptel.ac.in/courses/106106198" }
                ],
                videos: [
                    { name: "Python Full Course for Beginners", platform: "YouTube – Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
                    { name: "Python Data Science Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" },
                    { name: "Python in Hindi Full Course", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=gfDE2a7MKjA" },
                    { name: "Python for Beginners Hindi", platform: "YouTube – Apna College", url: "https://www.youtube.com/watch?v=ERCMXc8x7mc" },
                    { name: "Python Playlist", platform: "YouTube – Krish Naik", url: "https://www.youtube.com/user/krishnaik06" },
                    { name: "Data Science Full Course Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=1j0bPYvQMFg" },
                    { name: "Data Science Roadmap Hindi", platform: "YouTube – Campus X", url: "https://www.youtube.com/@campusx-official" },
                    { name: "Statistics for Data Science", platform: "YouTube – PW Skills", url: "https://www.youtube.com/c/PWSkills" }
                ],
                books: [
                    { name: "Automate the Boring Stuff with Python (Free Online)", url: "https://automatetheboringstuff.com/" },
                    { name: "Think Python – Allen Downey (Free PDF)", url: "https://greenteapress.com/thinkpython2/thinkpython2.pdf" }
                ],
                websites: [
                    { name: "Kaggle – Python Course (Free)", url: "https://www.kaggle.com/learn/python" },
                    { name: "W3Schools Python", url: "https://www.w3schools.com/python/" },
                    { name: "NPTEL – Data Science Courses", url: "https://nptel.ac.in/courses/106106198" },
                    { name: "Analytics Vidhya (India)", url: "https://www.analyticsvidhya.com/" },
                    { name: "InterviewBit – Data Science", url: "https://www.interviewbit.com/data-science-interview-questions/" }
                ]
            },
            {
                title: "Statistics & Probability", desc: "Descriptive stats, probability distributions, and hypothesis testing.", dur: "4-5 weeks",
                courses: [
                    { name: "Statistics for Data Science", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Statistics & Probability", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/probability-and-statistics" }
                ],
                videos: [
                    { name: "Statistics – Full College Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=xxpc-HPKN28" },
                    { name: "Probability for Beginners", platform: "YouTube – Khan Academy", url: "https://www.youtube.com/watch?v=uzkc-qNVoOk" }
                ],
                books: [
                    { name: "Think Stats – Allen Downey (Free PDF)", url: "https://greenteapress.com/thinkstats2/thinkstats2.pdf" },
                    { name: "Statistics in Plain English – Urdan", url: "https://www.routledge.com/Statistics-in-Plain-English/Urdan/p/book/9781138838352" }
                ],
                websites: [
                    { name: "Khan Academy – Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
                    { name: "Stat Trek – Statistics Tutorial", url: "https://stattrek.com/" }
                ]
            },
            {
                title: "Data Wrangling with Pandas", desc: "Data cleaning, manipulation using Pandas and NumPy.", dur: "3-4 weeks",
                courses: [
                    { name: "Data Analysis with Python", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-analysis-with-pandas-and-python" },
                    { name: "Pandas – freeCodeCamp", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" }
                ],
                videos: [
                    { name: "Pandas & Python for Data Analysis by Example", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=gtjxAH8uaP0" },
                    { name: "NumPy Crash Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=8Y0qQEh7dJg" }
                ],
                books: [
                    { name: "Python for Data Analysis – Wes McKinney (O'Reilly)", url: "https://www.oreilly.com/library/view/python-for-data/9781491957653/" }
                ],
                websites: [
                    { name: "Kaggle – Pandas Course (Free)", url: "https://www.kaggle.com/learn/pandas" },
                    { name: "Pandas Official Docs", url: "https://pandas.pydata.org/docs/" }
                ]
            },
            {
                title: "Machine Learning with Scikit-Learn", desc: "Regression, classification, clustering, and model evaluation.", dur: "6-8 weeks",
                courses: [
                    { name: "Machine Learning with Python", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "ML with Python – freeCodeCamp", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/machine-learning-with-python/" },
                    { name: "Intro to Machine Learning", platform: "Kaggle", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
                    { name: "Machine Learning in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "AI & ML Bootcamp", platform: "PW Skills", url: "https://pwskills.com/" },
                    { name: "Introduction to Machine Learning", platform: "NPTEL", url: "https://nptel.ac.in/courses/106106139" }
                ],
                videos: [
                    { name: "Machine Learning Course – 4 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=NWONeJKn6kc" },
                    { name: "Scikit-Learn Crash Course", platform: "YouTube – Sentdex", url: "https://www.youtube.com/watch?v=0B5eIE_1vpU" },
                    { name: "Machine Learning in Hindi", platform: "YouTube – Campus X", url: "https://www.youtube.com/@campusx-official" },
                    { name: "ML Full Playlist – Krish Naik", platform: "YouTube – Krish Naik", url: "https://www.youtube.com/user/krishnaik06" }
                ],
                books: [
                    { name: "Hands-On Machine Learning – Géron (O'Reilly)", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
                    { name: "An Introduction to Statistical Learning (Free PDF)", url: "https://www.statlearning.com/" }
                ],
                websites: [
                    { name: "Kaggle – Machine Learning Course", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
                    { name: "Scikit-Learn Docs & Tutorials", url: "https://scikit-learn.org/stable/tutorial/" },
                    { name: "Analytics Vidhya – ML Tutorials", url: "https://www.analyticsvidhya.com/blog/category/machine-learning/" },
                    { name: "NPTEL – Deep Learning", url: "https://nptel.ac.in/courses/106106184" },
                    { name: "InterviewBit – ML Questions", url: "https://www.interviewbit.com/machine-learning-interview-questions/" }
                ]
            }
        ]
    },
    {
        id: "ml-ai", name: "Machine Learning & AI", cat: "Tech", color: "#ec4899",
        steps: [
            {
                title: "Math Foundations for ML", desc: "Linear algebra, calculus, probability — the math powering AI.", dur: "5-6 weeks",
                courses: [
                    { name: "Mathematics for ML", platform: "Coursera (Imperial College)", url: "https://www.coursera.org/specializations/mathematics-machine-learning" },
                    { name: "AI for Everyone", platform: "Coursera (Andrew Ng)", url: "https://www.coursera.org/learn/ai-for-everyone" },
                    { name: "Math for Data Science", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mathematics-for-machine-learning" }
                ],
                videos: [
                    { name: "Linear Algebra – MIT OCW", platform: "YouTube – MIT", url: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8" },
                    { name: "Essence of Linear Algebra", platform: "YouTube – 3Blue1Brown", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" }
                ],
                books: [
                    { name: "Mathematics for Machine Learning (Free PDF)", url: "https://mml-book.github.io/" },
                    { name: "Deep Learning – Goodfellow et al (Free HTML)", url: "https://www.deeplearningbook.org/" }
                ],
                websites: [
                    { name: "Khan Academy – Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" },
                    { name: "3Blue1Brown – Visual Math", url: "https://www.3blue1brown.com/" }
                ]
            },
            {
                title: "Classical ML Algorithms", desc: "Linear/logistic regression, SVMs, trees, ensemble methods.", dur: "6-8 weeks",
                courses: [
                    { name: "Machine Learning by Stanford / Andrew Ng", platform: "Coursera", url: "https://www.coursera.org/learn/machine-learning" },
                    { name: "Applied Machine Learning", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Intermediate ML", platform: "Kaggle", url: "https://www.kaggle.com/learn/intermediate-machine-learning" }
                ],
                videos: [
                    { name: "ML Algorithms Explained", platform: "YouTube – StatQuest", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" },
                    { name: "Machine Learning Zero to Hero", platform: "YouTube – Google Developers", url: "https://www.youtube.com/watch?v=VwVg9jCtqaU" }
                ],
                books: [
                    { name: "Pattern Recognition & ML – Bishop (Free PDF)", url: "https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf" }
                ],
                websites: [
                    { name: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
                    { name: "Kaggle – Feature Engineering", url: "https://www.kaggle.com/learn/feature-engineering" }
                ]
            },
            {
                title: "Deep Learning", desc: "Neural networks, CNNs, RNNs with TensorFlow and PyTorch.", dur: "7-9 weeks",
                courses: [
                    { name: "Deep Learning Specialization", platform: "Coursera (Andrew Ng)", url: "https://www.coursera.org/specializations/deep-learning" },
                    { name: "TensorFlow Developer Certificate", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Intro to Deep Learning", platform: "Kaggle", url: "https://www.kaggle.com/learn/intro-to-deep-learning" },
                    { name: "Deep Learning Hindi Course", platform: "Campus X", url: "https://www.youtube.com/@campusx-official" },
                    { name: "AI Research", platform: "NPTEL – IIT Bombay", url: "https://nptel.ac.in/courses/106106126" }
                ],
                videos: [
                    { name: "Deep Learning Course – MIT 6.S191", platform: "YouTube – MIT", url: "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI" },
                    { name: "PyTorch Tutorials", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=GIsg-ZUy0MY" }
                ],
                books: [
                    { name: "Deep Learning with Python – Chollet (O'Reilly)", url: "https://www.manning.com/books/deep-learning-with-python" },
                    { name: "Dive into Deep Learning (Free Online)", url: "https://d2l.ai/" }
                ],
                websites: [
                    { name: "fast.ai – Practical Deep Learning (Free)", url: "https://course.fast.ai/" },
                    { name: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" }
                ]
            },
            {
                title: "NLP & Generative AI", desc: "Transformers, LLMs, prompt engineering, and RAG systems.", dur: "5-6 weeks",
                courses: [
                    { name: "NLP Specialization", platform: "Coursera", url: "https://www.coursera.org/specializations/natural-language-processing" },
                    { name: "Generative AI Course", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/intro-to-generative-ai" },
                    { name: "LLM Applications", platform: "Kaggle", url: "https://www.kaggle.com/learn" }
                ],
                videos: [
                    { name: "Transformer Neural Networks Explained", platform: "YouTube – 3Blue1Brown", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" },
                    { name: "LangChain Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=lG7Uxts9SXs" }
                ],
                books: [
                    { name: "Natural Language Processing with Transformers (Hugging Face)", url: "https://www.oreilly.com/library/view/natural-language-processing/9781098136789/" }
                ],
                websites: [
                    { name: "Hugging Face – NLP Course (Free)", url: "https://huggingface.co/learn/nlp-course" },
                    { name: "Google AI – Prompt Engineering Guide", url: "https://ai.google.dev/gemini-api/docs/prompting-intro" }
                ]
            }
        ]
    },
    {
        id: "cybersecurity", name: "Cybersecurity", cat: "Tech", color: "#ef4444",
        steps: [
            {
                title: "Networking & Linux Fundamentals", desc: "TCP/IP, DNS, Firewalls, Linux admin and bash scripting.", dur: "4-5 weeks",
                courses: [
                    { name: "Networking Basics", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/networking/networking-basics" },
                    { name: "Introduction to Cybersecurity", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/intro-cybersecurity" },
                    { name: "Linux Fundamentals", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/linux-fundamentals" }
                ],
                videos: [
                    { name: "Networking Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
                    { name: "Linux Command Line Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc" },
                    { name: "Linux Full Course in Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=BC9SoKNqVGA" },
                    { name: "Linux Tutorial Hindi", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/@GateSmashers" }
                ],
                books: [
                    { name: "Computer Networking: A Top-Down Approach – Kurose", url: "https://gaia.cs.umass.edu/kurose_ross/" },
                    { name: "The Linux Command Line – William Shotts (Free PDF)", url: "https://linuxcommand.org/tlcl.php" }
                ],
                websites: [
                    { name: "Cisco NetAcad – Networking Courses", url: "https://www.netacad.com/" },
                    { name: "TryHackMe – Beginner Paths", url: "https://tryhackme.com/path/outline/presecurity" }
                ]
            },
            {
                title: "Security Foundations & Protocols", desc: "CIA triad, encryption, PKI, TLS, and risk management.", dur: "4-5 weeks",
                courses: [
                    { name: "Cybersecurity Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "CompTIA Security+ Prep", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/cyber-security-course" },
                    { name: "Cybersecurity Essentials", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/cybersecurity-essentials" },
                    { name: "Ethical Hacking in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Cybersecurity Course", platform: "Internshala Trainings", url: "https://trainings.internshala.com/cybersecurity-course/" }
                ],
                videos: [
                    { name: "Cybersecurity Full Course for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=U_P23SqJaDc" },
                    { name: "CompTIA Security+ Full Course", platform: "YouTube – Professor Messer", url: "https://www.youtube.com/playlist?list=PLG49S3nxzAnkL2ulFS3132mOVKuzzBxA8" }
                ],
                books: [
                    { name: "CompTIA Security+ Study Guide – Chapple (Sybex)", url: "https://www.wiley.com/en-us/CompTIA+Security%2B+Study+Guide-p-9781119676287" },
                    { name: "The Web Application Hacker's Handbook", url: "https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook-p-9781118026472" }
                ],
                websites: [
                    { name: "TryHackMe – Security Fundamentals", url: "https://tryhackme.com/" },
                    { name: "OWASP – Security Knowledge", url: "https://owasp.org/" }
                ]
            },
            {
                title: "Ethical Hacking & Pentesting", desc: "Recon, scanning, exploitation, and responsible disclosure.", dur: "6-8 weeks",
                courses: [
                    { name: "Ethical Hacking Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Certified Ethical Hacker (CEH)", platform: "EC-Council (Great Learning)", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ethical-hacking-course" }
                ],
                videos: [
                    { name: "Full Ethical Hacking Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
                    { name: "Kali Linux Tutorial for Beginners", platform: "YouTube – NetworkChuck", url: "https://www.youtube.com/watch?v=U1w4T03B30I" }
                ],
                books: [
                    { name: "The Hacker Playbook 3 – Peter Kim", url: "https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1980901759" },
                    { name: "Penetration Testing – Georgia Weidman", url: "https://nostarch.com/penetrationtesting" }
                ],
                websites: [
                    { name: "Hack The Box – Practice Hacking", url: "https://www.hackthebox.com/" },
                    { name: "PortSwigger Web Security Academy (Free)", url: "https://portswigger.net/web-security" }
                ]
            }
        ]
    },
    {
        id: "cloud", name: "Cloud Computing", cat: "Tech", color: "#06b6d4",
        steps: [
            {
                title: "Cloud Foundations & AWS Core", desc: "Cloud concepts, IAM, EC2, S3, VPC, and billing basics.", dur: "4-5 weeks",
                courses: [
                    { name: "AWS Certified Cloud Practitioner", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Google Cloud Foundations", platform: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google/paths/9" },
                    { name: "Oracle Cloud Infrastructure Foundations", platform: "Oracle", url: "https://education.oracle.com/oracle-cloud-infrastructure-2023-foundations-associate" },
                    { name: "AWS Cloud in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Cloud Computing Bootcamp", platform: "PW Skills", url: "https://pwskills.com/" },
                    { name: "Cloud Computing", platform: "NPTEL", url: "https://nptel.ac.in/courses/106105167" }
                ],
                videos: [
                    { name: "AWS Cloud Practitioner Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=SOTamWNgDKc" },
                    { name: "Google Cloud Associate Engineer", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=jpno8FSqpc8" },
                    { name: "AWS Full Course in Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/watch?v=AkKHBPEJYIg" },
                    { name: "Cloud Computing in Hindi", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/@GateSmashers" }
                ],
                books: [
                    { name: "AWS Certified Cloud Practitioner Study Guide – Sybex", url: "https://www.wiley.com/en-us/AWS+Certified+Cloud+Practitioner+Study+Guide-p-9781119490708" }
                ],
                websites: [
                    { name: "AWS Skill Builder (Free Tier)", url: "https://skillbuilder.aws/" },
                    { name: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google/" },
                    { name: "NPTEL – Cloud Computing", url: "https://nptel.ac.in/courses/106105167" },
                    { name: "GeeksforGeeks – Cloud Computing", url: "https://www.geeksforgeeks.org/cloud-computing/" }
                ]
            },
            {
                title: "Containers – Docker & Kubernetes", desc: "Containerize apps, Kubernetes clusters, Helm charts.", dur: "4-5 weeks",
                courses: [
                    { name: "Docker & Kubernetes Training", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Docker for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/docker-tutorial" }
                ],
                videos: [
                    { name: "Docker & Kubernetes Full Course", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
                    { name: "Kubernetes Explained", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=s_o8dwzRlu4" }
                ],
                books: [
                    { name: "Kubernetes in Action – Lukša (Manning)", url: "https://www.manning.com/books/kubernetes-in-action" }
                ],
                websites: [
                    { name: "Kubernetes Official Tutorials", url: "https://kubernetes.io/docs/tutorials/" },
                    { name: "Play with Kubernetes (Labs)", url: "https://labs.play-with-k8s.com/" }
                ]
            },
            {
                title: "Infrastructure as Code & DevOps", desc: "Terraform, CloudFormation, CI/CD pipelines in the cloud.", dur: "3-4 weeks",
                courses: [
                    { name: "Terraform Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Oracle DevOps Foundations", platform: "Oracle", url: "https://education.oracle.com/oracle-cloud-infrastructure-devops-professional" }
                ],
                videos: [
                    { name: "Terraform Full Course for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=SLB_c_ayRMo" },
                    { name: "GitHub Actions CI/CD Tutorial", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" }
                ],
                books: [
                    { name: "Terraform: Up & Running – Brikman (O'Reilly)", url: "https://www.oreilly.com/library/view/terraform-up-and/9781098116736/" }
                ],
                websites: [
                    { name: "HashiCorp Learn – Terraform", url: "https://developer.hashicorp.com/terraform/tutorials" },
                    { name: "AWS CloudFormation Docs", url: "https://docs.aws.amazon.com/cloudformation/" }
                ]
            }
        ]
    },
    {
        id: "devops", name: "DevOps", cat: "Tech", color: "#8b5cf6",
        steps: [
            {
                title: "Git, Linux & Shell Scripting", desc: "Version control workflows, bash scripting, and system administration.", dur: "2-3 weeks",
                courses: [
                    { name: "DevOps Engineer Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Linux & Shell Scripting", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/linux-fundamentals" }
                ],
                videos: [
                    { name: "Git & GitHub Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
                    { name: "Shell Scripting Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=v-F3YLd6oMw" }
                ],
                books: [
                    { name: "Pro Git – Chacon & Straub (Free Online)", url: "https://git-scm.com/book/en/v2" }
                ],
                websites: [
                    { name: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
                    { name: "GitHub Learning Lab", url: "https://github.com/apps/github-learning-lab" }
                ]
            },
            {
                title: "CI/CD & Automation", desc: "Jenkins, GitHub Actions, GitLab CI, and automated pipelines.", dur: "3-4 weeks",
                courses: [
                    { name: "Jenkins for DevOps", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "DevOps with GitHub Actions", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/github-for-beginners" }
                ],
                videos: [
                    { name: "Jenkins Full Course", platform: "YouTube – Edureka", url: "https://www.youtube.com/watch?v=FX322RVNGj4" },
                    { name: "GitHub Actions CI/CD", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=mFFXuXjVgkU" }
                ],
                books: [
                    { name: "Continuous Delivery – Humble & Farley (Addison-Wesley)", url: "https://continuousdelivery.com/" }
                ],
                websites: [
                    { name: "Jenkins Official Docs", url: "https://www.jenkins.io/doc/" },
                    { name: "GitHub Actions Marketplace", url: "https://github.com/marketplace?type=actions" }
                ]
            },
            {
                title: "Monitoring & SRE", desc: "Prometheus, Grafana, ELK stack, alerting, and SLOs.", dur: "3-4 weeks",
                courses: [
                    { name: "Site Reliability Engineering (SRE)", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Google SRE Course", platform: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google/" }
                ],
                videos: [
                    { name: "Prometheus & Grafana Full Tutorial", platform: "YouTube – TechWorld with Nana", url: "https://www.youtube.com/watch?v=QoDqxm7ybLc" },
                    { name: "ELK Stack Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=tF8J4b7YgP8" }
                ],
                books: [
                    { name: "Site Reliability Engineering – Google (Free Online)", url: "https://sre.google/sre-book/table-of-contents/" }
                ],
                websites: [
                    { name: "Prometheus Docs", url: "https://prometheus.io/docs/" },
                    { name: "Grafana Labs Tutorials", url: "https://grafana.com/tutorials/" }
                ]
            }
        ]
    },
    {
        id: "mobile-dev", name: "Mobile App Development", cat: "Tech", color: "#f59e0b",
        steps: [
            {
                title: "Flutter & Dart Foundations", desc: "Dart syntax, Flutter widgets, layouts, and state management.", dur: "4-5 weeks",
                courses: [
                    { name: "Flutter App Development", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Flutter for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/flutter-tutorial" },
                    { name: "Flutter & Dart", platform: "Udemy – Angela Yu", url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/" },
,
                    { name: "Flutter in Hindi Full Course", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Android Development in Hindi", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" }
                ],
                videos: [
                    { name: "Flutter Full Course for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=VPvVD8t4T-s" },
                    { name: "Flutter Tutorial for Beginners", platform: "YouTube – Net Ninja", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ" },
                    { name: "Flutter Full Course in Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=TpTumuqo2o0" },
                    { name: "Android Kotlin in Hindi", platform: "YouTube – Apna College", url: "https://www.youtube.com/watch?v=LmNai8oFABE" }
                ],
                books: [
                    { name: "Flutter in Action – Windmill (Manning)", url: "https://www.manning.com/books/flutter-in-action" }
                ],
                websites: [
                    { name: "Flutter Official Docs", url: "https://docs.flutter.dev/" },
                    { name: "DartPad – Online Dart Playground", url: "https://dartpad.dev/" }
                ]
            },
            {
                title: "React Native", desc: "Cross-platform iOS/Android apps with React Native.", dur: "4-5 weeks",
                courses: [
                    { name: "React Native Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "React Native Full Course", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/react-native-tutorial" }
                ],
                videos: [
                    { name: "React Native Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=Hf4MJH0jDb4" },
                    { name: "React Native Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=obH0Po_RdWk" }
                ],
                books: [
                    { name: "Learning React Native – Bonnie Eisenman (O'Reilly)", url: "https://www.oreilly.com/library/view/learning-react-native/9781491929049/" }
                ],
                websites: [
                    { name: "React Native Official Docs", url: "https://reactnative.dev/docs/getting-started" },
                    { name: "Expo – React Native Framework", url: "https://expo.dev/" }
                ]
            },
            {
                title: "Publishing & Monetization", desc: "Play Store, App Store deployment, analytics, and revenue models.", dur: "2-3 weeks",
                courses: [
                    { name: "Google Play Academy", platform: "Google", url: "https://playacademy.exceedlms.com/" }
                ],
                videos: [
                    { name: "How to Publish an App on Google Play", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=5GHT4QtotE4" },
                    { name: "App Store Submission Guide", platform: "YouTube – CodeWithChris", url: "https://www.youtube.com/watch?v=_wP8EMRXHIY" }
                ],
                books: [
                    { name: "App Store Optimization for Dummies", url: "https://www.wiley.com/en-us/App+Store+Optimization+For+Dummies-p-9781119116783" }
                ],
                websites: [
                    { name: "Google Play Console", url: "https://play.google.com/console/" },
                    { name: "Apple App Store Connect Docs", url: "https://developer.apple.com/app-store-connect/" }
                ]
            }
        ]
    },
    {
        id: "data-eng", name: "Data Engineering", cat: "Tech", color: "#0ea5e9",
        steps: [
            {
                title: "SQL & Data Warehousing", desc: "Advanced SQL, window functions, Snowflake, BigQuery, and Redshift.", dur: "4-5 weeks",
                courses: [
                    { name: "SQL for Data Engineering", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "SQL & Databases", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/sql-for-data-science" },
                    { name: "Oracle Database SQL Certified", platform: "Oracle", url: "https://education.oracle.com/oracle-database-sql-certified-associate-exam-1z0-071" }
                ],
                videos: [
                    { name: "SQL for Data Engineers", platform: "YouTube – Alex The Analyst", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
                    { name: "BigQuery ML Tutorial", platform: "YouTube – Google Cloud", url: "https://www.youtube.com/watch?v=BjARzEAaEDU" }
                ],
                books: [
                    { name: "Designing Data-Intensive Applications – Kleppmann (O'Reilly)", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" }
                ],
                websites: [
                    { name: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
                    { name: "dbt Learn – Analytics Engineering", url: "https://courses.getdbt.com/" }
                ]
            },
            {
                title: "ETL Pipelines & Airflow", desc: "Extract-Transform-Load, Apache Airflow DAGs, and workflow scheduling.", dur: "4-5 weeks",
                courses: [
                    { name: "Data Engineering with Python", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Apache Airflow Certification", platform: "Astronomer (Great Learning)", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-engineering-essentials" }
                ],
                videos: [
                    { name: "Apache Airflow Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=K9AnJ9_ZAXE" },
                    { name: "ETL Pipeline Tutorial Python", platform: "YouTube – Data Engineering", url: "https://www.youtube.com/watch?v=dfouoh591Vo" }
                ],
                books: [
                    { name: "Data Pipelines Pocket Reference – Densmore (O'Reilly)", url: "https://www.oreilly.com/library/view/data-pipelines-pocket/9781492087823/" }
                ],
                websites: [
                    { name: "Apache Airflow Official Docs", url: "https://airflow.apache.org/docs/" },
                    { name: "Prefect – Modern Workflow Orchestration", url: "https://docs.prefect.io/" }
                ]
            },
            {
                title: "Apache Spark & Streaming", desc: "Big data with PySpark, Kafka, and real-time streaming pipelines.", dur: "5-6 weeks",
                courses: [
                    { name: "Apache Spark with Python", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Kafka & Spark Streaming", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/big-data-analytics" }
                ],
                videos: [
                    { name: "Apache Spark Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=_C8kWso4ne4" },
                    { name: "Kafka in 100 Seconds", platform: "YouTube – Fireship", url: "https://www.youtube.com/watch?v=uvb00oaa3k8" }
                ],
                books: [
                    { name: "Spark: The Definitive Guide – Chambers (O'Reilly)", url: "https://www.oreilly.com/library/view/spark-the-definitive/9781491912201/" }
                ],
                websites: [
                    { name: "Databricks Academy – Free Spark Course", url: "https://www.databricks.com/learn/training/home" },
                    { name: "Kaggle – Intro to SQL", url: "https://www.kaggle.com/learn/intro-to-sql" }
                ]
            }
        ]
    },
    {
        id: "game-dev", name: "Game Development", cat: "Creative", color: "#10b981",
        steps: [
            {
                title: "C# / C++ Programming", desc: "Core programming in C# for Unity or C++ for Unreal Engine.", dur: "4-6 weeks",
                courses: [
                    { name: "C# for Beginners", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "C++ Certification", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/c-plus-plus" }
                ],
                videos: [
                    { name: "C# Full Course for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=GhQdlIFylQ8" },
                    { name: "C++ Tutorial for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
                    { name: "C# Full Course in Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=SuLiu5AK9Ps" },
                    { name: "Game Dev in Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/@ThapaAnimator" }
                ],
                books: [
                    { name: "C# Programming – Yellow Book (Free PDF)", url: "http://www.csharpcourse.com/" },
                    { name: "Programming: Principles and Practice Using C++ – Stroustrup", url: "https://www.stroustrup.com/Programming/" }
                ],
                websites: [
                    { name: "Microsoft Learn – C# Fundamentals", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
                    { name: "CPP Reference", url: "https://en.cppreference.com/" }
                ]
            },
            {
                title: "Unity Game Engine", desc: "Unity editor, physics, scene management, animations, and 2D/3D games.", dur: "6-8 weeks",
                courses: [
                    { name: "Unity Game Developer", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Unity for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/unity-3d-game-development" }
                ],
                videos: [
                    { name: "Unity Beginner Tutorial – Make a Game", platform: "YouTube – Brackeys", url: "https://www.youtube.com/watch?v=pwZpJzpE2lQ" },
                    { name: "Unity 2D Platformer Tutorial", platform: "YouTube – Brackeys", url: "https://www.youtube.com/watch?v=MbWK8bCAU2w" }
                ],
                books: [
                    { name: "Unity in Action – Hocking (Manning)", url: "https://www.manning.com/books/unity-in-action-third-edition" }
                ],
                websites: [
                    { name: "Unity Learn – Free Official Courses", url: "https://learn.unity.com/" },
                    { name: "Unity Docs", url: "https://docs.unity3d.com/" }
                ]
            },
            {
                title: "Publishing & Game Design", desc: "Game design principles, balancing, and publishing to Steam/mobile.", dur: "3-4 weeks",
                courses: [
                    { name: "Game Design & Theory", platform: "Coursera – CalArts", url: "https://www.coursera.org/learn/game-design" },
                    { name: "Game Dev Business", platform: "Udemy", url: "https://www.udemy.com/course/game-marketing/" }
                ],
                videos: [
                    { name: "How to Publish on Steam", platform: "YouTube – Brackeys", url: "https://www.youtube.com/watch?v=V5HMzmjQ6yI" },
                    { name: "Game Design Principles", platform: "YouTube – Extra Credits", url: "https://www.youtube.com/playlist?list=PLB9B0CA00461BB187" }
                ],
                books: [
                    { name: "The Art of Game Design – Jesse Schell", url: "https://www.schellgames.com/art-of-game-design/" }
                ],
                websites: [
                    { name: "Steam Direct Developer Program", url: "https://partner.steamgames.com/" },
                    { name: "itch.io Developer Hub", url: "https://itch.io/developers" }
                ]
            }
        ]
    },
    {
        id: "uiux", name: "UI/UX Design", cat: "Design", color: "#d946ef",
        steps: [
            {
                title: "Design Principles & Theory", desc: "Color theory, typography, Gestalt principles, and visual hierarchy.", dur: "3-4 weeks",
                courses: [
                    { name: "UX Design Fundamentals", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux-design" },
                    { name: "Google UX Design Certificate", platform: "Google (Coursera)", url: "https://www.coursera.org/professional-certificates/google-ux-design" }
                ],
                videos: [
                    { name: "UI Design for Beginners", platform: "YouTube – DesignCourse", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
                    { name: "Typography Design Tutorial", platform: "YouTube – Will Paterson", url: "https://www.youtube.com/watch?v=sByzHoiYFX0" }
                ],
                books: [
                    { name: "The Design of Everyday Things – Don Norman", url: "https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/" },
                    { name: "Don't Make Me Think – Steve Krug", url: "https://sensible.com/dont-make-me-think/" }
                ],
                websites: [
                    { name: "Refactoring UI – Design Tips", url: "https://www.refactoringui.com/" },
                    { name: "Nielsen Norman Group – UX Research", url: "https://www.nngroup.com/" }
                ]
            },
            {
                title: "Figma Mastery", desc: "Components, auto-layout, variants, prototyping, and design systems.", dur: "4-5 weeks",
                courses: [
                    { name: "Figma UI Design", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-figma" },
                    { name: "UX Design with Figma", platform: "Simplilearn", url: "https://www.simplilearn.com/" }
                ],
                videos: [
                    { name: "Figma Tutorial – Full Course", platform: "YouTube – DesignCourse", url: "https://www.youtube.com/watch?v=1pW_sk-2y40" },
                    { name: "Figma Auto Layout Tutorial", platform: "YouTube – Figma", url: "https://www.youtube.com/watch?v=TyaGpGDFczw" }
                ],
                books: [
                    { name: "Figma for UX Designers – Pratik Anand", url: "https://www.packtpub.com/product/figma-for-ux-designers/9781800561564" }
                ],
                websites: [
                    { name: "Figma Resources & Community", url: "https://www.figma.com/community" },
                    { name: "Figma Official Learn Portal", url: "https://www.figma.com/resources/learn-design/" }
                ]
            },
            {
                title: "User Research & Testing", desc: "Interviews, personas, usability testing, and A/B experiments.", dur: "3-4 weeks",
                courses: [
                    { name: "User Research Methods", platform: "Google UX Certificate (Coursera)", url: "https://www.coursera.org/learn/conduct-ux-research" },
                    { name: "Interaction Design Foundation Courses", platform: "IDF", url: "https://www.interaction-design.org/courses" }
                ],
                videos: [
                    { name: "UX Research Methods", platform: "YouTube – Google Design", url: "https://www.youtube.com/watch?v=xVSio2MpEGw" },
                    { name: "User Testing Tutorial", platform: "YouTube – CareerFoundry", url: "https://www.youtube.com/watch?v=iDRLFVy-0bk" }
                ],
                books: [
                    { name: "Just Enough Research – Erika Hall", url: "https://abookapart.com/products/just-enough-research" }
                ],
                websites: [
                    { name: "UX Planet – Articles & Case Studies", url: "https://uxplanet.org/" },
                    { name: "Maze – Usability Testing Tool (Free Tier)", url: "https://maze.co/" }
                ]
            }
        ]
    },
    {
        id: "digital-marketing", name: "Digital Marketing", cat: "Business", color: "#f43f5e",
        steps: [
            {
                title: "SEO & Content Marketing", desc: "Keyword research, on-page SEO, content strategy, and copywriting.", dur: "3-4 weeks",
                courses: [
                    { name: "Digital Marketing Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "SEO for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/seo-for-beginners" },
                    { name: "Google Digital Marketing", platform: "Google (Skillshop)", url: "https://skillshop.withgoogle.com/intl/en/catalog" },
                    { name: "Digital Marketing in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Digital Marketing Free Course", platform: "Internshala Trainings", url: "https://trainings.internshala.com/digital-marketing-course/" },
                    { name: "Google Digital Unlocked (Hindi)", platform: "Google India", url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing" }
                ],
                videos: [
                    { name: "SEO Full Course for Beginners", platform: "YouTube – Ahrefs", url: "https://www.youtube.com/watch?v=xsVTqzratPs" },
                    { name: "Content Marketing Strategy", platform: "YouTube – HubSpot", url: "https://www.youtube.com/watch?v=XcwMgR_J4Lk" },
                    { name: "Digital Marketing Full Course Hindi", platform: "YouTube – WsCube Tech", url: "https://www.youtube.com/c/wscubetech" },
                    { name: "SEO Tutorial in Hindi", platform: "YouTube – Technical Guruji", url: "https://www.youtube.com/@TechnicalGuruji" }
                ],
                books: [
                    { name: "SEO 2024 – Adam Clarke", url: "https://www.amazon.com/SEO-2023-Optimization-Marketing-Strategy/dp/B0C5P4JL3N" },
                    { name: "Epic Content Marketing – Joe Pulizzi", url: "https://contentmarketinginstitute.com/epic-content-marketing/" }
                ],
                websites: [
                    { name: "Moz – Learn SEO (Free)", url: "https://moz.com/learn/seo" },
                    { name: "Ahrefs Blog – SEO Resources", url: "https://ahrefs.com/blog/" },
                    { name: "Google Digital Unlocked (Hindi)", url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing" },
                    { name: "WsCube Tech – Digital Marketing Free", url: "https://www.wscubetech.com/" }
                ]
            },
            {
                title: "Social Media & Paid Ads", desc: "Facebook, Instagram, Google Ads, campaign strategy and ROAS.", dur: "3-4 weeks",
                courses: [
                    { name: "Social Media Marketing", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Google Ads Certification", platform: "Google (Skillshop)", url: "https://skillshop.withgoogle.com/intl/en/catalog/google-ads" },
                    { name: "Facebook Blueprint", platform: "Meta", url: "https://www.facebook.com/business/learn" }
                ],
                videos: [
                    { name: "Google Ads Tutorial 2024", platform: "YouTube – Aaron Young", url: "https://youtu.be/16-dF2p0kKo?si=pZziUkmVmO7Kikn1" },
                    { name: "Facebook Ads Masterclass", platform: "YouTube – Ben Heath", url: "https://www.youtube.com/watch?v=pCHjzPjdImM" }
                ],
                books: [
                    { name: "Jab, Jab, Jab, Right Hook – Gary Vaynerchuk", url: "https://www.garyvaynerchuk.com/books/jab-jab-jab-right-hook/" }
                ],
                websites: [
                    { name: "Google Skillshop – All Certifications", url: "https://skillshop.withgoogle.com/" },
                    { name: "HubSpot Marketing Blog", url: "https://blog.hubspot.com/marketing" }
                ]
            },
            {
                title: "Analytics & Email Marketing", desc: "Google Analytics 4, conversion tracking, and email campaigns.", dur: "3 weeks",
                courses: [
                    { name: "Google Analytics 4 Certification", platform: "Google (Skillshop)", url: "https://skillshop.withgoogle.com/intl/en/catalog/google-analytics" },
                    { name: "Email Marketing Course", platform: "HubSpot Academy (Free)", url: "https://academy.hubspot.com/courses/email-marketing" }
                ],
                videos: [
                    { name: "Google Analytics 4 Full Course", platform: "YouTube – Loves Data", url: "https://www.youtube.com/watch?v=o9RSVZ1hkXg" },
                    { name: "Email Marketing Tutorial", platform: "YouTube – Neil Patel", url: "https://www.youtube.com/watch?v=7y508rVOEqE" }
                ],
                books: [
                    { name: "Web Analytics 2.0 – Avinash Kaushik", url: "https://www.kaushik.net/avinash/web-analytics-20-book-table-of-contents/" }
                ],
                websites: [
                    { name: "Google Analytics Help Center", url: "https://support.google.com/analytics" },
                    { name: "Mailchimp – Email Marketing Guide", url: "https://mailchimp.com/resources/email-marketing-field-guide/" }
                ]
            }
        ]
    },
    {
        id: "finance", name: "Finance & Fintech", cat: "Business", color: "#eab308",
        steps: [
            {
                title: "Financial Accounting Basics", desc: "Financial statements, bookkeeping, and GAAP principles.", dur: "3-4 weeks",
                courses: [
                    { name: "Financial Accounting", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/financial-accounting" },
                    { name: "Accounting & Finance", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Financial Markets (Yale)", platform: "Coursera", url: "https://www.coursera.org/learn/financial-markets-global" },
                    { name: "Stock Market in Hindi", platform: "Zerodha Varsity (Free)", url: "https://zerodha.com/varsity/" },
                    { name: "Financial Markets", platform: "NPTEL – IIT Kharagpur", url: "https://nptel.ac.in/courses/110110097" },
                    { name: "Personal Finance India", platform: "Groww Learn (Free)", url: "https://groww.in/blog/category/investment" }
                ],
                videos: [
                    { name: "Accounting Basics Full Course", platform: "YouTube – Accounting Stuff", url: "https://www.youtube.com/watch?v=yYX4bvQSqbo" },
                    { name: "Financial Statements Explained", platform: "YouTube – The Financial Controller", url: "https://www.youtube.com/watch?v=uVHGgSe3IVY" },
                    { name: "Stock Market Basics Hindi", platform: "YouTube – Pranjal Kamra", url: "https://www.youtube.com/@PranjalKamra" },
                    { name: "Mutual Funds Explained Hindi", platform: "YouTube – CA Rachana Phadke", url: "https://www.youtube.com/@CARachanaPhadke" },
                    { name: "Personal Finance for Indians", platform: "YouTube – Wint Wealth", url: "https://www.youtube.com/@WintWealth" }
                ],
                books: [
                    { name: "Accounting Made Simple – Mike Piper (Free Preview)", url: "https://www.accountingmadeclear.com/" },
                    { name: "The Intelligent Investor – Benjamin Graham", url: "https://www.harpercollins.com/products/the-intelligent-investor-rev-ed-benjamin-grahamjason-zweig" }
                ],
                websites: [
                    { name: "Investopedia – Finance Dictionary & Tutorials", url: "https://www.investopedia.com/" },
                    { name: "CFA Institute – Learning Resources", url: "https://www.cfainstitute.org/en/membership/professional-development/refresher-readings" },
                    { name: "Zerodha Varsity (Free – India)", url: "https://zerodha.com/varsity/" },
                    { name: "SEBI – Securities Market India", url: "https://www.sebi.gov.in/" },
                    { name: "NSE India – Learning Centre", url: "https://www.nseindia.com/education" }
                ]
            },
            {
                title: "Financial Modeling & Valuation", desc: "Excel modeling, DCF analysis, LBO modeling, M&A concepts.", dur: "4-5 weeks",
                courses: [
                    { name: "Financial Modeling Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Excel for Finance", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/excel-for-finance" }
                ],
                videos: [
                    { name: "Financial Modeling Tutorial", platform: "YouTube – Aswath Damodaran (NYU)", url: "https://www.youtube.com/watch?v=WT3dBGAsErs" },
                    { name: "DCF Model Tutorial", platform: "YouTube – Breaking Into Wall Street", url: "https://www.youtube.com/watch?v=OTv7YMbhQl4" }
                ],
                books: [
                    { name: "Financial Modeling – Benninga (MIT Press)", url: "https://mitpress.mit.edu/9780262026284/financial-modeling/" }
                ],
                websites: [
                    { name: "WSO – Wall Street Oasis Tutorials", url: "https://www.wallstreetoasis.com/" },
                    { name: "CFI – Corporate Finance Institute (Free Courses)", url: "https://corporatefinanceinstitute.com/" }
                ]
            },
            {
                title: "Algorithmic Trading & Fintech", desc: "Python for quant finance, backtesting strategies, DeFi basics.", dur: "5-6 weeks",
                courses: [
                    { name: "Algorithmic Trading", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Python for Finance", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/trading-technical-analysis" }
                ],
                videos: [
                    { name: "Algorithmic Trading with Python Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=xfzGZB4HhEE" },
                    { name: "Quantitative Finance Python Tutorial", platform: "YouTube – Derrick Sherrill", url: "https://www.youtube.com/watch?v=t0qxXPuiGKU" }
                ],
                books: [
                    { name: "Python for Finance – Yves Hilpisch (O'Reilly)", url: "https://www.oreilly.com/library/view/python-for-finance/9781492024323/" }
                ],
                websites: [
                    { name: "QuantLib – Open Source Finance Library", url: "https://www.quantlib.org/" },
                    { name: "Kaggle – Financial Datasets", url: "https://www.kaggle.com/datasets?search=finance" }
                ]
            }
        ]
    },
    {
        id: "sql-databases", name: "SQL & Databases", cat: "Tech", color: "#0d9488",
        steps: [
            {
                title: "SQL Foundations", desc: "SELECT, JOINs, GROUP BY, subqueries, and database design.", dur: "3-4 weeks",
                courses: [
                    { name: "SQL for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/sql-for-data-science" },
                    { name: "Oracle SQL Fundamentals", platform: "Oracle", url: "https://education.oracle.com/oracle-database-sql-certified-associate-exam-1z0-071" },
                    { name: "MySQL for Beginners", platform: "Simplilearn", url: "https://www.simplilearn.com/" }
                ],
                videos: [
                    { name: "SQL Full Course – 4 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
                    { name: "MySQL Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=9ylj9NR0Lcg" }
                ],
                books: [
                    { name: "Learning SQL – Alan Beaulieu (O'Reilly)", url: "https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/" },
                    { name: "SQL Cookbook – Molinaro (O'Reilly)", url: "https://www.oreilly.com/library/view/sql-cookbook-2nd/9781492077435/" }
                ],
                websites: [
                    { name: "SQLZoo – Interactive Practice", url: "https://sqlzoo.net/" },
                    { name: "LeetCode SQL Problems", url: "https://leetcode.com/problemset/database/" },
                    { name: "GeeksforGeeks – DBMS & SQL", url: "https://www.geeksforgeeks.org/dbms/" },
                    { name: "NPTEL – Database Management Systems", url: "https://nptel.ac.in/courses/106106093" },
                    { name: "InterviewBit – SQL Questions", url: "https://www.interviewbit.com/sql-interview-questions/" }
                ]
            },
            {
                title: "Advanced SQL & Performance", desc: "Window functions, CTEs, indexing, query optimization, and execution plans.", dur: "3-4 weeks",
                courses: [
                    { name: "Oracle Database Performance Tuning", platform: "Oracle", url: "https://education.oracle.com/oracle-database-19c-performance-management-and-tuning" },
                    { name: "Advanced SQL", platform: "Kaggle", url: "https://www.kaggle.com/learn/advanced-sql" }
                ],
                videos: [
                    { name: "Advanced SQL Tutorial", platform: "YouTube – Tech TFQ", url: "https://www.youtube.com/watch?v=cZ2PkSJ849U" },
                    { name: "SQL Window Functions", platform: "YouTube – Corey Schafer", url: "https://www.youtube.com/watch?v=H6OTMoXjNEs" }
                ],
                books: [
                    { name: "SQL Performance Explained – Winand (Free Online)", url: "https://use-the-index-luke.com/" }
                ],
                websites: [
                    { name: "Kaggle – Advanced SQL Course", url: "https://www.kaggle.com/learn/advanced-sql" },
                    { name: "pgexercises – PostgreSQL Exercises", url: "https://pgexercises.com/" }
                ]
            },
            {
                title: "NoSQL & Database Architecture", desc: "MongoDB, Redis, Cassandra, and choosing the right database.", dur: "3-4 weeks",
                courses: [
                    { name: "MongoDB Developer Path", platform: "MongoDB University (Free)", url: "https://learn.mongodb.com/" },
                    { name: "NoSQL Databases", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-mongodb" }
                ],
                videos: [
                    { name: "MongoDB Full Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=-56x56UppqQ" },
                    { name: "Redis Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" }
                ],
                books: [
                    { name: "MongoDB: The Definitive Guide (O'Reilly)", url: "https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954454/" }
                ],
                websites: [
                    { name: "MongoDB University – Free Courses", url: "https://university.mongodb.com/" },
                    { name: "Redis Official Docs", url: "https://redis.io/docs/" }
                ]
            }
        ]
    },
    {
        id: "graphic-design", name: "Graphic Design", cat: "Design", color: "#e879f9",
        steps: [
            {
                title: "Design Theory & Adobe Illustrator", desc: "Color, typography, composition, and vector design in Illustrator.", dur: "4-5 weeks",
                courses: [
                    { name: "Graphic Design Basics", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/graphic-design-course" },
                    { name: "Adobe Illustrator Course", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Graphic Design in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Photoshop + Illustrator Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Graphic Design Course (Free)", platform: "Internshala Trainings", url: "https://trainings.internshala.com/" }
                ],
                videos: [
                    { name: "Adobe Illustrator Full Course", platform: "YouTube – DesignCourse", url: "https://www.youtube.com/watch?v=Ib8UBwu3yGA" },
                    { name: "Graphic Design Theory", platform: "YouTube – Will Paterson", url: "https://www.youtube.com/watch?v=_Qq-SJ3vBPo" },
                    { name: "Photoshop Full Course Hindi", platform: "YouTube – WsCube Tech", url: "https://www.youtube.com/c/wscubetech" },
                    { name: "Canva Tutorial in Hindi", platform: "YouTube – Thapa Technical", url: "https://www.youtube.com/@ThapaAnimator" }
                ],
                books: [
                    { name: "Thinking with Type – Ellen Lupton (Free Preview)", url: "http://thinkingwithtype.com/" },
                    { name: "The Elements of Typographic Style – Bringhurst", url: "https://www.amazon.com/Elements-Typographic-Style-Robert-Bringhurst/dp/0881792128" }
                ],
                websites: [
                    { name: "Adobe Creative Cloud Tutorials", url: "https://helpx.adobe.com/illustrator/tutorials.html" },
                    { name: "Canva Design School (Free)", url: "https://www.canva.com/learn/design/" }
                ]
            },
            {
                title: "Adobe Photoshop & Photo Editing", desc: "Retouching, compositing, masks, and digital art creation.", dur: "4-5 weeks",
                courses: [
                    { name: "Photoshop Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Photoshop for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/photoshop-for-beginners" }
                ],
                videos: [
                    { name: "Photoshop Full Tutorial for Beginners", platform: "YouTube – Photoshop Training Channel", url: "https://www.youtube.com/watch?v=IyR_uYsRdPs" },
                    { name: "Photoshop in 30 Days", platform: "YouTube – PHLEARN", url: "https://www.youtube.com/playlist?list=PLpO5QJdpJ6v5ISAK2g4BSQB7Q2ZAlNF5" }
                ],
                books: [
                    { name: "Adobe Photoshop Classroom in a Book (Adobe Press)", url: "https://www.adobepress.com/store/adobe-photoshop-classroom-in-a-book-2023-release-9780138022907" }
                ],
                websites: [
                    { name: "Adobe Photoshop Tutorials Hub", url: "https://helpx.adobe.com/photoshop/tutorials.html" },
                    { name: "PSDBox – Free PSD Files & Tutorials", url: "https://www.psdbox.com/" }
                ]
            },
            {
                title: "Branding & Portfolio", desc: "Logo design, brand guidelines, identity systems, and building a portfolio.", dur: "3-4 weeks",
                courses: [
                    { name: "Brand Design Course", platform: "Coursera – California Institute of Arts", url: "https://www.coursera.org/specializations/graphic-design" },
                    { name: "Logo Design Masterclass", platform: "Udemy", url: "https://www.udemy.com/course/logo-design-mastery-in-adobe-illustrator/" }
                ],
                videos: [
                    { name: "How to Design a Logo", platform: "YouTube – Will Paterson", url: "https://www.youtube.com/watch?v=57PQUzpchUM" },
                    { name: "Brand Identity Design Course", platform: "YouTube – The Futur", url: "https://www.youtube.com/watch?v=l-S2Y3SF3mM" }
                ],
                books: [
                    { name: "Logo Design Love – David Airey", url: "https://www.logodesignlove.com/logo-design-love-book" }
                ],
                websites: [
                    { name: "Behance – Design Portfolio Showcase", url: "https://www.behance.net/" },
                    { name: "Dribbble – Design Inspiration", url: "https://dribbble.com/" },
                    { name: "OurCreativeWork – India Design Community", url: "https://www.instagram.com/ourcreativework/" },
                    { name: "India Design Mark", url: "https://www.indiainclusive.org/" }
                ]
            }
        ]
    },
    {
        id: "video-editing", name: "Video Editing & Motion", cat: "Creative", color: "#fb923c",
        steps: [
            {
                title: "Premiere Pro – Editing Fundamentals", desc: "Editing workflow, cuts, colour, audio sync, and export settings.", dur: "3-4 weeks",
                courses: [
                    { name: "Video Editing Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Premiere Pro Basics", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/video-editing-course" },
                    { name: "Video Editing in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Premiere Pro Hindi Tutorial", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" }
                ],
                videos: [
                    { name: "Premiere Pro Full Tutorial", platform: "YouTube – Justin Odisho", url: "https://www.youtube.com/watch?v=3FQHSFsOFYc" },
                    { name: "Premiere Pro Crash Course", platform: "YouTube – Traversy Media", url: "https://www.youtube.com/watch?v=6-4Hm6FUBAQ" },
                    { name: "Video Editing Full Course Hindi", platform: "YouTube – WsCube Tech", url: "https://www.youtube.com/c/wscubetech" },
                    { name: "CapCut Tutorial in Hindi", platform: "YouTube – Technical Guruji", url: "https://www.youtube.com/@TechnicalGuruji" }
                ],
                books: [
                    { name: "Adobe Premiere Pro Classroom in a Book (Adobe Press)", url: "https://www.adobepress.com/store/adobe-premiere-pro-classroom-in-a-book-2024-release-9780138220846" }
                ],
                websites: [
                    { name: "Adobe Premiere Pro Tutorials", url: "https://helpx.adobe.com/premiere-pro/tutorials.html" },
                    { name: "Motion Array – Templates & Tutorials", url: "https://motionarray.com/learn/" }
                ]
            },
            {
                title: "After Effects & Motion Graphics", desc: "Keyframing, expressions, compositing, and animated typography.", dur: "4-5 weeks",
                courses: [
                    { name: "After Effects Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "After Effects for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/after-effects-for-beginners" }
                ],
                videos: [
                    { name: "After Effects Full Beginner Course", platform: "YouTube – Motion Array", url: "https://www.youtube.com/watch?v=52_G_KKSS5k" },
                    { name: "Motion Graphics in AE", platform: "YouTube – School of Motion", url: "https://www.youtube.com/watch?v=SXq1GATBdHo" }
                ],
                books: [
                    { name: "After Effects Classroom in a Book (Adobe Press)", url: "https://www.adobepress.com/store/adobe-after-effects-classroom-in-a-book-2024-release-9780138230357" }
                ],
                websites: [
                    { name: "Adobe After Effects Tutorials", url: "https://helpx.adobe.com/after-effects/tutorials.html" },
                    { name: "Motion Design School (Free Tutorials)", url: "https://motiondesign.school/" }
                ]
            }
        ]
    },
    {
        id: "competitive-programming", name: "Competitive Programming", cat: "Tech", color: "#6366f1",
        steps: [
            {
                title: "Data Structures & Algorithms", desc: "Arrays, trees, graphs, heaps, sorting, and searching.", dur: "6-8 weeks",
                courses: [
                    { name: "DSA Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Data Structures", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-structures-and-algorithms" },
                    { name: "Algorithms Specialization", platform: "Coursera – Stanford", url: "https://www.coursera.org/specializations/algorithms" },
                    { name: "DSA in Java/C++ Hindi", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" },
                    { name: "Data Structures & Algorithms", platform: "GeeksforGeeks DSA Course", url: "https://www.geeksforgeeks.org/dsa-self-paced/" },
                    { name: "CP Course (Free)", platform: "CodeChef – DSA Learning Series", url: "https://www.codechef.com/learn/course/dsa" }
                ],
                videos: [
                    { name: "Data Structures Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
                    { name: "Dynamic Programming – Aditya Verma", platform: "YouTube – Aditya Verma", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" },
                    { name: "DSA Full Course by Striver", platform: "YouTube – take U forward", url: "https://www.youtube.com/@takeUforward" },
                    { name: "Complete DSA in Hindi", platform: "YouTube – Apna College", url: "https://www.youtube.com/watch?v=z9bZufPHFLU" }
                ],
                books: [
                    { name: "Introduction to Algorithms (CLRS) – MIT Press", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
                    { name: "Competitive Programmer's Handbook – Antti Laaksonen (Free PDF)", url: "https://cses.fi/book/book.pdf" }
                ],
                websites: [
                    { name: "LeetCode – Practice Problems", url: "https://leetcode.com/" },
                    { name: "Codeforces – Competitive Platform", url: "https://codeforces.com/" },
                    { name: "CodeChef – India CP Platform", url: "https://www.codechef.com/" },
                    { name: "GeeksforGeeks – DSA Practice", url: "https://practice.geeksforgeeks.org/" },
                    { name: "InterviewBit – DSA Problems", url: "https://www.interviewbit.com/practice/" }
                ]
            },
            {
                title: "Advanced Algorithms & Contest Practice", desc: "DP, segment trees, graph algorithms, number theory.", dur: "Ongoing",
                courses: [
                    { name: "Advanced DSA", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-structures-and-algorithms" },
                    { name: "Competitive Programming Fundamentals", platform: "Coursera – UCSD", url: "https://www.coursera.org/specializations/data-structures-algorithms" }
                ],
                videos: [
                    { name: "Graph Algorithms Explained", platform: "YouTube – William Fiset", url: "https://www.youtube.com/watch?v=DgXR2OWQnLc" },
                    { name: "Segment Tree Tutorial", platform: "YouTube – Colin Galen", url: "https://www.youtube.com/watch?v=Oq2E2yGadnU" }
                ],
                books: [
                    { name: "Competitive Programming 4 – Halim & Halim", url: "https://cpbook.net/" }
                ],
                websites: [
                    { name: "CSES Problem Set", url: "https://cses.fi/problemset/" },
                    { name: "AtCoder – Beginner Contests", url: "https://atcoder.jp/" }
                ]
            }
        ]
    },
    {
        id: "networking-cisco", name: "Networking & CCNA", cat: "Engineering", color: "#14b8a6",
        steps: [
            {
                title: "Network Fundamentals", desc: "OSI model, TCP/IP, IP addressing, subnetting, and VLANs.", dur: "4-5 weeks",
                courses: [
                    { name: "CCNA – Introduction to Networks", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/ccna/introduction-networks" },
                    { name: "Networking Basics", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/networking/networking-basics" },
                    { name: "Network Fundamentals", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/computer-networking-fundamentals" },
                    { name: "Networking in Hindi Full Course", platform: "Gate Smashers", url: "https://www.youtube.com/@GateSmashers" },
                    { name: "Computer Networks", platform: "NPTEL", url: "https://nptel.ac.in/courses/106105076" }
                ],
                videos: [
                    { name: "CCNA Training – Full Course", platform: "YouTube – Jeremy's IT Lab", url: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" },
                    { name: "Networking Basics for Beginners", platform: "YouTube – NetworkChuck", url: "https://www.youtube.com/watch?v=S7MNX_UD7vY" },
                    { name: "Computer Networks in Hindi", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/watch?v=JFF2vJaN0Cw" },
                    { name: "Networking Tutorial Hindi", platform: "YouTube – Neso Academy", url: "https://www.youtube.com/@nesoacademy" }
                ],
                books: [
                    { name: "CCNA 200-301 Official Cert Guide – Odom (Cisco Press)", url: "https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-library-9781587147142" },
                    { name: "Computer Networking: A Top-Down Approach – Kurose & Ross", url: "https://gaia.cs.umass.edu/kurose_ross/" }
                ],
                websites: [
                    { name: "Cisco NetAcad – Free Courses", url: "https://www.netacad.com/" },
                    { name: "Packet Tracer – Cisco Network Simulator", url: "https://www.netacad.com/courses/packet-tracer" }
                ]
            },
            {
                title: "Switching, Routing & Advanced Topics", desc: "STP, EIGRP, OSPF, BGP, ACLs, NAT, and network troubleshooting.", dur: "5-6 weeks",
                courses: [
                    { name: "CCNA – Switching, Routing & Wireless Essentials", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/ccna/switching-routing-wireless-essentials" },
                    { name: "Advanced Networking", platform: "Simplilearn", url: "https://www.simplilearn.com/" }
                ],
                videos: [
                    { name: "OSPF Explained", platform: "YouTube – Jeremy's IT Lab", url: "https://www.youtube.com/watch?v=kfvJ8QVJscc" },
                    { name: "BGP Explained – Full Tutorial", platform: "YouTube – NetworkChuck", url: "https://www.youtube.com/watch?v=-UZ9j4z8gUo" }
                ],
                books: [
                    { name: "Routing TCP/IP – Carroll (Cisco Press)", url: "https://www.ciscopress.com/store/routing-tcp-ip-volume-1-9781587052026" }
                ],
                websites: [
                    { name: "Cisco Learning Network", url: "https://learningnetwork.cisco.com/" },
                    { name: "GNS3 – Network Emulator", url: "https://www.gns3.com/" },
                    { name: "NPTEL – Computer Networks", url: "https://nptel.ac.in/courses/106105076" },
                    { name: "GeeksforGeeks – Computer Networks", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" }
                ]
            }
        ]
    },
    {
        id: "business-mba", name: "Business & MBA Essentials", cat: "Business", color: "#0d9488",
        steps: [
            {
                title: "Management & Leadership", desc: "Organizational behavior, leadership styles, and strategic decision-making.", dur: "4-5 weeks",
                courses: [
                    { name: "Business Management Course", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/business-management" },
                    { name: "Leadership & Management", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Foundations of Management", platform: "Google (Coursera)", url: "https://www.coursera.org/learn/management-fundamentals-healthcare-organizations" },
                    { name: "MBA Essentials", platform: "IIM Bangalore (Coursera)", url: "https://www.coursera.org/learn/iim-bangalore-business-strategy" },
                    { name: "Business Management", platform: "NPTEL – IIT Delhi", url: "https://nptel.ac.in/courses/110105029" }
                ],
                videos: [
                    { name: "MBA Course – Strategy & Management", platform: "YouTube – SimpleShowing", url: "https://www.youtube.com/watch?v=t5fB6nHiqfI" },
                    { name: "Business Strategy Full Course", platform: "YouTube – HarvardX", url: "https://www.youtube.com/watch?v=o7Ik1OB4TaE" }
                ],
                books: [
                    { name: "Good to Great – Jim Collins", url: "https://www.jimcollins.com/books/good-to-great.html" },
                    { name: "The Lean Startup – Eric Ries", url: "http://theleanstartup.com/" }
                ],
                websites: [
                    { name: "Harvard Business Review – Business Insights", url: "https://hbr.org/" },
                    { name: "Coursera Business Courses", url: "https://www.coursera.org/browse/business" }
                ]
            },
            {
                title: "Marketing, Finance & Operations", desc: "Market positioning, corporate finance, supply chain, and analytics.", dur: "5-6 weeks",
                courses: [
                    { name: "Marketing Management", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-marketing" },
                    { name: "Operations Management", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Wharton Business Foundations", platform: "Coursera", url: "https://www.coursera.org/specializations/wharton-business-foundations" }
                ],
                videos: [
                    { name: "Marketing Strategy Explained", platform: "YouTube – HubSpot Marketing", url: "https://www.youtube.com/watch?v=bixR-KIJKYM" },
                    { name: "Operations Management Full Course", platform: "YouTube – Alanis Business Academy", url: "https://www.youtube.com/watch?v=1OWlIzGHKsY" }
                ],
                books: [
                    { name: "Principles of Marketing – Kotler & Armstrong", url: "https://www.pearson.com/en-us/subject-catalog/p/principles-of-marketing/P200000005977/9780136595243" },
                    { name: "Blue Ocean Strategy – Kim & Mauborgne", url: "https://www.blueoceanstrategy.com/" }
                ],
                websites: [
                    { name: "CFI – Free Finance Courses", url: "https://corporatefinanceinstitute.com/free-courses/" },
                    { name: "Google Analytics Academy", url: "https://analytics.google.com/analytics/academy/" }
                ]
            }
        ]
    },
    {
        id: "ai-research", name: "AI Research", cat: "Science", color: "#818cf8",
        steps: [
            {
                title: "ML Theory & Mathematics", desc: "PAC learning, VC dimension, kernel methods, and information theory.", dur: "8-10 weeks",
                courses: [
                    { name: "AI for Research", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ai-ml-for-research" },
                    { name: "Stanford ML Course", platform: "Coursera", url: "https://www.coursera.org/learn/machine-learning" }
                ],
                videos: [
                    { name: "Caltech ML Course – Learning from Data", platform: "YouTube – Caltech", url: "https://www.youtube.com/playlist?list=PLD63A284B7615313A" },
                    { name: "Stanford CS229 – Machine Learning", platform: "YouTube – Stanford", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" }
                ],
                books: [
                    { name: "Understanding Machine Learning – Shalev-Shwartz (Free PDF)", url: "https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf" },
                    { name: "The Elements of Statistical Learning (Free PDF)", url: "https://hastie.su.domains/ElemStatLearn/" }
                ],
                websites: [
                    { name: "Papers With Code – Latest AI Research", url: "https://paperswithcode.com/" },
                    { name: "ArXiv – AI Preprints", url: "https://arxiv.org/list/cs.AI/recent" }
                ]
            },
            {
                title: "Reinforcement Learning & Frontier Models", desc: "MDPs, policy gradients, multi-agent RL, and LLM research.", dur: "6-8 weeks",
                courses: [
                    { name: "RL Specialization", platform: "Coursera – Alberta", url: "https://www.coursera.org/specializations/reinforcement-learning" },
                    { name: "Hugging Face Deep RL Course (Free)", platform: "Hugging Face", url: "https://huggingface.co/learn/deep-rl-course" }
                ],
                videos: [
                    { name: "David Silver RL Lectures – DeepMind", platform: "YouTube – DeepMind", url: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ" },
                    { name: "Andrej Karpathy – Neural Networks Zero to Hero", platform: "YouTube – Andrej Karpathy", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" }
                ],
                books: [
                    { name: "Reinforcement Learning: An Introduction – Sutton & Barto (Free PDF)", url: "http://incompleteideas.net/book/the-book-2nd.html" }
                ],
                websites: [
                    { name: "Hugging Face – Research Hub", url: "https://huggingface.co/" },
                    { name: "OpenAI Research Blog", url: "https://openai.com/research/" }
                ]
            }
        ]
    },
    {
        id: "iot-embedded", name: "Embedded & IoT", cat: "Engineering", color: "#f97316",
        steps: [
            {
                title: "Electronics & C Programming", desc: "Circuits, components, microcontrollers, and embedded C coding.", dur: "5-6 weeks",
                courses: [
                    { name: "IOT Course", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Embedded Systems", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/embedded-systems-overview" },
                    { name: "Introduction to the Internet of Things – Cisco", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/iot/introduction-iot" },
                    { name: "IoT & Embedded Systems", platform: "NPTEL", url: "https://nptel.ac.in/courses/106105182" },
                    { name: "Arduino in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" }
                ],
                videos: [
                    { name: "Arduino Full Course for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=zJ-LqeX_fLU" },
                    { name: "Embedded C Programming Tutorial", platform: "YouTube – Microcontroller Tips", url: "https://www.youtube.com/watch?v=mMiqNMZy2do" },
                    { name: "Arduino Tutorial in Hindi", platform: "YouTube – ElectroCraft India", url: "https://www.youtube.com/@RoboticWithRajat" },
                    { name: "IoT Full Course Hindi", platform: "YouTube – Gate Smashers", url: "https://www.youtube.com/@GateSmashers" }
                ],
                books: [
                    { name: "Making Embedded Systems – Elecia White (O'Reilly)", url: "https://www.oreilly.com/library/view/making-embedded-systems/9781449308889/" },
                    { name: "Getting Started with Arduino – Massimo Banzi", url: "https://www.arduino.cc/en/guide/introduction" }
                ],
                websites: [
                    { name: "Cisco NetAcad – IoT Courses", url: "https://www.netacad.com/courses/iot" },
                    { name: "Arduino Official Docs & Projects", url: "https://docs.arduino.cc/" }
                ]
            },
            {
                title: "IoT Protocols & Cloud Integration", desc: "MQTT, BLE, WiFi, AWS IoT, and edge computing.", dur: "4-5 weeks",
                courses: [
                    { name: "AWS IoT Specialty", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "IoT Specialization", platform: "Coursera – UCSD", url: "https://www.coursera.org/specializations/iot" },
                    { name: "Oracle IoT Cloud", platform: "Oracle", url: "https://education.oracle.com/iot" }
                ],
                videos: [
                    { name: "MQTT Explained – Full Tutorial", platform: "YouTube – HiveMQ", url: "https://www.youtube.com/watch?v=EIxdz-2rhLs" },
                    { name: "AWS IoT Core Tutorial", platform: "YouTube – Amazon Web Services", url: "https://www.youtube.com/watch?v=6w9a6y_-T2o" }
                ],
                books: [
                    { name: "Programming the Internet of Things – Miles (O'Reilly)", url: "https://www.oreilly.com/library/view/programming-the-internet/9781492081401/" }
                ],
                websites: [
                    { name: "AWS IoT Documentation", url: "https://docs.aws.amazon.com/iot/" },
                    { name: "Arduino IoT Cloud", url: "https://cloud.arduino.cc/" }
                ]
            }
        ]
    },
    /* ── NEW DOMAINS BATCH 1 ── */
    {
        id: "blockchain", name: "Blockchain & Web3", cat: "Tech", color: "#8b5cf6",
        steps: [
            {
                title: "Blockchain Fundamentals", desc: "Distributed ledgers, consensus mechanisms, hashing, and cryptography.", dur: "3-4 weeks",
                courses: [
                    { name: "Blockchain Basics", platform: "Coursera – SUNY", url: "https://www.coursera.org/learn/blockchain-basics" },
                    { name: "Blockchain Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Blockchain & Crypto", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/blockchain-technology" },
                    { name: "Blockchain in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Web3 & Blockchain", platform: "WsCube Tech", url: "https://www.wscubetech.com/" }
                ],
                videos: [
                    { name: "Blockchain Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=SSo_EIwHSd4" },
                    { name: "Blockchain Explained", platform: "YouTube – Simply Explained", url: "https://www.youtube.com/watch?v=SSo_EIwHSd4" },
                    { name: "Blockchain Tutorial in Hindi", platform: "YouTube – WsCube Tech", url: "https://www.youtube.com/c/wscubetech" }
                ],
                books: [
                    { name: "Mastering Bitcoin – Antonopoulos (Free Online)", url: "https://github.com/bitcoinbook/bitcoinbook" },
                    { name: "Blockchain Basics – Drescher", url: "https://www.apress.com/gp/book/9781484226032" }
                ],
                websites: [
                    { name: "Bitcoin Whitepaper – Satoshi Nakamoto", url: "https://bitcoin.org/bitcoin.pdf" },
                    { name: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/" }
                ]
            },
            {
                title: "Smart Contracts & Solidity", desc: "Write, deploy, and audit Ethereum smart contracts with Solidity.", dur: "4-5 weeks",
                courses: [
                    { name: "Ethereum & Solidity: Complete Guide", platform: "Udemy", url: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/" },
                    { name: "Smart Contracts", platform: "Coursera – SUNY", url: "https://www.coursera.org/learn/smarter-contracts" }
                ],
                videos: [
                    { name: "Solidity Full Course – 16 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=ipwxYa-F1uY" },
                    { name: "Build a DApp Tutorial", platform: "YouTube – Dapp University", url: "https://www.youtube.com/watch?v=3681ZYbDSSk" }
                ],
                books: [
                    { name: "Mastering Ethereum – Antonopoulos (Free Online)", url: "https://github.com/ethereumbook/ethereumbook" }
                ],
                websites: [
                    { name: "Solidity Official Docs", url: "https://docs.soliditylang.org/" },
                    { name: "OpenZeppelin – Secure Smart Contracts", url: "https://docs.openzeppelin.com/" }
                ]
            },
            {
                title: "DeFi, NFTs & Web3 Development", desc: "DeFi protocols, NFT minting, wallet integration with ethers.js / wagmi.", dur: "4-5 weeks",
                courses: [
                    { name: "DeFi & NFT Course", platform: "Alchemy University (Free)", url: "https://university.alchemy.com/" },
                    { name: "Web3 Bootcamp", platform: "Udemy", url: "https://www.udemy.com/course/web3-blockchain-with-smart-contracts/" }
                ],
                videos: [
                    { name: "DeFi Tutorial – Full Course", platform: "YouTube – Moralis Web3", url: "https://www.youtube.com/watch?v=ryvbnoYqBZ0" }
                ],
                books: [
                    { name: "Token Economy – Shermin Voshmgir (Free PDF)", url: "https://token.kitchen/book" }
                ],
                websites: [
                    { name: "CryptoZombies – Learn Solidity (Free)", url: "https://cryptozombies.io/" },
                    { name: "Alchemy University – Free Web3 Courses", url: "https://university.alchemy.com/" }
                ]
            }
        ]
    },
    {
        id: "python-advanced", name: "Python Advanced", cat: "Tech", color: "#3b82f6",
        steps: [
            {
                title: "OOP, Decorators & Metaclasses", desc: "Advanced Python patterns: OOP, decorators, context managers, and metaclasses.", dur: "3-4 weeks",
                courses: [
                    { name: "Advanced Python", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Python Advanced Concepts", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/advanced-python" }
                ],
                videos: [
                    { name: "Advanced Python – 6 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=HGOBQPFzWKo" },
                    { name: "Python Decorators Explained", platform: "YouTube – Corey Schafer", url: "https://www.youtube.com/watch?v=FsAPt_9Bf3U" }
                ],
                books: [
                    { name: "Fluent Python – Ramalho (O'Reilly)", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/" },
                    { name: "Python Cookbook – Beazley (O'Reilly)", url: "https://www.oreilly.com/library/view/python-cookbook-3rd/9781449357337/" }
                ],
                websites: [
                    { name: "Real Python – Advanced Tutorials", url: "https://realpython.com/" },
                    { name: "Python Docs – Advanced Topics", url: "https://docs.python.org/3/" },
                    { name: "GeeksforGeeks – Python", url: "https://www.geeksforgeeks.org/python-programming-language/" },
                    { name: "NPTEL – Python Courses", url: "https://nptel.ac.in/courses/106106145" }
                ]
            },
            {
                title: "Async Python & Concurrency", desc: "asyncio, threading, multiprocessing, aiohttp, and concurrent programming.", dur: "3-4 weeks",
                courses: [
                    { name: "Async Python", platform: "Udemy", url: "https://www.udemy.com/course/asyncio-in-python/" }
                ],
                videos: [
                    { name: "Async Python Full Tutorial", platform: "YouTube – Tech with Tim", url: "https://www.youtube.com/watch?v=t5Bo1Je9EmE" }
                ],
                books: [
                    { name: "Using Asyncio in Python – Caleb Hattingh (O'Reilly)", url: "https://www.oreilly.com/library/view/using-asyncio-in/9781492075325/" }
                ],
                websites: [
                    { name: "Python asyncio Docs", url: "https://docs.python.org/3/library/asyncio.html" }
                ]
            },
            {
                title: "APIs, Packaging & Testing", desc: "FastAPI/Flask, PyPI packaging, pytest, and CI for Python projects.", dur: "3-4 weeks",
                courses: [
                    { name: "FastAPI Full Course", platform: "Udemy", url: "https://www.udemy.com/course/fastapi-the-complete-course/" },
                    { name: "Python Testing", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-unit-testing" }
                ],
                videos: [
                    { name: "FastAPI Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=0sOvCWFmrtA" }
                ],
                books: [
                    { name: "Architecture Patterns with Python – Percival (Free Online)", url: "https://www.cosmicpython.com/" }
                ],
                websites: [
                    { name: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
                    { name: "pytest Docs", url: "https://docs.pytest.org/en/stable/" }
                ]
            }
        ]
    },
    {
        id: "java", name: "Java Development", cat: "Tech", color: "#f59e0b",
        steps: [
            {
                title: "Java Fundamentals", desc: "Data types, OOP, collections, and exception handling.", dur: "4-5 weeks",
                courses: [
                    { name: "Java Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Java Programming", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/java-programming" },
                    { name: "Object Oriented Java (Duke)", platform: "Coursera", url: "https://www.coursera.org/specializations/object-oriented-programming" },
                    { name: "Java in Hindi Full Course", platform: "CodeWithHarry", url: "https://www.codewithharry.com/tutorial/java/" },
                    { name: "Java DSA Course", platform: "Apna College (Free)", url: "https://www.youtube.com/c/ApnaCollegeOfficial" },
                    { name: "Programming in Java", platform: "NPTEL", url: "https://nptel.ac.in/courses/106105191" }
                ],
                videos: [
                    { name: "Java Full Course – 12 Hours", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=A74TOX803D0" },
                    { name: "Java Full Course Hindi", platform: "YouTube – CodeWithHarry", url: "https://www.youtube.com/watch?v=rZ41y93P2Qo" },
                    { name: "Java + DSA Playlist", platform: "YouTube – Apna College", url: "https://www.youtube.com/watch?v=fis26HvvDII" }
                ],
                books: [
                    { name: "Head First Java – Sierra & Bates", url: "https://www.oreilly.com/library/view/head-first-java/0596009208/" },
                    { name: "Effective Java – Joshua Bloch", url: "https://www.pearson.com/en-us/subject-catalog/p/effective-java/P200000000138/9780134685991" }
                ],
                websites: [
                    { name: "Oracle Java Docs", url: "https://docs.oracle.com/en/java/" },
                    { name: "JetBrains Academy – Java", url: "https://www.jetbrains.com/academy/" }
                ]
            },
            {
                title: "Spring Boot & Microservices", desc: "Spring Boot, REST APIs, Spring Security, JPA, and microservices.", dur: "5-6 weeks",
                courses: [
                    { name: "Spring Boot Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Spring Boot & Microservices", platform: "Udemy", url: "https://www.udemy.com/course/spring-boot-tutorial-for-beginners/" }
                ],
                videos: [
                    { name: "Spring Boot Full Course", platform: "YouTube – Amigoscode", url: "https://www.youtube.com/watch?v=9SGDpanrc8U" }
                ],
                books: [
                    { name: "Spring Boot in Action – Walls", url: "https://www.manning.com/books/spring-boot-in-action" }
                ],
                websites: [
                    { name: "Spring.io Guides", url: "https://spring.io/guides" }
                ]
            },
            {
                title: "Oracle Java Certifications", desc: "OCA / OCP certification prep, JVM internals and performance tuning.", dur: "4-5 weeks",
                courses: [
                    { name: "Oracle Java SE 17 Certification", platform: "Oracle", url: "https://education.oracle.com/java-se-17-developer" },
                    { name: "Oracle Java Associate (OCA)", platform: "Oracle", url: "https://education.oracle.com/java-se-11-programmer-i" }
                ],
                videos: [
                    { name: "Java Certification Full Study Guide", platform: "YouTube – Tim Buchalka", url: "https://www.youtube.com/watch?v=grEKMHGYyns" }
                ],
                books: [
                    { name: "OCA Oracle Java SE 8 Programmer – Boyarsky (Sybex)", url: "https://www.wiley.com/en-us/OCA+Oracle+Certified+Associate+Java+SE+8+Programmer+I+Study+Guide-p-9781118957400" }
                ],
                websites: [
                    { name: "Oracle Certification Paths", url: "https://education.oracle.com/certification" }
                ]
            }
        ]
    },
    {
        id: "power-bi", name: "Power BI & Data Visualization", cat: "Business", color: "#0ea5e9",
        steps: [
            {
                title: "Excel & Data Fundamentals", desc: "Pivot tables, VLOOKUP, data cleaning, and Power Query in Excel.", dur: "3-4 weeks",
                courses: [
                    { name: "Excel for Data Analysis", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/ms-excel-for-data-analysis" },
                    { name: "Data Analysis with Excel", platform: "Coursera – Microsoft", url: "https://www.coursera.org/learn/data-analysis-with-excel" }
                ],
                videos: [
                    { name: "Excel Full Course for Beginners", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=Vl0H-qTclOg" }
                ],
                books: [
                    { name: "Microsoft Excel 2021 Bible – Walkenbach", url: "https://www.wiley.com/en-us/Microsoft+Excel+2019+Bible-p-9781119514787" }
                ],
                websites: [
                    { name: "Microsoft Learn – Excel", url: "https://learn.microsoft.com/en-us/training/browse/?products=office-excel" }
                ]
            },
            {
                title: "Power BI Desktop", desc: "DAX formulas, data modeling, interactive dashboards, and reports.", dur: "4-5 weeks",
                courses: [
                    { name: "Microsoft Power BI Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Power BI for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/power-bi-tutorial" },
                    { name: "Power BI Data Analyst (PL-300)", platform: "Microsoft Learn (Free)", url: "https://learn.microsoft.com/en-us/training/courses/pl-300t00" },
                    { name: "Power BI in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Data Analytics", platform: "NPTEL – IIT Madras", url: "https://nptel.ac.in/courses/106106198" }
                ],
                videos: [
                    { name: "Power BI Full Course", platform: "YouTube – Guy in a Cube", url: "https://www.youtube.com/watch?v=AGrl-H87pRU" },
                    { name: "Power BI Full Course Hindi", platform: "YouTube – WsCube Tech", url: "https://www.youtube.com/c/wscubetech" },
                    { name: "Tableau Tutorial in Hindi", platform: "YouTube – Krish Naik", url: "https://www.youtube.com/user/krishnaik06" }
                ],
                books: [
                    { name: "The Definitive Guide to DAX – Ferrari", url: "https://www.microsoftpressstore.com/store/definitive-guide-to-dax-9781509306978" }
                ],
                websites: [
                    { name: "Microsoft Power BI Docs", url: "https://docs.microsoft.com/en-us/power-bi/" },
                    { name: "SQLBI – DAX Tutorials (Free)", url: "https://www.sqlbi.com/" }
                ]
            },
            {
                title: "Tableau & Advanced Visualization", desc: "Tableau Desktop, LOD expressions, and storytelling with data.", dur: "3-4 weeks",
                courses: [
                    { name: "Tableau Desktop Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Tableau for Beginners", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/tableau-for-beginners" }
                ],
                videos: [
                    { name: "Tableau Full Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=TPMlZxRRaBQ" }
                ],
                books: [
                    { name: "Storytelling with Data – Cole Nussbaumer Knaflic", url: "https://www.storytellingwithdata.com/book" }
                ],
                websites: [
                    { name: "Tableau Public Gallery", url: "https://public.tableau.com/app/discover" },
                    { name: "Kaggle – Data Visualization Course", url: "https://www.kaggle.com/learn/data-visualization" }
                ]
            }
        ]
    },
    {
        id: "photography", name: "Photography", cat: "Creative", color: "#ec4899",
        steps: [
            {
                title: "Camera Basics & Exposure Triangle", desc: "ISO, aperture, shutter speed, white balance, and camera modes.", dur: "2-3 weeks",
                courses: [
                    { name: "Photography for Beginners", platform: "Udemy", url: "https://www.udemy.com/course/photography-masterclass-complete-guide-to-photography/" },
                    { name: "Digital Photography Basics", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/photography-basics" },
                    { name: "Photography in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Camera Settings Tutorial", platform: "Internshala Trainings (Free)", url: "https://trainings.internshala.com/" }
                ],
                videos: [
                    { name: "Photography Basics Full Course", platform: "YouTube – Tony & Chelsea Northrup", url: "https://www.youtube.com/watch?v=V7z7BAZdt2M" }
                ],
                books: [
                    { name: "Understanding Exposure – Bryan Peterson", url: "https://www.amazon.com/Understanding-Exposure-Fourth-Photographs-Camera/dp/1607748509" }
                ],
                websites: [
                    { name: "Cambridge in Colour – Photography Tutorials", url: "https://www.cambridgeincolour.com/tutorials.htm" }
                ]
            },
            {
                title: "Composition & Lighting", desc: "Rule of thirds, leading lines, natural & studio lighting techniques.", dur: "3-4 weeks",
                courses: [
                    { name: "Photography Composition", platform: "Coursera – Michigan State", url: "https://www.coursera.org/learn/photography-basics" }
                ],
                videos: [
                    { name: "Composition & Lighting Tutorial", platform: "YouTube – Peter McKinnon", url: "https://www.youtube.com/watch?v=CGxUCmQo9aQ" }
                ],
                books: [
                    { name: "The Photographer's Eye – Michael Freeman", url: "https://www.amazon.com/Photographers-Eye-Composition-Design-Digital/dp/0240809343" }
                ],
                websites: [
                    { name: "500px – Photography Community", url: "https://500px.com/" }
                ]
            },
            {
                title: "Lightroom & Post-Processing", desc: "RAW editing, colour grading, retouching, and export workflows.", dur: "3-4 weeks",
                courses: [
                    { name: "Adobe Lightroom Course", platform: "Simplilearn", url: "https://www.simplilearn.com/" }
                ],
                videos: [
                    { name: "Lightroom Full Tutorial", platform: "YouTube – Becki & Chris", url: "https://www.youtube.com/watch?v=5KGp3ioHn8E" }
                ],
                books: [
                    { name: "Adobe Lightroom Classroom in a Book (Adobe Press)", url: "https://www.adobepress.com/store/adobe-photoshop-lightroom-classic-classroom-in-a-book-9780137565191" }
                ],
                websites: [
                    { name: "Adobe Lightroom Tutorials Hub", url: "https://helpx.adobe.com/lightroom/tutorials.html" }
                ]
            }
        ]
    },
    {
        id: "content-writing", name: "Content Writing & Copywriting", cat: "Business", color: "#14b8a6",
        steps: [
            {
                title: "Writing Fundamentals", desc: "Grammar, clarity, structure, tone of voice, and reader psychology.", dur: "2-3 weeks",
                courses: [
                    { name: "Writing Skills for Engineers (Duke)", platform: "Coursera", url: "https://www.coursera.org/learn/writing-for-engineers" },
                    { name: "Content Writing Course", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/content-writing" },
                    { name: "Content Writing in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Blogging & SEO Writing", platform: "Internshala Trainings (Free)", url: "https://trainings.internshala.com/" }
                ],
                videos: [
                    { name: "Content Writing Tutorial", platform: "YouTube – Neil Patel", url: "https://www.youtube.com/watch?v=a2zqmhFrj0Q" }
                ],
                books: [
                    { name: "On Writing Well – William Zinsser", url: "https://www.harpercollins.com/products/on-writing-well-william-zinsser" },
                    { name: "Bird by Bird – Anne Lamott", url: "https://www.penguinrandomhouse.com/books/97395/bird-by-bird-by-anne-lamott/" }
                ],
                websites: [
                    { name: "Grammarly Blog – Writing Tips", url: "https://www.grammarly.com/blog/" }
                ]
            },
            {
                title: "Copywriting & Persuasion", desc: "Sales copy, email sequences, landing pages, AIDA framework.", dur: "3-4 weeks",
                courses: [
                    { name: "Copywriting Masterclass", platform: "Udemy", url: "https://www.udemy.com/course/successful-copywriting/" },
                    { name: "HubSpot Content Marketing", platform: "HubSpot Academy (Free)", url: "https://academy.hubspot.com/courses/content-marketing" }
                ],
                videos: [
                    { name: "Copywriting Tutorial for Beginners", platform: "YouTube – Alex Cattoni", url: "https://www.youtube.com/watch?v=FNi4GVUF_CY" }
                ],
                books: [
                    { name: "The Copywriter's Handbook – Robert Bly", url: "https://www.harpercollins.com/products/the-copywriters-handbook-third-edition-robert-w-bly" }
                ],
                websites: [
                    { name: "Copyhackers – Free Copywriting Resources", url: "https://copyhackers.com/" }
                ]
            }
        ]
    },
    {
        id: "project-management", name: "Project Management", cat: "Business", color: "#6366f1",
        steps: [
            {
                title: "PM Fundamentals & Methodologies", desc: "Waterfall, Agile, Scrum, Kanban, and the project lifecycle.", dur: "3-4 weeks",
                courses: [
                    { name: "Project Management Certificate – Google", platform: "Coursera (Google)", url: "https://www.coursera.org/professional-certificates/google-project-management" },
                    { name: "PMP Certification Training", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Agile Project Management", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/agile-project-management" },
                    { name: "PMP Certification Training", platform: "NPTEL", url: "https://nptel.ac.in/courses/110106064" },
                    { name: "Project Management in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" }
                ],
                videos: [
                    { name: "Project Management Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=cDQLME5GBLY" }
                ],
                books: [
                    { name: "A Guide to the Project Management Body of Knowledge (PMBOK Guide)", url: "https://www.pmi.org/pmbok-guide-standards/foundational/pmbok" },
                    { name: "The Lean Startup – Eric Ries", url: "http://theleanstartup.com/" }
                ],
                websites: [
                    { name: "PMI – Free Learning Resources", url: "https://www.pmi.org/learning/training-development" },
                    { name: "Atlassian – Agile Guide", url: "https://www.atlassian.com/agile" }
                ]
            },
            {
                title: "Scrum Master & Agile Tools", desc: "Sprint planning, retrospectives, JIRA, Trello, and SAFe.", dur: "3-4 weeks",
                courses: [
                    { name: "Certified ScrumMaster (CSM)", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Agile Scrum in Practice", platform: "Udemy", url: "https://www.udemy.com/course/agile-fundamentals-including-scrum-and-kanban/" }
                ],
                videos: [
                    { name: "Scrum Full Course", platform: "YouTube – Agile Training", url: "https://www.youtube.com/watch?v=2Vt7Ik8Ublw" }
                ],
                books: [
                    { name: "Scrum: The Art of Doing Twice the Work – Jeff Sutherland", url: "https://www.scruminc.com/books/" }
                ],
                websites: [
                    { name: "Scrum.org – Free Guides", url: "https://www.scrum.org/resources" },
                    { name: "JIRA Tutorials – Atlassian", url: "https://www.atlassian.com/software/jira/guides" }
                ]
            },
            {
                title: "PMP Exam & Risk Management", desc: "Risk identification, mitigation strategies, cost management, and PMP exam tips.", dur: "4-5 weeks",
                courses: [
                    { name: "PMP Exam Prep", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Project Risk Management", platform: "Coursera – UC Irvine", url: "https://www.coursera.org/learn/project-risk-management" }
                ],
                videos: [
                    { name: "PMP Certification Full Training", platform: "YouTube – Joseph Phillips", url: "https://www.youtube.com/watch?v=GMa5QSVaRsA" }
                ],
                books: [
                    { name: "PMP Exam Prep – Rita Mulcahy", url: "https://rmcls.com/pmp-exam-prep/" }
                ],
                websites: [
                    { name: "PMI Certification Portal", url: "https://www.pmi.org/certifications" }
                ]
            }
        ]
    },
    {
        id: "linux-admin", name: "Linux System Administration", cat: "Engineering", color: "#22c55e",
        steps: [
            {
                title: "Linux CLI & File System", desc: "Navigation, file permissions, processes, and shell scripting basics.", dur: "3-4 weeks",
                courses: [
                    { name: "Linux Administration", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Linux Fundamentals", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/linux-fundamentals" },
                    { name: "Linux Unhatched", platform: "Cisco (NetAcad)", url: "https://www.netacad.com/courses/os-it/ndg-linux-unhatched" },
                    { name: "Linux in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "Linux Fundamentals", platform: "NPTEL", url: "https://nptel.ac.in/courses/117106112" }
                ],
                videos: [
                    { name: "Linux Command Line Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc" }
                ],
                books: [
                    { name: "The Linux Command Line – Shotts (Free Online)", url: "https://linuxcommand.org/tlcl.php" }
                ],
                websites: [
                    { name: "Linux Journey – Interactive Lessons", url: "https://linuxjourney.com/" },
                    { name: "Cisco NetAcad – Linux Courses", url: "https://www.netacad.com/courses/os-it" },
                    { name: "NPTEL – Computer Architecture & Linux", url: "https://nptel.ac.in/courses/117106112" },
                    { name: "GeeksforGeeks – Linux Commands", url: "https://www.geeksforgeeks.org/linux-commands/" }
                ]
            },
            {
                title: "Shell Scripting & Automation", desc: "Bash scripting, cron jobs, sed/awk, and system automation.", dur: "3-4 weeks",
                courses: [
                    { name: "Shell Scripting & Bash", platform: "Udemy", url: "https://www.udemy.com/course/linux-shell-scripting-projects/" }
                ],
                videos: [
                    { name: "Bash Scripting Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4" }
                ],
                books: [
                    { name: "Learning the bash Shell – Newham (O'Reilly)", url: "https://www.oreilly.com/library/view/learning-the-bash/0596009658/" }
                ],
                websites: [
                    { name: "Explain Shell – Command Explainer", url: "https://explainshell.com/" }
                ]
            },
            {
                title: "Linux Networking & LPIC Certification", desc: "TCP/IP on Linux, firewalld, OpenSSH, NFS, and LPIC exam prep.", dur: "4-5 weeks",
                courses: [
                    { name: "LPIC-1 Linux Administrator", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "CompTIA Linux+", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/linux-for-beginners" }
                ],
                videos: [
                    { name: "LPIC-1 Exam 101 Full Course", platform: "YouTube – NetworkChuck", url: "https://www.youtube.com/watch?v=bYRfRoiuyeE" }
                ],
                books: [
                    { name: "Linux Bible – Christopher Negus", url: "https://www.wiley.com/en-us/Linux+Bible%2C+10th+Edition-p-9781119578888" }
                ],
                websites: [
                    { name: "Linux Foundation Training (Free Courses)", url: "https://training.linuxfoundation.org/resources/" }
                ]
            }
        ]
    },
    {
        id: "mlops", name: "MLOps & AI Engineering", cat: "Tech", color: "#818cf8",
        steps: [
            {
                title: "ML Pipelines & Experiment Tracking", desc: "MLflow, DVC, feature stores, and reproducible experiments.", dur: "4-5 weeks",
                courses: [
                    { name: "MLOps Specialization", platform: "Coursera (deeplearning.ai)", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" },
                    { name: "MLOps Fundamentals", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-mlops" },
                    { name: "MLOps in Hindi", platform: "Campus X", url: "https://www.youtube.com/@campusx-official" },
                    { name: "ML Engineering", platform: "Analytics Vidhya", url: "https://www.analyticsvidhya.com/" }
                ],
                videos: [
                    { name: "MLOps Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=GrjrB3X7S1U" }
                ],
                books: [
                    { name: "Designing Machine Learning Systems – Huyen (O'Reilly)", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" }
                ],
                websites: [
                    { name: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html" },
                    { name: "DVC – Data Version Control", url: "https://dvc.org/doc" }
                ]
            },
            {
                title: "Model Serving & Monitoring", desc: "BentoML, TorchServe, Seldon, drift detection, and A/B testing for ML.", dur: "4-5 weeks",
                courses: [
                    { name: "Machine Learning Engineering", platform: "Coursera (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" }
                ],
                videos: [
                    { name: "Deploying ML Models Tutorial", platform: "YouTube – Abhishek Thakur", url: "https://www.youtube.com/watch?v=O0hD5JiG47M" }
                ],
                books: [
                    { name: "Practical MLOps – Gift & Deza (O'Reilly)", url: "https://www.oreilly.com/library/view/practical-mlops/9781098103002/" }
                ],
                websites: [
                    { name: "Evidently AI – Monitoring (Free)", url: "https://www.evidentlyai.com/" },
                    { name: "Weights & Biases – ML Platform", url: "https://wandb.ai/" }
                ]
            }
        ]
    },
    {
        id: "product-management", name: "Product Management", cat: "Business", color: "#f97316",
        steps: [
            {
                title: "Product Thinking & Discovery", desc: "User research, PRDs, jobs-to-be-done, OKRs, and prioritization.", dur: "4-5 weeks",
                courses: [
                    { name: "Product Manager Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Product Management", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/product-management" },
                    { name: "Digital Product Management (UVA)", platform: "Coursera", url: "https://www.coursera.org/specializations/uva-darden-digital-product-management" },
                    { name: "Product Management in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Business Strategy", platform: "IIM Bangalore (Coursera)", url: "https://www.coursera.org/learn/iim-bangalore-business-strategy" }
                ],
                videos: [
                    { name: "Product Management Full Course", platform: "YouTube – Product School", url: "https://www.youtube.com/watch?v=FIsjJlRtaWY" }
                ],
                books: [
                    { name: "Inspired – Marty Cagan (Silicon Valley Product Group)", url: "https://svpg.com/inspired-how-to-create-products-customers-love/" },
                    { name: "Continuous Discovery Habits – Teresa Torres", url: "https://www.producttalk.org/2021/05/continuous-discovery-habits/" }
                ],
                websites: [
                    { name: "Lenny's Newsletter – PM Resources", url: "https://www.lennysnewsletter.com/" },
                    { name: "Product School – Free Resources", url: "https://productschool.com/resources" }
                ]
            },
            {
                title: "Roadmaps, Metrics & Launch", desc: "Roadmap creation, KPI frameworks, GTM strategy, and growth loops.", dur: "4-5 weeks",
                courses: [
                    { name: "Product Analytics", platform: "Coursera – Duke", url: "https://www.coursera.org/learn/analytics-for-decision-making" },
                    { name: "Product Launch Essentials", platform: "Udemy", url: "https://www.udemy.com/course/product-management/" }
                ],
                videos: [
                    { name: "How to Build a Product Roadmap", platform: "YouTube – Lenny Rachitsky", url: "https://www.youtube.com/watch?v=sX12mBbS6ug" }
                ],
                books: [
                    { name: "Measure What Matters – John Doerr (OKRs)", url: "https://www.whatmatters.com/the-book" }
                ],
                websites: [
                    { name: "Amplitude – Free Analysis Courses", url: "https://academy.amplitude.com/" }
                ]
            }
        ]
    },
    /* ── NEW DOMAINS BATCH 2 ── */
    {
        id: "3d-modeling", name: "3D Modeling & Blender", cat: "Creative", color: "#f97316",
        steps: [
            {
                title: "Blender Fundamentals", desc: "Interface, navigation, modelling, materials, and rendering basics.", dur: "4-5 weeks",
                courses: [
                    { name: "Blender 3D – Complete Beginner's Guide", platform: "Udemy", url: "https://www.udemy.com/course/blendertutorial/" },
                    { name: "Blender for 3D Printing", platform: "Coursera", url: "https://www.coursera.org/learn/blender-3d-printing" },
                    { name: "Blender in Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "3D Design for Beginners", platform: "Internshala Trainings (Free)", url: "https://trainings.internshala.com/" }
                ],
                videos: [
                    { name: "Blender Beginner Tutorial Series", platform: "YouTube – Blender Guru", url: "https://www.youtube.com/watch?v=nIoXOplUvAw" },
                    { name: "Blender Donut Tutorial", platform: "YouTube – Blender Guru", url: "https://www.youtube.com/watch?v=TPrnSACiTJ4" }
                ],
                books: [
                    { name: "Blender 3D By Example – Oscar Baechler (Packt)", url: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" }
                ],
                websites: [
                    { name: "Blender Official Tutorials", url: "https://www.blender.org/support/tutorials/" },
                    { name: "Blender Artists Community", url: "https://blenderartists.org/" }
                ]
            },
            {
                title: "Sculpting & Texturing", desc: "Digital sculpting, UV unwrapping, PBR texturing, and Substance Painter.", dur: "4-5 weeks",
                courses: [
                    { name: "Blender Sculpting Course", platform: "Udemy", url: "https://www.udemy.com/course/blender-character-creator-v2/" }
                ],
                videos: [
                    { name: "Sculpting in Blender – Full Tutorial", platform: "YouTube – FlippedNormals", url: "https://www.youtube.com/watch?v=L3XtAFUWNuk" }
                ],
                books: [
                    { name: "The Complete Guide to Blender Graphics – John M Blain", url: "https://www.routledge.com/The-Complete-Guide-to-Blender-Graphics-Computer-Modeling-Animation/Blain/p/book/9781032041018" }
                ],
                websites: [
                    { name: "Sketchfab – 3D Model Gallery", url: "https://sketchfab.com/" }
                ]
            },
            {
                title: "Animation & Rendering", desc: "Rigging, keyframe animation, rendering with Cycles/EEVEE, compositing.", dur: "4-5 weeks",
                courses: [
                    { name: "Blender Animation & Rigging", platform: "Udemy", url: "https://www.udemy.com/course/the-ultimate-guide-to-get-a-job-in-the-film-industry/" }
                ],
                videos: [
                    { name: "Blender Animation Tutorial", platform: "YouTube – CG Geek", url: "https://www.youtube.com/watch?v=zp6kCe5Kmf4" }
                ],
                books: [
                    { name: "Blender for Visual Effects – Sam Vila", url: "https://www.routledge.com/Blender-for-Visual-Effects/Vila/p/book/9781032057323" }
                ],
                websites: [
                    { name: "Blender Cloud – Training & Assets", url: "https://studio.blender.org/" }
                ]
            }
        ]
    },
    {
        id: "music-production", name: "Music Production", cat: "Creative", color: "#a855f7",
        steps: [
            {
                title: "Music Theory & DAW Basics", desc: "Scales, chords, rhythm, and getting started with a DAW (FL Studio / Ableton).", dur: "3-4 weeks",
                courses: [
                    { name: "Music Theory for Beginners", platform: "Coursera – Berklee", url: "https://www.coursera.org/learn/musicianship-specialization" },
                    { name: "Music Production Basics", platform: "Udemy", url: "https://www.udemy.com/course/music-production-in-logic-pro-x-the-complete-guide/" },
                    { name: "Music Production & DJing", platform: "Internshala Trainings (Free)", url: "https://trainings.internshala.com/" },
                    { name: "Indian Classical Music Online", platform: "ITC SRA (Free)", url: "https://www.itcsra.org/" }
                ],
                videos: [
                    { name: "Music Theory Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=wuAi3pA71m0" },
                    { name: "FL Studio Beginner Tutorial", platform: "YouTube – In The Mix", url: "https://www.youtube.com/watch?v=yDFvSSx2pHo" }
                ],
                books: [
                    { name: "Music Theory for Computer Musicians – Michael Hewitt", url: "https://cengage.com/c/music-theory-for-computer-musicians-1e-hewitt/9781598635874" }
                ],
                websites: [
                    { name: "musictheory.net – Free Lessons", url: "https://www.musictheory.net/" }
                ]
            },
            {
                title: "Beat Making & Sound Design", desc: "Drums, mixing stems, synthesis, VST plugins, and sample libraries.", dur: "4-5 weeks",
                courses: [
                    { name: "Beat Making in FL Studio", platform: "Udemy", url: "https://www.udemy.com/course/fl-studio-music-production/" }
                ],
                videos: [
                    { name: "Sound Design Tutorial – Full Course", platform: "YouTube – Busy Works Beats", url: "https://www.youtube.com/watch?v=4Jou5rEdW6E" }
                ],
                books: [
                    { name: "Making Music – Dennis DeSantis (Ableton)", url: "https://makingmusic.ableton.com/" }
                ],
                websites: [
                    { name: "Splice – Samples & Plugins", url: "https://splice.com/" },
                    { name: "Ableton Learning Music (Free)", url: "https://learningmusic.ableton.com/" }
                ]
            }
        ]
    },
    {
        id: "ecommerce", name: "E-Commerce & Shopify", cat: "Business", color: "#10b981",
        steps: [
            {
                title: "E-Commerce Fundamentals", desc: "Business models (D2C, dropshipping, marketplace), niche research, and logistics.", dur: "2-3 weeks",
                courses: [
                    { name: "E-Commerce Course", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-e-commerce" },
                    { name: "E-Commerce & Social Media Marketing", platform: "Coursera – UCDavis", url: "https://www.coursera.org/learn/ecommerce-marketing" },
                    { name: "Amazon Selling in India", platform: "Amazon Seller University (Free)", url: "https://sell.amazon.in/learn" },
                    { name: "Meesho Dropshipping Guide", platform: "Meesho Supply (Free)", url: "https://supplier.meesho.com/" }
                ],
                videos: [
                    { name: "Start an E-Commerce Business from Scratch", platform: "YouTube – Shopify", url: "https://www.youtube.com/watch?v=lDkH1B1Fw5s" }
                ],
                books: [
                    { name: "The E-Myth Revisited – Michael E. Gerber", url: "https://www.harpercollins.com/products/the-e-myth-revisited-michael-e-gerber" }
                ],
                websites: [
                    { name: "Shopify Free Learning", url: "https://www.shopify.com/learn" }
                ]
            },
            {
                title: "Shopify Store Setup & Marketing", desc: "Theme customisation, product pages, SEO, email marketing, and paid ads.", dur: "3-4 weeks",
                courses: [
                    { name: "Shopify Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Shopify Dropshipping", platform: "Udemy", url: "https://www.udemy.com/course/private-labelling-selling-on-amazon/" }
                ],
                videos: [
                    { name: "Shopify Tutorial for Beginners", platform: "YouTube – Shopify", url: "https://www.youtube.com/watch?v=lDkH1B1Fw5s" }
                ],
                books: [
                    { name: "DotCom Secrets – Russell Brunson", url: "https://dotcomsecrets.com/" }
                ],
                websites: [
                    { name: "Shopify Partner Academy (Free)", url: "https://www.shopify.com/partners/academy" },
                    { name: "Klaviyo Academy – Email Marketing (Free)", url: "https://academy.klaviyo.com/" }
                ]
            }
        ]
    },
    {
        id: "social-media", name: "Social Media & Content Creation", cat: "Business", color: "#e879f9",
        steps: [
            {
                title: "Platform Strategy & Content Planning", desc: "Instagram, TikTok, YouTube, LinkedIn content strategy and algorithm insights.", dur: "2-3 weeks",
                courses: [
                    { name: "Social Media Marketing", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/social-media-marketing" },
                    { name: "Social Media Marketing Specialization", platform: "Coursera – Northwestern", url: "https://www.coursera.org/specializations/social-media-marketing" },
                    { name: "Meta Social Media Marketing Certificate", platform: "Coursera (Meta)", url: "https://www.coursera.org/professional-certificates/facebook-social-media-marketing" },
                    { name: "Social Media Marketing Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" },
                    { name: "Instagram & YouTube Growth", platform: "Internshala Trainings (Free)", url: "https://trainings.internshala.com/" }
                ],
                videos: [
                    { name: "Social Media Marketing Full Course", platform: "YouTube – HubSpot", url: "https://www.youtube.com/watch?v=MIUbXYAlw-0" }
                ],
                books: [
                    { name: "Jab, Jab, Jab, Right Hook – Gary Vaynerchuk", url: "https://www.harpercollins.com/products/jab-jab-jab-right-hook-gary-vaynerchuk" }
                ],
                websites: [
                    { name: "HubSpot Social Media Certification (Free)", url: "https://academy.hubspot.com/courses/social-media" }
                ]
            },
            {
                title: "Video Editing & Short-Form Content", desc: "CapCut, Premiere Pro basics, hooks, captions, and viral reels.", dur: "3-4 weeks",
                courses: [
                    { name: "Premiere Pro Course", platform: "Udemy", url: "https://www.udemy.com/course/adobe-premiere-pro-video-editing/" }
                ],
                videos: [
                    { name: "CapCut Tutorial for Beginners", platform: "YouTube – Think Media", url: "https://www.youtube.com/watch?v=PjlCE_oX7wA" }
                ],
                books: [
                    { name: "YouTube Secrets – Sean Cannell & Benji Travis", url: "https://www.amazon.com/YouTube-Secrets-Ultimate-Following-Influencer/dp/1628655550" }
                ],
                websites: [
                    { name: "Creator Academy – YouTube (Free)", url: "https://creatoracademy.youtube.com/" }
                ]
            }
        ]
    },
    {
        id: "english-communication", name: "English Communication", cat: "Business", color: "#38bdf8",
        steps: [
            {
                title: "Grammar & Writing", desc: "Business writing, professional emails, punctuation, and clarity.", dur: "2-3 weeks",
                courses: [
                    { name: "English for Career Development", platform: "Coursera – UPenn", url: "https://www.coursera.org/learn/careerdevelopment" },
                    { name: "Business English", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/business-english" },
                    { name: "Spoken English in Hindi", platform: "Let's Talk English (Free)", url: "https://www.youtube.com/@letstalk" },
                    { name: "English for Indian Professionals", platform: "British Council India", url: "https://www.britishcouncil.in/" }
                ],
                videos: [
                    { name: "English Grammar Full Course", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=9bZkp7q19f0" }
                ],
                books: [
                    { name: "The Elements of Style – Strunk & White", url: "https://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X" }
                ],
                websites: [
                    { name: "British Council – Free English lessons", url: "https://learnenglish.britishcouncil.org/" }
                ]
            },
            {
                title: "Speaking & Presentation Skills", desc: "Public speaking, storytelling, STAR method for interviews, and negotiations.", dur: "3-4 weeks",
                courses: [
                    { name: "Public Speaking", platform: "Coursera – University of Washington", url: "https://www.coursera.org/learn/public-speaking" },
                    { name: "Improve Your English", platform: "Udemy", url: "https://www.udemy.com/course/the-master-english-course-from-zero-to-native-speakers/" }
                ],
                videos: [
                    { name: "Public Speaking Tips – TED Talks", platform: "YouTube – TED", url: "https://www.youtube.com/watch?v=i0a61wFaF8A" }
                ],
                books: [
                    { name: "Talk Like TED – Carmine Gallo", url: "https://www.carminegallo.com/books/talk-like-ted/" }
                ],
                websites: [
                    { name: "Toastmasters – Free Speaking Resources", url: "https://www.toastmasters.org/education" }
                ]
            }
        ]
    },
    {
        id: "robotics", name: "Robotics & Automation", cat: "Engineering", color: "#0ea5e9",
        steps: [
            {
                title: "Robotics Fundamentals", desc: "Kinematics, sensors, actuators, embedded systems, and ROS basics.", dur: "4-5 weeks",
                courses: [
                    { name: "Robotics Specialization", platform: "Coursera – Penn", url: "https://www.coursera.org/specializations/robotics" },
                    { name: "Robotics Certification", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Robotics & Automation", platform: "NPTEL – IIT Kharagpur", url: "https://nptel.ac.in/courses/112104236" },
                    { name: "ROS in Hindi", platform: "Articulated Robotics India", url: "https://www.youtube.com/watch?v=wjt7OTi3QfE" }
                ],
                videos: [
                    { name: "Robotics Tutorial", platform: "YouTube – Articulated Robotics", url: "https://www.youtube.com/watch?v=wjt7OTi3QfE" }
                ],
                books: [
                    { name: "Introduction to Robotics – Craig (Pearson)", url: "https://www.pearson.com/en-us/subject-catalog/p/introduction-to-robotics-mechanics-and-control/P200000003348" }
                ],
                websites: [
                    { name: "ROS Wiki – Robot Operating System", url: "https://wiki.ros.org/" }
                ]
            },
            {
                title: "Automation & Industrial Robotics", desc: "PLC programming, SCADA, ABB/KUKA robots, and process automation.", dur: "4-5 weeks",
                courses: [
                    { name: "Industrial Automation", platform: "Coursera – Georgia Tech", url: "https://www.coursera.org/learn/industrial-automation" }
                ],
                videos: [
                    { name: "PLC Programming Tutorial", platform: "YouTube – RealPars", url: "https://www.youtube.com/watch?v=tQEDqOTg0eM" }
                ],
                books: [
                    { name: "Industrial Automation & Robotics – Gupta", url: "https://www.amazon.com/Industrial-Automation-Robotics-Introduction/dp/0763773131" }
                ],
                websites: [
                    { name: "RealPars – Free PLC Tutorials", url: "https://realpars.com/" }
                ]
            }
        ]
    },
    {
        id: "healthcare-it", name: "Healthcare IT", cat: "Science", color: "#34d399",
        steps: [
            {
                title: "Health Informatics Fundamentals", desc: "EHR systems, HL7, FHIR, ICD-10 coding, and patient data management.", dur: "4-5 weeks",
                courses: [
                    { name: "Health Informatics Specialization", platform: "Coursera – Johns Hopkins", url: "https://www.coursera.org/specializations/health-informatics" },
                    { name: "Healthcare IT Foundations", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/healthcare-informatics" },
                    { name: "Healthcare Informatics India", platform: "NPTEL", url: "https://nptel.ac.in/courses/106105085" }
                ],
                videos: [
                    { name: "FHIR Tutorial for Beginners", platform: "YouTube – Firely Team", url: "https://www.youtube.com/watch?v=Mk_wKCfCZ-Q" }
                ],
                books: [
                    { name: "Health Informatics – William Hersh", url: "https://www.amazon.com/Health-Informatics-Practical-Guide-Healthcare/dp/0996759107" }
                ],
                websites: [
                    { name: "HL7 FHIR – Official Docs", url: "https://www.hl7.org/fhir/" }
                ]
            },
            {
                title: "Cybersecurity in Healthcare", desc: "HIPAA compliance, threat management, telemedicine security.", dur: "3-4 weeks",
                courses: [
                    { name: "Healthcare Cybersecurity", platform: "Coursera – Johns Hopkins", url: "https://www.coursera.org/learn/healthcare-management" }
                ],
                videos: [
                    { name: "HIPAA Compliance Course", platform: "YouTube – Compliancy Group", url: "https://www.youtube.com/watch?v=BHVp6QdLFKs" }
                ],
                books: [
                    { name: "HIPAA Compliance for Healthcare Professionals – Neel Burton", url: "https://www.amazon.com/HIPAA-Compliance-Healthcare-Neel-Burton/dp/B00WQMZ7VQ" }
                ],
                websites: [
                    { name: "HHS – HIPAA Official Resources", url: "https://www.hhs.gov/hipaa/index.html" }
                ]
            }
        ]
    },
    {
        id: "ai-ethics", name: "AI Ethics & Responsible AI", cat: "Science", color: "#f43f5e",
        steps: [
            {
                title: "AI Ethics Fundamentals", desc: "Bias, fairness, algorithmic accountability, and ethical frameworks for AI.", dur: "3-4 weeks",
                courses: [
                    { name: "AI For Everyone (Andrew Ng)", platform: "Coursera", url: "https://www.coursera.org/learn/ai-for-everyone" },
                    { name: "Ethics in AI", platform: "Great Learning", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/artificial-intelligence-for-beginners" },
                    { name: "Responsible AI Practices", platform: "Google (Coursera)", url: "https://www.coursera.org/learn/preparing-for-google-cloud-machine-learning-engineer-professional-certificate" },
                    { name: "Responsible AI", platform: "NASSCOM FutureSkills (Free)", url: "https://futureskills.nasscom.in/" }
                ],
                videos: [
                    { name: "AI Ethics – Full Lecture Series", platform: "YouTube – MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=eFjk79ykWZk" }
                ],
                books: [
                    { name: "The Alignment Problem – Brian Christian", url: "https://brianchristian.org/the-alignment-problem/" },
                    { name: "Weapons of Math Destruction – Cathy O'Neil", url: "https://mathbabe.org/book/" }
                ],
                websites: [
                    { name: "AI Now Institute – Research Papers", url: "https://ainowinstitute.org/" },
                    { name: "Google PAIR Guidebook (Free)", url: "https://pair.withgoogle.com/guidebook/" }
                ]
            },
            {
                title: "Regulation, Privacy & AI Governance", desc: "GDPR for AI, EU AI Act, model cards, data governance frameworks.", dur: "3-4 weeks",
                courses: [
                    { name: "Data Privacy Fundamentals", platform: "Coursera – FIU", url: "https://www.coursera.org/learn/data-privacy-fundamentals" }
                ],
                videos: [
                    { name: "EU AI Act Explained", platform: "YouTube – Center for AI Safety", url: "https://www.youtube.com/watch?v=Mde4uCMvqNw" }
                ],
                books: [
                    { name: "Atlas of AI – Kate Crawford", url: "https://katecrawford.net/" }
                ],
                websites: [
                    { name: "Partnership on AI – Free Resources", url: "https://partnershiponai.org/resources/" }
                ]
            }
        ]
    },
    {
        id: "nocode", name: "No-Code / Low-Code Development", cat: "Tech", color: "#84cc16",
        steps: [
            {
                title: "Bubble & Webflow", desc: "Build full-stack web apps without code using Bubble and advanced websites with Webflow.", dur: "3-4 weeks",
                courses: [
                    { name: "Bubble Academy (Free)", platform: "Bubble", url: "https://bubble.io/academy" },
                    { name: "Webflow University (Free)", platform: "Webflow", url: "https://university.webflow.com/" },
                    { name: "No-Code Tools in Hindi", platform: "WsCube Tech", url: "https://www.wscubetech.com/" }
                ],
                videos: [
                    { name: "Bubble.io Tutorial", platform: "YouTube – Coding Without Code", url: "https://www.youtube.com/watch?v=0dTEFCMgI9A" }
                ],
                books: [
                    { name: "No Code Playbook – Aaron Krall", url: "https://www.nocode.tech/book" }
                ],
                websites: [
                    { name: "Makerpad – No-Code Education", url: "https://www.makerpad.co/" }
                ]
            },
            {
                title: "Zapier, Airtable & Power Automate", desc: "Workflow automation, CRM integrations, and business process automation.", dur: "3-4 weeks",
                courses: [
                    { name: "Power Platform Fundamentals", platform: "Microsoft Learn (Free)", url: "https://learn.microsoft.com/en-us/training/paths/power-plat-fundamentals/" },
                    { name: "Airtable for Business", platform: "Udemy", url: "https://www.udemy.com/course/the-airtable-masterclass/" }
                ],
                videos: [
                    { name: "Zapier Tutorial – Full Course", platform: "YouTube – Layla at ProcessDriven", url: "https://www.youtube.com/watch?v=b9gvzpkrNf8" }
                ],
                books: [
                    { name: "Automate the Boring Stuff with Python – Sweigart (Free Online)", url: "https://automatetheboringstuff.com/" }
                ],
                websites: [
                    { name: "Zapier University (Free)", url: "https://zapier.com/resources/courses" }
                ]
            }
        ]
    },
    {
        id: "ar-vr", name: "AR / VR Development", cat: "Tech", color: "#c084fc",
        steps: [
            {
                title: "Unity & XR Fundamentals", desc: "Unity engine, XR toolkit, object interaction, and spatial UI for VR.", dur: "4-5 weeks",
                courses: [
                    { name: "AR/VR Development", platform: "Coursera – Unity", url: "https://www.coursera.org/learn/unity-vr" },
                    { name: "Unity Certified Programmer", platform: "Simplilearn", url: "https://www.simplilearn.com/" },
                    { name: "Unity Game & XR Hindi", platform: "CodeWithHarry", url: "https://www.codewithharry.com/" },
                    { name: "AR/VR in India Guide", platform: "Analytics Vidhya", url: "https://www.analyticsvidhya.com/" }
                ],
                videos: [
                    { name: "Unity VR Tutorial", platform: "YouTube – Valem Tutorials", url: "https://www.youtube.com/watch?v=yxMzAw2Sg5w" }
                ],
                books: [
                    { name: "Learning Virtual Reality – Tony Parisi (O'Reilly)", url: "https://www.oreilly.com/library/view/learning-virtual-reality/9781491922828/" }
                ],
                websites: [
                    { name: "Unity Learn – Free VR/AR Courses", url: "https://learn.unity.com/" }
                ]
            },
            {
                title: "WebXR & Spatial Computing", desc: "A-Frame, three.js, WebXR API, Apple Vision Pro, and Meta Quest development.", dur: "4-5 weeks",
                courses: [
                    { name: "WebXR Development", platform: "Udemy", url: "https://www.udemy.com/course/webxr-tutorial/" }
                ],
                videos: [
                    { name: "A-Frame WebXR Full Tutorial", platform: "YouTube – freeCodeCamp", url: "https://www.youtube.com/watch?v=zhE5VDKUQXY" }
                ],
                books: [
                    { name: "Programming 3D Applications with HTML5 – Tony Parisi (O'Reilly)", url: "https://www.oreilly.com/library/view/programming-3d-applications/9781449363918/" }
                ],
                websites: [
                    { name: "A-Frame – Web VR Framework (Free)", url: "https://aframe.io/docs/" },
                    { name: "WebXR API – MDN Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API" }
                ]
            }
        ]
    }
];


const CATEGORIES = [
    { id: "all", label: "All Domains", icon: "🌟" },
    { id: "Tech", label: "Technology", icon: "💻" },
    { id: "GovtExam", label: "Govt. Exams", icon: "🏛️" },
    { id: "Commerce", label: "Commerce", icon: "📒" },
    { id: "Arts", label: "Arts", icon: "🎭" },
    { id: "Creative", label: "Creative Arts", icon: "🎨" },
    { id: "Business", label: "Business", icon: "💼" },
    { id: "Engineering", label: "Engineering", icon: "🔧" },
    { id: "Science", label: "Science", icon: "🔬" },
    { id: "Design", label: "Design", icon: "✏️" }
];

/* ── Paid/Free Auto-Patcher (safe minimal version) ── */
(function () {
    if (typeof DOMAINS === 'undefined') return;
    var FREE = ['youtube', 'freecodecamp', 'kaggle', 'google', 'mdn', 'w3schools',
        'mongodb', 'alchemy', 'hubspot', 'linux foundation', 'fast.ai',
        'learn.microsoft', 'oracle docs', 'spring.io'];
    var PAID = ['udemy', 'simplilearn', 'edx', 'pluralsight', 'linkedin learning', 'oracle certification'];
    DOMAINS.forEach(function (domain) {
        if (!domain || !domain.steps) return;
        domain.steps.forEach(function (step) {
            if (!step) return;
            ['courses', 'videos', 'books', 'websites'].forEach(function (type) {
                if (!step[type]) return;
                step[type].forEach(function (r) {
                    if (!r || r.paid !== undefined) return;
                    var p = (r.platform || '').toLowerCase();
                    var u = (r.url || '').toLowerCase();
                    if (PAID.some(function (x) { return p.includes(x) || u.includes(x); })) {
                        r.paid = true;
                    } else if (FREE.some(function (x) { return p.includes(x) || u.includes(x); })) {
                        r.paid = false;
                    } else {
                        r.paid = false;
                    }
                });
            });
        });
    });
}());

