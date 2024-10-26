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
   * @param {string} colorString - The color as a string.
   */
  constructor (colorString) {
    if (this.isHEX(colorString)) {
      this.convertFromHEX(colorString)
    } else if (this.isRGB(colorString)) {
      this.convertFromRGB(colorString)
    } else {
      throw new Error('The passed value is not a valid color.')
    }
  }
}
