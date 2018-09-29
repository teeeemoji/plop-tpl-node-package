const promptDirectory = require('inquirer-directory')
module.exports = function (plop) {
    plop.setPrompt('directory', promptDirectory)
}
