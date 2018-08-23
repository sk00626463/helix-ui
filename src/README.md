# This branch is NOT FUNCTIONAL!
It was originally built to refactor source code to generate pure CommonJS assets for distribution and consumption by testing infrastructure. All notes in this document are for an ideal state and is meant to be used as a resource in team discussions when we plan for future improvements.

## Directory Structure
```sh
src/               # Raw source files (never consumed directly)
  icons/*.svg      # Resources to generate build/icons.json
  templates/       # Resources to generate build/templates.json (ShadowDOM markup and styles)
  styles/**/*.less # LightDOM Styles
  helix-ui/**/*.js # CommonJS-formatted JavaScript
    elements/      # HXElement.js, HXBusyElement.js, etc.
    polyfills/     # ChildNode, Element, etc.
    utils/         # onScroll, getPosition, getPositionWithArrow, etc.
    ...

build/           # Generated output (directly consumable via NPM or Node)
  **/*.js        # CommonJS-formatted JavaScript
  templates.json # compiled HTML and CSS for each custom element w/ ShadowDOM
  icons.json     # compiled SVG for every icon
  index.js       # NodeJS entrypoint ... require('helix-ui')
  package.json   # used with `npm publish` to release 'helix-ui' to NPM
  elements/*.js  # Custom element definitions
  polyfills/*.js # IE polyfills (not useful in Node)
  utils/**/*.js  # utility functions and values
  dist/                     # precompiled assets
    helix-ui.browser.js     # UMD-format JavaScript to load and initialize HelixUI in browser.
    helix-ui.browser.min.js # Minified UMD-format
    helix-ui.css            # LightDOM CSS for use in browser
    helix-ui.min.css        # Minified LightDOM CSS
    ...

docs/ # source files to compile https://rackerlabs.github.io/helix-ui (to be replaced in future)
  ...

lib/*.js # NodeJS libraries to define functionality needed for bin/*.js files
bin/*.js # development pipeline scripts
```

This structure should enable:

1. simpler globs for watch tasks
2. CommonJS style source to support unit testing without a browser
3. submodule imports in the generated `helix-ui` package
4. cleaner npm package generation

_Current Consumption_
```javascript
import { initialize, Utils } from 'helix-ui';
const { Position, KEYS } = Utils;
const { Offset, getPosition } = Position;
```

_Optimal Consumption (directly import **any HelixUI functionality**)_
```javascript
import { initialize } from 'helix-ui';
import Utils, { KEYS } from 'helix-ui/utils';
import Position, { getPosition } from 'helix-ui/utils/position';
import Offset from 'helix-ui/utils/position/offset';
```

## Build Pipeline
* `build/` replaces `dist/`
* `dist/` &rarr; `build/dist/`
* stop compiling non-browser javascript (consume directly via NPM)

_package.json_
```json
{
  "scripts": {
    "build": "bin/build.js",
    "prebuild": "rm -rf build",
    "prerelease": "yarn build",
    "release": "npm publish build"
  }
}
```

_bin/build.js_
1. copy `src/helix-ui/**/*` to `build/**/*`
    * retain folder hierarchy (e.g., `src/helix-ui/utils/index.js` &rarr; `build/utils/index.js`)
2. generate `build/icons.json` from `src/icons/*.svg`
3. generate `build/templates.json` from `src/templates/*`
4. compile `build/dist/helix-ui.browser[.min].js` in UMD format from `build/index.js`
5. compile `build/dist/helix-ui[.min].css` from `src/styles/helix-ui.less`



## Testing

### Unit Tests
e.g., _test/unit/utils/position/offset.test.js_
```javascript
// TODO: ~helix-ui points to build/ in the project root
import * as Offset from '~helix-ui/utils/position/offset';

// Test Offset logic here...
```


### Behavior Tests
_test/run_behavior.js_
```javascript
// setup

//load tests
require('./behavior/buttons.js');
require('./behavior/tabs.js');
...

// teardown
```


## TODO
- rename `bin/` to `scripts/`
- move `lib/` to `scripts/lib/`
- test `HelixUI.initialize` with callback argument
- need an easier way to load deps from `test/**/*.js` scripts other than ludicrous relative paths (`../../../*`)
  - is there a way to tell npm to add `build/` to the start of npm lookup paths?
  - what about a synlink instead? (`test/unit/helix-ui` &rarr; `build/`)
