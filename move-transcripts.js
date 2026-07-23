const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const documentsDir = path.join(publicDir, 'documents');
const oldTranscriptsDir = path.join(publicDir, 'transcripts');
const newTranscriptsDir = path.join(documentsDir, 'transcripts');

console.log('Starting migration...');

// Ensure public/documents exists
if (!fs.existsSync(documentsDir)) {
  fs.mkdirSync(documentsDir, { recursive: true });
  console.log('Created public/documents folder.');
}

// Move the directory
if (fs.existsSync(oldTranscriptsDir)) {
  fs.renameSync(oldTranscriptsDir, newTranscriptsDir);
  console.log('Successfully moved public/transcripts to public/documents/transcripts');
} else if (fs.existsSync(newTranscriptsDir)) {
  console.log('Transcripts folder is already inside documents.');
} else {
  console.log('Could not find public/transcripts folder.');
}

// Update JSON file
const jsonPath = path.join(__dirname, 'src', 'data', 'transcripts.json');
if (fs.existsSync(jsonPath)) {
  let content = fs.readFileSync(jsonPath, 'utf8');
  // Replace exactly the start of the path strings
  content = content.replace(/"path":\s*"\/transcripts\//g, '"path": "/documents/transcripts/');
  fs.writeFileSync(jsonPath, content, 'utf8');
  console.log('Successfully updated internal links in transcripts.json');
} else {
  console.log('Could not find src/data/transcripts.json');
}

console.log('All done! You can now start your dev server again.');
