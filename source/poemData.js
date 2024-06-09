const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const poemsDirectory = path.join("./poems");
const dataDirectory = path.join("./_data");

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
                const page = section.getAttribute('data-page')
                const num = section.getAttribute('data-num')
                const art = section.getAttribute('data-art')
                poemAttributes.push({ title, author, page, filePath, num, art });
            }
        }

        console.log(poemAttributes);
        const jsonFilePath = path.join(dataDirectory, 'poemAttributes.json');
        fs.writeFileSync(jsonFilePath, JSON.stringify(poemAttributes, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error reading poem files:', error);
    }
}

extractPoemAttributes();