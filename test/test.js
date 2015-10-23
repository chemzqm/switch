/*global describe, it, beforeEach, afterEach*/
var assert = require('assert')
var switcher = require('..')
var computedStyle = require('computed-style')

;(function () {
  var css = '.lower { height: 10px }',
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style')

  style.type = 'text/css'
  if (style.styleSheet){
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  head.appendChild(style)
})()

describe('switchable component', function () {

  var firstEl
  var secondEl
  beforeEach(function () {
    firstEl = document.createElement('div')
    document.body.appendChild(firstEl)
    secondEl = document.createElement('div')
    document.body.appendChild(secondEl)
  })

  afterEach(function (done) {
    document.body.removeChild(firstEl)
    document.body.removeChild(secondEl)
    setTimeout(done, 100)
  })

  it('should switch display', function () {
    firstEl.style.display = 'none'
    switcher(firstEl, secondEl, {style: 'display'})
    assert.equal(firstEl.style.display, 'block')
    assert.equal(secondEl.style.display, 'none')
  })

  it('should switch visibility', function () {
    firstEl.style.visibility = 'hidden'
    switcher(firstEl, secondEl, {style: 'visibility'})
    assert.equal(firstEl.style.visibility, 'visible')
    assert.equal(secondEl.style.visibility, 'hidden')
  })

  it('should switch style defined by className', function () {
    firstEl.style.height = '100px'
    secondEl.className = 'lower'
    var h = computedStyle(secondEl, 'height')
    switcher(firstEl, secondEl, {style: 'height'})
    assert.equal(firstEl.style.height, '10px')
    assert.equal(secondEl.style.height, '100px')
  })

  it('should switch className without change other classNames', function () {
    firstEl.className = 'first active'
    secondEl.className = 'second'
    switcher(firstEl, secondEl, {className: 'active'})
    assert.equal(firstEl.className, 'first')
    assert.equal(secondEl.className, 'second active')
  })

  it('should switch property', function () {
    firstEl.textContent = 'tobi'
    secondEl.textContent = 'bear'
    switcher(firstEl, secondEl, {property: 'textContent'})
    assert(firstEl.textContent === 'bear')
    assert(secondEl.textContent === 'tobi')
  })

})
