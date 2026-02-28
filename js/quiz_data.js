/* ===================================================
   COURSEMAP QUIZ DATA
   5 MCQ questions per step × up to all steps.
   Structure: QUIZ_BANK[domainId] = [ [step0_q0..q4], [step1_q0..q4], ... ]
   Each question: { q, opts:[A,B,C,D], ans:'A'|'B'|'C'|'D' }
   =================================================== */

const QUIZ_BANK = {};

/* ────────────────────────────────────────────────────────────
   PYTHON   (id typically 'python')
   ──────────────────────────────────────────────────────────── */
QUIZ_BANK['python'] = [
    /* Step 0 — Basics */
    [
        { q: 'What is the correct file extension for Python files?', opts: ['A) .pt', 'B) .py', 'C) .pyt', 'D) .python'], ans: 'B' },
        { q: 'Which keyword is used to define a function in Python?', opts: ['A) function', 'B) def', 'C) fun', 'D) define'], ans: 'B' },
        { q: 'How do you print "Hello" in Python?', opts: ['A) echo "Hello"', 'B) print("Hello")', 'C) console.log("Hello")', 'D) printf("Hello")'], ans: 'B' },
        { q: 'Which of these is a valid Python variable name?', opts: ['A) 2var', 'B) my-var', 'C) my_var', 'D) var!'], ans: 'C' },
        { q: 'What is the output of type(3.14)?', opts: ['A) int', 'B) float', 'C) double', 'D) number'], ans: 'B' },
    ],
    /* Step 1 — Control Flow */
    [
        { q: 'Which loop is guaranteed to execute at least once?', opts: ['A) for', 'B) while', 'C) do-while', 'D) Python has no do-while'], ans: 'D' },
        { q: 'What does "break" do inside a loop?', opts: ['A) Skips current iteration', 'B) Exits the loop', 'C) Restarts the loop', 'D) Raises error'], ans: 'B' },
        { q: 'What is the output of range(1,5)?', opts: ['A) [1,2,3,4,5]', 'B) [1,2,3,4]', 'C) [0,1,2,3,4]', 'D) [1,2,3,4,5,6]'], ans: 'B' },
        { q: 'Which keyword skips to the next loop iteration?', opts: ['A) skip', 'B) next', 'C) continue', 'D) pass'], ans: 'C' },
        { q: 'What does "elif" stand for?', opts: ['A) else if', 'B) else elif', 'C) end if', 'D) extra if'], ans: 'A' },
    ],
    /* Step 2 — Functions */
    [
        { q: 'What is a lambda function?', opts: ['A) A named function', 'B) An anonymous single-expression function', 'C) A class method', 'D) A recursive function'], ans: 'B' },
        { q: 'What does *args allow?', opts: ['A) Named arguments', 'B) Arbitrary number of positional arguments', 'C) Default arguments', 'D) Keyword-only arguments'], ans: 'B' },
        { q: 'What is the return value of a function with no return statement?', opts: ['A) 0', 'B) False', 'C) None', 'D) Error'], ans: 'C' },
        { q: 'Which decorator makes a variable accessible inside a nested function?', opts: ['A) @global', 'B) global keyword', 'C) nonlocal keyword', 'D) @outer'], ans: 'C' },
        { q: 'What does map() return in Python 3?', opts: ['A) A list', 'B) A map object (iterator)', 'C) A tuple', 'D) A dict'], ans: 'B' },
    ],
    /* Step 3 — Data Structures */
    [
        { q: 'Which Python data structure uses key-value pairs?', opts: ['A) List', 'B) Tuple', 'C) Dictionary', 'D) Set'], ans: 'C' },
        { q: 'Which is immutable?', opts: ['A) List', 'B) Set', 'C) Dict', 'D) Tuple'], ans: 'D' },
        { q: 'What does list.append() do?', opts: ['A) Removes last element', 'B) Adds element to beginning', 'C) Adds element to end', 'D) Sorts the list'], ans: 'C' },
        { q: 'How do you access the first element of list L?', opts: ['A) L(0)', 'B) L.first()', 'C) L[0]', 'D) L[1]'], ans: 'C' },
        { q: 'Which removes duplicates automatically?', opts: ['A) list', 'B) tuple', 'C) set', 'D) dict'], ans: 'C' },
    ],
    /* Step 4 — OOP */
    [
        { q: 'What is "__init__" in Python?', opts: ['A) A destructor', 'B) A constructor / initializer', 'C) A static method', 'D) A module'], ans: 'B' },
        { q: 'Which keyword is used for inheritance?', opts: ['A) extends', 'B) inherits', 'C) class Child(Parent)', 'D) super'], ans: 'C' },
        { q: 'What does "self" refer to?', opts: ['A) The class itself', 'B) The current instance', 'C) The parent class', 'D) A static variable'], ans: 'B' },
        { q: 'What is encapsulation?', opts: ['A) Hiding internal details', 'B) Inheriting methods', 'C) Overriding methods', 'D) Creating instances'], ans: 'A' },
        { q: 'Which method lets you define the string representation of an object?', opts: ['A) __repr__', 'B) __str__', 'C) Both A and B', 'D) __print__'], ans: 'C' },
    ],
];

