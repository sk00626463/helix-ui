const HXElement = require('./HXElement');

/**
 * Defines behavior for the `<hx-menuitem>` element.
 *
 * @extends HXElement
 * @hideconstructor
 * @since 0.2.0
 */
class HXMenuitemElement extends HXElement {
    static get is () {
        return 'hx-menuitem';
    }

    $onConnect () {
        this.$defaultAttribute('role', 'menuitem');
    }
}

module.exports = HXMenuitemElement;
