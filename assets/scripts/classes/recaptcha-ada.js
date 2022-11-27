export class RecaptchaAda {
    /**
     * Make recaptcha field ADA compliant.
     */
    recaptchaAda() {
        const responseField = document.getElementById('g-recaptcha-response');

        if (responseField instanceof Element) {
            responseField.setAttribute('aria-hidden', true);
            responseField.setAttribute('aria-label', 'do not use');
            responseField.setAttribute('aria-readonly', true);
        }
    }

    /**
     * Trigger recaptcha ADA compliance on gravity forms load.
     */
    gformRecaptchaAda() {
        /* global gform */
        if (
            typeof gform === 'object' &&
            typeof gform.addFilter === 'function'
        ) {
            gform.addFilter('gform_recaptcha_callback', (callback, elem) => {
                setTimeout(() => {
                    this.recaptchaAda();
                }, 500);

                return callback;
            });
        }
    }

    /**
     * Handle DOM Loaded events.
     */
    onDomLoaded() {
        this.recaptchaAda();
        this.gformRecaptchaAda();
    }

    /**
     * Initialize on dom content loaded.
     */
    bindDomLoaded() {
        document.addEventListener('DOMContentLoaded', () => {
            this.onDomLoaded();
        });
    }
}
