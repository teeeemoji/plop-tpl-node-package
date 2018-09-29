const path = require('path')

const TEAMPLATES_DIRNAME = 'plop-templates'

function generateActions(tplName, pkgName, pkgPath) {
    const tplDir = path.resolve(__dirname, '../', TEAMPLATES_DIRNAME, tplName)
    const actionList = [{
        type: 'addMany',
        destination: `${pkgPath}/${pkgName}`,
        base: tplDir,
        templateFiles: [`${tplDir}/**`, `${tplDir}/.*`],
        globOptions: {
            ignore: ['.:..']
        }
    }]
    return actionList
}

module.exports = function (plop) {
    plop.setGenerator('node-package', {
        prompts: [{
            type: 'input',
            name: 'pkgName',
            message: 'What\'s the name of this package (with scope)? '
        }, {
            type: 'input',
            name: 'pkgDescription',
            message: 'What the description of this package (enter to skip)?'
        }, {
            type: 'directory',
            name: 'pkgPath',
            basePath: '.',
            message: 'Where to place this package (enter to place it in CWD)?'
        }],
        actions: generateActions('node-package', '{{dashCase pkgName}}', '{{dashCase pkgPath}}')
    })
}
