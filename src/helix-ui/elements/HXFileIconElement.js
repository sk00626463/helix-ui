const HXElement = require('./HXElement');
const shadowStyles = require('./HXFileIconElement.less');
const shadowMarkup = require('./HXFileIconElement.html');

/**
 * Defines behavior for the `<hx-file-icon>` element.
 *
 * @extends HXElement
 * @hideconstructor
 */
class HXFileIconElement extends HXElement {
    static get is () {
        return 'hx-file-icon';
    }

    static get template () {
        return `<style>${shadowStyles}</style>${shadowMarkup}`;
    }

    $onConnect () {
        this.$upgradeProperty('type');
    }

    static get $observedAttributes () {
        return [ 'type' ];
    }

    $onAttributeChange (attr, oldVal, newVal) {
        if (attr === 'type') {
            this._elIcon.type = newVal;
        }
    }

    // GETTERS
    get type () {
        return this.getAttribute('type');
    }

    // SETTERS
    set type (newVal) {
        return this.setAttribute('type', newVal);
    }

    /** @private */
    get _elIcon () {
        return this.shadowRoot.getElementById('hxIcon');
    }
}

module.exports = HXFileIconElement;
