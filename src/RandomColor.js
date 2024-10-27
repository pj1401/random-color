/**
 * @file The RandomColor class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import Color from './Color.js'

/**
 * Represents a random color.
 */
export default class RandomColor extends Color {
  /**
   * Initialises the RandomColor object.
   */
  constructor () {
    super(0, 0, 0)
    this.randomize()
  }
}
