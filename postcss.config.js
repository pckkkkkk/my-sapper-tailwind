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
        require('postcss-nested'),
        require('tailwindcss'),
        require('cssnano')({
            preset: 'default'
        }),
        ...!dev ? [ purgecss ] : []
    ]
}