/* ────────────────────────────────────────────────────────────
   WEB DEVELOPMENT  (id typically 'web-development' or 'webdev')
   ──────────────────────────────────────────────────────────── */
QUIZ_BANK['web-development'] = QUIZ_BANK['webdev'] = [
    /* Step 0 — HTML */
    [
        { q: 'What does HTML stand for?', opts: ['A) High Type Markup Lan.', 'B) Hyper Text Markup Language', 'C) Hyper Transfer Markup Lang.', 'D) Home Tool Markup Lang.'], ans: 'B' },
        { q: 'Which tag is used for the largest heading?', opts: ['A) <h6>', 'B) <heading>', 'C) <h1>', 'D) <head>'], ans: 'C' },
        { q: 'Which attribute links an href to an anchor tag?', opts: ['A) src', 'B) link', 'C) href', 'D) url'], ans: 'C' },
        { q: 'Which HTML tag embeds an image?', opts: ['A) <image>', 'B) <img>', 'C) <pic>', 'D) <src>'], ans: 'B' },
        { q: 'What does <!DOCTYPE html> do?', opts: ['A) Defines stylesheets', 'B) Tells browser it is HTML5', 'C) Imports scripts', 'D) Sets page title'], ans: 'B' },
    ],
    /* Step 1 — CSS */
    [
        { q: 'Which property changes text colour in CSS?', opts: ['A) font-color', 'B) text-color', 'C) color', 'D) foreground'], ans: 'C' },
        { q: 'Which selector targets elements with class "box"?', opts: ['A) #box', 'B) .box', 'C) *box', 'D) §box'], ans: 'B' },
        { q: 'What does "display:flex" do?', opts: ['A) Hides an element', 'B) Makes container use flexbox layout', 'C) Adds flex animation', 'D) Sets font to flex'], ans: 'B' },
        { q: 'Which CSS property controls space inside an element?', opts: ['A) margin', 'B) border', 'C) padding', 'D) spacing'], ans: 'C' },
        { q: 'What does "position:fixed" do?', opts: ['A) Positions relative to parent', 'B) Positions relative to viewport', 'C) Positions at page top', 'D) Locks width'], ans: 'B' },
    ],
    /* Step 2 — JavaScript */
    [
        { q: 'Which keyword declares a block-scoped variable?', opts: ['A) var', 'B) let', 'C) define', 'D) variable'], ans: 'B' },
        { q: 'What does === check?', opts: ['A) Value only', 'B) Type only', 'C) Value and type', 'D) Reference'], ans: 'C' },
        { q: 'How do you select an element by id in JS?', opts: ['A) document.select("#id")', 'B) document.getById("id")', 'C) document.getElementById("id")', 'D) document.query("id")'], ans: 'C' },
        { q: 'What is the DOM?', opts: ['A) A CSS preprocessor', 'B) Document Object Model', 'C) Dynamic Object Method', 'D) A JS library'], ans: 'B' },
        { q: 'Which method adds an element at the end of an array?', opts: ['A) push()', 'B) pop()', 'C) append()', 'D) add()'], ans: 'A' },
    ],
    /* Step 3 — React */
    [
        { q: 'What is JSX?', opts: ['A) A database query language', 'B) JS XML — HTML-like JS syntax', 'C) A CSS framework', 'D) A Node module'], ans: 'B' },
        { q: 'Which hook manages local state in a functional component?', opts: ['A) useEffect', 'B) useRef', 'C) useState', 'D) useMemo'], ans: 'C' },
        { q: 'What are props in React?', opts: ['A) Component state', 'B) Inputs passed from parent to child', 'C) Global variables', 'D) CSS classes'], ans: 'B' },
        { q: 'When does useEffect with [] run?', opts: ['A) On every render', 'B) Never', 'C) Only on mount', 'D) On unmount only'], ans: 'C' },
        { q: 'What does a key prop do in a list?', opts: ['A) Adds CSS styling', 'B) Helps React identify changed items', 'C) Creates click events', 'D) Sets tab order'], ans: 'B' },
    ],
    /* Step 4 — Backend / Node */
    [
        { q: 'What is Node.js?', opts: ['A) A frontend framework', 'B) A JS runtime on the server', 'C) A CSS engine', 'D) A database'], ans: 'B' },
        { q: 'Which object handles HTTP requests in Express?', opts: ['A) app', 'B) req', 'C) res', 'D) server'], ans: 'B' },
        { q: 'What does REST stand for?', opts: ['A) Remote Execution & State Transfer', 'B) Representational State Transfer', 'C) Resource Entity Storage Technology', 'D) Responsive Server Tech'], ans: 'B' },
        { q: 'Which HTTP method is used to create resources?', opts: ['A) GET', 'B) DELETE', 'C) POST', 'D) PUT'], ans: 'C' },
        { q: 'What is middleware in Express?', opts: ['A) A CSS file', 'B) Function that runs between request and response', 'C) A React component', 'D) A database schema'], ans: 'B' },
    ],
];

