const fs = require('fs-extra')
const sass = require('sass')
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const scssURL = "src/_includes/scss/style.scss"

module.exports = eleventyConfig => {

    eleventyConfig.addWatchTarget("./src/_includes/scss")
    eleventyConfig.addWatchTarget("./src/_includes/js")

    // Minify HTML/JS
    // adapted from https://github.com/pdehaan/11ty-transform-async/
    eleventyConfig.addTransform('minify', require('./transforms/minify'))

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy({'src/images':'images'})
    eleventyConfig.addPassthroughCopy({'src/fonts':'fonts'})
    eleventyConfig.addPassthroughCopy('src/.htaccess')

    // sass compilation and postcss
    // Adapted from https://www.d-hagemeier.com/en/sass-compile-11ty/, updated to reflect deprecation of renderSync
    eleventyConfig.on("beforeBuild", () => {

        // Compile Sass
        let result = sass.compile(scssURL, {
            sourceMap: false,
            style: "compressed",
        });
        console.log("SCSS compiled")

        // Optimize and write file with PostCSS
        let css = result.css.toString()
        postcss([autoprefixer])
            .process(css, { from: "style.css", to: "style.out.css" })
            .then((result) => {
            fs.outputFile("public/style.css", result.css, (err) => {
                if (err) throw err;
                console.log("CSS optimized")
            });
        });
    });

    // from https://www.11ty.dev/docs/dev-server/
    eleventyConfig.setServerOptions({
        domDiff: true,
        encoding: "utf-8",
        liveReload: true,
        port: 8080,
        showAllHosts: false,
        watch: ["public/**/*.css","public/**/*.js"],
    
        // Use a local key/certificate to opt-in to local HTTP/2 with https
        https: {
          // key: "./localhost.key",
          // cert: "./localhost.cert",
        },
    })

    eleventyConfig.addCollection("tagsList", function(collectionApi) {
        const tagsList = new Set();
        collectionApi.getAll().map( item => {
            if (item.data.tags) { // handle pages that don't have tags
                item.data.tags.map( tag => tagsList.add(tag))
            }
        });
        return tagsList;
    });

    // Filter posts by current/future date
    // For this to work in production, set an automatic build interval.
    // source: https://www.raymondcamden.com/2020/08/07/hiding-future-content-with-eleventy
    eleventyConfig.addCollection("releasedPosts", function(collectionApi) {
        return collectionApi.getFilteredByTag("posts").filter(p => {
            let now = new Date().getTime();
            if(now < p.date.getTime()) return false;
            return true;
        });
    });
    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],

        // pre-process files with njk
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        
        dir: {
            input: "src",
            output: "public"
        }
    }
}