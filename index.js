var classes = require('classes')
var computedStyle = require('computed-style')

module.exports = function (first, second, opt) {
  for (var k in opt) {
    var prop = opt[k]
    switch (k) {
      case 'style':
        switchStyle(first, second, prop)
        break;
      case 'className':
        switchClasses(first, second, prop)
        break;
      case 'property':
        switchProperty(first, second, prop)
        break;
      default:
        throw new Error('unknown option property [' + k + ']')
    }
  }
}

function switchStyle(first, second, prop) {
  var tmp = computedStyle(second, prop)
  second.style[prop] = computedStyle(first, prop)
  first.style[prop] = tmp
}

function switchClasses(first, second, name) {
  if (classes(first).has(name)) {
    classes(first).remove(name)
    classes(second).add(name)
  } else {
    classes(second).remove(name)
    classes(first).add(name)
  }
}

function switchProperty(first, second, prop) {
  var tmp = second[prop]
  second[prop] = first[prop]
  first[prop] = tmp
}
