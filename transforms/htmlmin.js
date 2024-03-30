
const minify = require("html-minifier").minify;

module.exports = async (content, outputPath) => {
 
  return minify(content, {
    minifyCSS: true,
    /* collapseWhitespace: true, */
    minifyJS: true,
    removeComments: true,
    removeTagWhitespace: true,
  });
};