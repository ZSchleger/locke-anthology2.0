const jsx = require("eleventy-plugin-static-jsx");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("source/images");
    eleventyConfig.addPassthroughCopy("source/music");
    eleventyConfig.addPassthroughCopy("source/style.css");
    eleventyConfig.addPassthroughCopy("source/poems");
    eleventyConfig.addPlugin(jsx);


    return {
        dir: {
            input: "source",
            output: "_site"
        }
    };
};