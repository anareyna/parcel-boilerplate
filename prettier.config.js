// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: '*.test.js',
            options: {
                semi: true,
            },
        },
        {
            files: ['*.html'],
            options: {
                tabWidth: 4,
            },
        },
    ],
}

module.exports = config
