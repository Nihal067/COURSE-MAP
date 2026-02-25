/* Link Checker – extracts all URLs from data files and checks them */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const files = ['js/data.js', 'js/data_govt.js', 'js/data_more.js'];
const urlRegex = /url:\s*"([^"]+)"/g;
const allUrls = new Set();

files.forEach(f => {
    const content = fs.readFileSync(path.join(__dirname, f), 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
        const url = match[1];
        if (url && url !== '#') allUrls.add(url);
    }
});

console.log(`Found ${allUrls.size} unique URLs to check.\n`);

let checked = 0, ok = 0, failed = 0;
const failures = [];

function checkUrl(url) {
    return new Promise(resolve => {
        const mod = url.startsWith('https') ? https : http;
        const req = mod.get(url, { timeout: 8000, headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            const code = res.statusCode;
            if (code >= 200 && code < 400) {
                ok++;
            } else {
                failed++;
                failures.push({ url, status: code });
            }
            checked++;
            res.resume();
            resolve();
        });
        req.on('error', err => {
            failed++;
            failures.push({ url, error: err.code || err.message });
            checked++;
            resolve();
        });
        req.on('timeout', () => {
            req.destroy();
            failed++;
            failures.push({ url, error: 'TIMEOUT' });
            checked++;
            resolve();
        });
    });
}

async function run() {
    const urls = [...allUrls];
    // Check 10 at a time
    for (let i = 0; i < urls.length; i += 10) {
        const batch = urls.slice(i, i + 10);
        await Promise.all(batch.map(checkUrl));
        process.stdout.write(`\rChecked ${checked}/${urls.length}...`);
    }
    console.log(`\n\n=== RESULTS ===`);
    console.log(`Total: ${allUrls.size} | OK: ${ok} | Failed: ${failed}`);
    if (failures.length > 0) {
        console.log(`\n--- FAILED URLS ---`);
        failures.forEach(f => {
            console.log(`  ${f.url} => ${f.status || f.error}`);
        });
    }
    // Write failures to a file for reference
    fs.writeFileSync(path.join(__dirname, 'link_check_results.txt'),
        `Link Check Results\nTotal: ${allUrls.size} | OK: ${ok} | Failed: ${failed}\n\nFailed URLs:\n` +
        failures.map(f => `${f.url} => ${f.status || f.error}`).join('\n'),
        'utf8');
    console.log(`\nResults saved to link_check_results.txt`);
}

run();
