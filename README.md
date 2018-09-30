# plop-tpl-node-package

Simple plop templates of node package.

## Installation

```console
$ npm install -g plop plop-tpl-node-package
```
## Usage

Use `cyou-plop-node` command will launch plop CLI with this template.

```console
cyou-plop-node
```

## Templates

### node-module

Create a simple node package with:
- package.json
- .npmrc
- .gitignore
- .editorconfig
- mocha
- Eslint
- commitizen
- changelog
- Travis
- Coveralls integration

#### Prompts

- `name` - Node module segment name
- `description` - Node module description
- `path` - Path to place Node module src


#### Structure
It will generate a folder structure below: 

```
{{dashCase name}}/
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── index.js
├── LICENSE
├── package.json
└── README.md
```

## Related

- [plop][plop] - Consistency Made Simple
- [plop-template][plop-template] - A personnal root projects plop templates.
- [front-end-stack][front-end-stack] - Personal front-end development stack, built on PostCSS, Webpack, Babel, ESLint and Browsersync

## License

This project is licensed under the [MIT license](LICENSE).

[plop]: https://github.com/amwmedia/plop
[plop-template]: https://github.com/dimitrinicolas/plop-templates
[front-end-stack]: https://github.com/dimitrinicolas/front-end-stack
