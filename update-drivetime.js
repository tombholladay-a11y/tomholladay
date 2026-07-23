const fs = require('fs');
const path = require('path');

const groupStudiesDir = "C:\\Users\\tholl\\OneDrive\\Documents\\SERMONS\\Drivetime Devotions\\Group Studies";
const targetFile = path.join(__dirname, 'src', 'app', 'small-group-bible-studies', 'page.js');

console.log('Reading files from:', groupStudiesDir);
const files = fs.readdirSync(groupStudiesDir);
const pdfFiles = files.filter(f => f.endsWith('.pdf'));

console.log(`Found ${pdfFiles.length} PDF files.`);

// Build the array items
const items = pdfFiles.map(file => {
    // Clean up the title to look beautiful on the website
    let title = file.replace(/\.pdf$/i, '');
    title = title.replace(/^\d+[a-z]?[\s_]+/, ''); // Remove leading numbers like "01 " or "16_"
    title = title.replace(/_/g, ' '); // Replace all underscores with spaces
    title = title.replace(/ Drivetime Devotions Guide/i, '');
    title = title.replace(/ Study Guide/i, '');
    
    title = title.trim();
    
    return `    { title: "${title}", link: "/documents/drivetime-studies/${file}" }`;
});

const newArrayStr = `const drivetime = [\n${items.join(',\n')}\n  ]`;

let content = fs.readFileSync(targetFile, 'utf8');

// Replace the existing drivetime array using regex
const regex = /const drivetime = \[[^\]]*\]/s;
content = content.replace(regex, newArrayStr);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully updated the website code with all ' + items.length + ' Drivetime studies!');
