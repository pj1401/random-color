/**
 * @file Tests for the Color.js file.
 * @module test/Color.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import Color from '../src/Color.js'

/**
 * Represents a color test case.
 */
class ColorTestCase {
  /**
   * Initialises the object.
   *
   * @param {Color} color - The Color object.
   * @param {ExpectedColor} expected - The expected color strings.
   */
  constructor (color, expected) {
    this.color = color
    this.expected = expected
  }

  /**
   * Check if the string is coverted correctly.
   */
  runTest () {
    expect(this.color.hex).toEqual(this.expected.hex)
    expect(this.color.rgb).toEqual(this.expected.rgb)
  }

  /**
   * Check if the object changes color correctly.
   *
   * @param {string} newColor - The color to change the object to.
   * @param {ExpectedColor} expected - The new expected color.
   */
  runChangeColorTest (newColor, expected) {
    this.runTest()
    this.color.changeColor(newColor)
    this.expected = expected
    this.runTest()
  }
}

/**
 * The expected colors as strings.
 */
class ExpectedColor {
  /**
   * Initialises the object.
   *
   * @param {string} hex - The HEX color string.
   * @param {string} rgb - The rgb color string.
   */
  constructor (hex, rgb) {
    this.hex = hex
    this.rgb = rgb
  }
}

describe('Color', () => {
  test('Initialising', () => {
    const testCase = new ColorTestCase(new Color('rgb(181, 100, 100)'), new ExpectedColor('#b56464', 'rgb(181, 100, 100)'))

    testCase.runTest()
  })

  test('Changing the colour', () => {
    const testCase = new ColorTestCase(new Color('rgb(181, 100, 100)'))

    testCase.runChangeColorTest('#305e6e', new ExpectedColor('#305e6e', 'rgb(48, 94, 110)'))
  })
})
