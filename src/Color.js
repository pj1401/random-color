/**
 * @file The Color class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { RGB } from './RGB.js'

/**
 * Represents a color.
 */
export default class Color {
  /**
   * @type {RGB}
   */
  #rgb

  /**
   * Initialises the object.
   *
   * @param {RGB} rgb - The color as an RGB object.
   */
  constructor (rgb) {
    this.#rgb = rgb
  }

  /**
   * Return the color as a RGB string.
   *
   * @returns {string} The RGB color string
   */
  getRgb () {
    return `rgb(${this.#rgb.red}, ${this.#rgb.green}, ${this.#rgb.blue})`
  }

  /**
   * Return the color as a Hex string.
   *
   * @returns {string} The color as a Hex color string.
   */
  getHex () {
    /**
     * See @link https://www.rapidtables.com/convert/color/how-rgb-to-hex.html
     */
    const redHex = this.#decimalToHex(this.#rgb.red)
    const greenHex = this.#decimalToHex(this.#rgb.green)
    const blueHex = this.#decimalToHex(this.#rgb.blue)
    return `#${redHex}${greenHex}${blueHex}`
  }

  /**
   * Converts a number in Decimal to a Hex string.
   *
   * @param {number} number - The number in Decimal.
   * @returns {string} The number as a Hex string
   */
  #decimalToHex (number) {
    /**
     * See @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
     */
    return Math.abs(number).toString(16).padStart(2, '0')
  }

  /**
   * Changes the color of the object.
   *
   * @param {RGB} rgb - The color as an RGB object.
   */
  changeColor (rgb) {
    this.#rgb = rgb
  }
}
