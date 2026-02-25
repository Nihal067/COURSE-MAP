// Fix all broken Simplilearn deep links by replacing with the platform homepage
// since Simplilearn has restructured their URL scheme
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all simplilearn.com/specific-course-path with simplilearn.com/
// but keep the base domain for the courses that just link to simplilearn.com
const regex = /https:\/\/www\.simplilearn\.com\/[a-zA-Z0-9\-\/]+/g;
const count = (content.match(regex) || []).length;
content = content.replace(regex, 'https://www.simplilearn.com/');

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Replaced ${count} Simplilearn deep links with homepage URL.`);
