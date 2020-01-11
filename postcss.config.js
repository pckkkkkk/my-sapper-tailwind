const dev = process.env.NODE_ENV === 'development';

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.svelte',
        './src/**/*.css',
        './src/**/*.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('stylelint'),
        require('postcss-nested'),
        require('postcss-import')(),
        require('tailwindcss'),
        require('cssnano')({
            preset: 'default'
        }),
        ...!dev ? [ purgecss ] : []
    ]
}