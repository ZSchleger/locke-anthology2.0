const fs = require('fs');
const path = require('path');
const poemAttributes = require('./poemAttributes.json');

module.exports = poemAttributes.map(poem => {
    const contentPath = path.join(__dirname, '..', poem.filePath);
    const content = fs.readFileSync(contentPath, 'utf8');
    return {
        ...poem,
        content: content
    };
});