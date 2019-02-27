const tailwindcss = require('tailwindcss');
module.exports = {
    syntax: 'postcss-scss',
    parser: 'postcss-scss',
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};