/* ────────────────────────────────────────────────────────────
   DATA SCIENCE  (id typically 'data-science')
   ──────────────────────────────────────────────────────────── */
QUIZ_BANK['data-science'] = [
    /* Step 0 — Python for Data */
    [
        { q: 'Which library is mainly used for tabular data in Python?', opts: ['A) NumPy', 'B) Matplotlib', 'C) Pandas', 'D) Seaborn'], ans: 'C' },
        { q: 'What does df.head() do?', opts: ['A) Returns last 5 rows', 'B) Returns column names', 'C) Returns first 5 rows', 'D) Returns shape'], ans: 'C' },
        { q: 'Which pandas object holds a single column?', opts: ['A) DataFrame', 'B) Series', 'C) Array', 'D) Matrix'], ans: 'B' },
        { q: 'What does df.isnull().sum() compute?', opts: ['A) Total rows', 'B) Count of null values per column', 'C) Sum of numeric columns', 'D) Number of duplicates'], ans: 'B' },
        { q: 'Which method drops missing values?', opts: ['A) df.fill()', 'B) df.remove()', 'C) df.dropna()', 'D) df.clean()'], ans: 'C' },
    ],
    /* Step 1 — Statistics */
    [
        { q: 'What does mean represent?', opts: ['A) Middle value', 'B) Most frequent value', 'C) Average value', 'D) Range of values'], ans: 'C' },
        { q: 'What is standard deviation?', opts: ['A) Average', 'B) Spread of data around mean', 'C) Most common value', 'D) Maximum value'], ans: 'B' },
        { q: 'Which measures middle value in sorted data?', opts: ['A) Mean', 'B) Mode', 'C) Median', 'D) Variance'], ans: 'C' },
        { q: 'What is correlation?', opts: ['A) Causation between vars', 'B) Statistical relationship between vars', 'C) Difference between means', 'D) Sum of squares'], ans: 'B' },
        { q: 'What is a normal distribution shaped like?', opts: ['A) Flat line', 'B) J-curve', 'C) Bell curve', 'D) Exponential curve'], ans: 'C' },
    ],
    /* Step 2 — ML Basics */
    [
        { q: 'What is supervised learning?', opts: ['A) Learning without labels', 'B) Learning from labelled data', 'C) Reinforcement learning', 'D) Clustering'], ans: 'B' },
        { q: 'Which algorithm is used for classification?', opts: ['A) Linear Regression', 'B) K-Means', 'C) Decision Tree', 'D) PCA'], ans: 'C' },
        { q: 'What is overfitting?', opts: ['A) Model too simple', 'B) Model memorises training data, poor generalisation', 'C) Model has no training data', 'D) Correct model fit'], ans: 'B' },
        { q: 'What does train/test split do?', opts: ['A) Duplicates data', 'B) Splits data for training and evaluating model', 'C) Shuffles columns', 'D) Normalises data'], ans: 'B' },
        { q: 'Which metric measures classification performance?', opts: ['A) RMSE', 'B) R²', 'C) Accuracy', 'D) MAE'], ans: 'C' },
    ],
    /* Step 3 — Data Visualisation */
    [
        { q: 'Which Python library is best for statistical plots?', opts: ['A) Pandas', 'B) NumPy', 'C) Seaborn', 'D) Scikit-learn'], ans: 'C' },
        { q: 'What does a scatter plot show?', opts: ['A) Frequency distribution', 'B) Relationship between two variables', 'C) Time series', 'D) Categorical comparison'], ans: 'B' },
        { q: 'Which chart is best for proportions?', opts: ['A) Line chart', 'B) Bar chart', 'C) Pie chart', 'D) Scatter plot'], ans: 'C' },
        { q: 'What does plt.show() do in Matplotlib?', opts: ['A) Saves the figure', 'B) Clears the plot', 'C) Displays the plot', 'D) Resizes the plot'], ans: 'C' },
        { q: 'What is a heatmap used for?', opts: ['A) Geographical data', 'B) Showing correlations via colour intensity', 'C) Time series', 'D) Tree structures'], ans: 'B' },
    ],
    /* Step 4 — Advanced ML */
    [
        { q: 'What is a neural network?', opts: ['A) A decision tree variant', 'B) Layers of weighted nodes inspired by the brain', 'C) A linear model', 'D) A clustering algorithm'], ans: 'B' },
        { q: 'What does CNN stand for?', opts: ['A) Conditional Neural Network', 'B) Convolutional Neural Network', 'C) Clustered Neuron Network', 'D) Central Node Network'], ans: 'B' },
        { q: 'What is gradient descent?', opts: ['A) A method to descent a gradient physically', 'B) Optimisation algorithm that minimises loss', 'C) A regularisation technique', 'D) A feature selection method'], ans: 'B' },
        { q: 'What is regularisation used for?', opts: ['A) Speed up training', 'B) Add more data', 'C) Prevent overfitting', 'D) Increase model complexity'], ans: 'C' },
        { q: 'What is transfer learning?', opts: ['A) Copying hyperparameters', 'B) Reusing pretrained model on new task', 'C) Moving data between datasets', 'D) Changing loss function'], ans: 'B' },
    ],
];

