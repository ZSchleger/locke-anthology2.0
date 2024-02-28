const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const poemsDirectory = path.join("./_includes/poems");

async function extractPoemAttributes() {
    try {
        const files = fs.readdirSync(poemsDirectory);
        const poemAttributes = [];

        for (const file of files) {
            const filePath = path.join(poemsDirectory, file);
            console.log(filePath)
            const htmlContent = fs.readFileSync(filePath, 'utf-8');
            const dom = new JSDOM(htmlContent);
            const section = dom.window.document.querySelector('section');

            if (section) {
                const title = section.getAttribute('id');
                const author = section.getAttribute('class');
                poemAttributes.push({ title, author, filePath });
            }
        }

        console.log(poemAttributes);
        fs.writeFileSync('poemAttributes.json', JSON.stringify(poemAttributes, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error reading poem files:', error);
    }
}

extractPoemAttributes();