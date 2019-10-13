# jss-plugin-all-important

In certain (horrible) situations you may want all of your CSS values to be `!important`. You may be making a embeddable widget, writing a component that may be used in uncontrolled environments, or generally fighting against an environment that you have no control over.

## Install

`npm install --save jss-plugin-all-important`


## Usage

```JavaScript
import { create } from 'jss';
import jssImportant from 'jss-plugin-all-important';

const jss = create({
    plugins: [
        jssImportant(),
    ]
});
```

## Practical usage

This plugin works really well with [jss-isolate](https://github.com/cssinjs/jss/tree/master/packages/jss-plugin-isolate), [jss-increase-specificity](https://github.com/iamstarkov/jss-increase-specificity), and [jss-plugin-rem-em-to-px](https://github.com/JoeDuncko/jss-plugin-rem-em-to-px) to protect your styles.

Here's how I used them in conjunction with [Material UI](https://material-ui.com/)'s default settings:

```JavaScript
import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import jssIsolate from 'jss-isolate';
import jssRemEmToPx from 'jss-plugin-rem-em-to-px';
import jssImportant from 'jss-plugin-all-important';
import jssIncreaseSpecificity from 'jss-increase-specificity';

const jss = create({
    plugins: [
        jssIsolate({
            reset: 'inherited', //Just reset inheritable values - makes no sense to reset anything else I think
            isolate: 'widgetRoot' // Reset from the widgetRoot class - not 'root' because that's used throughout MUI - see https://github.com/cssinjs/jss/issues/326
        }),
        ...jssPreset().plugins,
        jssRemEmToPx({baseFontSize: 16}),
        jssImportant(),
        jssIncreaseSpecificity(),
    ]
});
```

The idea for this plugin came from this issue: https://github.com/cssinjs/jss/issues/209

It was originally made by myself for The Event Discovery Company's Evitt project, which included a pretty sweet embedable calendar widget. Since that project is being discontinued, I was given permission to publish and maintain the JSS libraries I wrote: this and [jss-plugin-rem-em-to-px](https://github.com/JoeDuncko/jss-plugin-rem-em-to-px).


## API

### jssImportant(options)

Options:

- none


## License

MIT © [Joe Duncko](mailto:Joe@JoeDuncko.com)
