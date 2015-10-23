# Switch

![Build Status](https://secure.travis-ci.org/chemzqm/switch.png)(http://travis-ci.org/chemzqm/switch)]

Switch element `style` `className` `property`

## Install

    npm i switch-component

## Usage

```
var switcher = require('switch-component')
switcher(firstEl, secondEl, {style: 'display'})
switcher(firstEl, secondEl, {style: 'visibility'})
switcher(firstEl, secondEl, {className: 'active'})
switcher(firstEl, secondEl, {property: 'textContent'})
```

See [test.js](https://github.com/chemzqm/switch/blob/master/test/test.js)
