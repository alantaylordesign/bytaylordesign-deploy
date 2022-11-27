import { Tooltip } from 'bootstrap';

export class App {
    /**
     * Load deferred css background images.
     */
    loadDeferredCssBg() {
        document.querySelectorAll('.lazy-css-bg').forEach((node) => {
            node.classList.remove('lazy-css-bg');
        });
    }

    /**
     * Close the mobile menu when a user clicks on a menu item.
     */
    closeMobileMenuOnClick() {
        const mobileMenuButton = document.getElementById(
            'navbar-toggler--banner'
        );

        const mobileMenu = document.getElementById('navbar-nav--banner');

        const mobileMenuLinks = document.querySelectorAll(
            '#navbar-nav--banner .nav-link'
        );

        mobileMenuLinks.forEach((mobileMenuLink) => {
            mobileMenuLink.addEventListener('click', (e) => {
                if (mobileMenu.classList.contains('show')) {
                    mobileMenuButton.click();
                }
            });
        });
    }

    /**
     * When the process container is clicked while it's closed open it.
     */
    onProcessContainerClick() {
        document
            .querySelectorAll('.process-step-list-entry__main')
            .forEach((processContainer) => {
                processContainer.addEventListener('click', (event) => {
                    if (
                        processContainer.classList.contains(
                            'process-step-list-entry__main--expanded'
                        ) === false
                    )
                        processContainer
                            .querySelectorAll('.process-step__collapse-btn')
                            .forEach((processCollapseBtn) => {
                                processCollapseBtn.dispatchEvent(
                                    new Event('click')
                                );
                            });
                });
            });
    }

    /**
     * Handle things that need to happen when a process section is toggled.
     */
    onProcessToggle() {
        document
            .querySelectorAll('.process-step__collapse')
            .forEach((processCollapse) => {
                processCollapse.addEventListener(
                    'show.bs.collapse',
                    (event) => {
                        const processContainer = processCollapse.closest(
                            '.process-step-list-entry__main'
                        );

                        processContainer.classList.add(
                            'process-step-list-entry__main--expanded'
                        );

                        processContainer
                            .querySelectorAll(
                                '.process-step__collapse-btn-label'
                            )
                            .forEach((processCollapseBtn) => {
                                processCollapseBtn.textContent = 'Close';
                            });
                    },
                    false
                );

                processCollapse.addEventListener(
                    'hidden.bs.collapse',
                    (event) => {
                        const processContainer = processCollapse.closest(
                            '.process-step-list-entry__main'
                        );

                        processContainer.classList.remove(
                            'process-step-list-entry__main--expanded'
                        );

                        processContainer
                            .querySelectorAll(
                                '.process-step__collapse-btn-label'
                            )
                            .forEach((processCollapseBtn) => {
                                processCollapseBtn.textContent = 'More Info';
                            });
                    },
                    false
                );
            });
    }

    /**
     * Scroll to element on collapse.
     */
    scrollOnCollapse() {
        const toggleCloseElems = document.querySelectorAll(
            '[data-collapse-scroll-target]'
        );

        toggleCloseElems.forEach((toggleCloseElem) => {
            toggleCloseElem.addEventListener('click', (e) => {
                const scrollTo = toggleCloseElem.getAttribute(
                    'data-collapse-scroll-target'
                );

                if (scrollTo) {
                    document.getElementById(scrollTo).scrollIntoView(true);
                }
            });
        });
    }

    /**
     * Init page tooltips.
     */
    tooltips() {
        const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );

        tooltipTriggerList.map((tooltipTriggerEl) => {
            return new Tooltip(tooltipTriggerEl);
        });
    }

    /**
     * Handle DOM Loaded events.
     */
    onDomLoaded() {
        this.loadDeferredCssBg();
        this.closeMobileMenuOnClick();
        this.onProcessContainerClick();
        this.onProcessToggle();
        this.scrollOnCollapse();
        this.tooltips();
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
