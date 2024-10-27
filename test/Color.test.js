/**
 * @file Tests for the Color.js file.
 * @module test/Color.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import Color from '../src/Color.js'
import { RGB } from '../src/RGB.js'

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
    const testCase = new ColorTestCase(new Color(new RGB(181, 100, 100)), new ExpectedColor('#b56464', 'rgb(181, 100, 100)'))

    testCase.runTest()
  })

  test('Changing the colour', () => {
    const testCase = new ColorTestCase(new Color(new RGB(181, 100, 100)), new ExpectedColor('#b56464', 'rgb(181, 100, 100)'))

    testCase.runChangeColorTest('#305e6e', new ExpectedColor('#305e6e', 'rgb(48, 94, 110)'))
  })

  test('is HEX', () => {
    const color = new Color(new RGB(48, 94, 110))

    expect(color.hex).toMatch(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g)
  })

  test('is RGB', () => {
    const color = new Color(new RGB(48, 94, 110))

    expect(color.rgb).toMatch(/^rgb\((([0-1]?(\d{1,2})|[2]([0-4][0-9]|[5][0-5])), ?){2}([0-1]?(\d{1,2})|[2]([0-4][0-9]|[5][0-5]))\)$/g)
  })
})
