const HXElement = require('./HXElement');

/**
 * Defines behavior for the `<hx-tabcontent>` element.
 *
 * @extends HXElement
 * @hideconstructor
 * @since 0.2.0
 */
class HXTabcontentElement extends HXElement {
    static get is () {
        return 'hx-tabcontent';
    }

    $onConnect () {
        this.$defaultAttribute('role', 'presentation');
    }
}

module.exports = HXTabcontentElement;
