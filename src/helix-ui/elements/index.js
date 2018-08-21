const elements = {
    HXAccordionElement: require('./HXAccordionElement'),
    HXAccordionPanelElement: require('./HXAccordionPanelElement'),
    HXAlertElement: require('./HXAlertElement'),
    HXBusyElement: require('./HXBusyElement'),
    HXCheckboxElement: require('./HXCheckboxElement'),
    HXDisclosureElement: require('./HXDisclosureElement'),
    HXDivElement: require('./HXDivElement'),
    HXElement: require('./HXElement'),
    HXErrorElement: require('./HXErrorElement'),
    HXFileIconElement: require('./HXFileIconElement'),
    HXFileInputElement: require('./HXFileInputElement'),
    HXFileTileElement: require('./HXFileTileElement'),
    HXIconElement: require('./HXIconElement'),
    HXMenuElement: require('./HXMenuElement'),
    HXMenuitemElement: require('./HXMenuitemElement'),
    HXModalElement: require('./HXModalElement'),
    HXPillElement: require('./HXPillElement'),
    HXPopoverElement: require('./HXPopoverElement'),
    HXProgressElement: require('./HXProgressElement'),
    HXRevealElement: require('./HXRevealElement'),
    HXSearchAssistanceElement: require('./HXSearchAssistanceElement'),
    HXSearchElement: require('./HXSearchElement'),
    HXTabElement: require('./HXTabElement'),
    HXTabcontentElement: require('./HXTabcontentElement'),
    HXTablistElement: require('./HXTablistElement'),
    HXTabpanelElement: require('./HXTabpanelElement'),
    HXTabsetElement: require('./HXTabsetElement'),
    HXToastElement: require('./HXToastElement'),
    HXTooltipElement: require('./HXTooltipElement'),
};

/*
 * Register element definitions with the Custom Element registry.
 */
function defineElements () {
    for (let element in elements) {
        elements[element].$define();
    }
}

module.exports = {
    defineElements,
    elements,
};
