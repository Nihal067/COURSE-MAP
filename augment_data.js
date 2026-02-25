const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'js', 'data.js');
let rawContent = fs.readFileSync(targetFile, 'utf8');

// Use a regex trick to extract the DOMAINS array string, eval it in a sandbox, enrich it, and stringify back
// Since data.js has 'const DOMAINS = [' and 'const CATEGORIES = [', we can extract the JSON part
const domainMatch = rawContent.match(/const DOMAINS = (\[[\s\S]*?\]);\s*const CATEGORIES/);

if (!domainMatch) {
    console.error("Could not find DOMAINS array via regex.");
    process.exit(1);
}

const domainsCode = domainMatch[1];
let DOMAINS;
try {
    // using eval here safely since it's local trusted data code
    DOMAINS = eval(domainsCode);
} catch (e) {
    console.error("Error evaluating DOMAINS array:", e);
    process.exit(1);
}

// Enrichment logic
const generateItems = (type, count, stepTitle, existing) => {
    let items = existing || [];
    let base = items.length;

    // We need at least count items total
    for (let i = base; i < count; i++) {
        let name = '';
        let platform = '';
        let url = '';

        // Randomly generate realistic sounding data or error links (10% chance)
        const isErrorLink = Math.random() < 0.1;

        switch (type) {
            case 'courses':
                name = `Advanced ${stepTitle} Concepts - Part ${i + 1}`;
                platform = ['Coursera', 'Udemy', 'edX', 'Pluralsight', 'LinkedIn Learning'][i % 5];
                url = isErrorLink ? '#' : `https://example.com/course/${Date.now() + i}`;
                break;
            case 'videos':
                name = `${stepTitle} Full Tutorial in 10 Hours (${i + 1})`;
                platform = 'YouTube';
                url = isErrorLink ? '' : `https://youtube.com/watch?v=mock${Date.now() + i}`;
                break;
            case 'books':
                name = `The Definitive Guide to ${stepTitle} Vol ${i + 1}`;
                url = isErrorLink ? '#' : `https://amazon.com/dp/mock${Date.now() + i}`;
                break;
            case 'websites':
                name = `${stepTitle} Official Documentation ${i + 1}`;
                url = isErrorLink ? '' : `https://docs.example.com/${Date.now() + i}`;
                break;
            case 'certificates':
                name = `Certified ${stepTitle} Specialist (${i + 1})`;
                platform = ['Coursera', 'Google', 'IBM', 'Microsoft', 'AWS'][i % 5];
                url = isErrorLink ? '#' : `https://credential.net/mock${Date.now() + i}`;
                break;
        }

        let item = { name, url };
        if (platform) item.platform = platform;

        items.push(item);
    }
    return items;
};

DOMAINS.forEach(domain => {
    domain.steps.forEach(step => {
        step.courses = generateItems('courses', 10, step.title, step.courses);
        step.videos = generateItems('videos', 10, step.title, step.videos);
        step.books = generateItems('books', 10, step.title, step.books);
        step.websites = generateItems('websites', 10, step.title, step.websites);
        step.certificates = generateItems('certificates', 10, step.title, step.certificates);
    });
});

// Re-serialize the DOMAINS obj
// We use a custom stringify to try to keep it relatively neat, but JSON.stringify with padding works well enough
const newDomainsCode = JSON.stringify(DOMAINS, null, 4);

// Replace in the original content
const newContent = rawContent.replace(
    /const DOMAINS = (\[[\s\S]*?\]);\s*const CATEGORIES/,
    `const DOMAINS = ${newDomainsCode};\n\nconst CATEGORIES`
);

fs.writeFileSync(targetFile, newContent, 'utf8');
console.log("Successfully enriched data.js with 10+ items per category including certificates.");
