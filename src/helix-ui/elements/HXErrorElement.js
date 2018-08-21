const HXElement = require('./HXElement');
let shadowStyles = require('./HXErrorElement.less');
let shadowMarkup = require('./HXErrorElement.html');

/**
 * Defines behavior for the `<hx-error>` element.
 *
 * @extends HXElement
 * @hideconstructor
 * @since 0.4.0
 */
class HXErrorElement extends HXElement {
    static get is () {
        return 'hx-error';
    }

    static get template () {
        return `<style>${shadowStyles}</style>${shadowMarkup}`;
    }
}

module.exports = HXErrorElement;
