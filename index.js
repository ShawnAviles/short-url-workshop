// 1. load all urls from redirects.yml
const YAML = require('yaml');
const fs = require('fs');
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8');
const redirects = YAML.parse(redirectsFile);

console.log(redirects);

// 2. Generate html page for each redirect Url from template.html
const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')

// loop through all url redirects, and generate an html page
for (let [slug, url] of Object.entries(redirects)){
    console.log('Generating HTML page for ', slug);

    const html = templateHTML.replaceAll('https://example.com', url);
    console.log(html);

    // create folder for each slug
    const folderPath = path.join(__dirname, 'out', slug);
    fs.mkdirSync(folderPath, { recursive: true } );

    // create an index.html in each slug director
    fs.writeFileSync(path.join(folderPath, 'index.html'), html);
}