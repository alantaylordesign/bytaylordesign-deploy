const mix = require('laravel-mix');
// require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-purgecss');
require('laravel-mix-copy-watched');

//
// |--------------------------------------------------------------------------
// | Mix Asset Management
// |--------------------------------------------------------------------------
// |
// | Mix provides a clean, fluent API for defining some Webpack build steps
// | for your Sage application. By default, we are compiling the Sass file
// | for your application, as well as bundling up your JS files.
// |
//

// mix.setPublicPath('./dist').browserSync('sage.test');
mix.setPublicPath('./dist');

// const purgeCssWhitelist = require('purgecss-with-wordpress').whitelist;

// const purgeCssWhitelistPatterns =
//     require('purgecss-with-wordpress').whitelistPatterns;

// const purgeCssWhitelistChildrenPatterns = [];

// purgeCssWhitelist.push('hr');

// purgeCssWhitelistPatterns.push(
//     // Custom Forms
//     /^contact-form(.*)?$/,
//     /^project-scope-form(.*)?$/,
//     // Nav
//     /^nav-item(.*)?$/,
//     /^nav-link(.*)?$/,
//     // Tables
//     /^table?$/,
//     /^table-responsive?$/,
//     /^table-bordered?$/,
//     // Transitions
//     /^fade?$/,
//     /^collapse?$/,
//     /^collapsing?$/,
//     // Alerts
//     /^alert$/,
//     /^alert-warning?$/,
//     // Modal
//     // /^modal-backdrop(.*)?$/,
//     // /^modal-open(.*)?$/,
//     // Gravity Forms
//     /^gf_progressbar(.*)?$/,
//     /^gfield(.*)?$/,
//     /^gform(.*)?$/,
//     /^ginput(.*)?$/,
//     /^percentbar(.*)?$/,
//     /^hidden_label(.*)?$/,
//     /^validation_error(.*)?$/,
//     /^validation_message(.*)?$/,
//     /^radio-button-icons(.*)?$/,
//     /^radio-button-number-scale(.*)?$/,
//     /^[name='gform_resume_email'](.*)?$/,
//     /^[name='gform_send_resume_link_button'](.*)?$/,
//     // Feature Detection
//     /^(.*)data-scroll(.*)?$/,
//     /^(.*)data-stickyheader(.*)?$/,
//     /^js(.*)?$/,
//     /^no-js(.*)?$/,
//     /^no-webp(.*)?$/
// );

// purgeCssWhitelistChildrenPatterns.push(
//     // Custom Forms
//     /^contact-form(.*)?$/,
//     /^project-scope-form(.*)?$/,
//     // Nav
//     /^nav-item(.*)?$/,
//     /^nav-link(.*)?$/,
//     // Tables
//     /^table?$/,
//     /^table-responsive?$/,
//     /^table-bordered?$/,
//     // Transitions
//     /^fade?$/,
//     /^collapse?$/,
//     /^collapsing?$/,
//     // Alerts
//     /^alert$/,
//     /^alert-warning?$/,
//     // Modal
//     // /^modal-backdrop(.*)?$/,
//     // /^modal-open(.*)?$/,
//     // Gravity Forms
//     /^gf_progressbar(.*)?$/,
//     /^gfield(.*)?$/,
//     /^gform(.*)?$/,
//     /^ginput(.*)?$/,
//     /^percentbar(.*)?$/,
//     /^hidden_label(.*)?$/,
//     /^validation_error(.*)?$/,
//     /^validation_message(.*)?$/,
//     /^radio-button-icons(.*)?$/,
//     /^radio-button-number-scale(.*)?$/,
//     /^[name='gform_resume_email'](.*)?$/,
//     /^[name='gform_send_resume_link_button'](.*)?$/,
//     // Feature Detection
//     /^(.*)data-scroll(.*)?$/,
//     /^(.*)data-stickyheader(.*)?$/,
//     /^js(.*)?$/,
//     /^no-js(.*)?$/,
//     /^no-webp(.*)?$/
// );

