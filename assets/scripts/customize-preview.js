/**
 * This file allows you to add functionality to the Theme Customizer
 * live preview. JQuery is readily available.
 *
 * {@link https://codex.wordpress.org/Theme_Customization_API}.
 */

(function ($) {
    /**
     * Change the blog name value.
     *
     * @param {string} value
     */
    wp.customize('blogname', (value) => {
        value.bind((to) => {
            $('.site-title a').text(to);
        });
    });

    /**
     * Change the blog description value.
     *
     * @param {string} value
     */
    wp.customize('blogdescription', (value) => {
        value.bind((to) => {
            $('.site-description').text(to);
        });
    });
})(jQuery);
