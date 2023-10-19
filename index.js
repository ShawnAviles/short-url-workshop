// 1. load all urls from redirects.yml
const YAML = require('yaml');
const fs = require('fs');
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8');

console.log(redirectsFile);

// 2. Generate html page for each redirect Url from template.html