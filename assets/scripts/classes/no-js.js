export class NoJs {
    /**
     * Set the js support class.
     */
    markJsSupport() {
        document.documentElement.classList.remove('no-js');

        document.documentElement.classList.add('js');
    }
}
