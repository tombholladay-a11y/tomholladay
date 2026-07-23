const fs = require('fs');
const path = require('path');

// Fix the Documents folder casing
const docsDir = path.join(__dirname, 'public', 'Documents');
const tempDir = path.join(__dirname, 'public', 'temp-docs');
const finalDocsDir = path.join(__dirname, 'public', 'documents');

try {
    if (fs.existsSync(docsDir)) {
        // Windows requires a two-step rename if only changing capitalization
        fs.renameSync(docsDir, tempDir);
        fs.renameSync(tempDir, finalDocsDir);
        console.log('✅ Successfully renamed Documents to documents');
    } else {
        console.log('Documents folder already correctly named or not found.');
    }
} catch (e) {
    console.log('Error renaming Documents folder:', e.message);
}

// Fix the SmallGroups-Card.jpg casing
const imgPath = path.join(__dirname, 'public', 'images', 'SmallGroups-Card.jpg');
const tempImgPath = path.join(__dirname, 'public', 'images', 'temp-card.jpg');
const finalImgPath = path.join(__dirname, 'public', 'images', 'smallgroups-card.jpg');

try {
    if (fs.existsSync(imgPath)) {
        fs.renameSync(imgPath, tempImgPath);
        fs.renameSync(tempImgPath, finalImgPath);
        console.log('✅ Successfully renamed SmallGroups-Card.jpg to smallgroups-card.jpg');
    } else {
        console.log('Image already correctly named or not found.');
    }
} catch (e) {
    console.log('Error renaming image:', e.message);
}
