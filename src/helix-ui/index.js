/** @module HelixUI */
const { defineElements } = require('./elements');

/**
 * @external CustomEvent
 * @description Constructor polyfilled by [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs).
 *
 * - MDN: [CustomEvent()](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
 */

/**
 * @external Element
 * @description
 * - MDN: [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
 */

/**
 * @external Event
 * @description Constructor polyfilled by [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs).
 *
 * - MDN: [Event()](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
 */

/**
 * @external HTMLElement
 * @extends external:Element
 * @description
 * Every custom element must directly or indirectly extend this base class.
 *
 * - MDN: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 */

/**
 * @external HTMLTemplateElement
 * @extends external:HTMLElement
 * @description Polyfilled by [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs).
 *
 * - MDN: [HTMLTemplateElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
 */

/**
 * Initialize HelixUI when Web Components are ready.
 * @param {Function} [next] Callback function to execute
 * once HelixUI has finished initializing.
 * @todo test callback functionality
 */
function initialize (next) {
    if (window.WebComponents) {
        // Polyfill detected
        if (window.WebComponents.ready) {
            // polyfill already finished loading, initialize immediately
            defineElements(next);
        } else {
            // initialize when polyfill has finished loading
            window.addEventListener('WebComponentsReady', function () {
                defineElements(next);
            });
        }
    } else {
        // No polyfills detected, initialize immediately
        defineElements(next);
    }
}

module.exports = {
    initialize,
};