/* ────────────────────────────────────────────────────────────
   FALLBACK — generate generic questions for unknown domains
   ──────────────────────────────────────────────────────────── */
function getStepQuestions(domainId, stepIdx) {
    const bank = QUIZ_BANK[domainId] || QUIZ_BANK[domainId?.toLowerCase()];
    if (bank && bank[stepIdx]) return bank[stepIdx];

    // Generic tech fallback questions
    const fallbacks = [
        { q: 'What does "debugging" mean in software development?', opts: ['A) Writing new code', 'B) Finding and fixing errors', 'C) Deploying code', 'D) Reviewing code'], ans: 'B' },
        { q: 'What is version control?', opts: ['A) Updating app versions', 'B) Tracking code changes over time', 'C) Versioning APIs', 'D) Managing OS versions'], ans: 'B' },
        { q: 'What is an API?', opts: ['A) Application Programming Interface', 'B) Automated Program Integration', 'C) Applied Python Interface', 'D) Advanced Programming Index'], ans: 'A' },
        { q: 'What does "open source" mean?', opts: ['A) Free to use commercially', 'B) Source code is publicly available', 'C) No licence required', 'D) Only for non-profit use'], ans: 'B' },
        { q: 'What is a repository in Git?', opts: ['A) A type of database', 'B) A storage location for code and history', 'C) A cloud server', 'D) A code editor'], ans: 'B' },
    ];
    return fallbacks;
}
