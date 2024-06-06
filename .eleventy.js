module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css");

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("./posts/*.md");
    });

    return {
        dir: {
            input: ".",
            includes: "layouts",
            layouts: "layouts",
            output: "_site"
        }
    };
};
