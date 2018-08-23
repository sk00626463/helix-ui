// TODO: build pipeline task to generate templates.json in the format seen below.
/*
    {
        "HXAccordionPanelElement": {
            "markup": "...",
            "styles": "...",
        },
        ...
    }
*/
module.exports = {
    HXAccordionPanelElement: {
        markup: require('../templates/HXAccordionPanelElement.html'),
        styles: require('../templates/HXAccordionPanelElement.less'),
    },
    HXAlertElement: {
        markup: require('../templates/HXAlertElement.html'),
        styles: require('../templates/HXAlertElement.less'),
    },
    HXCheckboxElement: {
        markup: require('../templates/HXCheckboxElement.html'),
        styles: require('../templates/HXCheckboxElement.less'),
    },
    HXErrorElement: {
        markup: require('../templates/HXErrorElement.html'),
        styles: require('../templates/HXErrorElement.less'),
    },
    HXFileIconElement: {
        markup: require('../templates/HXFileIconElement.html'),
        styles: require('../templates/HXFileIconElement.less'),
    },
    HXFileInputElement: {
        markup: require('../templates/HXFileInputElement.html'),
        styles: require('../templates/HXFileInputElement.less'),
    },
    HXFileTileElement: {
        markup: require('../templates/HXFileTileElement.html'),
        styles: require('../templates/HXFileTileElement.less'),
    },
    HXIconElement: {
        markup: require('../templates/HXIconElement.html'),
        styles: require('../templates/HXIconElement.less'),
    },
    HXModalElement: {
        markup: require('../templates/HXModalElement.html'),
        styles: require('../templates/HXModalElement.less'),
    },
    HXPillElement: {
        markup: require('../templates/HXPillElement.html'),
        styles: require('../templates/HXPillElement.less'),
    },
    HXPopoverElement: {
        markup: require('../templates/HXPopoverElement.html'),
        styles: require('../templates/HXPopoverElement.less'),
    },
    HXProgressElement: {
        markup: require('../templates/HXProgressElement.html'),
        styles: require('../templates/HXProgressElement.less'),
    },
    HXSearchElement: {
        markup: require('../templates/HXToastElement.html'),
        styles: require('../templates/HXToastElement.less'),
    },
    HXTooltipElement: {
        markup: require('../templates/HXTooltipElement.html'),
        styles: require('../templates/HXTooltipElement.less'),
    },
};
