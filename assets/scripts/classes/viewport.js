export class Viewport {
    /**
     * Start auto animations when an element becomes visible.
     */
    monitorInViewport() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.setAttribute(
                        'data-in-viewport',
                        entry.isIntersecting
                    );
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0,
            }
        );

        const elems = document.querySelectorAll('[data-in-viewport]');

        elems.forEach((elem) => {
            observer.observe(elem);
        });
    }

    /**
     * Initialize in-viewport data attribute.
     */
    initInViewport() {
        const elems = document.querySelectorAll('.animated--in-viewport');

        elems.forEach((elem) => {
            elem.setAttribute('data-in-viewport', false);
        });
    }

    /**
     * Check if an element is visible.
     *
     * @param {Element} elem The element to check.
     * @returns {boolean} True if the element is visible, otherwise false.
     */
    isVisible(elem) {
        const bounding = elem.getBoundingClientRect();

        return bounding.height > 0 && bounding.width > 0;
    }

    /**
     * Check if an element is within the viewport.
     *
     * @param {Element} elem The element to check.
     * @returns {boolean} True if the element is within the viewport, otherwise false.
     */
    isInViewport(elem) {
        const bounding = elem.getBoundingClientRect();

        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Check if an element is partially within the viewport.
     *
     * @param {Element} elem The element to check.
     * @returns {boolean} True if the element is partially within the viewport, otherwise false.
     */
    isPartiallyInViewport(elem) {
        const bounding = elem.getBoundingClientRect();

        const elemHeight = elem.offsetHeight;
        const elemWidth = elem.offsetWidth;

        return (
            bounding.top >= -elemHeight &&
            bounding.left >= -elemWidth &&
            bounding.right <=
                (window.innerWidth || document.documentElement.clientWidth) +
                    elemWidth &&
            bounding.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) +
                    elemHeight
        );
    }

    /**
     * Autoscroll the provided element if it's visible.
     *
     * @param {Element} scrollEl The element to autoscroll.
     * @param {number} scrollDelayDefault Default delay between visibility and scroll start.
     */
    autoscrollVisibleElement(scrollEl, scrollDelayDefault) {
        const scrollDelay = scrollEl.getAttribute('data-auto-scroll-delay');

        if (
            this.isVisible(scrollEl) === false ||
            this.isPartiallyInViewport(scrollEl) === false ||
            scrollDelay === null
        ) {
            scrollEl.setAttribute('data-auto-scroll-delay', scrollDelayDefault);

            return;
        }

        const scrollDelayNumber = Number(scrollDelay);

        if (scrollDelayNumber > 0) {
            scrollEl.setAttribute(
                'data-auto-scroll-delay',
                scrollDelayNumber - 1
            );

            return;
        }

        this.autoscrollElement(scrollEl, scrollDelayDefault);
    }

    /**
     * Autoscroll the provided element.
     *
     * @param {Element} scrollEl The element to autoscroll.
     * @param {number} scrollDelayDefault Default delay between visibility and scroll start.
     */
    autoscrollElement(scrollEl, scrollDelayDefault) {
        const nextScroll = scrollEl.scrollTop + 1;

        const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;

        const scrollOptions = {
            top: nextScroll,
            behavior: 'auto',
        };

        if (
            scrollEl.scrollTop === maxScroll ||
            maxScroll - scrollEl.scrollTop < 2
        ) {
            scrollOptions.top = 0;
            scrollOptions.behavior = 'smooth';
            scrollEl.setAttribute('data-auto-scroll-delay', scrollDelayDefault);
        }

        if (scrollOptions.top > maxScroll) {
            scrollOptions.top = maxScroll;
        }

        scrollEl.scroll(scrollOptions);
    }

    /**
     * Initialize project autoscroll.
     */
    autoscroll() {
        const scrollEls = document.querySelectorAll('.auto-scroll');

        scrollEls.forEach((scrollEl) => {
            setInterval(() => this.autoscrollVisibleElement(scrollEl, 75), 15);
        });
    }

    /**
     * Handle DOM Loaded events.
     */
    onDomLoaded() {
        this.initInViewport();
        this.monitorInViewport();
        this.autoscroll();
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
