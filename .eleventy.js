const fs = require('fs-extra')
const sass = require('sass')
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const scssURL = "src/_includes/scss/style.scss"
const NOT_FOUND_PATH = "public/404/index.html"

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

    // set browserSync to redirect 404 errors to 404 page
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function(err, bs) {
                bs.addMiddleware("*", (req,res) => {
                    if(!fs.existsSync(NOT_FOUND_PATH)) {
                        throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404 template?`)
                    }

                    const content_404 = fs.readFileSync(NOT_FOUND_PATH)
                    res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"})
                    res.write(content_404)
                    res.end()
                })
            }
        }
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