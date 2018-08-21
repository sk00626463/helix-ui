const HXElement = require('./HXElement');

/**
 * Defines behavior for the `<hx-tablist>` element.
 *
 * @extends HXElement
 * @hideconstructor
 * @since 0.2.0
 */
class HXTablistElement extends HXElement {
    static get is () {
        return 'hx-tablist';
    }

    $onConnect () {
        this.$defaultAttribute('role', 'tablist');
    }
}

module.exports = HXTablistElement;