// console.log(purgeCssWhitelist);
// console.log(purgeCssWhitelistPatterns);

const purgeCssSafelist = require('purgecss-with-wordpress').safelist;

purgeCssSafelist.push(
    'hr',

    /^process-step-list-entry__main--expanded(.*)?$/,

    // Custom Forms
    /^contact-form(.*)?$/,
    /^project-scope-form(.*)?$/,
    // Nav
    /^nav-item(.*)?$/,
    /^nav-link(.*)?$/,
    // Tables
    /^table?$/,
    /^table-responsive?$/,
    /^table-bordered?$/,
    // Transitions
    /^fade?$/,
    /^collapse?$/,
    /^collapsing?$/,
    // Alerts
    /^alert$/,
    /^alert-warning?$/,
    // Carousel
    /^carousel-item-start?$/,
    /^carousel-item-end?$/,
    /^carousel-item-next?$/,
    /^carousel-item-prev?$/,
    // Modal
    // /^modal-backdrop(.*)?$/,
    // /^modal-open(.*)?$/,
    // Gravity Forms
    /^gf_progressbar(.*)?$/,
    /^gfield(.*)?$/,
    /^gform(.*)?$/,
    /^ginput(.*)?$/,
    /^percentbar(.*)?$/,
    /^hidden_label(.*)?$/,
    /^validation_error(.*)?$/,
    /^validation_message(.*)?$/,
    /^radio-button-icons(.*)?$/,
    /^radio-button-number-scale(.*)?$/,
    /^[name='gform_resume_email'](.*)?$/,
    /^[name='gform_send_resume_link_button'](.*)?$/,
    // Feature Detection
    /^(.*)data-scroll(.*)?$/,
    /^(.*)data-stickyheader(.*)?$/,
    /^js(.*)?$/,
    /^no-js(.*)?$/,
    /^no-webp(.*)?$/
);

// console.log(purgeCssSafelist);

mix.sass('assets/styles/app.scss', 'styles', {
    sassOptions: {
        quietDeps: true,
    },
})
    .sass('assets/styles/editor.scss', 'styles', {
        sassOptions: {
            quietDeps: true,
        },
    })
    .sass('assets/styles/fa.scss', 'styles', {
        sassOptions: {
            quietDeps: true,
        },
    })
    .sass('assets/styles/header-inline.scss', 'styles', {
        sassOptions: {
            quietDeps: true,
        },
    })
    .purgeCss({
        enabled: true,
        extend: {
            content: [
                `${__dirname}/index.html`, // eslint-disable-line no-undef
                `${__dirname}/**/index.html`, // eslint-disable-line no-undef
                `${__dirname}/*.php`, // eslint-disable-line no-undef
                `${__dirname}/templates/**/*.php`, // eslint-disable-line no-undef
            ],
        },
        // whitelist: purgeCssWhitelist,
        // whitelistPatterns: purgeCssWhitelistPatterns,
        // whitelistPatternsChildren: purgeCssWhitelistChildrenPatterns,
        safelist: purgeCssSafelist,
    });

mix.js('assets/scripts/app.js', 'scripts')
    .js('assets/scripts/fa.js', 'scripts')
    .js('assets/scripts/header-inline.js', 'scripts')
    .js('assets/scripts/customize-preview.js', 'scripts')
    // .blocks('assets/scripts/editor.js', 'scripts')
    .extract();

mix.copyWatched('assets/images/**', 'dist/images').copyWatched(
    'assets/fonts/**',
    'dist/fonts'
);

mix.copy(
    'node_modules/@fortawesome/fontawesome-free/webfonts',
    'dist/webfonts'
);

mix.copy('node_modules/jquery/dist/jquery.js', 'dist/scripts/jquery.js').copy(
    'node_modules/jquery/dist/jquery.min.js',
    'dist/scripts/jquery.min.js'
);

mix.autoload({ jquery: ['$', 'window.jQuery'] })
    .options({ processCssUrls: false })
    .sourceMaps(false, 'source-map')
    .version();
