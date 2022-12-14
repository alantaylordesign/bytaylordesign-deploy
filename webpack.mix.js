const mix = require('laravel-mix');
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

mix.setPublicPath('./dist');

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
            ],
        },
        safelist: purgeCssSafelist,
    });

mix.js('assets/scripts/app.js', 'scripts')
    .js('assets/scripts/fa.js', 'scripts')
    .extract();

mix.copyWatched('assets/images/**', 'dist/images').copyWatched(
    'assets/fonts/**',
    'dist/fonts'
);

mix.copy(
    'node_modules/@fortawesome/fontawesome-free/webfonts',
    'dist/webfonts'
);

mix.options({ processCssUrls: false })
    .sourceMaps(false, 'source-map')
    .version();
