const poemAttributes = require('./poemAttributes.json');

module.exports = () => {
    let authorsSet = new Set(poemAttributes.map(poem => poem.author));
    let authors = Array.from(authorsSet).map(author => ({
        original: author,
        withSpaces: author.replaceAll('_', ' ')
    }));


    authors.sort((a, b) => {
        let aLastName = a.withSpaces.split(" ").pop();
        let bLastName = b.withSpaces.split(" ").pop();
        return aLastName.localeCompare(bLastName);
    });

    return authors;
};