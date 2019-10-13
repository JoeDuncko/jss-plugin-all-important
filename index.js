/**
 * Add !important to every css rule - mostly for code that ends up in uncontrolled environments (aka, widgets)
 *
 * See https://github.com/cssinjs/jss/issues/209
 *
 * @api public
 */
export default function jssAllImportant() {
    function onProcessStyle(style, rule) {
        // !important isn't valid on keyframes
        if(rule.options.parent.type === 'keyframes') return style;

        if (rule.type !== 'style') return style;

        for (const prop in style) {
            style[prop] = style[prop] + ' !important';
        }

        return style;
    }

    function onChangeValue(value, prop) {
        return value + ' !important';
    }

    return {
        onProcessStyle,
        onChangeValue
    };
}
