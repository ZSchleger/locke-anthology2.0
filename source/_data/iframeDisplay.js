const poemAttributes = require('./poemAttributes.json');

function getIframeUrlsByAuthor() {
    let minPageByAuthor = {};

    poemAttributes.forEach(poem => {
        if (!minPageByAuthor[poem.author] || poem.page < minPageByAuthor[poem.author]) {
            minPageByAuthor[poem.author] = poem.page;
        }
    });

    let iframeUrlsByAuthor = {};
    const urlBeginning = "https://archive.org/details/newnegrointerpre00unse/page/";
    const urlEnd = "/mode/1up?view=theater";

    for (let author in minPageByAuthor) {
        let page = minPageByAuthor[author];
        iframeUrlsByAuthor[author] = `${urlBeginning}${page}${urlEnd}`;
    }

    return iframeUrlsByAuthor;
}

module.exports = getIframeUrlsByAuthor;