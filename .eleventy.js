const jsx = require("eleventy-plugin-static-jsx");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("source/images");
    eleventyConfig.addPassthroughCopy("source/music");
    eleventyConfig.addPassthroughCopy("source/style.css");
    eleventyConfig.addPlugin(jsx);

    eleventyConfig.addCollection("poemsByAuthor", function(collectionApi) {
        let allPoems = collectionApi.getFilteredByGlob("_includes/poems");
        let poemsByAuthor = {};

        allPoems.forEach(poem => {
            let authorClass = poem.templateContent.match(/class="([^"]+)"/)[1];
            let author = authorClass;
            if (!poemsByAuthor[author]) poemsByAuthor[author] = [];
            poemsByAuthor[author].push(poem);
        });

        return poemsByAuthor;
    });

    return {
        dir: {
            input: "source",
            output: "_site"
        }
    };
};