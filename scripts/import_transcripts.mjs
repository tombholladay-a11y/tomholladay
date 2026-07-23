import fs from 'fs';
import path from 'path';

const sourceDir = 'C:\\Users\\tholl\\OneDrive\\Documents\\SERMONS\\Drivetime Devotions\\Transcripts\\Edited Transcripts';
const publicDir = path.join(process.cwd(), 'public', 'transcripts');
const dataFile = path.join(process.cwd(), 'src', 'data', 'transcripts.json');

// Biblical order array
const biblicalOrder = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 & 2 Samuel", "1 & 2 Kings", "1 & 2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms 01-25", "Psalms 26-50", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
  "Matthew", "Mark", "Luke & Acts", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 & 2 Thessalonians", "1 & 2 Timothy", "Titus & Philemon", "Hebrews", "James", "1 & 2 Peter", "1 John", "1, 2 & 3 John", "Jude", "Revelation", "NT Survey"
];

function getCanonicalName(folderName) {
  // Strip numbering like "01 Romans" -> "Romans"
  const stripped = folderName.replace(/^\d+[-_]?\d*\s*/, '').trim();
  return stripped;
}

function getBiblicalIndex(name) {
  const idx = biblicalOrder.indexOf(name);
  return idx === -1 ? 999 : idx; // Put unknown at the end
}

function main() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const dataDir = path.dirname(dataFile);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const structure = {};

  const folders = fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Process each folder
  for (const folder of folders) {
    const canonicalName = getCanonicalName(folder);
    
    // Create equivalent folder in public
    const destFolder = path.join(publicDir, canonicalName);
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    const files = fs.readdirSync(path.join(sourceDir, folder))
      .filter(f => f.toLowerCase().endsWith('.txt'));

    const groupedByWeek = {};

    for (const file of files) {
      // Copy file
      fs.copyFileSync(path.join(sourceDir, folder, file), path.join(destFolder, file));

      // Parse week number
      // Format usually: "Book of Romans Week 1 Day 1.txt" or "BookofGenesisWeek10Day1.txt"
      const match = file.match(/Week\s*(\d+)/i);
      let weekNum = match ? parseInt(match[1], 10) : 0; // 0 for unparsable

      if (!groupedByWeek[weekNum]) {
        groupedByWeek[weekNum] = [];
      }
      groupedByWeek[weekNum].push({
        filename: file,
        path: `/transcripts/${encodeURIComponent(canonicalName)}/${encodeURIComponent(file)}`
      });
    }

    // Sort files in each week by Day
    for (const week in groupedByWeek) {
      groupedByWeek[week].sort((a, b) => {
        const dayA = a.filename.match(/Day\s*(\d+)/i);
        const dayB = b.filename.match(/Day\s*(\d+)/i);
        const numA = dayA ? parseInt(dayA[1], 10) : 0;
        const numB = dayB ? parseInt(dayB[1], 10) : 0;
        return numA - numB;
      });
    }

    structure[canonicalName] = {
      index: getBiblicalIndex(canonicalName),
      weeks: groupedByWeek
    };
  }

  fs.writeFileSync(dataFile, JSON.stringify(structure, null, 2));
  console.log('Import complete. data/transcripts.json created.');
}

main();
