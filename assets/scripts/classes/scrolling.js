export class Scrolling {
    /**
     * Constructor.
     */
    constructor() {
        this.paralaxGradientEl = document.querySelectorAll('.paralax-gradient');
    }

    /**
     * Store the scroll position in a root element data attribute.
     */
    storeScrollPosition() {
        document.documentElement.dataset.scroll = window.scrollY;
    }

    /**
     * Handle assigning classes for the sticy header.
     */
    handleStickyHeader() {
        if (
            document.documentElement.dataset.stickyheader !== 'true' &&
            window.scrollY > 30
        ) {
            document.documentElement.dataset.stickyheader = 'true';
        }

        if (
            document.documentElement.dataset.stickyheader === 'true' &&
            window.scrollY <= 30
        ) {
            document.documentElement.dataset.stickyheader = 'false';
        }
    }

    /**
     * Animate the paralax gradient background.
     */
    paralaxGradientOffset() {
        this.paralaxGradientEl.forEach((paralaxEl) => {
            const offset = Math.floor(window.scrollY - paralaxEl.offsetTop);

            if (offset > 0) {
                paralaxEl.style.setProperty(
                    '--gradient-stop-first-offset',
                    `${offset.toString()}px`
                );

                return;
            }

            if (
                paralaxEl.style.getPropertyValue('--gradient-stop-first-offset')
            ) {
                paralaxEl.style.removeProperty('--gradient-stop-first-offset');
            }
        });
    }

    /**
     * Track the browser scroll position and trigger events at
     * certian locations.
     */
    bindScroll() {
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {
            // This holds the requestAnimationFrame reference,
            // so we can cancel it if we wish
            let frame;

            // The debounce function returns a new function that
            // can receive a variable number of arguments
            return (...params) => {
                // If the frame variable has been defined, clear
                // it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }

                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            };
        };

        document.addEventListener(
            'scroll',
            debounce(() => {
                this.onScroll();
            }),
            {
                passive: true,
            }
        );
    }

    /**
     * Handle scroll events.
     */
    onScroll() {
        // this.storeScrollPosition();
        this.handleStickyHeader();
        this.paralaxGradientOffset();
    }

    /**
     * Handle DOM Loaded events.
     */
    onDomLoaded() {
        this.onScroll();
        this.bindScroll();
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
