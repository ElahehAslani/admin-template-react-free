const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgeCss = require('@fullhuman/postcss-purgecss');
const cssNano = require('cssnano');
const postCssImport = require('postcss-import');

const isProduction = process.env.NODE_ENV === 'production';
const purgeCssConfig = purgeCss({
  // Specify the paths to all of the template files in your project
  content: [
    './src/index.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './node_modules/react-modern-calendar-datepicker/**/*.js',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    postCssImport,
    tailwindcss('./tailwind.config.js'),
    ...(isProduction ? [purgeCssConfig, cssNano({ preset: 'default' })] : []),
    autoprefixer,
  ],
};
