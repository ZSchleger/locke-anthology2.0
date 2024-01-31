module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("source/images");
    eleventyConfig.addPassthroughCopy("source/music");
    eleventyConfig.addPassthroughCopy("source/style.css");
    return {
        dir: {
            input: "source",
            output: "_site"
        }
    }
};