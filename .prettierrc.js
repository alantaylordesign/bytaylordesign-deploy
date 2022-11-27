module.exports = {
    singleQuote: true,
    tabWidth: 4,
    overrides: [
        {
            files: ['*.css', '*.scss'],
            options: {
                printWidth: 120,
            },
        },
        {
            files: ['composer.json', 'package.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
